import Client from "../models/clientModel";
import Payment from "../models/paymentModel";

export const addPayment = async (req, res) => {
  try {
    const clientId = req.params.clientid;
    if (clientId === null || clientId === undefined) {
      return res.status(404).json({ message: "Client not found" });
    }
    const inst = await Client.findById(clientId);
    let { Amount } = req.body;
    const paymentPerMonth = inst.monthlyInstallment;
    const totalAmount = inst.totalAmount;
    const overFlow = inst.overFlow;
    let remainingAmount = overFlow ? overFlow + Amount : Amount;
    const totalRemaining = inst.totalRemaining - Amount;

    let installment = Math.floor(remainingAmount / paymentPerMonth);
    let balance = remainingAmount % paymentPerMonth;

    // nextPaymentDate must be calculated from the date of the last payment * installment number
    const lastPayment = await getLastPaymentByClientId(clientId);

    // get next payment date * installment number
    const nextPaymentDate = new Date(
      lastPayment.nextPaymentDate.setMonth(
        lastPayment.nextPaymentDate.getMonth() + installment
      )
    );

    if (remainingAmount > paymentPerMonth) {
      const payment = await Payment.create({ clientId, Amount, installment });
      // remainingAmount = remainingAmount - paymentPerMonth;

      await Client.findByIdAndUpdate(req.params.clientid, {
        overFlow: balance,
        totalRemaining: totalRemaining,
        nextPaymentDate
      });
    } else {
      const payment = await Payment.create({ clientId, Amount });
      await Client.findByIdAndUpdate(req.params.clientid, {
        overFlow: balance,
        payment,
        totalRemaining,
        nextPaymentDate
      });
    }
    const updatedInst = await Client.findById(clientId);
    res.status(200).json({
      message: "Payment added successfully",
      payment: {
        amountpaid: Amount,
        installment,
        totalRemaining: updatedInst.totalRemaining,
        balance,
        nextPaymentDate,
      },
    });
    // }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

//get all payments
export const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    return res.status(200).json({ message: "All payments", payments });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
//get payment by client id

// get last payment by client id
 const getLastPaymentByClientId = async (clientId) => {
  try {
    const payment = await Payment.findOne({
      clientId,
    }).sort({ createdAt: -1 });
    if (!payment) {
      return res
        .status(404)
        .json({ message: "No payment found for this client." });
    }
    return payment;
  } catch (error) {
    return { error: error.message };
  }
};

export const getPaymentByClientId = async (req, res) => {
  try {
    const payments = await Payment.find({
      clientId: req.params.clientId,
    }).populate("clientId", "username monthlyInstallment installationDate totalAmount  totalRemaining ");
    if (!payments) {
      return res
        .status(404)
        .json({ message: "No payments found for this client." });
    }

    const report = payments.map((payment) => {
      return {
        clientName: payment.clientId.username,
        monthlyInstallment: payment.clientId.monthlyInstallment,
        totalAmount: payment.clientId.totalAmount,
        totalRemaining: payment.clientId.totalRemaining,
      };
    });

    return res.status(200).json({ report });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
//delete all payment records
export const deleteAllPayment = async (req, res) => {
  try {
    await Payment.deleteMany({});
    return res 
      .status(200)
      .json({ message: "All payment deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};




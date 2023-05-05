import Client from "../models/clientModel";
import Payment from "../models/paymentModel";

export const addPayment = async (req, res) => {
  try {
    const clientId = req.params.clientid
    if (clientId === null || clientId === undefined) {
      return res.status(404).json({ message: "Client not found" });
    }
    const inst = await Client.findById(clientId)
    let { Amount, installment } = req.body
    // const totalAmount = 6000000
    const paymentPerMonth = 250000;
    const overFlow = inst.overFlow
    let remainingAmount = overFlow ? overFlow + Amount : Amount
    console.log(inst, overFlow)

    while (remainingAmount > paymentPerMonth) {
      await Payment.create({ clientId, Amount: paymentPerMonth, installment })

      remainingAmount = remainingAmount - Amount
      installment = installment++
      if (remainingAmount < paymentPerMonth) {
        await Client.findByIdAndUpdate(req.params.clientid, { overFlow: remainingAmount })
      }

    }
    const response = await Payment.find({})
    res.status(200).json(response)

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
}
//get payment by client id

export const getPaymentByClientId = async (req, res) => {

  try {
    const payments = await Payment.find({ clientId: req.params.clientId }).populate(
      "clientId",
      "username monthlyInstallment"
    );
    if (!payments) {
      return res.status(404).json({ message: "No payments found for this client." });
    }

    const report = payments.map((payment) => {
      return {
        clientName: payment.clientId.username,
        monthlyInstallment: payment.clientId.monthlyInstallment,
        Total: payment.Total,
        month: payment.date,
      };
    });

    return res.status(200).json({ report });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}








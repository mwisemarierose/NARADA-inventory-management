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
    const totalRemaining = Math.max(totalAmount - remainingAmount, 0);

    let installment = Math.ceil(remainingAmount / paymentPerMonth);
    let balance = remainingAmount % paymentPerMonth;



    if (remainingAmount > paymentPerMonth) {
      while (remainingAmount > paymentPerMonth) {
        const payment = await Payment.create({ clientId, Amount: paymentPerMonth, installment });
        remainingAmount = remainingAmount - paymentPerMonth;
        installment = ++installment;
        
      }
      await Client.findByIdAndUpdate(req.params.clientid, {
        overFlow: remainingAmount,
        totalRemaining: totalRemaining,
      });
    } else {
      const payment = await Payment.create({ clientId, Amount });
      await Client.findByIdAndUpdate(req.params.clientid, {
        overFlow: balance,
        payment
      });
      
    }

    // if (balance > 0) {
    //   await Client.findByIdAndUpdate(req.params.clientid, {
    //     overFlow: balance,
    //   });
    //   res.status(200).json({
    //     message: "Payment added successfully",
    //     payment: {
    //       amountpaid: Amount-balance,
    //       installment,
    //       totalRemaining: totalAmount - balance,
    //       balance,
    //     },
    //   });
    // } else {
      const updatedInst = await Client.findById(clientId);
      res.status(200).json({
        message: "Payment added successfully",
        payment: {
          amountpaid: Amount,
          installment,
          totalRemaining:updatedInst.totalRemaining,
          balance,
        },
      });
    // }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};


// export const addPayment = async (req, res) => {
//   try {
//     const clientId = req.params.clientid;
//     if (clientId === null || clientId === undefined) {
//       return res.status(404).json({ message: "Client not found" });
//     }
//     const inst = await Client.findById(clientId);
//     let { Amount } = req.body;
//     const paymentPerMonth = inst.monthlyInstallment;
//     // console.log("inst", paymentPerMonth)
    
//     const totalAmount = inst.totalAmount;
//     const overFlow = inst.overFlow;
//     let remainingAmount = overFlow ? overFlow + Amount : Amount;
//     let installment = Math.ceil(remainingAmount / paymentPerMonth);
//     console.log(inst, overFlow);
//     let balance = remainingAmount % paymentPerMonth;
//     if (balance !== 0) {
//       await Client.findByIdAndUpdate(req.params.clientid, {
//         overFlow: balance,
//       });
//     }
//     while (remainingAmount > paymentPerMonth) {
//       await Payment.create({ clientId, Amount: paymentPerMonth, installment });
//       remainingAmount = remainingAmount - Amount;
//       installment = installment++;
//       // console.log(installment, "installment")
//       if (remainingAmount < paymentPerMonth) {
//         await Client.findByIdAndUpdate(req.params.clientid, {
//           overFlow: remainingAmount,
//         });
//       }
//     }
//     const totalRemaining = totalAmount - Amount;
//     console.log(totalRemaining, "totalRemaining");
//     res.status(200).json({
//       message: "Payment added successfully",
//       payment: {
//         amountpaid: Amount,
//         installment,
//         totalRemaining,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: error.message });
//   }
// };

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

export const getPaymentByClientId = async (req, res) => {
  try {
    const payments = await Payment.find({
      clientId: req.params.clientId,
    }).populate("clientId", "username monthlyInstallment installationDate ");
    if (!payments) {
      return res
        .status(404)
        .json({ message: "No payments found for this client." });
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

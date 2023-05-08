import Client from "../models/clientModel";
import Payment from "../models/paymentModel";

// export const addPayment = async (req, res) => {
//   try {
//     const clientId = req.params.clientid
//     if(clientId === null || clientId === undefined){
//       return res.status(404).json({ message: "Client not found" });
//     }
//     const inst = await Client.findById(clientId)

//     console.log(inst.monthlyInstallment)

//     const { Total  } = req.body
//     const monthlyInstallment = inst.monthlyInstallment
//     const installments = Total / monthlyInstallment
//     let remaining = installments

//     for (let i = 0; i < installments; i++) {
//       const installment = {
//         number: i,
//         amount: i === installments  ? remaining : monthlyInstallment,
//       }
//   const response = await Payment.create({ clientId, Total})
//       console.log("response",response)
//       console.log("montlyinst",installment)
//       remaining = Math.floor(remaining - monthlyInstallment)
//       console.log("remaining",remaining)
//     }
//     console.log("hereee",installments)
//     return res
//       .status(200)
//       .json({ message: "Payment added successfully" });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// };
export const addPayment = async (req, res) => {
  try {
    const clientId = req.params.clientid
    if(clientId === null || clientId === undefined){
      return res.status(404).json({ message: "Client not found" });
    }
    const inst = await Client.findById(clientId)

    console.log(inst.monthlyInstallment)

    const { Total  } = req.body
    const monthlyInstallment = inst.monthlyInstallment
    const installments = Total / monthlyInstallment

    const payment = {
      clientId,
      number: 1,
      amount: Total,
    }
    const response = await Payment.create(payment)
    console.log("response", response)
    
    console.log("hereee", installments)
    return res.status(200).json({ message: "Payment added successfully" });
  } catch (error) {
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
      "username monthlyInstallment installationDate "
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
//delete all payment records
export const deleteAllPayment = async (req, res) => {
  try {
    await Payment.deleteMany({});
    return res.status(200).json({ message: "All payment deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}





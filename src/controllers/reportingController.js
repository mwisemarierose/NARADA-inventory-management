import Payment from "../models/paymentModel";

export const getPaymentReport = async (req, res) => {
  try {
    const payments = await Payment.findById( { clientId: req.params.clientId }).populate(
      "clientId",
      "username monthlyInstallment"
    );
    // if (!payments) {
    //   return res.status(404).json({ message: "No payments found for this client." });
    // }

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

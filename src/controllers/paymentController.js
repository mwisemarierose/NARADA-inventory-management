import Payment from "../models/paymentModel";


export const addPayment = async (req, res) => {
  try {
    const { clientId, Total, monthlyInstallment } = req.body;
    const payment = await Payment.create({
      clientId,
      Total,
      monthlyInstallment,
    });

    return res
      .status(200)
      .json({ message: "Payment added successfully", payment });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


export const getOnePayment = async (req, res) => {
  try {
    const Payment = await Payment.findById(req.params._id);
    return res.status(200).json({ message: "payment", Payment });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}


// function to calculate total amount paid by the user in one row
export const totalAmountPaid = async (req, res) => {
  try {
    const { userId } = req.params;
    const payment = await Payment.find({ userId }).populate(
      "clientId",
      "username monthlyInstallment"
    );
    let total = 0;
    payment.forEach((payment) => {
      total += payment.Total;
    });
    return res.status(200).json({ message: "Total amount paid", total  });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

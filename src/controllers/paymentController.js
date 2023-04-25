import Payment from "../models/paymentModel";

//function to add payment
export const addPayment = async (req, res) => {

    try {
        const {
        userId,
        Total,
        monthlyInstallment,
        numberOfMonths,
        } = req.body;
        const payment = await Payment.create({
        userId: userId,
        Total: Total,
        monthlyInstallment: monthlyInstallment,
        numberOfMonths: numberOfMonths,
        });
    
        return res.status(200).json({ message: "Payment added successfully",payment });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
    }
// function to calculate total amount paid by the user in one row
export const totalAmountPaid = async (req, res) => {

    try {
        const {userId} = req.body;
        const payment = await Payment.find({userId:userId});
        let total = 0;
        payment.forEach((payment)=>{
            total += payment.monthlyInstallment;
        })
        return res.status(200).json({ message: "Total amount paid",total });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
    }



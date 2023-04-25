import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  userId: {
     type: mongoose.Schema.Types.ObjectId, ref: "User" 
    },
  Total: { 
    type: Number, 
    required: true 
},
  date: { 
    type: Date, 
    default: Date.now() 
},
  monthlyInstallment: { 
    type: Number, 
    required: true },
  numberOfMonths: { 
    type: Number,
     required: true },
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;

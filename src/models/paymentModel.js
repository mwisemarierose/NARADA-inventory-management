import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  clientId:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "client",
  },
    Amount: {
    type: Number,
    required: true,
  },
  installment: {
    type: Number,
  },

  nextPaymentDate: {
    type: Date,
    default: Date.now(),
  },

  fixedPaymentDay: {
    type: Number,
    default: 5,
  },
  
  date: {
    type: Date,
    default: Date.now(),
  },

  
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;

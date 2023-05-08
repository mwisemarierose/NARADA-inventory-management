import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  clientId:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "client",
  },
  Total: {
    type: Number,
    required: true,
  },
  installment: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;

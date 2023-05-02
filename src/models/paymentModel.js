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
  date: {
    type: Date,
    default: Date.now(),
  },
  monthlyInstallment:[ {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "client",
  }],
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;

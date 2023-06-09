import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const clientSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Please! provide firstname.']
  },
  deviceId: {
    type: String,
    unique: true,
    required: [true, 'Please! provide deviceId.']
  },
  installationDate: {
    type: String,
    required: [true, 'Please! provide Installation Date.']
  },
  paymentStartDate: {
    type: String,
    required: [true, 'Please! provide payment Date.']
  },
  sensor: {
    type: Number,
    enum: [1, 2, 3, 4, 5, 6],
    required: [true, 'Please! provide number of sensor.']
  },
  battery: {
    type: Boolean,
    required: [true, 'Please! provide battery status.']
  },
  naradaTel: {
    type: String,
    unique: true,
    required: [true, 'Please! provide NaradaTel.']
  },
  phone: {
    type: String,
    required: [true, 'Please! provide client Phone .'],
    minlength: 10,
  },
  monthlyInstallment: {
    type: Number,
    required: [true, 'Please! provide installment amount.'],
  },
  totalAmount: {
    type: Number,
    required: [true, 'Please! provide total amount.'],
  },
  totalRemaining:{
    type: Number,
    default: function() {
      return this.totalAmount || 0;
    }
  },
  district: {
    type: String,
    required: [true, 'Please! provide district'],
  },
  sector: {
    type: String,
    required: [true, 'Please! provide sector'],
  },
  role: {
    type: String,
    enum: ['client', 'admin'],
    default: 'client'
  }
  ,
  cell: {
    type: String,
    required: [true, 'Please! provide cell'],

  },
  nearby: {
    type: String,
    required: [true, 'Please! provide nearby place'],
  },
  latitude: {
    type: String,
    required: [true, 'Please! provide latitude'],
  },
  longitude: {
    type: String,
    required: [true, 'Please! provide longitude'],
  },
  overFlow: {
    type: Number,
    default: 0
  },
});

const Client = model('client', clientSchema);

export default Client;
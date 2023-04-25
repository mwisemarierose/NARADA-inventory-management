
import mongoose from 'mongoose';
import validator from 'validator';
const { isEmail } = validator;
const { Schema, model } = mongoose;

    
const userSchema = new Schema({
    firstname: {
        type: String,
        required: [true, 'Please! provide firstname.']
      },
    lastname: {
      type: String,
      required: [true, 'Please! provide lastname.']
    },
    deviceId: {
      type: String,
      unique: true,
      required: [true, 'Please! provide deviceId.']
    },

    email: {
      type: String,
    //   required: [true, 'Please! provide your email.'],
      unique: true,
      lowercase: true,
      validate: [isEmail, 'Please! provide valid email']
    },
    phone: {
      type: String,
      required: [true, 'Please! provide your Phone .']
    },
    
    password: {
      type: String,
      required: [true, 'Please! provide password'],
      minlength: 10,
    
    },
   
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
      type: Boolean,
      default: true,
      
    },
   
    role: {
      type: String,
      enum: ['client', 'admin'],
      default: 'client'
    }
  });

  const User = model('user', userSchema);

export default User;
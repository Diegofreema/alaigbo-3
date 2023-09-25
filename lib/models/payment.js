import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  userId: {
    type: String,
  },
  type: {
    type: String,
  },
});

const Payment =
  mongoose.models.Payment || mongoose.model('Payment', paymentSchema);

export default Payment;

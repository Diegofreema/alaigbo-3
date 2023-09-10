import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    unique: true,
  },
  number: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  accommodation: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
  },
  update: {
    type: String,
    required: true,
  },
  participants: {
    type: String,
    required: true,
  },
  prefix: {
    type: String,
    required: true,
  },
  guest: {
    type: String,
    required: true,
  },
});

const Book = mongoose.models.User || mongoose.model('Book', bookingSchema);

export default Book;

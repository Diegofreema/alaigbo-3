import mongoose from 'mongoose';

const streamSchema = new mongoose.Schema(
  {
    link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Stream = mongoose.models.Stream || mongoose.model('Stream', streamSchema);

export default Stream;

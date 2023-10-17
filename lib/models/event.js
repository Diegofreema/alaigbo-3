import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },

  time: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
  },
  description: {
    type: String,
  },
  subHeading: {
    type: String,
  },
});

const Event = mongoose?.models?.Event || mongoose?.model('Event', eventSchema);

export default Event;

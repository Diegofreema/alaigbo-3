import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
  },

  firstName: {
    type: String,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  number: {
    type: String,
  },
  state: {
    type: String,
  },
  lga: {
    type: String,
  },
  town: {
    type: String,
  },
  placeOfBirth: {
    type: String,
  },
  village: {
    type: String,
  },
  familyName: {
    type: String,
  },
  gender: {
    type: String,
  },
  dob: {
    type: Date,
  },
  interests: {
    type: String,
  },

  bio: {
    type: String,
  },
  imgUrl: {
    type: String,
  },

  isOnboarded: {
    type: Boolean,
    default: false,
  },

  group: {
    type: String,
  },
  memberType: {
    type: String,
    enum: ['Executive', 'Regular'],
  },
  memberId: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;

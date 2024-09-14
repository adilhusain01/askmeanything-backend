const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    age: { type: Number, trim: true },
    gender: { type: String, trim: true },
    profile_picture_url: { type: String, trim: true },
    height: { type: Number, trim: true },
    weight: { type: Number, trim: true },
    occupation: { type: String, trim: true },
    smoking: { type: Boolean, default: false },
    drinking: { type: Boolean, default: false },
    body_type: { type: String, trim: true },
    size: { type: Number, trim: true },
    hobbies: [{ type: String, trim: true }],
    city: { type: String, trim: true },
    state: { type: String, trim: true },
    country: { type: String, trim: true },
    doneQuestinoaire: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);

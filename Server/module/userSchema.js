import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  resume: {
    type: String,
    // required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;

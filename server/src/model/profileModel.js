const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userProfile = new Schema(
  {
    walletId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      immutable: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = { UserProfile: model("userProfile", userProfile) };

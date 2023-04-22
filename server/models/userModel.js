import mongoose from "mongoose";
const { Schema, model } = mongoose;

const useSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userModel = model("user", useSchema);

export default userModel;

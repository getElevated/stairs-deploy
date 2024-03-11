import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    token: {
      type: String,
    },
    branch: {
      type: String,
    },
    college: {
      type: String,
      required: true,
    },
    currentYear: {
      type: Number,
    },
    department: {
      type: String,
      enum: ["Computer Science", "Information Technology", "Mechanical", "Electrical", "Electronics and Communication", "Civil", "Automobile", "others"],
      required: true,
    },
    state: {
      type: String,
      enum: ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"].sort(),
      required: true,
    },
    paymentStatus: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
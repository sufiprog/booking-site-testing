import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Fullname required"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email required"],
    },
    password: {
      type: String,
      required: [true, "Password required"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAccountVerified: {
      type: Boolean,
      default: false,
    },
    whatsappNumber: {
      type: Number,
      unique: true,
      required: [true, "Whatsapp number required"],
    },
    package: {
      type: String,
      default: "none",
    },
    committeeId:{
      type: Number,
      
    },
    familyMembers: [
      {
        familyUserFullName: {
          type: String,
          required: true,
        },
        familyUserEmail: {
          type: String,
          unique: true,  
          default: "", 
        },
        familyUserwhatsAppNo: {
          type: Number,
          required: true,
        },
        familyUserPhoneNo: {
          type: Number,
          required: true,
          trim: true,
        },
        familyUserrelation: {
          type: String,
          required: true,
        },
        familyUserPassword: {
          type: String,
          required: true,
        },
      },
    ] ,
  },
  { timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;

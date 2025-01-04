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
      required: [true, "Whatsapp number required"],
    },
    package: {
      type: String,
      default: "none",
    },
    familyMembers: [
      {
        familyuserFullName: {
          type: String,
          required: true,
        }, // Family member's full name
        familyuserEmail: {
          type: String,
          required: true,
          unique: true,
          lowercase: true,
          trim: true,
        }, // Family member's email
        familywhatsAppNo: {
          type: Number,
          required: true,
        }, // Family member's WhatsApp number
        familyuserPhoneNo: {
          type: Number,
          required: true,
          trim: true,
        }, // Family member's phone number
        familyrelation: {
          type: String,
          required: true,
        }, // Relation to the user
        familyuserPassword: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;

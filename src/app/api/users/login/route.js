import User from "@/models/user.model";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const { connectDB } = require("@/db/db.config");

connectDB();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    const user = await User.findOne({ email });

    //Validation
    if (!user) {
      return NextResponse.json(
        { message: "User not found", success: false },
        { status: 400 }
      );
    }

    const isValidPassword = await bcryptjs.compare(password, user.password);

    if (!isValidPassword) {
      return NextResponse.json(
        {
          message: "Invalid password",
          success: false,
        },
        { status: 400 }
      );
    }

    const verifiedUser = user.isVerified;

    if (!verifiedUser) {
      return NextResponse.json(
        { message: "Email not verified", success: false },
        { status: 400 }
      );
    }

    //Generating token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return NextResponse.json(
      {
        message: "Login successful",
        success: true,
        token,
      },
      200
    );
  } catch (error) {
    console.error("Error in login:", error);
    NextResponse.json(
      { message: "error in login", success: false },
      { status: 500 }
    );
  }
}

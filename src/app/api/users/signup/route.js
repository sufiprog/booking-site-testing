import User from "@/models/user.model";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { verificationEmail } from "@/helpers/emailService";

const { connectDB } = require("@/db/db.config");

connectDB();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { fullName, whatsappNumber, email, password } = reqBody;

    const user = await User.findOne({ email, whatsappNumber });

    // Validation
    if (user) {
      return NextResponse.json(
        { message: "Email or phone number already exists", success: false },
        { status: 400 }
      );
    }

    // Hashing password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Creating new user
    const newUser = new User({
      fullName,
      email,
      whatsappNumber,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    //Generating email verification token
    const verificationToken = jwt.sign(
      { userId: savedUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    //Sending email to user
    await verificationEmail(email, verificationToken);

    return NextResponse.json(
      { message: "User created successfully", success: true, savedUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in signup:", error); // Log the actual error

    // Return a more detailed error message
    return NextResponse.json(
      { message: "Error in signup", success: false, error: error.message },
      { status: 500 }
    );
  }
}

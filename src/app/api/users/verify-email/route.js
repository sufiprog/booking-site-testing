import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/user.model";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.json(
        { message: "Token is required", success: false },
        { status: 400 }
      );
    }

    // Verifying token
    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    } catch (jwtError) {
      console.error("JWT verification failed:", jwtError);
      if (jwtError instanceof jwt.TokenExpiredError) {
        return NextResponse.json(
          { message: "Token has expired", success: false },
          { status: 400 }
        );
      } else if (jwtError instanceof jwt.JsonWebTokenError) {
        return NextResponse.json(
          { message: "Invalid token", success: false },
          { status: 400 }
        );
      } else {
        return NextResponse.json(
          { message: "Token verification failed", success: false },
          { status: 400 }
        );
      }
    }

    // Finding the user and updating the isVerified field
    const user = await User.findById(decodedToken.userId);

    if (!user) {
      return NextResponse.json(
        { message: "User not found", success: false },
        { status: 400 }
      );
    }

    user.isVerified = true;
    await user.save();

    return NextResponse.json(
      { message: "Email verified successfully", success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error while verifying email:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred", success: false },
      { status: 500 }
    );
  }
}
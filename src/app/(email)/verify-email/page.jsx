"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function verifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyEmail = async () => {
    try {
      // Use GET method to verify email
      const response = await axios.get(`/api/users/verify-email?token=${token}`);
      if (response.data.success) {
        setVerified(true);  // Success
      } else {
        setError(true);  // Error in verification
      }
    } catch (error) {
      setError(true);  // Handle any unexpected errors
      console.log(error);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    setToken(token || "");  // Extract token from URL
    setError(false);  // Reset error state
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyEmail();  // Verify email when token is available
    }
  }, [token]);

  return (
    <div className="min-h-screen text-black flex flex-col items-center justify-center bg-gray-300">
      <h1 className="text-4xl font-medium">Verify your email</h1>
      <p className="p-2 bg-blue-400 mt-3">{token ? `${token}` : "no token"}</p>
      {verified && (
        <div>
          <p className="m-4 bg-green-700 text-white p-4">Verified</p>
          <Link href={"/auth/login"}>Login</Link>
        </div>
      )}
      {error && (
        <div>
          <p className="m-4 bg-rose-300 text-black p-4">Error</p>
        </div>
      )}
    </div>
  );
}

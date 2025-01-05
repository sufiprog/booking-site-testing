"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    whatsappNumber: "",
    password: "",
    confirmPassword: "", // Add confirmPassword field to state
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSignup = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match!");
      toast.error("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      await axios.post("/api/users/signup", {
        fullName: user.fullName,
        email: user.email,
        whatsappNumber: user.whatsappNumber,
        password: user.password, // Only send password
      });
      router.push("/auth/login");
    } catch (error) {
      setError("Signup failed");
      toast.error("Signup failed");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.fullName.length > 0 &&
      user.whatsappNumber.length > 0 &&
      user.password.length > 0 &&
      user.confirmPassword.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="w-[90%] md:w-[50%] mx-auto">
      <div className="flex items-center justify-center">
        <form
          onSubmit={onSignup}
          className="bg-[#ffffff6a] px-8 py-4 rounded-md shadow-md w-full max-w-md"
        >
          <h2 className="text-center font-medium text-2xl py-2 mb-4">Sign Up</h2>
          <p className="text-center text-sm mb-4">
            {loading
              ? "Processing..."
              : "Create an account to get started with our service."}
          </p>
          <p className="text-red-500 text-center my-2 font-medium">{error}</p>

          {/* Full Name */}
          <div className="mb-4">
            <Label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
              Full Name
            </Label>
            <Input
              id="fullname"
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              type="text"
              placeholder="John Doe"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="johndoe@example.com"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            />
          </div>

          {/* WhatsApp Number */}
          <div className="mb-4">
            <Label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">
              WhatsApp Number
            </Label>
            <Input
              id="whatsapp"
              type="tel"
              value={user.whatsappNumber}
              onChange={(e) => setUser({ ...user, whatsappNumber: e.target.value })}
              placeholder="+1 234 567 890"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="********"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <Label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              value={user.confirmPassword} // Bind confirmPassword to state
              onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
              placeholder="********"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            />
          </div>

          {/* Checkbox for Terms and Conditions */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              required
              id="terms"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <Label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-blue-500">
                Terms and Conditions
              </a>
            </Label>
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              disabled={buttonDisabled}
              className={`w-full text-white p-3 rounded-md ${
                buttonDisabled
                  ? "bg-blue-600/70 cursor-not-allowed"
                  : "hover:bg-blue-700 bg-blue-600"
              }`}
            >
              Sign Up
            </button>
          </div>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/auth/login" className="text-blue-500">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default page;

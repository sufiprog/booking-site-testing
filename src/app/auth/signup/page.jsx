"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const page = () => {
  return (
    <div className="w-[90%]  md:w-[50%] mx-auto  ">
      <div className="flex  items-center justify-center">
        <form className="bg-[#ffffff6a]  px-8 py-4 rounded-md shadow-md w-full max-w-md">
          <h2 className="text-center font-medium text-2xl py-2 mb-4">
            Sign Up
          </h2>
          <p className="text-center text-sm mb-4">
            Create an account to get started with our service.
          </p>

          {/* Full Name */}
          <div className="mb-4">
            <Label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </Label>
            <Input
              id="fullname"
              type="text"
              placeholder="John Doe"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="johndoe@example.com"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            />
          </div>

          {/* WhatsApp Number */}
          <div className="mb-4">
            <Label
              htmlFor="whatsapp"
              className="block text-sm font-medium text-gray-700"
            >
              WhatsApp Number
            </Label>
            <Input
              id="whatsapp"
              type="tel"
              placeholder="+1 234 567 890"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <Label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="********"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <Label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
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
              className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
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

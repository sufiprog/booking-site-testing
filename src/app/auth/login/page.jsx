"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  return (
    <div className="w-[90%] md:w-[50%] mx-auto my-32 m:m-0">
      <div className="flex items-center justify-center">
        <form className="bg-[#ffffff6a] px-8 py-6 rounded-md shadow-lg w-full max-w-md">
          <h2 className="text-center font-medium text-2xl py-2 mb-4">Login</h2>
          
          {/* Email */}
          <div className="mb-4">
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</Label>
            <Input id="email" type="email" placeholder="johndoe@example.com" className="mt-2 p-3 w-full border border-gray-300 rounded-md" />
          </div>

          {/* Password */}
          <div className="mb-4">
            <Label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</Label>
            <Input id="password" type="password" placeholder="********" className="mt-2 p-3 w-full border border-gray-300 rounded-md" />
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700">
              Login
            </button>
          </div>

          <p className="text-center text-sm text-gray-600">
            Don't have an account? <a href="/auth/signup" className="text-blue-500">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

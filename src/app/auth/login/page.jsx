"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [error, setError] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous errors

    try {
      const response = await axios.post("/api/users/login", user);

      if (response.data.success) {
        router.push("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Check if the error message is related to email verification
        if (error.response.data.message === "Email not verified") {
          setError(
            "Please check your email. Once you are verified, you can login."
          );
        } else {
          setError(
            error.response.data.message || "Login failed. Please try again."
          );
        }
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="w-[90%] md:w-[50%] mx-auto my-32 m:m-0">
      <div className="flex items-center justify-center">
        <form
          onSubmit={onLogin}
          className="bg-[#ffffff6a] px-8 py-6 rounded-md shadow-lg w-full max-w-md"
        >
          <h2 className="text-center font-medium text-2xl py-2 mb-4">Login</h2>
          <p className="mb-6 text-gray-700 text-center">
            {loading
              ? "Loading..."
              : "Please enter your email and password to login."}
          </p>

          {/* Error Message */}
          {error && <p className="mb-4 text-red-500">{error}</p>}

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
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="johndoe@example.com"
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
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="********"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            />
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              disabled={buttonDisabled}
              type="submit"
              className={`w-full text-white p-3 rounded-md ${
                buttonDisabled
                  ? "cursor-not-allowed bg-blue-600/70"
                  : "hover:bg-blue-700 bg-blue-600"
              }`}
            >
              Login
            </button>
          </div>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/auth/signup" className="text-blue-500">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

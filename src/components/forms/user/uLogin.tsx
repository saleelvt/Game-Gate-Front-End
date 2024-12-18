/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Add styles for the phone input
import BgImg from "../../../assets/images/Group 105.jpg";
import { NavLink } from "react-router-dom";

export const UserLogin: React.FC = React.memo(() => {
  // State for form values and errors
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("IN"); // State for country code
  const [errors, setErrors] = useState<{ phoneNumber?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Handle phone number change and set it into state
  const handlePhoneNumberChange = (value?: string) => {
    setPhoneNumber(value || ""); // Ensure it doesn't set to undefined
  };

  // Handle country code change
  const handleCountryCodeChange = (code: any) => {
    setCountryCode(code);
  };

  // Form submission handler
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Basic phone number validation
    if (!phoneNumber) {
      setErrors({ phoneNumber: "Phone number is required" });
      return;
    } else if (!/^\+?[1-9]\d{1,14}$/.test(phoneNumber)) {
      setErrors({ phoneNumber: "Please enter a valid phone number" });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Phone Number:", phoneNumber);
      console.log("Country Code:", countryCode); // You can use the country code here
      // Add your form submission logic here (e.g., API request)
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="flex items-center p-2 justify-center min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#7C00FF]/30 to-[#2CF19A]/30 blur-md"></div>
      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/0"></div>

      {/* Form Container */}
      <div
        className="relative z-10 flex flex-col opacity-90 items-center p-8 w-full max-w-md shadow-2xl rounded-md"
        style={{
          backgroundImage: `url(${BgImg})`,
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-white animate-bounce">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="w-full">
          {/* Phone Number Field with Country Code Picker */}
          <div className="mb-6">
            <label
              htmlFor="phoneNumber"
              className="block text-lg font-medium text-gray-200 mb-2"
            >
              Phone Number
            </label>
            <PhoneInput
              international
              // Default country is based on the state
              value={phoneNumber}
              onChange={handlePhoneNumberChange} // Just handle the phone number value change
              onCountryChange={handleCountryCodeChange} // Handle country code change
              className="w-full px-2 py-3 text-lg border border-blue-600 rounded-lg bg-gray-400 text-gray-800 focus:ring-2 focus:ring-[#723077] focus:outline-none transition"
            />
            
            {errors.phoneNumber && (
              <div className="text-red-400 text-sm mt-1">{errors.phoneNumber}</div>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center mt-4">
            <button
              type="submit" // Ensure this is a submit button
              disabled={isSubmitting}
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-b from-[#6330a1] via-[#4f2287] to-[#2d0f4e] text-white font-semibold text-lg hover:shadow-lg hover:scale-105 transform transition"
            >
              {isSubmitting ? "Logging In..." : "Login"}
            </button>

            <div className="mt-4 text-center">
              <span className="text-gray-950">
                Don't have an account?{" "}
                <NavLink to="/signup" style={{ color: "blue" }}>
                  Sign Up
                </NavLink>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
});

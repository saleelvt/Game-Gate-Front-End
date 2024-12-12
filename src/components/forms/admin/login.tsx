import React, { useState } from "react";
import { useFormik } from "formik";
import { ValidationLogin } from "../../../validation/admin/adminLogin";
import { IAdminLogin } from "../../../interfaces/admin/login";
import BgImg from "../../../assets/images/Group 105.jpg"

export const AdminLogin = React.memo(() => {
  const initialValues: IAdminLogin = {
    email: "",
    password: "",
  };


  
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik<IAdminLogin>({
    initialValues,
    validationSchema: ValidationLogin,
    onSubmit: async (values) => {
      try {
        console.log(values, "before going to salon home page");
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
  });

  return (
    <div
      className="flex items-center px-6  justify-center min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
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
         backgroundImage:`url(${BgImg})`
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-white animate-bounce">
          Admin Login
        </h2>
        <form onSubmit={formik.handleSubmit} className="w-full">
          {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-200 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...formik.getFieldProps("email")}
              className="w-full px-4 py-2 text-lg border border-gray-300 rounded-lg bg-gray-300 text-gray-800 focus:ring-2 focus:ring-[#723077] focus:outline-none transition"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-400 text-sm mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>
          <div className="mb-5 relative">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-200 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...formik.getFieldProps("password")}
              className="w-full px-4 py-2 text-lg border border-gray-300 rounded-lg bg-gray-300 text-gray-800 focus:ring-2 focus:ring-[#723077] focus:outline-none transition"
            />
            <span
              className="absolute inset-y-0 right-4 flex items-center cursor-pointer text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223a11.055 11.055 0 00-1.66 3.656C2.453 12.11 4.825 16.5 12 16.5c2.245 0 4.09-.5 5.5-1.217M21 21l-1.682-1.682M3.98 8.223L21 21M9.878 9.878a3 3 0 014.244 4.244"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-8 mt-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.432 5 12 5c3.87 0 7.07 2.43 8.542 5.458A10.97 10.97 0 0112 19.5a10.97 10.97 0 01-9.542-7.5z"
                  />
                </svg>
              )}
            </span>
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-400 text-sm mt-1">
                {formik.errors.password}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-b from-[#6330a1] via-[#4f2287] to-[#2d0f4e]
 text-white font-semibold text-lg hover:shadow-lg hover:scale-105 transform transition"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

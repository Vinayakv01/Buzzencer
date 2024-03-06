import React from "react";
import loginImg from "../../assets/login.svg";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex h-screen">
      {/* Left side (Image) */}
      <div className="w-1/2 bg-blue-200 flex items-center justify-center">
        <img src={loginImg} alt="Login" className="max-w-full max-h-full" />
      </div>

      {/* Right side (Form) */}
      <div className="w-1/2 flex items-center justify-center">
        <form className="w-3/4 bg-white p-8 shadow-md rounded-md">
          <h2 className="text-3xl font-semibold mb-6">Login</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border p-2 rounded-md"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border p-2 rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark"
          >
            Login
          </button>
          <p className="mt-4 text-sm text-gray-600">
            Forgot your password? <a href="#" className="text-blue-500">Reset here</a>.
          </p>

         <p className="mt-2 text-sm text-gray-600">
          Don't have an account? <Link to="/signup" className="text-blue-500">Sign up</Link>.
         </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

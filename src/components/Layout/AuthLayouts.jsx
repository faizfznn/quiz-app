import { Link } from "react-router-dom";
import React from "react";
const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-600 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        <Navigation type={type} />
        {/* <p className="text-center mt-5">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          {type === "login" && (
            <Link to="/register" className="font-bold text-blue-600 underline">
              Sign Up
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="font-bold text-blue-600 underline">
              Login
            </Link>
          )}
        </p> */}
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="w-full max-w-xs text-center mt-5">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-blue-600 underline">
          Sign Up
        </Link>
      </p>
    );
  } else {
    return (
      <p className="w-full max-w-xs text-center mt-5">
        Already have an account?{" "}
        <Link to="/" className="font-bold text-blue-600 underline">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;

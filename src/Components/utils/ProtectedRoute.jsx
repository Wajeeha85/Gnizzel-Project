import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("user_token");

  if (!token) {
    console.log("Protected route", token);
    return <Navigate to="/signin" />;
  }

  return children;
};

export default ProtectedRoute;

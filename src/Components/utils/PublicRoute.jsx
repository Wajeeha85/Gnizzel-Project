import React from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("user_token");
  if (token) {
    console.log("public Route", token);
    return <Navigate to="/deals" />;
  }
  return children;
};

export default ProtectedRoute;

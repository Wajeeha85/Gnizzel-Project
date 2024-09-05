import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("user_token");

  if (token) {
    console.log("hello", token);
    return <Navigate to="/deals" />;
  }

  return children;
};

export default PublicRoute;

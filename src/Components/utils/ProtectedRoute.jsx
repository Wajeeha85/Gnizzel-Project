import React from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("user_token");
  // console.log(token, "token ehre");
  // console.log(Boolean(token), "toke");
  if (!token) {
    // console.log("from he");
    console.log(" token", token);
    return <Navigate to="/signin" />;
  }
  return children;
};

export default ProtectedRoute;

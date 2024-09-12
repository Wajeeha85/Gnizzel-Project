import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from "./Components/ForgotPassword";
import Image from "./Components/assets/images/Group 1000005317.jpg";
import SignIn from "./Components/GetStarted.jsx/SignIn";
import SignUp from "./Components/SignUp";
import NewPassword from "./Components/NewPassword";
import ContactUs from "./Components/ContactUs";
import Deals2 from "./Components/Deals/Deals2";
import Deals from "./Components/Deals/Deals";
import CreateDeal from "./Components/Deals/CreateDeal";
import AttachUsers from "./Components/Deals/AttachUsers";
import PublicRoute from "./Components/utils/PublicRoute";
import ProtectedRoute from "./Components/utils/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />

        <Route
          path="/forgotpassword"
          element={
            <ProtectedRoute>
              <ForgotPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="/deals2"
          element={
            <ProtectedRoute>
              <Deals2 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />

        <Route
          path="/newpassword"
          element={
            <ProtectedRoute>
              <NewPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contactus"
          element={
            <ProtectedRoute>
              <ContactUs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/deals"
          element={
            <ProtectedRoute>
              <Deals />
            </ProtectedRoute>
          }
        />
        <Route
          path="/createdeal"
          element={
            <ProtectedRoute>
              <CreateDeal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/attachusers"
          element={
            <ProtectedRoute>
              <AttachUsers />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

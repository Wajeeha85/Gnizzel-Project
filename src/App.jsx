import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from "./Components/ForgotPassword";
import Image from "./Components/assets/images/Group 1000005317.jpg";
import Deals2 from "./Components/Deals/Deals2";
import SignIn from "./Components/GetStarted.jsx/SignIn";
import SignUp from "./Components/SignUp";
import NewPassword from "./Components/NewPassword";
import ContactUs from "./Components/ContactUs";
import Deals from "./Components/Deals/Deals";
import CreateDeal from "./Components/Deals/CreateDeal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/deals2" element={<Deals2 />} />
        <Route path="/signin" element={<SignIn />} />

        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/createdeal" element={<CreateDeal />} />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Hidden from "../assets/images/Hidden.png";
import deals from "../Deals/Deals";
import axios from "axios";
import Logo from "../assets/images/Group 1000005195.png";
import EyeIcon from "../assets/images/Hidden.png";
import GroupImage from "../assets/images/Group 1000005317.jpg";
import { Link } from "react-router-dom";
import { postApiWithoutAuth } from "../utils/Api";
import ENDPOINTS from "../utils/endpoints";
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });

  const getValues = (e) => {
    setData(() => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(data);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async () => {
    const response = await postApiWithoutAuth(ENDPOINTS.SIGN_IN, {
      email: data.email,
      password: data.password,
      type: 0,
    });
    if (response.success) {
      const authHeader = response.headers.get("Authorization");
      // localStorage.setItem("user_token", authHeader);
      console.log("response data", authHeader, response);
    } else {
      console.log("error ", response.error);
    }
  };

  return (
    <>
      <div className=" flex box-border items-center  justify-between bg-teal-400 py-1 ">
        <img className=" relative  left-[45%]" src={Logo} alt="Logo" />
        <div className="flex flex-1 space-x-4 max-w-sm">
          <button className="bg-transparent rounded-full border text-slate-100 border-white px-6 py-2 text-2xl font-light   decoration tracking-tighter  ">
            Language
          </button>
          <button
            onClick={() => handleSignIn()}
            className="bg-transparent rounded-full border text-slate-100  border-white px-8 py-2 text-2xl  font-light  decoration tracking-tighter  "
          >
            Sign Up{" "}
          </button>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${GroupImage})` }}
        className="  Poppins flex justify-between flex-col md:flex-row  px-14 "
      >
        <div>
          <h1 className="  text-5xl Poppins px-7 py-7 font-medium relative top-20 ">
            Consult a <span className="text-teal-300">Dental</span> any <br />{" "}
            time, anywhere by <br />
            <span className="text-teal-300 py-2">Joining Us</span>{" "}
          </h1>
          <div
            className="font-medium py-12 
Poppins text-slate-400 mt-7 px-8"
          >
            <h5>
              Find New Patients And Get Your Old Customers To Visit <br />
              You More Often. Post An Deal And Post Last Minute <br />{" "}
              Appointments In An Easy Way
            </h5>
          </div>
          <button className=" flex bg-teal-300 py-4 px-8 ml-7 rounded-full border-2 text-slate-100 border-white text-2xl  decoration tracking-tighter flex-1">
            <Link to="/deals">GET STARTED</Link>
          </button>
        </div>

        <div className="flex justify-center flex-col items-center w-[450px] py-5 my-5 mx-14  bg-white rounded-xl  ">
          <h3 className="text-2xl">
            Welcome to <span className="text-teal-300">Gnizzel</span>{" "}
          </h3>
          <h1 className="font-bold text-4xl py-2  ">Sign In</h1>

          <div className="py-6">
            <input
              className="border   text-md  py-3  px-14 rounded-full border-gray-200"
              type="text"
              name="email"
              placeholder="Enter email address"
              onChange={getValues}
              required
            />
          </div>
          <div>
            <input
              className="border  text-md  py-3  px-14 rounded-full border-gray-200"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              name="password"
              onChange={getValues}
            />
            <img
              src={EyeIcon}
              alt="Toggle visibility"
              className=" cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          </div>
          <h5 className="py-4 cursor-pointer text-slate-500 ml-8">
            <Link to="/forgotpassword">Forgot Password?</Link>
          </h5>

          <div className="rounded-full text-center bg-teal-300 border-2 px-14  border-white  py-2 text-xl mt-2 text-white decoration ">
            <button onClick={() => handleSignIn()}>SIGN bbbIN</button>
          </div>
          <h5 className="py-5 text-slate-400 ">
            Need Help?{" "}
            <span className="text-teal-400">
              <Link to="/contactus">Contact US</Link>
            </span>
          </h5>
        </div>
      </div>
    </>
  );
};

export default SignIn;

import React from "react";
import Picture from "../Components/assets/images/the-interior-has-a-armchair-on-empty-white-wall-background-3d-rendering 1.jpg";
import NewPassword from "./NewPassword";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Picture})` }}
      className="bg-cover bg-center w-full h-screen flex items-center justify-center"
    >
      <div className=" Poppins  border-solid bg-white px-5 py-8 relative left-28 ring-1 ring-gray-100 rounded-xl">
        <h1 className="font-bold text-xl px-5 py-3 hover:text-black ">
          {" "}
          Forgot Password?
        </h1>
        <p className="Poppins text-slate-400  px-5 py-2 ">
          Enter the Email Associated With Your Account And <br />
          We Will Send An Email With Instruction To Reset Your <br /> Password
        </p>
        <div>
          <input
            className=" border w-[400px]  text-md  px-14 rounded-full border-gray-200 py-4"
            type="text"
            placeholder="Enter you address"
          />
        </div>
        <div>
          <button className=" flex justify-center w-[400px] rounded-full  bg-teal-400 border-2  border-white px-20 py-4 text-xl mt-2 text-white  decoration tracking-tighter ">
            <Link to="/newpassword"> SEND REQUEST</Link>
          </button>
          <h1 className=" flex justify-center py-4 Poppins font-bold text-teal-400">
            BACK TO LOGIN
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

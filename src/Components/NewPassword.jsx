import React from "react";
import { Link } from "react-router-dom";
import Picture from "../Components/assets/images/the-interior-has-a-armchair-on-empty-white-wall-background-3d-rendering 1.jpg";
const NewPassword = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Picture})` }}
      className="bg-cover bg-center w-full h-screen flex items-center justify-center"
    >
      <div className=" Poppins  border-solid bg-white px-5 py-8 relative left-28 ring-1 ring-gray-100 rounded-xl">
        <h1 className="font-bold text-4xl px-5 py-3 hover:text-black ">
          {" "}
          Create New Password
        </h1>
        <p className="Poppins text-slate-400  px-5 py-2 ">
          You New Password Must Be different From <br /> Your Previous Used
          Password
        </p>
        <div>
          <input
            className=" border w-[400px]  text-md  px-14 rounded-full border-gray-200 py-4"
            type="text"
            placeholder="Enter you address"
          />
        </div>
        <div>
          <input
            className=" border w-[400px] mt-4 mb-4  text-md  px-14 rounded-full border-gray-200 py-4"
            type="text"
            placeholder="Enter you address"
          />
        </div>
        <div>
          <button className=" flex justify-center w-[400px] rounded-full  bg-teal-400 border-2  border-white px-20 py-4 text-md mt-2 text-white  decoration tracking-tighter flex">
            <Link to="/newpassword">UPDATE PASSWORD</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;

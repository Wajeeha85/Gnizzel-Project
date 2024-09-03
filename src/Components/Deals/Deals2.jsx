import React from "react";
import Navbar from "../GetStarted.jsx/Navbar";
import SearchIcon from "../assets/images/Group (1).png";
import UsersDeals from "./UsersDeals";

const Deals2 = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-direction-column justify-around  mt-16 ">
        <input
          className="border  text-md py-0  px-14 rounded-full border-gray-200"
          type="text"
          placeholder="Search"
        />
        <img src={SearchIcon} className=" flex  w-[22px] h-[22px] " />
        <input type="text" />
        <div className="flex justify-center text-center items-center ">
          <h1 className=" mt-6  py-2 items-center font-bold text-4xl font-Poppins ">
            Deals
          </h1>
          <p className="text-zinc-400">
            <br /> Deals your deals have been shown here.
          </p>
        </div>

        <button className="  bg-teal-300 py-4  rounded-full border-2 text-white border-white text-xl  decoration  ">
          Create New Deal
        </button>
      </div>
      <div className="flex justify-center text-center items-center">
        {" "}
        <hr className="  border-t-1 mt-5 border-gray-100 py-7 w-[1300px]" />
      </div>
      <div className="flex flex-direction-column  place-content-around ">
        <UsersDeals />
        <UsersDeals />
      </div>

      <div className="flex flex-direction-column  place-content-around ">
        <UsersDeals />
        <UsersDeals />
      </div>
      <div className="flex flex-direction-column  ml-6 mb-3">
        <UsersDeals />
      </div>
    </div>
  );
};

export default Deals2;

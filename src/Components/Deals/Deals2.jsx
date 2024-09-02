import React from "react";
import Logo from "../assets/images/Group 1000005195.png";
import Author from "../assets/images/Group 1000005136.png";

const Deals2 = () => {
  return (
    <div>
      {" "}
      <div className="  box-border flex  items-center h-[80px]   bg-teal-400 p-4 justify-between  ">
        <div className="flex items-center ">
          <h1 className="  text-white px-3 font-semibold text-xl ">Deals</h1>
          <h1 className="  text-white px-3  font-semibold text-xl ">
            Last Mins Bookings{" "}
          </h1>
          <h1 className="  text-white px-3 font-semibold text-xl ">Reviews</h1>
          <h1 className="  text-white px-3  font-bold text-xl ">Contact</h1>

          <img className=" absolute left-[45%]" src={Logo} alt="Logo" />
        </div>
        <div>
          <p className="bg-white rounded-full pl-2 pr-6 py-2  flex justify-self-end width-[px]">
            <img src={Author} alt="Author" />
          </p>
        </div>
      </div>
      <div className="flex flex-direction-column justify-around ">
        <input
          className="border  text-md  py-3  px-14 rounded-full border-gray-200"
          type="text"
          placeholder="Search"
        />
        <input type="text" />
        <h1 className="flex justify-center mt-6  py-2 items-center font-bold text-4xl Poppins ">
          Deals
        </h1>
        <h2 className="flex justify-center items-center text-xl Poppins  ">
          your Deals have been shown here
        </h2>
        <button className="  bg-teal-300 py-4 px-8  rounded-full border-2 text-white border-white text-2xl  decoration  ">
          Create New Deal
        </button>
      </div>
    </div>
  );
};

export default Deals2;

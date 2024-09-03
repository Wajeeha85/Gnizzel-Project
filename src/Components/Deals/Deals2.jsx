import React from "react";
import Logo from "../assets/images/Group 1000005195.png";
import Author from "../assets/images/Group 1000005136.png";
import SearchIcon from "../assets/images/Group (1).png";
import clinicPng from "../assets/Rectangle 17126.png";
const Deals2 = () => {
  return (
    <div>
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
      <div className="flex flex-direction-column justify-around  mt-16 ">
        <input
          className="border  text-md py-0  px-14 rounded-full border-gray-200"
          type="text"
          placeholder="Search"
        />
        <img src={SearchIcon} size="1" />
        <input type="text" />
        <h1 className="flex justify-center mt-6  py-2 items-center font-bold text-4xl Poppins ">
          Deals
        </h1>
        <p className="flex justify-center items-center ">
          {" "}
          <br /> Deals your deals have been shown here.
        </p>

        <button className="  bg-teal-300 py-4  rounded-full border-2 text-white border-white text-xl  decoration  ">
          Create New Deal
        </button>
      </div>
      <div className="flex flex-col text-center justify-center items-center h-[300px] w-[900px] border-2 border-teal-100 rounded-3xl shadow-xl space-y-4">
        <button className="mb-2 border-2 border-teal-300 rounded-3xl font-semibold text-teal-500 py-2 px-2  ">
          Attach Users
        </button>

        <h1 className="mb-2 font-bold ">Dental Clinic</h1>

        <h3 className="mb-2 font-semibold ">Wed May 20 08:00 - 08:30 PM</h3>

        <p className="mb-2 text-4xl text-teal-400  ">$50.00</p>

        <div className="flex space-x-4">
          <button className="bg-teal-300 py-3 px-10 h-[ 100px]    font-semibold  rounded-full border-2 text-white border-white text-xl">
            Update
          </button>
          <button className="bg-teal-50 py-3 px-10 rounded-full  font-semibold border-2 text-teal-500 border-teal-300 text-xl">
            Disable
          </button>
        </div>
        <img src={clinicPng} alt="Clinic" />
      </div>
    </div>
  );
};

export default Deals2;

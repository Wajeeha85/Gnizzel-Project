import React from "react";
import Logo from "../assets/images/Group 1000005195.png";
import Author from "../assets/images/Group 1000005136.png";
import SearchIcon from "../assets/images/Group (1).png";
import UsersDeals from "./UsersDeals";

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
        <div className="flex justify-center text-center items-center ">
          <h1 className=" mt-6  py-2 items-center font-bold text-4xl Poppins ">
            Deals
          </h1>
          <p>
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

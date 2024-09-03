import React from "react";
import clinicPng from "../assets/Rectangle 17126.png";

const UserDeals = () => {
  return (
    <>
      <div className="flex flex-row mt-5  h-[260px] w-[700px] border-2 border-teal-100 rounded-3xl shadow-xl p-4">
        {/* Left Side - Text and Buttons */}
        <div className="flex flex-col space-y-4 flex-grow">
          {/* Attach Users Button */}
          <button className="border-2 border-teal-300 rounded-3xl font-semibold text-teal-500 py-2 w-[120px] mb-2">
            Attach Users
          </button>

          {/* Clinic Details */}
          <div>
            <h1 className="font-bold">Dental Clinic</h1>
            <h3 className="font-semibold">Wed May 20 08:00 - 08:30 PM</h3>
            <p className="text-4xl text-teal-400">$50.00</p>
          </div>

          {/* Update and Disable Buttons */}
          <div className="flex space-x-4 mt-4">
            <button className="bg-teal-300 py-3 px-10 font-semibold rounded-full border-2 text-white border-white text-xl">
              Update
            </button>
            <button className="bg-teal-50 py-3 px-10 rounded-full font-semibold border-2 text-teal-500 border-teal-300 text-xl">
              Disable
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="m">
          <img
            src={clinicPng}
            alt="Clinic"
            className="w-[307px] h-[230px] rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default UserDeals;

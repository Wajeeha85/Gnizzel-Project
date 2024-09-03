import React from "react";
import clinicPng from "../assets/Rectangle 17126.png";
import clockIcon from "../assets/images/Group 1000005275.png";

const UserDeals = () => {
  return (
    <>
      <div className="flex flex-row mt-5  h-[260px] w-[700px] border-2 border-teal-100 rounded-3xl shadow-xl p-4">
        <div className="flex flex-col space-y-4 flex-grow">
          <button className="border-2 border-teal-300 rounded-3xl font-semibold text-teal-500 py-2 w-[120px] mb-2">
            Attach Users
          </button>
          <div>
            <h1 className="font-bold text-3xl "> Dental Clinic</h1>{" "}
            <img src={clockIcon} className="h-[20px] " />
            <p className="text-4xl text-teal-400">$50.00</p>
          </div>
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
            className="w-[316px] h-[200px] rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default UserDeals;

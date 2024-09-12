import React from "react";
import Navbar from "./GetStarted.jsx/Navbar";

const ContactUs = () => {
  const value = import.meta.env.VITE_API_BASE_URL;
  console.log(value);

  return (
    <div>
      <Navbar />
      <div className="flex  justify-center  items-center h-auto  ">
        <div className="  bg-sky-100 border mt-6  rounded-xl ">
          <h1 className="text-4xl flex  py-4 justify-center font-bold ">
            Contact Us
          </h1>
          <p className="  flex justify-center text-gray-500 py-3 font-semibold  ">
            Feel free to contact us and we will get back to you as soon as we
            can
          </p>

          <div className="py-6">
            <h2 className="font-semibold text-xl text-gray-500 ml-8 mb-3">
              Clinic Name
            </h2>
            <input
              className="border w-[400px] text-md  mx-4  py-4  px-14 rounded-full border-gray-200"
              type="text"
              placeholder="Enter Clinic Name "
            />

            <input
              className="border  w-[400px]  text-md  mx-4 py-4  px-14 rounded-full border-gray-200"
              type="text"
              placeholder="Enter email address"
            />
          </div>
          <div>
            <h2 className="font-semibold text-xl text-gray-500 ml-8 mb-3">
              Description
            </h2>
            <input
              className="border  w-[830px] h-[150px] text-md  mx-4 py-4  px-14 rounded-xl border-gray-200"
              type="text"
              placeholder="Enter text here...."
            />
          </div>
          <div className="flex justify-center">
            <button className="  bg-teal-400 font-semibold flex justify-center my-4 rounded-full px-4  text-white border-white  py-3  ">
              SUBMIT NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

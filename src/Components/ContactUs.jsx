import React from "react";
import Logo from "../Components/assets/images/Group 1000005195.png";
import Author from "../Components/assets/images/Group 1000005136.png";

const ContactUs = () => {
  const value = import.meta.env.VITE_API_BASE_URL;
  console.log(value);
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

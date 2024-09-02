import React from "react";
import Logo from "../assets/images/Group 1000005195.png";
import Author from "../assets/images/Group 1000005136.png";

const CreateDeal2 = () => {
  return (
    <div>
      <div className="box-border flex items-center h-[80px] bg-teal-400 p-4 justify-between">
        <div className="flex items-center">
          <h1 className="text-white px-3 font-semibold text-xl">Deals</h1>
          <h1 className="text-white px-3 font-semibold text-xl">
            Last Mins Bookings
          </h1>
          <h1 className="text-white px-3 font-semibold text-xl">Reviews</h1>
          <h1 className="text-white px-3 font-bold text-xl">Contact</h1>

          <img className="absolute left-[45%]" src={Logo} alt="Logo" />
        </div>
        <div>
          <p className="bg-white rounded-full pl-2 pr-6 py-2 flex justify-self-end">
            <img src={Author} alt="Author" />
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center bg-gray-100 py-8">
        <div className="border bg-white rounded-xl w-[700px] h-auto p-7">
          <div className="mb-4">
            <input
              className="border text-md py-4 px-6 rounded-full border-gray-200 w-full"
              type="text"
              placeholder="Deal Name"
            />
          </div>
          <div>
            <h2 className="font-semibold text-xl text-gray-500 ml-4 mb-3">
              Description
            </h2>
            <input
              className="border w-full h-[150px] text-md px-4 py-2 rounded-xl border-gray-200"
              type="text"
              placeholder="Enter text here...."
            />
          </div>
          <div className="mb-4 mt-3">
            <h2 className="font-semibold text-xl text-gray-500 ml-4 mb-3">
              Price of Deal
            </h2>
            <input
              className="border text-md py-4 px-6 rounded-full border-gray-200 w-full"
              type="text"
              placeholder="Price of deal"
            />
          </div>
          <div className="mb-4">
            <h2 className="font-semibold text-xl text-gray-500 ml-4 mb-3">
              Number of deal
            </h2>
            <input
              className="border text-md py-4 px-6 rounded-full border-gray-200 w-full"
              type="text"
              placeholder="Number of deals "
            />
          </div>
          <div className="mb-4  ">
            <h2 className="font-semibold text-xl text-gray-500 ml-4 mb-3">
              Duration of deal
            </h2>
            <div className="flex flex-direction-column">
              <input
                className="border    text-md py-4 px-6 rounded-full border-gray-200 w-96"
                type="text"
                placeholder="Starting Time  "
              />
              <input
                className="border    text-md py-4 px-6 rounded-full border-gray-200 w-96"
                type="text"
                placeholder="Ending Time "
              />
            </div>
          </div>
          <div className="flex flex-direction-column">
            <button className="rounded-full text-center bg-teal-400 border-2 w-[400px] border-white px-3 py-3 text-xl mt-2 text-white decoration tracking-tighter">
              <h2>CREATE DEAL</h2>
            </button>
            <button className="rounded-full text-center bg-teal-400 border-2 w-[400px] border-white px-3 py-3 text-xl mt-2 text-white decoration tracking-tighter">
              <h2>PREVIEW DEAL</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDeal2;

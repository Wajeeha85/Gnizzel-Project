import React from "react";
import Navbar from "../GetStarted.jsx/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setDealData } from "../../redux/dealsSlice";

const CreateDeal2 = () => {
  const dispatch = useDispatch();
  const deals = useSelector((state) => state.dealsData.data);
  console.log(deals, "deasl");
  const handleChange = (e) => {
    dispatch(
      setDealData({
        name: e.target.name,
        value: e.target.value,
      })
    );
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center bg-gray-100 py-8">
        <div className="border bg-white rounded-xl w-[700px] h-auto p-7">
          <div className="mb-4">
            <input
              className="border text-md py-4 px-6 rounded-full border-gray-200 w-full"
              type="text"
              placeholder="Deal Name"
              name="dealName"
              onChange={handleChange}
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
              name="description"
              onChange={handleChange}
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
              name="price"
              onChange={handleChange}
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
              name="numbers"
              onChange={handleChange}
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
                name="time"
                onChange={handleChange}
              />
              <input
                className="border    text-md py-4 px-6 rounded-full border-gray-200 w-96"
                type="text"
                placeholder="Ending Time "
                name="time"
                onChange={handleChange}
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

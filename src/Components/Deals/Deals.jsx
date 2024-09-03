import React from "react";
import Navbar from "../GetStarted.jsx/Navbar";
import { Link } from "react-router-dom";
import Sign from "../assets/images/Group.png";
const CreateDeal = () => {
  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center text-xl font-bold py-4 mt-5">
        <h1>You Don't Have A Deal Yet</h1>
      </div>
      <div>
        {" "}
        <p className="flex justify-center text-gray-400 font-semibold items-center ">
          Create your deals here
        </p>
      </div>
      <div className="flex justify-center items-center py-7">
        <hr className="border-t-1 border-gray-100 w-[1000px]" />
      </div>
      <div className="border border-dashed border-cyan-300 rounded-xl  hover:bg-sky-200  cursor-pointer text-cyan-400 font-semibold bg-sky-100 w-[460px] h-[250px] flex flex-col justify-center items-center py-7 mx-auto">
        <div className="border rounded-full border-cyan-300  mb-4">
          {" "}
          <img src={Sign} alt="Sign" />{" "}
        </div>
        <div>
          <h1 className=" text-3xl  ">
            {" "}
            <Link to="/createdeal">Create Deal</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CreateDeal;

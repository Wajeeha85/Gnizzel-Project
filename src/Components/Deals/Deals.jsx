import React from "react";
import Logo from "../assets/images/Group 1000005195.png";
import Author from "../assets/images/Group 1000005136.png";
import { Link } from "react-router-dom";
import Sign from "../assets/images/Group.png";

const CreateDeal = () => {
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

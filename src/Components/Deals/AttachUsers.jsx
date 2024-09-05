import React from "react";
import Navbar from "../GetStarted.jsx/Navbar";
const AttachUsers = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-direction-row  justify-center items-center text-center ">
        <h1 className="text-4xl  font-bold ">Attach Users</h1>
        <p>Please Enter User ID to Attach Users</p>
        <button className="text-teal-400 bg-teal-100 border-2 rounded-full border-teal-400 px-8 py-4  ">
          10 Deals Available
        </button>
      </div>
    </div>
  );
};

export default AttachUsers;

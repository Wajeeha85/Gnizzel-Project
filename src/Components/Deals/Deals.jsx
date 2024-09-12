import React, { useState, useEffect } from "react";
import Navbar from "../GetStarted.jsx/Navbar";
import { Link } from "react-router-dom";
import Sign from "../assets/images/Group.png";
import ENDPOINTS from "../utils/endpoints.js";
import { getApiWithAuth } from "../utils/Api.js";
import { useNavigate } from "react-router-dom";

const CreateDeal = () => {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("user_token");
  const navigate = useNavigate();
  const gettingData = async () => {
    try {
      const response = await getApiWithAuth(ENDPOINTS.Users_me);

      if (response.success) {
        setData(response.data.user);
        console.log("success", response);
      } else {
        console.error("Unexpected response structure", response);
        setData([]);
      }
    } catch (error) {
      console.log("Error", error);
      setData([]);
    }
  };

  // useEffect(() => {
  //   gettingData();
  // }, []);
  // useEffect(() => {
  //   const token = localStorage.getItem("user_token");
  //   if (!token) {
  //     navigate("/signin");
  //   }
  // }, []);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        {data ? (
          // data.map((item) => <div key={item}>{item.user.email}</div>)
          <div>
            <h1>Name:{data.first_name}</h1>
            <h1>Active Roll : {data.active_role}</h1>
            <h1>Email:{data.email}</h1>
            <h1>Id:{data.id}</h1>
          </div>
        ) : (
          <div>No data available</div>
        )}
      </div>
      <div className="flex justify-center items-center text-xl font-bold py-4 mt-5">
        <h1>You Don't Have A Deal Yet</h1>
      </div>
      <div>
        <p className="flex justify-center text-gray-400 font-semibold items-center">
          Create your deals here
        </p>
      </div>
      <div className="flex justify-center items-center py-7">
        <hr className="border-t-1 border-gray-100 w-[1000px]" />
      </div>
      <div className="border border-dashed border-cyan-300 rounded-xl hover:bg-sky-200 cursor-pointer text-cyan-400 font-semibold bg-sky-100 w-[460px] h-[250px] flex flex-col justify-center items-center py-7 mx-auto">
        <div className="border rounded-full border-cyan-300 mb-4">
          <img src={Sign} alt="Sign" />
        </div>
        <div>
          <h1 className="text-3xl">
            <Link to="/createdeal">Create Deal</Link>
          </h1>
        </div>
      </div>
    </>
  );
};

export default CreateDeal;

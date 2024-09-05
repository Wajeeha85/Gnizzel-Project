import React, { useState } from "react";
import { postApiWithoutAuth } from "./utils/Api.js";
import Picture from "../Components/assets/images/the-interior-has-a-armchair-on-empty-white-wall-background-3d-rendering 1.jpg";
import { Link, useNavigate } from "react-router-dom";
import ENDPOINTS from "./utils/endpoints.js";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    address: "",
    code: "",
    city: "",
    email: "",
    password: "",
    patients: "",
    link: "",
  });
  const handleValues = (e) => {
    setData(() => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };
  const navigate = useNavigate();
  const submitForm = async (e) => {
    e.preventDefault();
    const response = await postApiWithoutAuth(ENDPOINTS.SIGN_UP, {
      ...data,
      role: "patient",
    });
    console.log(response);
    if (response.success) {
      alert("Account created successfully");
      console.log(response.headers);
      setTimeout(() => {
        navigate("/signin");
      }, 0);
    } else {
      console.log(response, "here");
      alert(response?.message?.data?.error);
    }
  };
  console.log(data);
  return (
    <div
      style={{ backgroundImage: `url(${Picture})` }}
      className="flex justify-center items-center bg-cover bg-center w-full h-auto py-4 Poppins bg-black"
    >
      <div className="bg-white ring-1 ring-gray-100 rounded-xl border p-8">
        <h1 className="font-bold text-5xl py-4 px-6 Poppins">Signup</h1>
        <form onSubmit={submitForm}>
          <div className="flex flex-wrap gap-5">
            <input
              className="border text-md py-4 px-6 rounded-full border-gray-200 flex-grow"
              type="text"
              placeholder="Clinic Name"
              name="name"
              onChange={handleValues}
              required
              value={data.name}
            />
            <input
              className="border text-md py-4 px-6 rounded-full border-gray-200 flex-grow"
              type="number"
              placeholder="Phone Number"
              name="phone"
              onChange={handleValues}
              required
              value={data.phone}
            />
          </div>
          <div className="mt-6">
            <input
              className="border w-full text-md py-4 px-6 rounded-full border-gray-200"
              type="text"
              placeholder="Enter Your Address"
              name="address"
              onChange={handleValues}
              required
            />
          </div>
          <div className="flex flex-wrap gap-5 mt-6">
            <input
              className="border text-md py-4 px-6 rounded-full border-gray-200 flex-grow"
              type="number"
              placeholder="Postal Code"
              name="code"
              onChange={handleValues}
              required
            />
            <input
              className="border text-md py-4 px-6 rounded-full border-gray-200 flex-grow"
              type="text"
              placeholder="City"
              name="city"
              onChange={handleValues}
              required
            />
          </div>
          <div className="mt-6">
            <input
              className="border w-full text-md py-4 px-6 rounded-full border-gray-200"
              type="email"
              placeholder="Your Email"
              name="email"
              onChange={handleValues}
              required
            />
          </div>
          <div className="mt-6">
            <input
              className="border w-full text-md py-4 px-6 rounded-full border-gray-200"
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleValues}
              required
            />
          </div>
          <div className="mt-6">
            <input
              className="border w-full text-md py-4 px-6 rounded-full border-gray-200"
              type="number"
              placeholder="No. of Patients"
              name="patients"
              onChange={handleValues}
              required
            />
          </div>
          <div className="mt-6">
            <input
              className="border w-full text-md py-4 px-6 rounded-full border-gray-200"
              type="url"
              placeholder="Enter Homepage link here (Optional)"
              name="link"
              onChange={handleValues}
              required
            />
          </div>
          <div className="rounded-full text-center bg-teal-400 border-2 mt-6 border-white px-3 py-4 text-xl text-white tracking-tighter">
            <button type="submit">Sign Up</button>
          </div>
        </form>

        <p className="flex justify-center py-4">
          Already have an account?{" "}
          <span className="text-teal-400 ml-2 cursor-pointer">Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

// Test@123

import React from "react";
import { MdOutlineEmail } from "react-icons/md";

const Subscribe = () => {
  return (
    <div className="mt-10 mb-20 max-w-[1300px] h-full mx-auto p-2 flex items-center flex-col gap-4">
      <div className="w-[50%]">
        <h2 className=" text-center text-3xl font-semibold">
          Subscribe To Get The Latest News About Us
        </h2>
        <p className=" text-center text-xl font-medium text-gray-400">
          We recomended you to subscribe, drop your email below to get daily
          update about us
        </p>
      </div>

      <div className="input-box flex items-center justify-center gap-1 rounded-full bg-white p-2 px-4 w-[650px]">
        <MdOutlineEmail size={35} color="#ff473f" />
        <input
          type="text"
          placeholder="Enter your email address"
          className="bg-white focus:outline-none p-2 h-full w-full"
        />
        <button className=" bg-[#ff473f] p-3 px-6 rounded-3xl font-semibold cursor-pointer text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;

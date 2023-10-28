import Image from "next/image";
import React from "react";
import { MdFlight, MdHotel } from "react-icons/md";

const ImageURL =
  "https://ik.imagekit.io/imgkitt/andrew-wulf-IeMpDqtdLL8-unsplash%20(1).jpg?updatedAt=1698394088097";

const Hero = () => {
  return (
    <div className="hero-conatiner h-[600px]  relative  top-0 left-0 w-full mx-auto">
      <div className="hero-img relative w-full h-[500px] overflow-hidden">
        <Image
          className="h-[100%] object-cover w-full "
          src={ImageURL}
          alt="hero"
          fill={true}
        />
        <div className="details h-full w-full absolute top-0 left-0 flex items-center justify-center flex-col gap-2 text-center ">
          <h2 className="text-[3rem] text-white font-light ">
            It is time to <span className="font-bold">Discover</span>
          </h2>
          <p className=" text-white font-normal">
            Explore the world around you
          </p>
        </div>
      </div>

      <div className="search absolute bottom-0 left-[50%] translate-x-[-50%] m-auto">
        <div className="btns flex item-center gap-0">
          <button className=" flex items-center gap-2 text-[#ff473f] bg-white font-medium p-3 px-4">
            {" "}
            <MdFlight /> Flights
          </button>
          <button className=" flex items-center gap-2 text-white backdrop-blur-3xl font-medium  p-3 px-4">
            {" "}
            <MdHotel /> Hotels
          </button>
        </div>
        <div className="inputs flex items-end justify-between  px-12 p-10 bg-white shadow-md gap-3 h-[150px]">
          <div className="div">
            <label className="text-gray-900 font-medium">Location </label>
            <input
              className="p-2 border focus:outline-none w-[200px]"
              type="text"
              placeholder="Singapore"
            />
          </div>
          <div className="div">
            <label className="text-gray-900 font-medium">Chech-in </label>
            <input className="p-2 border focus:outline-none" type="date" />
          </div>
          <div className="div">
            <label className="text-gray-900 font-medium">Chech-out </label>
            <input className="p-2 border focus:outline-none" type="date" />
          </div>
          <div className="div">
            <label className="text-gray-900 font-medium">Guest </label>
            <input
              className="p-2 border focus:outline-none w-[200px]"
              type="text"
              placeholder="4 Adults"
            />
          </div>
          <button className=" bg-[#ff473f] p-[10px] px-5 text-white">
            Seacrh
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

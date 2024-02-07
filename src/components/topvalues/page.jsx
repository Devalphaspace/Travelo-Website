"use client";
import React from "react";
import { BsGlobeAmericas } from "react-icons/bs";
import { BiWalk } from "react-icons/bi";
import { MdPayments } from "react-icons/md";
import Image from "next/image";

const ImageLink =
  "https://ik.imagekit.io/imgkitt/andrew-wulf-IeMpDqtdLL8-unsplash%20(1).jpg?updatedAt=1698394088097";

const vid =
  "https://ik.imagekit.io/imgkitt/production_id_4662765%20(1080p).mp4?updatedAt=1698431795982";

const data = [
  {
    id: 1,
    icon: <BsGlobeAmericas size={35} />,
    title: "Lot Of Choices",
    details: "Total 500+ Destinations that we work with",
    link: "",
  },

  {
    id: 2,
    icon: <BiWalk size={38} />,
    title: "Best Tour Guide",
    details: "Our Tour guide with 5+ years of experience",
    link: "",
  },

  {
    id: 3,
    icon: <MdPayments size={35} />,
    title: "Easy Booking",
    details: "With an easy and fast ticket purchase process",
    link: "",
  },
];

const TopValues = () => {
  return (
    <div className="mt-10 max-w-[1300px] w-full h-full mx-auto p-2 flex items-center flex-col gap-8">
      <div className="w-full">
        <h2 className=" text-center text-3xl font-semibold">
          Top Values From Us For You
        </h2>
        <p className=" text-center text-xl font-medium text-gray-400">
          Try a variety of benefits when using our services
        </p>
      </div>
      <div className="cards-wrapper grid grid-cols-3 w-full gap-4">
        {data?.map((i) => (
          <div
            key={i.id}
            className="card  transition ease-in-out delay-75 cursor-pointer h-[320px] hover:shadow-lg w-full flex items-center flex-col gap-3 p-3 text-center justify-center"
          >
            <span className=" border p-4 rounded-md">{i.icon}</span>
            <h2 className="text-2xl font-semibold">{i.title}</h2>
            <p className="w-[65%] text-lg text-gray-500">{i.details}</p>
            <button className="text-[#ff473f] p-2 px-6 rounded-3xl font-semibold cursor-pointer ">
              Read more
            </button>
          </div>
        ))}
      </div>

      <div className="video relative rounded-xl overflow-hidden w-full h-[480px] mt-6">
        {/* <video
          className="h-full w-full object-cover"
          src={vid}
          alt="video"
        
        /> */}

        <video
          loop
          autoPlay
          muted
          className="absolute z-[-1] h-full w-full object-cover"
        >
          <source src={vid} />
        </video>
      </div>
    </div>
  );
};

export default TopValues;

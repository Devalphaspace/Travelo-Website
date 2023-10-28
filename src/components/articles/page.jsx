import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    locaion: "Paris",
    duration: "3 Days 2 Nights",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/3204950/pexels-photo-3204950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    locaion: "Kashmir",
    duration: "3 Days 2 Nights",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/15034912/pexels-photo-15034912/free-photo-of-burj-al-arab-in-dubai.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    locaion: "Dubai",
    duration: "3 Days 2 Nights",
  },
];

const Articles = () => {
  return (
    <div className="mt-10 max-w-[1300px] h-full mx-auto p-2 flex items-center flex-col gap-4">
      <div className="w-full">
        <h2 className=" text-center text-3xl font-semibold">
          Our latest articles
        </h2>
        <p className=" text-center text-xl font-medium text-gray-400">
          Know the latest articles about travel
        </p>
      </div>

      <div className="cards-warpper grid grid-cols-3 w-full mt-6 gap-5">
        {data?.map((i) => (
          <div
            key={i.id}
            className="card h-[400px] w-full relative border rounded-2xl overflow-hidden "
          >
            <Image
              src={i?.src}
              alt="ok"
              className="relative w-[100%] object-cover hover:scale-105 transition-all ease-in-out delay-20 cursor-pointer"
              fill={true}
            />
            <div className="details absolute bottom-0 p-3 text-white  left-0 bg-gradient-to-t from-slate-900 to-transparent w-full">
              <h3 className="text-xl font-medium">{i?.locaion}</h3>
              <p className="text-sm">{i?.duration}</p>
            </div>
          </div>
        ))}
      </div>
      <button className=" bg-[#ff473f] p-3 px-6 rounded-3xl font-semibold cursor-pointer text-white">
        Explore more
      </button>
    </div>
  );
};

export default Articles;

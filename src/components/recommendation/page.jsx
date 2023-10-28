import Image from "next/image";
import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const img =
  "https://ik.imagekit.io/imgkitt/pexels-plann-4565775.jpg?updatedAt=1693387982629";

const data = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/3355788/pexels-photo-3355788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Maldives",
    title: "Tour package 3 days 2 nights with a good and friendly tour guide.",
    price: "112",
    rating: "4.6",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Grace Bay",
    title: "Tour package 3 days 2 nights with a good and friendly tour guide.",
    price: "132",
    rating: "4.5",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/1142948/pexels-photo-1142948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Hidden Beach",
    title: "Tour package 3 days 2 nights with a good and friendly tour guide.",
    price: "128",
    rating: "4.1",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/1172518/pexels-photo-1172518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Bethany Beach",
    title: "Tour package 3 days 2 nights with a good and friendly tour guide.",
    price: "182",
    rating: "4.9",
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/751343/pexels-photo-751343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Eagle Beach",
    title: "Tour package 3 days 2 nights with a good and friendly tour guide.",
    price: "148",
    rating: "4.7",
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Navagio",
    title: "Tour package 3 days 2 nights with a good and friendly tour guide.",
    price: "122",
    rating: "4.2",
  },
];

const Recommendation = () => {
  return (
    <div className="mt-10 max-w-[1300px] w-full h-full mx-auto p-2 flex items-center flex-col gap-8">
      <div className="w-full flex items-start justify-between">
        <div>
          <h2 className=" text-3xl font-semibold">Recommendatios</h2>
          <p className="  text-xl font-medium text-gray-400">
            Best travel recommendations from around the world
          </p>
        </div>
        <button className=" bg-[#ff473f] p-3 px-6 rounded-3xl font-semibold cursor-pointer text-white">
          Explore more
        </button>
      </div>

      <div className="cards-wrapper grid grid-cols-3 gap-6 w-full">
        {data.map((i) => (
          <div
            key={i.id}
            className="card shadow-md rounded-xl overflow-hidden w-full h-[550px] flex flex-col items-center"
          >
            <div className="flex-[2] w-full relative">
              <Image
                className=" object-cover"
                fill={true}
                src={i.url}
                alt="ok"
              />
            </div>
            <div className="flex-[1] p-4  w-full flex flex-col gap-4 items-center justify-center">
              <div className=" w-full flex items-center justify-between">
                <h2 className=" text-2xl font-semibold">{i.name}</h2>
                <div className=" flex items-center gap-2 text-2xl font-medium">
                  <span>
                    <AiTwotoneStar size={28} color="#ffb329" />
                  </span>
                  {i.rating}
                </div>
              </div>
              <div className="title text-xl font-medium text-gray-400">
                {i.title}
              </div>
              <div className=" w-full flex items-center justify-between">
                <h2 className="text-3xl font-medium">${i.price}</h2>
                <button className=" bg-[#ff473f] p-3 px-6 rounded-3xl font-semibold cursor-pointer text-white">
                  Book now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;

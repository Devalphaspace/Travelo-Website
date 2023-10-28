import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-full border-t mx-auto">
      <div className="warpper my-8 mb-20 max-w-[1300px] w-full h-full mx-auto p-2  gap-4 flex items-start justify-between">
        <div className="left flex flex-col gap-4">
          <h2 className=" text-3xl font-semibold">Travelo</h2>
          <div className="socials flex items-center gap-3">
            <div className="icon p-2 bg-[#ff473f] rounded-full text-white cursor-pointer text-xl">
              <FaFacebookF />
            </div>
            <div className="icon p-2 bg-[#ff473f] rounded-full text-white cursor-pointer text-xl">
              <FaTwitter />
            </div>
            <div className="icon p-2 bg-[#ff473f] rounded-full text-white cursor-pointer text-xl">
              <FaWhatsapp />
            </div>
            <div className="icon p-2 bg-[#ff473f] rounded-full text-white cursor-pointer text-xl">
              <FaInstagram />
            </div>
          </div>
        </div>
        <div className="middle flex  items-start w-[60%] justify-between ">
          <div className="card space-y-2">
            <h2 className="text-2xl font-semibold">About</h2>
            <ul>
              <li className="text-[1.2rem] font-medium text-gray-400">
                About Us
              </li>
              <li className="text-[1.2rem] font-medium text-gray-400">
                Destination
              </li>
              <li className="text-[1.2rem] font-medium text-gray-400">
                News & article
              </li>
              <li className="text-[1.2rem] font-medium text-gray-400">
                Testimonials
              </li>
            </ul>
          </div>
          <div className="card space-y-2">
            <h2 className="text-2xl font-semibold">Features</h2>
            <ul>
              <li className="text-[1.2rem] font-medium text-gray-400">
                Payments
              </li>
              <li className="text-[1.2rem] font-medium text-gray-400">
                Account
              </li>
              <li className="text-[1.2rem] font-medium text-gray-400">
                Referal Bonus
              </li>
              <li className="text-[1.2rem] font-medium text-gray-400">Offer</li>
            </ul>
          </div>
          <div className="card space-y-2">
            <h2 className="text-2xl font-semibold">Company</h2>
            <ul>
              <li className="text-[1.2rem] font-medium text-gray-400">
                Carees
              </li>
              <li className="text-[1.2rem] font-medium text-gray-400">
                Privacy & Policy
              </li>
              <li className="text-[1.2rem] font-medium text-gray-400">FAQs</li>
              <li className="text-[1.2rem] font-medium text-gray-400">
                Partners
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="card space-y-2">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <ul className=" space-y-1">
              <li className="text-[1.2rem] font-medium text-gray-400">
                abcd@gmail.com
              </li>
              <h2 className="text-[1.2rem] font-semibold">Get the App</h2>
              <button className=" bg-[#ff473f] p-3 px-6 rounded-3xl font-semibold cursor-pointer text-white">
                Download
              </button>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-bar bg-black text-white p-3">
        <p className="text-center">Privacy & Policy</p>
      </div>
    </div>
  );
};

export default Footer;

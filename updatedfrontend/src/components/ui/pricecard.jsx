import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { IoDiamond } from "react-icons/io5";
import AnimationWrapper from "./animation";
import { Link } from "react-router-dom";
const PriceCard = () => {
  const [isListOpen, setIsListOpen] = useState(true);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  return (
    <>
      <AnimationWrapper>
        <div className="mt-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold  mb-2">
            The popular plans for you
          </h1>
          <p className=" md:text-base text-sm">
            We have different plans available for one to choose. If facing any
            difficulty, feel free to contact.
          </p>
          <div className="flex  sm:items-start items-center flex-wrap justify-center sm:justify-between">
            <div className=" mt-10">
              <div className="border rounded-lg px-6 shadow-md py-4 border-black/10 h-96 w-72 sm:w-96">
                <div className="flex flex-col items-start">
                  <h1 className="text-xl font-poppins font-semibold">
                    Free Plan
                  </h1>
                  <p>
                    ₹0/<span className="text-xs">month</span>
                  </p>
                  <button
                    onClick={toggleList}
                    className="inline-flex mt-4 w-full h-9  items-center justify-center rounded-sm border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  >
                    Get Start
                  </button>
                </div>
                <ul className="flex flex-col items-start gap-y-4 mt-4">
                  <li className="flex items-center md:text-base text-[12px]  line-clamp-1">
                    {" "}
                    <IoCheckmark className="mr-2 text-xl text-green-600" />
                    One practice test
                  </li>
                  <li className="flex items-center md:text-base text-[12px] line-clamp-1">
                    {" "}
                    <IoCheckmark className="mr-2 text-xl text-green-600" />
                    Access to our latest blog
                  </li>
                </ul>
              </div>
            </div>
            <div className=" bg-white  mt-10">
              <div className="border shadow-md h-96 rounded-lg  px-6 py-4 border-black/10 w-72 sm:w-96">
                <div className="flex flex-col items-start">
                  <h1 className="text-xl font-poppins font-semibold ">
                    Monthly Plan
                  </h1>
                  <p>
                    ₹149 + GST inclusive/
                    <span className="text-xs text-gray-400">month</span>
                  </p>
                  
                   <Link to="/price" className="inline-flex mt-4 w-full h-9 animate-shimmer items-center justify-center rounded-sm border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    Go pro
                  </Link>
               
                 
                </div>
                <ul className="flex flex-col items-start gap-y-4 mt-4">
                  <li className="flex items-center md:text-base text-[12px] line-clamp-1">
                    <IoCheckmark className="mr-2 text-xl text-green-600" />
                    Unlimited Practice Test
                  </li>
                  <li className="flex items-center md:text-base text-[12px] line-clamp-1">
                    <IoCheckmark className="mr-2 text-xl text-green-600" />
                    Access to all Company Specific Tests
                  </li>
                  <li className="flex items-center md:text-base text-[12px] line-clamp-1">
                    <IoCheckmark className="mr-2 text-xl text-green-600" />
                    Access to our Digital Library
                  </li>
                  <li className="flex items-center md:text-base text-[12px] line-clamp-1">
                    <IoCheckmark className="mr-2 text-xl text-green-600" />
                    Personalized Analytical Dashboard
                  </li>
                </ul>
              </div>
            </div>
            <div className="  mt-10 shadow-2xl shadow-[#5BBE82]  relative">
              <div className="border h-96  rounded-lg px-6 shadow-md hover:shadow-gray-300  cursor-pointer py-4 border-black/10 w-72 sm:w-96">
                <div className="flex flex-col items-start">
                  <h1 className="text-xl font-poppins font-semibold">
                    Yearly Plan
                  </h1>
                  <p>
                    ₹1200 + GST/
                    <span className="text-xs text-gray-400">year</span>
                  </p>
                  <Link to="/price" className="inline-flex mt-4 w-full h-9 animate-shimmer items-center justify-center rounded-sm border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    Valuable
                  </Link>
                </div>
                <ul className="flex flex-col items-start gap-y-4 mt-4">
                  <li className="flex  items-center md:text-base text-[12px] line-clamp-1">
                    {" "}
                    <IoCheckmark className="mr-2 text-xl text-green-600" />
                    Unlimited Practice Test
                  </li>
                  <li className="flex items-center md:text-base text-[12px] line-clamp-1">
                    {" "}
                    <IoCheckmark className="mr-2 text-xl text-green-600" />
                    Access to all Company Specific Tests{" "}
                  </li>
                  <li className="flex items-center md:text-base text-[12px] line-clamp-1">
                    {" "}
                    <IoCheckmark className="mr-2 text-xl text-green-600" />
                    Access to our Digital Library
                  </li>
                  <li className="flex items-center md:text-base text-[12px] line-clamp-1">
                    {" "}
                    <IoCheckmark className="mr-2 text-xl text-green-600" />
                    Personalized Analytical Dashboard
                  </li>
                  <li className="flex items-center md:text-base text-[12px] line-clamp-1">
                    {" "}
                    <IoCheckmark className="mr-2 text-xl text-green-600" />
                    Access to weekly Webinars
                  </li>
                  <li className="flex items-center md:text-base text-[12px] line-clamp-1">
                    {" "}
                    <IoCheckmark className="mr-2 text-xl text-green-600" />
                    Get a chance for paid Internship!
                  </li>
                </ul>
              </div>
              <div className="absolute top-4 right-4">
                <IoDiamond className=" text-[#5BBE82]  text-xl" />
              </div>
            </div>
          </div>
        </div>
      </AnimationWrapper>
    </>
  );
};

export default PriceCard;
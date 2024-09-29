import React from "react";
import Image from "next/image"; // Make sure to import Image if it's not imported
import styles from "./Bookambulance.module.css";

const ServiceCard = ({
  img,
  headline = "Discuss Medical Condition and Transfer Options",
  description = "Contact us to review the patient's condition and determine the best transfer solution.",
}) => {
  return (
    <div className="relative w-[480px] h-auto flex flex-col justify-start items-start p-6 shadow-md bg-white  mx-2 overflow-hidden border-6 border-[#11B6E3]">
      {/* Image Section */}
      <div className="w-full mb-4">
        {img ? (
          <Image
            src={img}
            alt={headline}
            height={250}
            width={462}
            className="rounded-t-lg object-cover w-full"
            layout="responsive"
          />
        ) : (
          <div className="w-full h-[250px] bg-gray-200 flex justify-center items-center rounded-t-lg">
            <span className="text-gray-500">Image Unavailable</span>
          </div>
        )}
      </div>

      {/* Headline */}
      <div className="font-barlow font-bold text-[24px] mb-2 text-gray-900">
        {headline}
      </div>

      {/* Description */}
      <div className="font-barlow font-normal text-[16px] text-gray-600 mb-6 leading-relaxed">
        {description}
      </div>

      {/* Read More Button */}
      <button className="mt-auto font-barlow font-semibold  py-2 px-6 rounded-md  self-start text-[20px] text-[#1E1E1E] ">
        Read More
      </button>

      {/* Adjacent Corner Clip Effect */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Top Left Corner */}
        <div className="absolute top-0 left-0 w-6 h-6 bg-[#11B6E3] clip-top-left"></div>
        {/* Bottom Right Corner */}
        <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#11B6E3] clip-bottom-right"></div>
      </div>
    </div>
  );
};

const Bookambulance = () => {
  return (
    <div className="bg-[#f5fdff] flex justify-center items-center flex-col px-20 py-10">
      <div className="font-barlow font-semibold text-[24px]">
        How To Book Air Ambulance
      </div>
      <div className="font-barlow font-bold bg-headline-gradient text-transparent bg-clip-text text-[54px]">
        Here’s a Simple Step To Book an Air Ambulance.
      </div>
      <div className="grid grid-cols-4 gap-5 mt-10 sm:grid-cols-1">
        <ServiceCard />
      </div>
    </div>
  );
};

export default Bookambulance;

import React from "react";
import Image from "next/image"; // Import Image from Next.js

// Importing images
import ConfirmPlane from "../../public/images/Homepage/our_work/transportUpdate.png";
import MedicalReport from "../../public/images/Homepage/our_work/medical-reportUpdate.png";
import Phone from "../../public/images/Homepage/our_work/phonecallUpdate.png";
import Transfer from "../../public/images/Homepage/our_work/GroupNew.png";

// Book process steps with icons, titles, descriptions, and styling
const bookProcess = [
  {
    img: Phone,
    title: "Discuss Medical Condition and Transfer Options.",
    description:
      "Contact us to review the patient's condition and determine the best transfer solution.",
    bgColor: "border-[#11B6E3]", // Border color
    textColor: "text-[#11B6E3]", // Text color
  },
  {
    img: MedicalReport,
    title: "Fill MEDA Form & Get Airline Approval",
    description:
      "Complete the MEDA form and obtain necessary airline approvals for a smooth transfer process",
    bgColor: "border-[#FF0000]",
    textColor: "text-[#FF0000]",
  },
  {
    img: ConfirmPlane,
    title: "Confirm Travel Dates with Airline Approval",
    description:
      "Once airline approval is secured, we’ll confirm the travel date for the patient’s transfer",
    bgColor: "border-[#1E1E1E]",
    textColor: "text-[#1E1E1E]",
  },
  {
    img: Transfer,
    title: "Transfer Patients with Expert Care",
    description:
      "Our team ensures a safe and efficient transfer, providing expert care throughout the journey",
    bgColor: "border-[#00FF00]",
    textColor: "text-[#1E1E1E]",
  },
];

// ServiceCard Component for individual steps
const ServiceCard2 = ({ img, title, description, textColor, bgColor }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div
        className={`relative p-6 bg-white shadow-md cursor-pointer w-full h-[350px] 2xl:h-[400px] rounded-[30px] opacity-100 transition-all duration-300 max-w-[350px] 2xl:max-w-[400px]`}
      >
        {/* Icon, Title, and Description */}
        <div className="flex flex-col justify-start items-start h-full text-left">
          {/* Icon Section */}
          <div className="w-full flex justify-start mt-6 mb-4">
            <div className="h-[60px] w-[60px]">
              <Image
                src={img}
                alt={title}
                layout="intrinsic" // Ensure the image maintains aspect ratio
                height={60}
                width={60}
                className="object-contain"
              />
            </div>
          </div>

          {/* Title */}
          <h3 className={`font-barlow font-bold text-[26px] mb-2 ${textColor}`}>
            {title}
          </h3>

          {/* Description */}
          <p className="font-barlow font-normal text-[20px] text-gray-600 mb-6 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Corner Effects */}
        <div className="absolute w-full h-full top-0 left-0">
          {/* Top Left Corner */}
          <div
            className={`absolute top-0 left-0 h-[45px] w-[45px] border-t-4 border-l-4 ${bgColor} rounded-tl-[30px]`}
          ></div>
          {/* Bottom Right Corner */}
          <div
            className={`absolute bottom-0 right-0 h-[45px] w-[45px] border-b-4 border-r-4 ${bgColor} rounded-br-[30px]`}
          ></div>
        </div>
      </div>
    </div>
  );
};

// Main Bookambulance Component to render all the steps
const Bookambulance = () => {
  return (
    <div className="bg-[#f5fdff] flex justify-center items-center flex-col px-8 py-10 sm:px-4 sm:py-5 opacity-4">
      {/* Main Title */}
      <h2 className="font-barlow font-semibold text-[24px] mt-5 text-center">
        How To Book Air Ambulance
      </h2>

      {/* Subtitle */}
      <h1 className="font-barlow font-bold bg-headline-gradient text-transparent bg-clip-text text-[36px] sm:text-[28px] text-center">
        Here’s a Simple Step To Book an Air Ambulance
      </h1>

      {/* Steps Displayed in a Grid */}
      <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-10">
        {bookProcess.map((step, index) => (
          <ServiceCard2
            key={index}
            img={step.img}
            title={step.title}
            bgColor={step.bgColor}
            description={step.description}
            textColor={step.textColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Bookambulance;

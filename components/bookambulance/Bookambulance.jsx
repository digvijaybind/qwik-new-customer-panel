import React from "react";
import Image from "next/image"; // Ensure Image is imported
import styles from "./Bookambulance.module.css"; // Ensure to import styles if needed
import ConfirmPlane from "../../public/images/Homepage/our_work/confirm-aeroplane.png";
import MedicalReport from "../../public/images/Homepage/our_work/medical-report.png";
import Phone from "../../public/images/Homepage/our_work/phone.png";
import Transfer from "../../public/images/Homepage/our_work/transfer.png";

// Book process steps with titles and descriptions
const bookProcess = [
  {
    img: Phone,
    title: "Contact Us",
    description: "Reach out to our team for initial inquiries and assistance.",
    bgColor: "bg-[#11B6E3]",
    textColor: "text-[#11B6E3]",
  },
  {
    img: MedicalReport,
    title: "Fill MEDA Form & Get Airline Approval",
    description:
      "Complete the MEDA form and obtain necessary airline approvals for a smooth transfer process.",
    bgColor: "bg-[#FF0000]",
    textColor: "text-[#FF0000]",
  },
  {
    img: ConfirmPlane,
    title: "Confirm Travel Dates with Airline Approval",
    description:
      "Once airline approval is secured, we’ll confirm the travel date for the patient’s transfer.",
    bgColor: "bg-[#1E1E1E]",
    textColor: "text-[#1E1E1E]",
  },
  {
    img: Transfer,
    title: "Transfer Patients with Expert Care",
    description:
      "Our team ensures a safe and efficient transfer, providing expert care throughout the journey.",
    bgColor: "bg-[#00FF00]",
    textColor: "text-[#00FF00]",
  },
];

// ServiceCard Component to display each step
const ServiceCard = ({
  img,
  title = "",
  description = "",
  bgColor = "",
  textColor,
}) => {
  return (
    <div
      className={`relative w-[480px] h-auto flex flex-col justify-start items-start p-6 shadow-lg bg-white mx-2 overflow-hidden rounded-tl-lg rounded-br-lg rounded-tr-none rounded-bl-none max-w-[320px] cursor-pointer`}
    >
      {/* Image Section */}
      <div className="w-full flex justify-start mt-10 mb-10">
        <Image
          src={img}
          alt={title}
          height={60}
          width={60}
          className="rounded-t-lg object-cover"
          layout="fixed"
        />
      </div>

      {/* Headline */}
      <h3
        className={`font-barlow font-bold text-[26px] mb-2 text-gray-900 ${textColor}`}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="font-barlow font-normal text-[20px] text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Adjacent Corner Clip Effect */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Top Left Corner */}
        <div
          className={`absolute top-0 left-0 w-8 h-8 rounded-tl-[12px] ${bgColor}`}
        ></div>
        {/* Bottom Right Corner */}
        <div
          className={`absolute bottom-0 right-0 w-8 h-8 rounded-br-[12px] ${bgColor}`}
        ></div>
      </div>
    </div>
  );
};


// Main Bookambulance Component
const Bookambulance = () => {
  return (
    <div className="bg-[#f5fdff] flex justify-center items-center flex-col px-20 py-10 sm:px-10 sm:py-5">
      <h2 className="font-barlow font-semibold text-[24px] mt-5">
        How To Book Air Ambulance
      </h2>
      <h1 className="font-barlow font-bold bg-headline-gradient text-transparent bg-clip-text text-[54px] sm:text-[34px]">
        Here’s a Simple Step To Book an Air Ambulance
      </h1>
      <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:grid-rows-4 gap-6 mt-10">
        {bookProcess.map((step, index) => {
          return (
            <ServiceCard
              key={index}
              img={step.img}
              title={step.title}
              description={step.description}
              bgColor={step.bgColor}
              textColor={step.textColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Bookambulance;

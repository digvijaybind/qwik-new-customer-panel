import React from "react";
import styles from "./ServicesHight.module.css";
import TwentyFour from "../../public/images/Homepage/ServicesIcon/24hour.png";
import Rapid from "../../public/images/Homepage/ServicesIcon/rapid.png";
import Safety from "../../public/images/Homepage/ServicesIcon/Safety.png";
import state from "../../public/images/Homepage/ServicesIcon/State.png";
import Image from "next/image";

const IconWithTitle = ({ icon, text, title, color }) => {
  return (
    <div className="border-2 border-transparent bg-clip-padding flex items-center justify-between gap-8 px-10 py-10 2xl:px-6 2xl:py-6 sm:px-0 sm:py-0 rounded-lg">
      {/* Icon Container */}
      <div className="flex items-start justify-center h-24 w-24 2xl:h-28 2xl:w-32">
        <Image
          src={icon}
          alt={text}
          className="h-[90px] w-[150px] sm:h-[60px] sm:w-[250px] 2xl:h-[100px] 2xl:w-[200px]"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-start">
        <div className={`font-barlow font-semibold text-2xl ${color}`}>
          {text}
        </div>
        <div className="font-barlow font-normal text-lg text-gray-600 mt-2 flex justify-center">
          {title}
        </div>
      </div>
    </div>
  );
};

const ServicesHight = () => {
  return (
    <div className="relative grid grid-cols-2 gap-4 p-10 bg-[#f5fdff] sm:grid-cols-1 px-16 py-6 sm:px-5 sm:py-5 opacity-4">
      {/* Row 1 - Aligned to the top */}
      <div className="flex flex-col justify-start">
        <IconWithTitle
          icon={Rapid}
          text="Rapid Response Time"
          color="text-[#11B6E3]" // Use Tailwind color class directly
          title="Qwiklif Air Ambulance assures you of its quick response times and ensures that critical medical transport is initiated promptly."
        />
      </div>
      <div className="flex flex-col justify-start">
        <IconWithTitle
          icon={Safety}
          text="Safety First"
          color="text-[#00FF00]" // Correct color format
          title="Qwiklif Medical team undergoes rigorous training, and our aircraft are regularly maintained to meet or exceed industry safety standards."
        />
      </div>

      {/* Horizontal Line between Row 1 and Row 2 */}
      <div
        className="absolute left-0 top-1/2 w-full h-px 2xl:h-[2px] md:h-[2px] sm:hidden"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #11B6E3 0%, rgba(17, 182, 227, 0) 100%)",
        }}
      ></div>

      {/* Row 2 - Aligned to the bottom */}
      <div className="flex flex-col justify-end">
        <IconWithTitle
          icon={state}
          text="State-of-the-Art Equipment"
          color="text-[#FF0000]" // Use Tailwind color class directly
          title="Our air ambulances are equipped with state-of-the-art medical equipment to provide advanced life support, ensuring the best possible care during transport."
        />
      </div>
      <div className="flex flex-col justify-end">
        <IconWithTitle
          icon={TwentyFour}
          text="Patient-Centric Approach"
          color="text-[#FB8500]" // Use Tailwind color class directly
          title="We prioritize patient safety and well-being, with a focus on providing a stress-free and comfortable experience for patients and their families."
        />
      </div>

      {/* Vertical Line between Column 1 and Column 2 */}
      <div
        className="absolute top-0 left-1/2 w-px 2xl:w-[2px] sm:w-[2px] h-full sm:hidden"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #11B6E3 0%, rgba(17, 182, 227, 0) 100%)",
        }}
      ></div>
    </div>
  );
};

export default ServicesHight;

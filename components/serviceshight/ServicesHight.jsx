import React from "react";
import styles from "./ServicesHight.module.css";
import TwentyFour from "../../public/images/Homepage/ServicesIcon/24hour.png";
import Rapid from "../../public/images/Homepage/ServicesIcon/rapid.png";
import Safety from "../../public/images/Homepage/ServicesIcon/Safety.png";
import state from "../../public/images/Homepage/ServicesIcon/State.png";
import Image from "next/image";

const IconWithTitle = ({ icon, text, title, color }) => {
  return (
    <div
      className={`border-2 border-transparent bg-clip-padding flex items-center justify-between gap-4 p-4 rounded-lg`}
    >
      {/* Icon Container */}
      <div className="flex items-center justify-center h-24 w-24">
        <Image src={icon} alt={text} width={80} height={50} />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-baseline text-center">
        <div className={`font-barlow font-semibold text-2xl text-${color}`}>
          {text}
        </div>
        <div
          className="font-barlow font-normal text-lg
         text-gray-600 mt-5 flex justify-start max-w-[530px]"
        >
          {title}
        </div>
      </div>
    </div>
  );
};

const ServicesHight = () => {
  return (
    <div className="relative grid grid-cols-2 grid-rows-[auto,auto] p-0 bg-[#f5fdff] gap-0 px-20 py-10 gap-y-4 sm:grid-cols-1 ">
      {/* Row 1 */}
      <IconWithTitle
        icon={Rapid}
        text="Rapid Response Time"
        color="#11B6E3"
        title="Qwiklif Air Ambulance assures you of its quick response times and ensures that critical medical transport is initiated promptly."
      />
      <IconWithTitle
        icon={Safety}
        text="Safety First"
        color=": #00FF00"
        title="Qwiklif Medical tema undergo rigorous training, and our aircraft are regularly maintained to meet or exceed industry safety standards."
      />

      {/* Horizontal Line between Row 1 and Row 2 */}
      <div
        className="absolute left-0 top-1/2 w-full h-px"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #11B6E3 0%, rgba(17, 182, 227, 0) 100%)",
        }}
      ></div>

      {/* Row 2 */}
      <IconWithTitle
        icon={state}
        text="State-of-the-Art Equipment"
        color="#FF0000"
        title="Our air ambulances are equipped with State-of-the-art Medical equipment to provide advanced life support, ensuring the best possible care during transport."
      />
      <IconWithTitle
        icon={TwentyFour}
        text="Patient-Centric Approach"
        color="#FB8500"
        title="We prioritize patient Safety and well-being, with a focus on providing a stress-free and comfortable experience for patients and their families."
      />

      {/* Vertical Line between Column 1 and Column 2 */}
      <div
        className="absolute top-0 left-1/2 w-px h-full"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #11B6E3 0%, rgba(17, 182, 227, 0) 100%)",
        }}
      ></div>
    </div>
  );
};

export default ServicesHight;

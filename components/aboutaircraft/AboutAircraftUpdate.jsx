import React from "react";
import AboutData from "../../data/updateAboutUsSection.json";
import Image from "next/image";
import styles from "./AboutAircraftupdate.module.css";

const IconWithTitle = ({ icon, text, title }) => {
  return (
    <div
      className={`${styles.iconContainer} flex items-center justify-between gap-4 p-4 rounded-lg`} 
    >
      {/* Icon Container */}
      <div className="flex items-center justify-center h-24 w-24">
        <Image src={icon} alt={text} width={80} height={50} />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center text-center">
        <span className="font-barlowSemiBold text-4xl">{text}</span>
        <span className="font-barlowRegular text-xl text-gray-600">
          {title}
        </span>
      </div>
    </div>
  );
};

const AboutAircraftUpdate = () => {
  return (
    <div className="grid grid-cols-2 px-20 py-20">
      {/* Left Section and images  */}
      <div className="LeftSection">
        <div className="">{/* <Image src={} width={} height={}/> */}</div>
        <div className="">{/* <Image src={} width={} height={}/> */}</div>
      </div>
      {/*Right section and images  */}
      <div className="Rightsection flex justify-start flex-col">
        <div className="font-barlowSemiBold text-[20px]">About qwiklif</div>
        <div className="text-[#11B6E3] font-BarlowExtraBold text-[54px]">
          Fastest Air Ambulance Services.{" "}
        </div>
        <div className="font-barlowRegular text-[20px] font-normal leading-[44px] text-left text-[#1E1E1E]">
          Qwiklif Air Ambulance Service is your trusted partner for urgent
          International Air Ambulance service. With a dedicated team of skilled
          professionals and state-of-the-art aircraft, we specialize in swift
          and safe medical transfers. With over 15+ Professional Doctors and
          paramedics and access to air ambulance aircraft worldwide in 20+
          countries, Qwiklif Air Ambulance is ready for rapid response. We find
          the nearest aircraft available to you for quick response and
          affordable pricing. Compare air ambulance prices from other air
          operators across the world.
          <span className="block font-barlowRegular text-[20px] font-normal leading-[44px] mt-5">
            We are a worldwide air ambulance company in Dubai with emergency
            medical repatriation experience. Through our international air
            ambulance service, we can arrange quick, efficient medical
            repatriation flights worldwide to ensure you receive the topmost
            care in the sky and reach your destination safely.
          </span>
        </div>

        {/*this is table section */}
        <div className="grid grid-cols-2 grid-rows-2 gap-5 sm:grid-cols-1 mt-16 sm:mt-15">
          {AboutData.map((data) => {
            return (
              <IconWithTitle
                icon={data.icon}
                text={data.text}
                title={data.title}
              />
            );
          })}
        </div>
        {/*right Section and */}
        <div className="h-[70px] w-[240px] font-barlowSemiBold text-[28px] text-[#fff] bg-gradient-to-r from-[#0E98BE] to-[#11B6E3] rounded-lg text-center flex justify-center items-center cursor-pointer mt-10">
          Learn More
        </div>
      </div>
    </div>
  );
};

export default AboutAircraftUpdate;

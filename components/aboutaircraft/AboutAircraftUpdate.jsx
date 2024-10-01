import React from "react";
import AboutData from "../../data/updateAboutUsSection.json";
import Image from "next/image";
import styles from "./AboutAircraftupdate.module.css";
import Abouthero from "../../public/images/Homepage/aboutsSection/leftImages/about_hero_image.png";
import AboutTransfer from "../../public/images/Homepage/aboutsSection/leftImages/about_hero_transfer.png";
import Link from "next/link";
const IconWithTitle = ({ icon, text, title, textColor }) => {
  return (
    <div
      className={`${styles.iconContainer} border-2 border-transparent bg-clip-padding flex items-center justify-between gap-4 p-4 rounded-xl `} // Add shadow if needed for better visibility
    >
      {/* Icon Container */}
      <div className="flex items-center justify-center h-24 w-24 bg-[#f1fbfe] rounded-md px-2 py-2">
        <Image src={icon} alt={text} width={80} height={60} />{" "}
        {/* Updated height for better scaling */}
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center text-center">
        <span className={`font-barlow font-semibold text-4xl ${textColor}`}>
          {text}
        </span>
        <span className="font-barlow font-normal text-xl text-gray-600">
          {title}
        </span>
      </div>
    </div>
  );
};

const AboutAircraftUpdate = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 px-20 py-10 sm:px-10 sm:py-10">
      {/* Left Section and images */}
      <div className="flex flex-col items-center sm:items-start">
        <div className="flex flex-col space-y-4">
          <div className="w-full">
            <Image
              src={Abouthero}
              width={600}
              height={1800}
              className="object-cover rounded-lg" // Adjust object-fit for better responsiveness
              alt="About Transfer"
            />
          </div>
          <div className="w-full">
            <Image
              src={AboutTransfer}
              width={300}
              height={1400}
              className={`${styles.ImagesContainer} object-cover rounded-lg`} // Add object-cover for better scaling
              alt="About Hero"
            />
          </div>
        </div>
      </div>

      {/* Right section and images */}
      <div className="Rightsection flex justify-start flex-col">
        <div className="font-barlow font-semibold text-[20px]">
          About qwiklif
        </div>
        <div className="bg-headline-gradient text-transparent bg-clip-text font-barlow font-bold text-[54px]">
          Fastest Air Ambulance Services.
        </div>
        <div className="font-barlow font-normal text-[20px] leading-[44px] text-left text-[#1E1E1E]">
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

        {/* Table section */}
        <div className="grid grid-cols-2 grid-rows-2 gap-5 sm:grid-cols-1 mt-16 sm:mt-15">
          {AboutData.map((data, index) => {
            return (
              <div
                className={`flex flex-col ${index < 2 ? "justify-start" : "justify-end"} h-full`}
                key={index} // Unique key for each item
              >
                <IconWithTitle
                  icon={data.icon}
                  text={data.text}
                  title={data.title}
                  textColor={data.textColor} // Passing the textColor prop
                />
              </div>
            );
          })}
        </div>

        {/* Right Section button */}
        <div className="h-[70px] w-[240px] font-barlow font-semibold text-[28px] text-[#fff] bg-button-gradient rounded-lg text-center flex justify-center items-center cursor-pointer mt-10">
          <Link href="/about">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutAircraftUpdate;

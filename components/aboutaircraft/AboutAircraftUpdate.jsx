import React from "react";
import AboutData from "../../data/updateAboutUsSection.json";
import Image from "next/image";
import styles from "./AboutAircraftupdate.module.css";
import Abouthero from "../../public/images/Homepage/aboutsSection/leftImages/about_hero_image.png";
import AboutTransfer from "../../public/images/Homepage/aboutsSection/leftImages/about_hero_transfer.png";
import Link from "next/link";

// Reusable IconWithTitle component
const IconWithTitle = ({ icon, text, title, textColor }) => (
  <div
    className={`${styles.iconContainer} flex items-center justify-around gap-2 rounded-xl border-2 border-transparent bg-clip-padding `} // Add shadow if needed for better visibility
  >
    {/* Icon Container */}
    <div className="flex items-center justify-center h-24 w-24 bg-[#f1fbfe] rounded-md px-4 py-4">
      <Image src={icon} alt={text} width={80} height={60} />
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

const AboutAircraftUpdate = () => {
  return (
    <div className="container mx-auto px-20 py-10 grid grid-cols-2 gap-8 sm:grid-cols-1 sm:px-10 sm:py-8">
      {/* Left Section with Images */}
      <div className="flex flex-col items-start space-y-4">
        <div className="w-full">
          <Image
            src={Abouthero}
            width={600}
            height={2000}
            className="object-cover h-full rounded-lg"
            alt="About Hero"
          />
        </div>
        <div className="w-full">
          <Image
            src={AboutTransfer}
            width={600}
            height={2000}
            className="object-cover h-full rounded-lg"
            alt="About Transfer"
          />
        </div>
      </div>

      {/* Right Section with Content */}
      <div className="flex flex-col justify-start">
        {/* Heading Section */}
        <div className="font-barlow font-semibold text-2xl">About Qwiklif</div>
        <div className="bg-headline-gradient text-transparent bg-clip-text font-barlow font-bold text-[54px] leading-tight sm:text-[40px]">
          Fastest Air Ambulance Services.
        </div>
        <div className="font-barlow font-normal text-[20px] leading-[44px] text-[#1E1E1E]">
          Qwiklif Air Ambulance Service is your trusted partner for urgent
          International Air Ambulance service. With a dedicated team of skilled
          professionals and state-of-the-art aircraft, we specialize in swift
          and safe medical transfers. With over 15+ Professional Doctors and
          paramedics and access to air ambulance aircraft worldwide in 20+
          countries, Qwiklif Air Ambulance is ready for rapid response. We find
          the nearest aircraft available to you for quick response and
          affordable pricing. Compare air ambulance prices from other air
          operators across the world.
          <span className="block mt-5 font-barlowRegular">
            We are a worldwide air ambulance company in Dubai with emergency
            medical repatriation experience. Through our international air
            ambulance service, we can arrange quick, efficient medical
            repatriation flights worldwide to ensure you receive the topmost
            care in the sky and reach your destination safely.
          </span>
        </div>

        {/* Grid with Icon and Text (Data-driven) */}
        <div className="grid grid-cols-2 gap-5 mt-16 sm:grid-cols-1 sm:mt-10">
          {AboutData.map((data, index) => (
            <IconWithTitle
              key={index}
              icon={data.icon}
              text={data.text}
              title={data.title}
              textColor={data.textColor}
            />
          ))}
        </div>

        {/* Button to Learn More */}
        <div className="mt-10">
          <Link
            href="/about"
            className="h-[60px] w-[200px] sm:w-full font-barlow font-semibold text-2xl text-white bg-button-gradient rounded-lg flex justify-center items-center hover:shadow-lg transition duration-300 ease-in-out"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutAircraftUpdate;

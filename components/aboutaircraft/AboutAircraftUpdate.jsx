import React from "react";
import AboutData from "../../data/updateAboutUsSection.json";
import Image from "next/image";
import styles from "./AboutAircraftupdate.module.css";
import Abouthero from "../../public/images/Homepage/aboutsSection/leftImages/about_hero_image.png";
import AboutTransfer from "../../public/images/Homepage/aboutsSection/leftImages/about_hero_transfer.png";
const IconWithTitle = ({ icon, text, title }) => {
  return (
    <div
      className={`${styles.iconContainer} border-2 border-transparent bg-clip-padding flex items-center justify-between gap-4 p-4 rounded-lg`}
    >
      {/* Icon Container */}
      <div className="flex items-center justify-center h-24 w-24">
        <Image src={icon} alt={text} width={80} height={50} />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center text-center">
        <span className="font-barlow font-semibold text-4xl">{text}</span>
        <span className="font-barlow font-normal text-xl text-gray-600">
          {title}
        </span>
      </div>
    </div>
  );
};

const AboutAircraftUpdate = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-col-1 px-20 py-20">
      {/* Left Section and images  */}
      <div className="flex  flex-col">
        <div>
          <div className="">
            <Image src={AboutTransfer} width={600} height={1300} />
          </div>
          <div className="">
            <Image
              src={Abouthero}
              width={250}
              height={800}
              className={styles.ImagesContainer}
            />
          </div>
        </div>
      </div>
      {/*Right section and images  */}
      <div className="Rightsection flex justify-start flex-col">
        <div className="font-barlow font-semibold text-[20px]">
          About qwiklif
        </div>
        <div className="bg-headline-gradient text-transparent bg-clip-text font-barlow font-bold text-[54px]">
          Fastest Air Ambulance Services.{" "}
        </div>
        <div className="font-barlow font-normal text-[20px]  leading-[44px] text-left text-[#1E1E1E]">
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
        <div className="h-[70px] w-[240px] font-barlow font-semibold text-[28px] text-[#fff] bg-button-gradient rounded-lg text-center flex justify-center items-center cursor-pointer mt-10">
          Learn More
        </div>
      </div>
    </div>
  );
};

export default AboutAircraftUpdate;

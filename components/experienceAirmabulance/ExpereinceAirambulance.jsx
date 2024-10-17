import React from "react";
import ExpertDoctor from "../../public/images/experience/ExpertDoctor.png";
import FleetNetwork from "../../public/images/experience/FleetNetork.png";
import Global from "../../public/images/experience/Global.png";
import Patient from "../../public/images/experience/PatientTransfer.png";
import aeroIcon from "../../public/images/aeroplaneicon.svg";
import DoctorIcon from "../../public/images/trusted_contact/doctor.svg";
import GlobalIcon from "../../public/images/counter/globalIcon.svg";
import CostEffectIcon from "../../public/images/counter/CostEffective.svg";
import CostEffective from "../../public/images/counter/CostEffective.png";
import DoctorOnboard from "../../public/images/fleet_tabs/doctor_onboard.png";
import GlobalCoverage from "../../public/images/fleet_tabs/global_coverage.png";
import Biggest_fleet from "../../public/images/fleet_tabs/biggest_fleet.png";
import SelectionComponent from "@/components/selection/SelectionComponent";
import twentyIcon from "../../public/images/Homepage/experience/icon/24.png";
import BedIcon from "../../public/images/Homepage/experience/icon/bed.png";
import MoneyIcon from "../../public/images/Homepage/experience/icon/money.png";
import PlaneIcon from "../../public/images/Homepage/experience/icon/plane.png";
import WorldIcon from "../../public/images/Homepage/experience/icon/world.png";
import twentyFour from "../../public/images/Homepage/experience/Experience/24hour.png";
import Bedtobed from "../../public/images/Homepage/experience/Experience/Bedtobed.png";
import costEffective from "../../public/images/Homepage/experience/Experience/costEffective.png";
import fleetnetwork from "../../public/images/Homepage/experience/Experience/fleetnetwork.png";
import GlobalNetwork from "../../public/images/Homepage/experience/Experience/Global.png";
import { useState } from "react";
import Image from "next/image";
const ServicesCard = [
  { img: Patient.src, title: "450+", description: "Patient Transferred" },
  { img: FleetNetwork.src, title: "25+", description: "Fleet Network" },
  { img: ExpertDoctor.src, title: "15+", description: "Expert Doctor" },
  { img: Global.src, title: "7000+", description: "Global Affiliation" },
];

const ExperienceCard = ({ headline, description, backgroundImage }) => {
  return (
    <div
      className="flex justify-center items-center flex-col p-8 rounded-lg cursor-pointer"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%", // Adjust width
        height: "250px", // Adjust height as needed
        color: "#1E1E1E",
      }}
    >
      <div className="font-barlow font-semibold text-[64px] text-[#1E1E1E]">
        {headline}
      </div>
      <div className="font-barlow font-normal text-[30px] text-[#1E1E1E]">
        {description}
      </div>
    </div>
  );
};
const faqs = [
  {
    index: 1,
    title: "Bed to Bed Patient Transfer",
    icon: BedIcon,
  },
  {
    index: 2,
    title: "Biggest Fleet Network",
    icon: PlaneIcon,
  },
  {
    index: 3,
    title: "24x7 Doctors On Board",
    icon: twentyIcon,
  },
  {
    index: 4,
    title: "Global Coverage",
    icon: WorldIcon,
  },

  {
    index: 5,
    title: "Cost-Effective Solution",
    icon: MoneyIcon,
  },
];
const ChooseQwiklifButton = ({
  activeTab,
  setActiveTab,
  tabIndex,
  title,
  icon,
}) => {
  const isActive = activeTab === tabIndex;

  return (
    <button
      className={`h-[80px] px-4 bg-[#F7F7F7] mb-5 cursor-pointer flex items-center gap-8 sm:gap-4 hover:bg-[#19c0f0] rounded sm:w-full hover:text-white transition-colors duration-300 font-sans ${
        isActive ? "bg-[#19c0f0] text-white" : "text-[#1E1E1E]"
      }`}
      onClick={() => setActiveTab(tabIndex)}
    >
      <div className="bg-white rounded-full w-[55px] h-[55px] p-2 flex justify-center items-center">
        {/* Apply 'invert' and 'mix-blend-mode' to ensure icon color is #1E1E1E */}
        <Image
          src={icon}
          height={35}
          width={35}
          alt={title}
          className="filter"
          style={{
            filter:
              "invert(1) sepia(1) saturate(10000%) hue-rotate(180deg) brightness(0.3)",
          }}
        />
      </div>
      <div className="font-barlow  font-semibold text-[24px] sm:flex justify-end sm:text-base">
        {title}
      </div>
    </button>
  );
};

const ExpereinceAirambulance = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [hoveredTab, setHoveredTab] = useState(null);
  return (
    <div className="flex justify-center items-center flex-col px-20 py-10 md:px-10 sm:px-10">
      <div className="flex justify-center items-center flex-col px-20 md:px-10 sm:px-10">
        <div className="font-barlow font-normal text-[24px]">
          Why Choose Qwiklif
        </div>
        <div className="font-barlow font-bold text-[54px] bg-headline-gradient text-transparent bg-clip-text">
          Experience Exceptional Air Ambulance Services.
        </div>
        <div className="flex justify-center items-center px-10">
          <div className="font-barlow font-normal text-[24px] text-[#1E1E1E] mt-5  px-20 md:px-10 sm:px-5">
            Fly Fast and Safe with Qwiklif Air Ambulance. We have access to
            global hospitals, including the best medical team and
            state-of-the-art medical equipment across the globe.
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-10 gap-12 sm:grid-cols-1 items-start sm:items-center sm:flex justify-center sm:flex-col mt-20 sm:gap-4">
          {/* Sidebar with tabs */}
          <div className="col-span-3 sm:col-span-12 flex flex-col mb-5">
            {faqs.map(({ icon, index, title }) => (
              <ChooseQwiklifButton
                key={title + index}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                icon={icon}
                tabIndex={index}
                title={title}
                onMouseEnter={() => setHoveredTab(index)} // Track hover on tab
                onMouseLeave={() => setHoveredTab(null)} // Reset hover when cursor leaves
                isHovered={hoveredTab === index} // Check if the tab is currently hovered
              />
            ))}
          </div>

          {/* Content based on activeTab */}
          <div className="col-span-6 sm:col-span-12 sm:mb-10">
            {activeTab === 1 && (
              <SelectionComponent
                img={Bedtobed}
                title="Bed to Bed Patient Transfer"
                descripation="Qwiklif Air Ambulance offers Bed to Bed Patient Transfer service From the initial hospital bed to
the destination facility, our expert team handles every detail, providing safe and efficient
transportation. Trust us to manage every step, so your loved one receives uninterrupted medical
care throughout the entire transfer process."
              />
            )}
            {activeTab === 2 && (
              <SelectionComponent
                img={fleetnetwork}
                title="Biggest Fleet Network"
                descripation="With the largest fleet, Qwiklif can respond to emergencies quickly. Multiple aircraft options are
available to meet various medical requirements, providing an ideal option for all situations."
              />
            )}
            {activeTab === 3 && (
              <SelectionComponent
                img={twentyFour}
                title="24x7 Doctors on Board"
                descripation="We offer 24x7 Doctors on Call for immediate access to medical expertise. Our experienced
doctors are always available to provide critical advice, support, and care whenever needed.
Whether it’s a medical emergency or urgent guidance, our team is just a call away."
              />
            )}
            {activeTab === 4 && (
              <SelectionComponent
                img={GlobalNetwork}
                title="Global Coverage"
                descripation="We provide seamless global coverage, connecting you to the best medical facilities worldwide.
Whether you're in a bustling city or a remote area, our reach extends to every corner, making
quality healthcare accessible wherever you are."
              />
            )}
            {activeTab === 5 && (
              <SelectionComponent
                img={costEffective}
                title="Cost-Effective Solutions"
                descripation="We are committed to providing cost-effective air ambulance solutions without compromising on
the standard of care. We suggest different modes of transfer like commercial stretchers and
other customized transfer plans for making your medical flight cost-effective."
              />
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        {ServicesCard.map((data, index) => (
          <ExperienceCard
            key={index}
            headline={data.title}
            description={data.description}
            backgroundImage={data.img}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpereinceAirambulance;

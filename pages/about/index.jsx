import { useState } from "react";
import { useSpring, animated } from "react-spring";
import Trusted from "@/components/trusted/Trusted";
import CustomDatePicker from "@/components/date/CustomDatePicker";
import Aeroplane1 from "../../public/images/trusted_contact/aeroplane1.svg";
import DoctorIcon from "../../public/images/trusted_contact/doctor.svg";
import Champion from "../../public/images/trusted_contact/champion.svg";
import styles from "../../styles/page.module.css";
import style from "./About.module.css";
import Companygoals from "../../db/about.json";
import Aboutcard from "../../components/Utils/aboutcard/Aboutcard"; //Importing Aboutcard for company goals
import FloatingBox from "@/components/Utils/floatingBox/FloatingBox ";
import { aboutsList } from "@/utils/contants";
import { useRouter } from "next/router";
const About = () => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState(1);
  const [value, setValue] = useState("");

  function Number({ n, className }) {
    const { number } = useSpring({
      from: { number: 0 },
      to: { number: n },
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });

    return (
      <animated.div className={className}>
        {number.to((n) => n.toFixed(0))}
      </animated.div>
    );
  }

  const tasktab = [
    {
      img: Aeroplane1,
      title: "Express Lane to Care",
      description:
        "Time is precious, especially during emergencies. Our air ambulances are not just vehicles; they are a beacon of hope on the fastest route to medical assistance. We pride ourselves on a lightning-quick response that bridges the gap between distress and relief",
    },
    {
      img: DoctorIcon,
      title: "Innovation in Every Flight",
      description:
        "QwikLif Air Ambulance embraces cutting-edge medical technology. Think of our ambulances as flying hospitals, complete with state-of-the-art equipment. We're not just transporting patients; we're bringing a mobile medical unit to ensure the best care possible.",
    },
    {
      img: Champion,
      title: "Angels in the Air:",
      description:
        "Behind the wings of our aircraft are skilled and compassionate medical professionals. Our team is not just here to transport; they're here to comfort. From experienced paramedics to caring nurses, our crew turns a challenging journey into a voyage of support and expertise.",
    },
  ];

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSlideNavigation = (slug) => {
    router.push(`/about/${slug}`);
  };

  return (
    <div className="font-sans">
      <div className={`bg-black ${style.Image}   bg-black h-[400px] w-full`}>
        <div className=" font-[700] z-[100px] pl-[40px] relative  text-white">
          <p className="text-[50px]  pt-[150px] font-sans">About Us</p>
          <div className="flex pt-[30px] text-[20px]">
            <p className="text-[#C5D5FF] pr-[10px]">
              {"Air Ambulance Services >"}
            </p>
            <p className="font-sans font-bold">About us</p>
          </div>
        </div>
      </div>
      <div className="flex px-32 py-10 sm:px-5 sm:py-2 sm:flex-col">
        <div className="w-1/4 sm:w-full sm:overflow-x-auto">
          <ul className="w-full flex flex-col drop-shadow-xl bg-white sm:flex-row sm:items-center sm:h-[90px] sm:drop-shadow-2xl sm:overflow-x-auto sm:items-baseline">
            <li
              className={`px-5 text-sm py-4 border-b-2 h-[80px] cursor-pointer sm:px-2 sm:py-2 font-bold hover:text-[#fff] sm: ${
                activeTab === 1 ? styles.aboutPageMenuActive : ""
              }`}
              onClick={() => setActiveTab(1)}
            >
              Company Profile
            </li>
            <li
              className={`px-5 text-sm py-4 border-b-2 h-[80px] cursor-pointer sm:px-2 sm:py-2 font-bold hover:text-[#fff]  ${
                activeTab === 2 ? styles.aboutPageMenuActive : ""
              }`}
              onClick={() => setActiveTab(2)}
            >
              Mission and Vision
            </li>
            <li
              className={`px-5 text-sm py-4 border-b-2 h-[80px] cursor-pointer sm:px-2 sm:py-2 font-bold hover:text-[#fff]  ${
                activeTab === 3 ? styles.aboutPageMenuActive : ""
              }`}
              onClick={() => setActiveTab(3)}
            >
              Milestones
            </li>
            <li
              className={`px-5 text-sm py-4 border-b-2 h-[80px] cursor-pointer sm:px-2 sm:py-2 font-bold hover:text-[#fff]  ${
                activeTab === 4 ? styles.aboutPageMenuActive : ""
              }`}
              onClick={() => setActiveTab(4)}
            >
              Policies
            </li>
          </ul>
        </div>

        <div className="w-3/4 sm:pl-0 pl-12">
          {activeTab === 1 && (
            <div id="company_profile">
              <h2 className="font-bold text-xl uppercase mb-4">
                Company Profile
              </h2>
              <p className="font-Poppins font-light">
                About Qwiklif: An air ambulance company with give multiple
                choices of air ambulance cost which is closest to you, Qwiklif
                focuses on giving customer cost effective and safest patient
                transfer. Qwiklif is an air ambulance company which has wide
                network of aircraft fleet and professional intensivist to
                airlift the patient from anywhere in the world safely to the
                destination. Our Services <br />
                1. Dedicated air ambulance service: Fully equipped dedicated
                charter aircraft with stretcher configuration an best for
                patient transfer, We have largest network of air ambulance
                across the world to give you the best air ambulance cost -
                aircraft with ql image <br />
                2. Commercial Airline stretcher transfer Transferring patient in
                commercial airline is another best and cost effective option
                Commercial airline patient transfer works only if the patient is
                less on 4L of oxygen support - whatsapp <br />
                3. International Patient transfer Qwiklif offers International
                patient transfer service by dedicated air ambulance as well as
                commercial stretcher, Qwiklif takes care of all the
                documentation process for smooth transfer of patient. <br /> 4.
                ECMO Initiation and Air Transfer: Qwiklif Expert ECMO team,
                Initiate ECMO,stabilises patient and then transfer the patient
                on ECMO using air ambulance across the world <br /> 5. Neonatal
                and pediatric Air Transfer Qwiklif neonatal team excels in
                transferring critical babies from one place to another using
                dedicated air ambulance with advance medical equipments on board
              </p>
            </div>
          )}
          {activeTab === 2 && (
            <div id="mission">
              <h2 className="font-bold text-xl uppercase mb-4">
                Mission and Vision
              </h2>
              <p className="font-Poppins font-light">
                Our mission at Qwiklif is simple: to connect people in need of
                critical medical transportation with the best-equipped, fastest,
                and most cost-effective air ambulance services. We are driven by
                a passion for saving lives and ensuring that all patients
                receive the highest standard of care during their journey.
              </p>
            </div>
          )}
          {activeTab === 3 && (
            <div id="mmilestone">
              <h2 className="font-bold text-xl uppercase mb-4">Milestones</h2>
              <p className="font-Poppins font-light">
                The Qwiklif Difference What sets Qwiklif apart from the rest?
                It&apos;s <br />
                our unwavering commitment to excellence, our extensive global
                network, and our dedication to affordability. <br />
                1. Largest Global Network: We take pride in being the largest
                air ambulance provider with a vast network of aircraft spanning
                across the globe. Whether you&apos;re in a bustling metropolis
                or a remote corner of the world, we can reach you and get you to
                where you need to be. <br />
                2. Swift Response: Time is of the essence in critical medical
                situations. Our team is on standby 24/7, ready to respond to
                your call at a moment&apos;s notice.
                <br /> We understand the urgency of your situation, and we act
                accordingly.
                <br /> 3. Top-Notch Medical Expertise: Our medical teams consist
                of highly skilled professionals with vast experience in critical
                care. We provide comprehensive in-flight medical care to ensure
                the safety and well-being of our patients.
                <br /> 4. Cutting-Edge Aircraft: Qwiklif only utilizes
                state-of-the-art aircraft equipped with the latest medical
                technology. We spare no expense in making sure that our patients
                receive the best care possible during their journey. <br /> 5.
                Affordability:We understand the financial strain that medical
                emergencies can cause. Qwiklif is committed to offering the most
                competitive pricing in the industry. <br />
                We believe that every individual should have access to premium
                air ambulance services without the burden of excessive costs.
              </p>
            </div>
          )}
          {activeTab === 4 && (
            <div id="policies">
              <h2 className="font-bold text-xl uppercase mb-4">Policies</h2>
              <p className="font-Poppins font-light">
                Qwiklif is founded on a set of core values that guide our every
                action: - Compassion: We understand the stress and anxiety that
                come with a medical emergency.
                <br /> Our team approaches every case with empathy, compassion,
                and a deep commitment to relieving the burden on the patient and
                their family. - Integrity: We maintain the highest level of
                integrity in all our operations. <br /> You can trust us to
                provide transparent, honest, and ethical service, from the first
                call to the safe arrival at the destination. - Innovation: We
                are constantly evolving and embracing new technologies and
                medical advancements to improve patient care and transportation.
                Innovation is at the heart of what we do. - Global Reach: Our
                extensive global network enables us to assist patients from any
                corner of the world. We believe that distance should never be an
                obstacle to receiving the best medical care. - Affordability:
                We&apos;re <br />
                dedicated to making air ambulance services accessible to all by
                offering competitive pricing without compromising on quality.
                Your Trusted Air Ambulance Partner Qwiklif is more than just an
                air ambulance company.
                <br /> We are your trusted partner during the most challenging
                times. We are committed to redefining air ambulance services by
                providing unmatched quality, affordability, and global reach.
                When you choose Qwiklif, you&apos;re <br /> choosing excellence
                in medical transportation. Contact us today to learn more about
                our services and how we can assist you during a medical
                emergency.
                <br /> Qwiklif is here to provide the care and support you need
                when it matters most. Your safety and well-being are our top
                priorities.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5 sm:grid-cols-1 sm:gap-10 md:grid-cols-2 md:gap-2 mt-0 mb-10 px-[5%] sm:px-[2%] md:px-[3%]">
        {Companygoals.map((data, index) => {
          return (
            <Aboutcard
              title={data.title}
              key={index}
              descripation={data.descripation}
            />
          );
        })}
      </div>

      <div className="px-[5%] w-full grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10  cursor-pointer mt-10 mb-10">
        {aboutsList.map((data, index) => (
          <div
            key={index}
            className={`${style.SlideoverContainer} relative overflow-y-hidden`}
          >
            <img
              className="rounded-[5px] w-full"
              src={`${data.img}`}
              alt="Description of the image content"
            />
            <div
              className={`${style.Slideover} px-[25px]`}
              onClick={() => handleSlideNavigation(data?.slug)}
            >
              <p className="text-[18px] font-semibold py-[25px]">{data.head}</p>
              <p class={style.description}>{data.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center relative top-5">
        <FloatingBox className="shadow-cyan-400/100 shadow-2xl translate-y-0 transition duration-300 hover:scale-105 " />
      </div>
      <div
        className={`${styles.gray_plane} py-12 sm:px-3 px-36 w-full  sm:flex-col items-center grid grid-cols-12 gap-10 sm:grid-cols-1 `}
      >
        <div className="flex items-start flex-col col-span-7 sm:col-span-1  sm:px-7">
          <div className="text-[#a9b5bf] font-sans font-extrabold">
            QwikLif Air Ambulance
          </div>
          <div className="font-sans font-extrabold text-4xl text-white mt-1 mb-6">
            Your Trusted Global Air Ambulance <br /> Provider
          </div>
          {tasktab.map((data, index) => {
            return (
              <div key={"tasktab" + index} className="mb-3">
                <Trusted
                  img={data.img}
                  title={data.title}
                  descripation={data.description}
                />
              </div>
            );
          })}
        </div>

        <div className="bg-white flex flex-col items-start shadow-2xl rounded-lg col-span-5 sm:col-span-1 py-10 sm:px-6 px-12">
          <div className="flex flex-col items-start sm:w-full sm:items-center ">
            <h2 className="font-sans font-semibold text-3xl sm:text-2xl text-center">
              Get Quote Now
            </h2>
            <hr className="bg-[#11B6E3] h-[4px] w-[45px] mt-[20px]" />
          </div>

          <form className={`mt-[30px] w-full ${styles.form}`}>
            <div className="grid grid-cols-5 gap-3">
              <input
                type="text"
                value=""
                placeholder="From *"
                onChange={handleChange}
                className=" h-[50px] col-span-5 sm:col-span-5  rounded-md  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
              />

              <input
                type="text"
                value=""
                placeholder="To *"
                onChange={handleChange}
                className=" rounded-md  col-span-5 sm:col-span-5 !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <input
                type="text"
                value=""
                placeholder="Phone *"
                onChange={handleChange}
                className="h-[50px]  col-span-2 sm:col-span-5 sm:w-full rounded-md  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <input
                type="text"
                value=""
                placeholder="E-mail*"
                onChange={handleChange}
                className=" h-[50px]  col-span-3 sm:col-span-5 sm:w-full rounded-md  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
              />

              <CustomDatePicker
                containerClass="col-span-3 sm:col-span-5"
                ClassName="h-[50px] rounded-md  !border w-full !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <input
                type="text"
                value=""
                placeholder="Time*"
                onChange={handleChange}
                className="h-[50px] col-span-2 sm:col-span-5 rounded-md !border !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <div className="col-span-5">
                <button
                  className={`${styles.boxShado} w-full h-[50px] bg-[#19c0f0] rounded-[4px] mt-[25px] font-semibold text-[15px] leading-[22.5px] text-white hover:bg-[#19c0f0] shadow-lg shadow-[#81e0fa]`}
                >
                  Get Quote
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;

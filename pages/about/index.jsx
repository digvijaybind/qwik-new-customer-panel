import { useState, useEffect } from 'react';
import styles from '../../styles/page.module.css';
import style from './About.module.css';
import { Raleway } from 'next/font/google';

import { FaPlane } from 'react-icons/fa';
import { FaUserDoctor, FaTrophy } from 'react-icons/fa6';
import { useSpring, animated } from 'react-spring';
const raleway = Raleway({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});
const About = () => {
  const [activeTab, setActiveTab] = useState(1);

  function Number({ n, className }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      // to: { opacity: 1 },
      config: { mass: 1, tension: 20, friction: 10 },
    });

    return (
      <animated.div className={className}>
        {number.to((n) => n.toFixed(0))}
      </animated.div>
    );
  }
  
  const abouts = [
    {
      img: '/images/about1.jpg',
      head: 'Affordability',
      text: 'We understand the financial strain that medical emergencies can cause. Qwiklif is committed to offering the most competitive pricing in the industry. We believe that every individual should have access to premium air ambulance services without the burden of excessive costs.',
    },
    {
      img: '/images/about2.png',
      head: 'Cutting-Edge Aircraft',
      text: 'Qwiklif only utilizes state-of-the-art aircraft equipped with the latest medical technology. We spare no expense in making sure that our patients receive the best care possible during their journey.',
    },
    {
      img: '/images/about3.png',
      head: 'Largest Global Network',
      text: 'We have the largest air ambulance provider with a vast network of aircraft spanning across the globe. Whether you’re in a bustling metropolis or a remote corner of the world, we can reach you and get you to where you need to be.',
    },
    {
      img: '/images/about4.jpg',
      head: 'Swift Response',
      text: 'Time is of the essence in critical medical situations. Our team is on standby 24/7, ready to respond to your call at a moment’s notice. We understand the urgency of your situation, and we act accordingly.',
    },
    {
      img: '/images/about5.png',
      head: 'Top-Notch Medical Expertise',
      text: 'Our medical teams consist of highly skilled professionals with vast experience in critical care. We provide comprehensive in-flight medical care to ensure the safety and well-being of our patients',
    },
  ];
  return (
    <div className={`${raleway.className}`}>
      <div className={`bg-black ${style.Image}   bg-black h-[400px] w-full`}>
        <div className=" font-[700] z-[100px] pl-[40px] relative  text-white">
          <p className="text-[50px]  pt-[150px]">About Us</p>
          <div className="flex pt-[30px] text-[20px]">
            <p className="text-[#C5D5FF] pr-[10px]">
              {'Air Ambulance Services >'}
            </p>
            <p>About us</p>
          </div>
        </div>
      </div>
      <div className="flex px-32 py-16">
        <div className="w-1/4">
          <ul className="w-full flex flex-col drop-shadow-xl bg-white">
            <li
              className={`px-5 text-sm font-medium py-4 border-b-2 cursor-pointer ${
                activeTab === 1 ? styles.aboutPageMenuActive : ''
              }`}
              onClick={() => setActiveTab(1)}
            >
              Company Profile
            </li>
            <li
              className={`px-5 text-sm font-medium py-4 border-b-2 cursor-pointer ${
                activeTab === 2 ? styles.aboutPageMenuActive : ''
              }`}
              onClick={() => setActiveTab(2)}
            >
              Mission and Vision
            </li>
            <li
              className={`px-5 text-sm font-medium py-4 border-b-2 cursor-pointer ${
                activeTab === 3 ? styles.aboutPageMenuActive : ''
              }`}
              onClick={() => setActiveTab(3)}
            >
              Milestones
            </li>
            <li
              className={`px-5 text-sm font-medium py-4 border-b-2 cursor-pointer ${
                activeTab === 4 ? styles.aboutPageMenuActive : ''
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
              <p className="text-sm">
                About Qwiklif: An air ambulance company with give multiple
                choices of air ambulance cost which is closest to you,
                <br /> Qwiklif focuses on giving customer cost effective and
                safest patient transfer. Qwiklif is an air ambulance company
                which has wide network of aircraft fleet and professional
                intensivist to airlift the patient from anywhere in the world
                safely to the destination. Our Services <br />
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
              <p className="text-sm">
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
              <p className="text-sm">
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
              <p className="text-sm">
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
          <div className="mt-[30px] flex ">
            <div className={`w-[45%] mr-[30px] ${style.Aboutsub}`}>
              <img
                src="https://qwiklif.com/wp-content/uploads/2019/01/20-1-1-630x408.jpg"
                alt=""
              />
              <img
                className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
                src="https://qwiklif.com/wp-content/themes/medilink/assets/img/play.png"
                alt=""
              />
            </div>
            <div className="w-[45%] flex items-center justify-center border-[#ccc] border-[1px] rounded-[5px]">
              <div className="flex items-start">
                <img
                  src="https://qwiklif.com/wp-content/uploads/2018/11/figure6.png"
                  alt=""
                  className="mr-[20px]"
                />
                <div>
                  <p className="text-[#111]  font-bold text-[24px]">
                    Emergency Cases
                  </p>
                  <p className="text-[18px]">+971 5028 25 433</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[5%] w-[100%] flex flex-wrap">
        {abouts.map((data, i) => (
          <div
            key={i}
            className="w-[30%] mr-[3%]  mb-[30px]  overflow-y-hidden relative"
          >
            <img className="rounded-[5px]" src={`${data.img}`} alt="" />
            <div className={`${style.Slideover} px-[25px]`}>
              <p className="text-[20px] font-semibold py-[20px]">{data.head}</p>
              <p>{data.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="px-[5%] mb-[30px] w-[100%] flex justify-between">
        <div className="w-[20%] flex flex-col items-center text-center">
          <img src="/images/ab1.png" alt="" />
          <div className="flex items-center">
            <Number n={450} className={'font-bold text-[40px]'}></Number>
            <p className="text-[30px]">+</p>
          </div>

          <p>Air Transfer</p>
        </div>
        <div className="w-[20%] flex flex-col items-center text-center">
          <img src="/images/ab2.png" alt="" />
          <div className="flex items-center">
            <Number n={25} className={'font-bold text-[40px]'}></Number>
            <p className="text-[30px]">+</p>
          </div>
          <p>No of Fleet</p>
        </div>
        <div className="w-[20%] flex flex-col items-center text-center">
          <img src="/images/ab3.png" alt="" />
          <div className="flex items-center">
            <Number n={15} className={'font-bold text-[40px]'}></Number>
            <p className="text-[30px]">+</p>
          </div>

          <p>Doctors</p>
        </div>
        <div className="w-[20%] flex flex-col items-center text-center">
          <img src="/images/ab4.png" alt="" />
          <div className="flex items-center">
            <Number n={7000} className={'font-bold text-[40px]'}></Number>
            <p className="text-[30px]">+</p>
          </div>

          <p>Global Affiliation</p>
        </div>
      </div>
      <div className={`${style.Aboutdown} px-[5%] py-[40px]`}>
        <div className="relative z-[1000]">
          <p className="text-[#A9B5BF] mt-[40px]">Qwiflif Air Ambulance</p>
          <p className="text-[30px] py-[20px] font-bold text-white">
            Your Trusted Global Air Ambulance Provider
          </p>
        </div>
        <div className="flex mt-[30px]">
          <div className="relative  w-[60%] mr-[30px]">
            <div className="flex mb-[30px]">
              <div className=" mr-[50px] relative  p-[10px] rounded-[50%]  border-white">
                <div className="p-[20px] bg-[#396CF0] rounded-[50%]">
                  <FaPlane className=" text-[40px]   text-white    " />
                </div>
              </div>
              <div>
                <p className="text-white font-bold text-[25px]">
                  Express Lane to Care
                </p>
                <p className="text-[#A9B5BF] text-[18px] font-semibold">
                  Time is precious, especially during emergencies. Our air
                  ambulances are not just vehicles; they are a beacon of hope on
                  the fastest route to medical assistance. We pride ourselves on
                  a lightning-quick response that bridges the gap between
                  distress and relief
                </p>
              </div>
            </div>
            <div className="flex mb-[30px]">
              <div className=" mr-[50px] relative  p-[10px] rounded-[50%]  border-white">
                <div className="p-[20px] bg-[#396CF0] rounded-[50%]">
                  <FaUserDoctor className=" text-[40px]   text-white    " />
                </div>
              </div>
              <div>
                <p className="text-white text-bold text-[25px]">
                  Innovation in Every Flight
                </p>
                <p className="text-[#A9B5BF] text-[18px] font-semibold">
                  {`
                  QwikLif Air Ambulance embraces cutting-edge medical
                  technology. Think of our ambulances as flying hospitals,
                  complete with state-of-the-art equipment. We're not just
                  transporting patients; we're bringing a mobile medical unit to
                  ensure the best care possible.`}
                </p>
              </div>
            </div>
            <div className="flex">
              <div className=" mr-[50px] relative  p-[10px] rounded-[50%]  border-white">
                <div className="p-[20px] bg-[#396CF0] rounded-[50%]">
                  <FaTrophy className=" text-[40px]   text-white    " />
                </div>
              </div>
              <div>
                <p className="text-white text-bold text-[25px]">
                  Angels in the Air:
                </p>
                <p className="text-[#A9B5BF] text-[18px] font-semibold">
                  {`
                 Behind the wings of our aircraft are skilled and compassionate medical professionals. Our team is not just here to transport; they're here to comfort. From experienced paramedics to caring nurses, our crew turns a challenging journey into a voyage of support and expertise.`}
                </p>
              </div>
            </div>
          </div>

          <div className="w-[40%] relative  bg-white rounded-[10px] py-[20px] px-[25px]">
            <h2 className="text-[#111] font-bold text-[25px] mb-[30px] mt-[20px]">
              Get Quote Now
            </h2>
            <input
              type="text"
              className="outline-0 border-[1px] border-[#eee] w-[100%] text-[18px] pl-[10px] py-[7px] rounded-[5px] mb-[30px]"
              placeholder="From"
            />
            <input
              type="text"
              className="outline-0 border-[1px] border-[#eee] w-[100%] text-[18px] pl-[10px] py-[7px] rounded-[5px] mb-[30px]"
              placeholder="To"
            />

            <div className="flex justify-between">
              <input
                type="text"
                className="outline-0 border-[1px] border-[#eee] w-[48%] text-[18px] pl-[10px] py-[7px] rounded-[5px] mb-[30px]"
                placeholder="Phone No"
              />

              <input
                type="text"
                className="outline-0 border-[1px] border-[#eee] w-[48%] text-[18px] pl-[10px] py-[7px] rounded-[5px] mb-[30px]"
                placeholder="Email"
              />
            </div>
            <div className="flex justify-between">
              <input
                type="date"
                className="outline-0 border-[1px] border-[#eee] w-[48%] text-[18px] pl-[10px] py-[7px] rounded-[5px] mb-[20px]"
                placeholder=""
              />

              <input
                type="text"
                className="outline-0 border-[1px] border-[#eee] w-[48%] text-[18px] pl-[10px] py-[7px] rounded-[5px] mb-[20px]"
                placeholder="Time"
              />
            </div>
            <button className="text-center text-[18px] shadow-lg font-bold mt-[40px] py-[7px] w-[100%] text-white rounded-[5px] bg-[#396CF0]">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

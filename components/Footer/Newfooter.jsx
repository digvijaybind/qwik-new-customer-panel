import React from 'react';
import Phone from '../../public/images/Phone.svg';
import Mail from '../../public/images/Mail.svg';
import Image from 'next/image';
import Logo from '../../public/images/logo.svg';
import Linkedin from '../../public/images/socialmedia/linkedin.svg';
import Insta from '../../public/images/socialmedia/Insta.svg';
import Tiktok from '../../public/images/socialmedia/tiktok.svg';
import Twitter from '../../public/images/socialmedia/Twitter.svg';
import Facebook from '../../public/images/socialmedia/facebook.svg';
import Link from 'next/link';
import { StyledSection } from '../shared';

const QwiklifData = [
  { name: 'About us', link: '/about' },
  { name: 'Media', link: '/media' },
  { name: 'Services', link: '/services' },
  { name: '', link: '/workWithus' },
  { name: 'Our doctors', link: '/doctors' },
  { name: 'Blog', link: '/blogs' },
  { name: 'Our Location', link: '/location' },
  { name: 'Contact us', link: '/contact-us' },
];

const ServiceData = [
  'Neonatal & Pediatric Air transfer',
  'ECMO initiation and Air transfer Services',
  'Commericial Airline Stretcher',
  'International Patient Air Transfer',
  'Dedicated Air Ambulance',
];
const LocationData = [
  'Middle East (MENA)',
  'United States',
  'Africa',
  'Asia',
  'Europe',
  'North America',
  'South America',
];
const WorkWithQwiklif = [
  {
    Name: "For Aviation firm's /Aircraft Operators",
    Link: '',
  },
  {
    Name: "For Hospital's",
    Link: '',
  },
  {
    Name: "For Hospital's",
    Link: '',
  },
];
const FleetData = ['Challenger 605', 'B200', 'Learjet 45'];

const Newfooter = () => {
  return (
    <StyledSection
      containerClassName="bg-[#0f2738]"
      className="sm:!px-[20px] pt-14 pb-8 font-sans  hover:text-[#3788d8] font-sans"
    >
      {/* <div className="bg-[#0f2738] px-[90px] sm:px-[20px] pt-14 pb-8 font-sans  hover:text-[#3788d8]"> */}
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 3xl:grid-cols-5 gap-4 lg:gap-6 content-center">
        <div className="flex flex-col content-center">
          <div className="text-white cursor-pointer  font-sans text-xl content-center font-medium">
            Qwiklif
          </div>
          <hr className="h-0.5 mt-2 mb-4 border-none bg-slate-600 w-12 rounded-md" />
          {QwiklifData.map((data, index) => {
            return (
              <Link href={data.link} key={index}>
                <div
                  className="text-[15px] text-[#fff] cursor-pointer mb-1 mt-1 content-center hover:text-[#3788d8]"
                  key={'qwiklif-' + index}
                >
                  {data.name}
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col content-center">
          <div className="text-white cursor-pointer  font-sans text-xl content-center font-medium">
            Fleet
          </div>
          <hr className="h-0.5 mt-2 mb-4 border-none bg-slate-600 w-12 rounded-md" />
          {FleetData.map((data, index) => {
            return (
              <div
                className="text-[15px] text-[#fff] cursor-pointer font-Inter mb-1 mt-1 content-center hover:text-primary"
                key={'fleetdata-' + index}
              >
                {data}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col content-center">
          <div className="text-white cursor-pointer  font-Inter text-xl content-center font-medium">
            Our Services
          </div>
          <hr className="h-0.5 mt-2 mb-4 border-none bg-slate-600 w-12 rounded-md" />
          {ServiceData.map((data, index) => {
            return (
              <div
                className="text-[15px] text-[#fff] cursor-pointer Font-Inter mb-1 mt-1 content-center hover:text-primary"
                key={'servicedata-' + index}
              >
                {data}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col content-center">
          <div className="text-white cursor-pointer  font-sans text-xl content-center font-medium">
            Location&apos;s
          </div>
          <hr className="h-0.5 mt-2 mb-4 border-none bg-slate-600 w-12 rounded-md" />
          {LocationData.map((data, index) => {
            return (
              <div
                className="text-[15px] text-[#fff] cursor-pointer mb-1 mt-1  Font-Inter content-center hover:text-[#3788d8]"
                key={'locationdata-' + index}
              >
                {data}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col content-center items-baseline sm:items-start md:items-start">
          <div className="text-white cursor-pointer  font-sans text-xl content-center font-medium">
            Qwiklif Air Ambulance
          </div>
          <hr className="h-0.5 mt-2 mb-4 border-none bg-slate-600 w-12 rounded-md" />
          <div className="text-[15px] text-[#fff] font-Inter cursor-pointer sm:ml-0 md:ml-0 mb-2">
            Qwiklif Air Ambulance, Warehouse No.3 - Al Qusais Industrial Area 3
            - Dubai
          </div>
          <div className="flex flex-row sm:flex sm:items-center sm:justify-center">
            <Image src={Phone} height={30} width={30} />
            <span className="text-[15px] text-[#fff] ml-4 cursor-pointer sm:ml-0 mb-2 hover:text-[#3788d8] sm:text-[15px] sm:mb-0 sm:ml-2">
              <a href=" +971 50 282 5433 text-[20px] font-extrabold hover:text-[#3788d8] font-Inter">
                +971 50 282 5433
              </a>
            </span>
          </div>
          <div className=" flex flex-row">
            <Image src={Mail} height={30} width={30} />
            <span className="text-[15px] text-[#fff] ml-4 cursor-pointer hover:text-[#3788d8] font-Inter">
              <a href="mailto:info@qwiklif.com">info@qwiklif.com</a>
            </span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-center flex-col items-center  font-sans pt-8 pb-4 sm:pt-[20px] sm:pb-[20px]">
        <Image src={Logo} height={53} width={150} className="cursor-pointer" />
        <div className="font-thin text-[14px] text-[#fff] mt-2 mb-2  font-sans hover:text-[#3788d8] font-Inter">
          © 2024 Qwiklif. All rights reserved.{' '}
        </div>
        <div className="grid grid-cols-5 gap-5">
          <Link
            href="https://www.linkedin.com/company/qwiklif-air-ambulance-service/"
            target="_blank"
          >
            <Image
              src={Linkedin}
              height={35}
              width={35}
              className="cursor-pointer rounded-full object-center"
            />
          </Link>
          <Image
            src={Insta}
            height={35}
            width={35}
            className="cursor-pointer rounded-full object-center"
          />
          <Image
            src={Tiktok}
            height={35}
            width={35}
            className="cursor-pointer rounded-full object-center"
          />
          <Image
            src={Twitter}
            height={35}
            width={35}
            className="cursor-pointer rounded-full object-center"
          />
          <Image
            src={Facebook}
            height={35}
            width={35}
            className="cursor-pointer rounded-full object-center"
          />
        </div>
      </div>
      {/* </div> */}
    </StyledSection>
  );
};

export default Newfooter;

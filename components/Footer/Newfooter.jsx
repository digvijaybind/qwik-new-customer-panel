import React from "react";
import styles from "./newFooter.module.css";
import Phone from "../../public/images/Phone.svg";
import Mail from "../../public/images/Mail.svg";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import Linkedin from "../../public/images/socialmedia/linkedin.svg";
import Insta from "../../public/images/socialmedia/Insta.svg";
import Tiktok from "../../public/images/socialmedia/tiktok.svg";
import Twitter from "../../public/images/socialmedia/Twitter.svg";
import Facebook from "../../public/images/socialmedia/facebook.svg";
const QwiklifData = [
  "About us",
  "Fleet",
  "Media",
  "Services",
  "Contact us",
  "OurLocation",
  "Blog",
];

const ServiceData = [
  "Neonatal & Pediatric Air transfer",
  "ECMO initiation and Air transfer Services",
  "Commericial Airline Stretcher",
  "International Patient Air Transfer",
  "Dedicated Air Ambulance",
];
const LocationData = [
  "Air Ambulance in UAE",
  "Air Ambulance in India",
  "Air Ambulance in UK",
  "Air Ambulance in singapore",
];
const FleetData = ["Challenger 605", "B200", "Learjet 45"];
const Newfooter = () => {
  return (
    <div class="bg-[#111111] px-[100px] pt-8 mb-2 font-PoppinsRegular">
      <div class="grid grid-cols-5 gap-2 content-center sm:grid-cols-2">
        <div class="flex flex-col content-center">
          <div class="text-white cursor-pointer content-center font-PoppinsSemiBold font-semibold text-[20px]">
            Qwiklif
          </div>
          {QwiklifData.map((data) => {
            return (
              <div class="text-[15px] text-[#fff] cursor-pointer mb-1 mt-1 content-center">
                {data}
              </div>
            );
          })}
        </div>
        <div class="flex flex-col content-center">
          <div class="text-white cursor-pointer font-PoppinsSemiBold text-[15px] content-center font-semibold">
            Fleet
          </div>
          {FleetData.map((data) => {
            return (
              <div class="text-[15px] text-[#fff] cursor-pointer mb-1 mt-1 content-center">
                {data}
              </div>
            );
          })}
        </div>
        <div class="flex flex-col content-center">
          <div class="text-white cursor-pointer font-PoppinsSemiBold text-[15px] content-center font-semibold">
            Our Services
          </div>
          {ServiceData.map((data) => {
            return (
              <div class="text-[15px] text-[#fff] cursor-pointer mb-1 mt-1 content-center">
                {data}
              </div>
            );
          })}
        </div>
        <div class="flex flex-col content-center">
          <div class="text-white cursor-pointer font-PoppinsSemiBold text-[15px]">
            {" "}
            Our Locations
          </div>
          {LocationData.map((data) => {
            return (
              <div class="text-[15px] text-[#fff] cursor-pointer mb-1 mt-1 content-center">
                {data}
              </div>
            );
          })}
        </div>
        <div class="flex flex-col content-center items-baseline">
          <div class="text-white cursor-pointer font-PoppinsSemiBold text-[15px] content-center font-semibold ">
            Qwiklif Air Ambulance
          </div>
          <div class="text-[15px] text-[#fff] ml-4 cursor-pointer">
            Qwiklif Air Ambulance, Warehouse No.3 - Al Qusais Industrial Area 3
            - Dubai
          </div>
          <div class="flex flex-row">
            <Image src={Phone} height={30} width={30} />
            <span class="text-[15px] text-[#fff] ml-4 cursor-pointer">
              <a href=" +971 50 282 5433">+971 50 282 5433</a>
            </span>
          </div>
          <div class=" flex flex-row">
            <Image src={Mail} height={30} width={30} />
            <span class="text-[15px] text-[#fff] ml-4 cursor-pointer">
              <a href="mailto:info@qwiklif.com">info@qwiklif.com</a>
            </span>
          </div>
        </div>
      </div>
      <div class="flex justify-center flex-col items-center font-PoppinsRegular">
        <Image src={Logo} height={53} width={150} class="cursor-pointer" />
        <div class="font-thin text-[16px] text-[#fff] mt-2 mb-2 font-PoppinsRegular">
          © 2024 Qwiklif. All rights reserved.{" "}
        </div>
        <div class="grid grid-cols-5 gap-5">
          <Image src={Linkedin} height={30} width={30} class="cursor-pointer" />
          <Image src={Insta} height={30} width={30} class="cursor-pointer" />
          <Image src={Tiktok} height={30} width={30} class="cursor-pointer" />
          <Image src={Twitter} height={30} width={30} class="cursor-pointer" />
          <Image src={Facebook} height={30} width={30} class="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Newfooter;

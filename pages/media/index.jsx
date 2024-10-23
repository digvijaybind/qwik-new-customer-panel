"use client";
import React from "react";
import Airtransfer from "../../public/images/media/airtransfer.jpg";
import Ambulance from "../../public/images/media/ambulance.jpg";
import beechcraft from "../../public/images/media/beechcraft-b200-flying.jpg";
import challenger from "../../public/images/media/challenger-605-flying.jpg";
import doctor from "../../public/images/media/doctor.jpg";
import helicaptor from "../../public/images/media/helicaptor.svg";
import learjet from "../../public/images/media/learjet.jpg";
import operation from "../../public/images/media/operation.jpg";
import machine from "../../public/images/media/machine.jpg";
import airpatience from "../../public/images/media/airpatience.jpg";
import strectre from "../../public/images/media/strectre.jpg";
import human from "../../public/images/media/human.jpg";
import qwiklif1 from "../../public/images/qwiklif1.jpg";
import qwiklif2 from "../../public/images/qwiklif2.jpg";
import qwiklif3 from "../../public/images/qwiklif3.jpg";
import qwiklif4 from "../../public/images/qwiklif4.jpg";
import qwiklif5 from "../../public/images/qwiklif5.jpg";
import qwiklif6 from "../../public/images/qwiklif6.jpg";
import qwiklif7 from "../../public/images/qwiklif7.jpg";
import qwiklif8 from "../../public/images/qwiklif8.jpg";
import qwiklif9 from "../../public/images/qwiklif9.jpg";
import qwiklif10 from "../../public/images/qwiklif10.jpg";
import qwiklifimage3 from "../../public/images/qwiklifimage3.jpg";
import Image from "next/image";
import PageStepper from "@/components/pagestepper/PageStepper";

const MediaCollaspe = ({ image1, image2 }) => {
  return (
    <div className="flex flex-row cursor-pointer">
      <Image
        src={image1}
        width={371}
        height={418}
        alt="QwikLif Image 1"
        className=""
      />
      <Image
        src={image2}
        width={371}
        height={418}
        alt="QwikLif Image 2"
        className="ml-2"
      />
    </div>
  );
};
const MediaUpdate = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center justify-center font-sans bg-no-repeat bg-cover bg-center text-white 
  sm:h-[20vh] h-[70vh] sm:px-10 px-36 relative overflow-hidden "
        style={{
          backgroundImage:
            " url('/images/location/Hero.svg')",
          backgroundSize: "cover", // Ensures the entire container is covered
          backgroundPosition: "center", // Centers the image within the container
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
        }}
      >
        <div className="flex flex-col items-center relative z-10">
          <div className="font-barlow font-bold text-[64px]">Media</div>
          <div className="font-barlow font-normal text-[24px]">
            Home - Media
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
        {/* Optional overlay */}
      </div>

      <div className="px-10 py-10 flex flex-col">
        <div className="flex justify-center">
          <div className="font-barlow text-[54px] font-bold bg-headline-gradient text-transparent bg-clip-text mb-2">
            Our Recent Transfer
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-4 gap-x-8 gap-y-8">
          <MediaCollaspe image1={qwiklif1} image2={qwiklif2} />
          <MediaCollaspe image1={Airtransfer} image2={Ambulance} />
          <MediaCollaspe image1={qwiklif3} image2={qwiklif4} />
          <MediaCollaspe image1={qwiklif5} image2={qwiklif6} />
          <MediaCollaspe image1={qwiklif7} image2={qwiklif8} />
          <MediaCollaspe image1={qwiklif9} image2={qwiklif10} />
          <MediaCollaspe image1={doctor} image2={helicaptor} />
          <MediaCollaspe image1={learjet} image2={operation} />
          <MediaCollaspe image1={airpatience} image2={strectre} />
          <MediaCollaspe image1={qwiklif1} image2={qwiklif2} />
          <MediaCollaspe image1={qwiklif1} image2={qwiklif2} />
        </div>
      </div>
      <div className="mb-5">
        <PageStepper minStep={1} maxStep={5} />
      </div>
    </div>
  );
};

export default MediaUpdate;

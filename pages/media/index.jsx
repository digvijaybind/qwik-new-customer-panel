"use client";
import MediaSection from "@/components/media/MediaSection";
import React from "react";

const LocationHeader = () => {
  return (
    <div
      className="flex flex-col items-start justify-center font-sans bg-no-repeat bg-cover bg-center text-white sm:h-[20vh] h-[60dvh] sm:px-10 px-36"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.3)), url('/images/slider/1.png')",
      }}
    >
      <h2 className="sm:text-3xl text-[2.2rem] font-extrabold mb-0.5 drop-shadow">
        Our Gallery
      </h2>
      <p className="font-medium text-xl">
        <span className="text-primary/80">
          Air Ambulance Services &nbsp;&nbsp;&gt;&nbsp;&nbsp;
        </span>{" "}
        Our Gallery
      </p>
    </div>
  );
};
const Media = () => {
  return (
    <div>
      <LocationHeader />

      <div className="px-[50px] py-[30px] font-sans mt-5">
        <MediaSection />
      </div>
    </div>
  );
};

export default Media;

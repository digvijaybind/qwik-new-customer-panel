import React from "react";
import locationCountriesUpdate from "../../data/locationCountriesUpdate.json";
import Link from "next/link";

const LoactionUpdate = () => {
  return (
    <div className="mx-20  sm:px-10 sm:mx-0">
      <div className="flex justify-center items-center flex-col p-8">
        {/* Heading Section */}
        <div className="font-barlow font-semibold text-[24px] text-[#1E1E1E] mb-2">
          Our Locations
        </div>
        <div className="bg-headline-gradient text-transparent bg-clip-text text-[54px] font-barlow font-bold text-center mb-8">
          Where We Operate: Your Trusted Partner Worldwide
        </div>
        {/* Card Slider */}
        <div className="w-full max-w-7xl px-4 grid grid-cols-4 sm:grid-cols-1 lg:grid-cols-3 gap-4">
          {locationCountriesUpdate?.map((d) => {
            return (
              <div
                className="aspect-[16/12] shadow-md rounded-md font-sans transition-transform duration-300 transform hover:scale-105"
                key={d?.country}
              >
                <div className="w-full h-full relative flag-wrapper">
                  <div
                    className="w-full h-full bg-cover bg-top text-white flex items-center justify-center flag-card transition-all duration-700 front rounded-lg"
                    style={{
                      backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/${d?.flagImage}')`,
                    }}
                  >
                    <div className="flex flex-col justify-center items-center uppercase text-center">
                      <div className="font-barlow font-semibold">
                        Air Ambulance in
                      </div>
                      <span className="font-barlow font-extrabold">
                        {d?.country}
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-full bg-cover bg-top text-white flex flex-col items-center justify-center flag-card transition-all duration-700 back bg-primary p-3 gap-3 sm:h-full">
                    <p className="font-semibold uppercase text-black text-center">
                      Air Ambulance in {d?.country}
                    </p>
                    <p className="text-center text-sm">
                      Welcome to Qwiklif Air Ambulance, your trusted partner in
                      medical emergency transportation. As a leading provider of
                      ..
                    </p>
                    <Link
                      className="mt-3 px-5 py-2 border border-white rounded-md text-sm sm:mt-1"
                      href="/country"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* See More Button */}
        <div className="w-[240px] h-[70px] bg-button-gradient mt-8 font-barlow font-semibold text-white flex justify-center items-center text-center rounded-md text-[24px] cursor-pointer hover:shadow-lg transition-shadow duration-300">
          <Link href="/location">See All</Link>
        </div>
      </div>
    </div>
  );
};

export default LoactionUpdate;

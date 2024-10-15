import Link from "next/link";
import locationCountriesUpdate from "../../data/locationCountriesUpdate.json";
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center mt-10">
      <input
        type="text"
        placeholder="Enter text here"
        className="w-full  h-[80px] rounded-l-md border border-gray-300 bg-[#F7F7F7] rounded-md p-4 text-lg focus:outline-none focus:ring-2 transition duration-300 px-5 py-5"
      />
    </div>
  );
};
const Locationupdate = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center justify-center font-sans bg-no-repeat bg-cover bg-center text-white sm:h-[20vh] h-[60dvh] sm:px-10 px-36"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.3)), url('/images/location/Hero.svg')",
        }}
      >
        <div className="flex flex-col items-center">
          <div className="font-barlow font-bold text-[64px]">Our Locations</div>
          <div className="font-barlow font-normal text-[24px]">
            Home - Our Locations
          </div>
        </div>
      </div>
      <div className="px-20 py-10 flex flex-col">
        <div className="flex justify-center">
          <div className="font-barlow text-[54px] font-bold bg-headline-gradient text-transparent bg-clip-text mb-2">
            Find Out If Our Services Are Accessible in Your Location.
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 mb-5 items-baseline">
          <div className="col-span-10 sm:col-span-12">
            <SearchBar />
          </div>

          <div className="col-span-2 sm:col-span-12 flex items-center justify-center">
            <div className="h-[80px] w-[370px] sm:w-full font-barlow font-semibold text-2xl text-white bg-button-gradient rounded-lg flex justify-center items-center hover:shadow-lg transition duration-300 ease-in-out">
              Find out
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 grid-rows-4 gap-x-8 gap-y-8 mb-5 mt-5">
          {locationCountriesUpdate?.map((d) => {
            return (
              <div
                className=" font-sans transition-transform duration-300 transform hover:scale-105"
                key={d?.country}
              >
                <div className="w-[350px] h-[200px] relative flag-wrapper">
                  <div
                    className="w-full h-full bg-cover bg-top text-white flex items-center justify-center flag-card transition-all duration-700 front rounded-lg"
                    style={{
                      backgroundImage: `url('/${d?.flagImage}')`,
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
                      className="mt-2 px-5 py-2 border border-white rounded-md text-sm sm:mt-1"
                      href=""
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Locationupdate;

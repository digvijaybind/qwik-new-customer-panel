import Link from "next/link";
import locationCountriesUpdate from "../../data/locationCountriesUpdate.json";
import React, { useEffect, useState } from "react";

const SearchBar = ({}) => {
  return (
    <div className="flex justify-center mt-10">
      <input
        type="text"
        placeholder="Enter text here"
        className="w-full  sm:w-[300px] h-[80px] rounded-l-md border border-gray-300 bg-[#F7F7F7] rounded-md p-4 text-lg focus:outline-none focus:ring-2 transition duration-300 px-5 py-5"
      />
    </div>
  );
};
const Locationupdate = () => {
  const [cities, setcities] = useState([]);
  const [citySuggestions, setCitySuggestions] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://your-wordpress-site.com/wp-json/wp/v2/posts?meta_key=city&meta_value=${city}&meta_compare=LIKE&meta_key=country&meta_value=${country}&meta_compare=LIKE`,
    );
    const data = await response.json();
    setcities(data);
  };

  const fetchCitySuggestions = async (searchText) => {
    if (searchText.length < 2) return;
    const response = await fetch(
      `https://your-wordpress-site.com/wp-json/wp/v2/posts?meta_key=city&meta_value=${searchText}&meta_compare=LIKE`,
    );
    const data = await response.json();
    const cities = [...new Set(data.map((post) => post.city))];
    setCitySuggestions(cities);
  };

  return (
    <div>
      <div
        className="flex flex-col items-center justify-center font-sans bg-no-repeat bg-cover bg-center text-white sm:h-[20vh] h-[70vh] sm:px-10 px-36 "
        style={{
          backgroundImage: "url('/images/location/Hero.svg')",
        }}
      >
        <div className="flex flex-col items-center">
          <div className="font-barlow font-bold text-[64px]">Our Location</div>
          <div className="font-barlow font-normal text-[24px]">
            Home - Our location
          </div>
        </div>
      </div>

      <div className="px-20 sm:px-5 sm:py2-2 py-10 flex flex-col sm:items-center">
        <div className="flex justify-center">
          <div className="font-barlow text-[54px] font-bold 2xl:text-nowrap  2xl:text-[34px] 3xl:text-nowrap sm:text-[34px] sm:text-pretty bg-headline-gradient text-transparent bg-clip-text mb-2 sm:text-center">
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

        <div className="grid grid-cols-4 grid-rows-4 sm:grid-cols-1 2xl:gap-x-4 2xl:gap-y-4 sm:items-center gap-x-8 gap-y-8 mb-5 mt-5">
          {locationCountriesUpdate?.map((d) => {
            return (
              <div
                className=" font-sans transition-transform duration-300 transform hover:scale-105 sm:items-center"
                key={d?.country}
              >
                <div className="w-[300px] h-[200px]  2xl:w-[250px] 2xl:h-[250px] relative flag-wrapper">
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
                      <span className="font-barlow font-extrabold ">
                        {d?.country}
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-full bg-cover bg-top text-white flex flex-col items-center justify-center flag-card transition-all duration-700 back bg-primary p-3 gap-3 sm:h-full">
                    <p className="font-semibold uppercase text-black text-center text-nowrap  2xl:text-[12px]">
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

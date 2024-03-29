import { locationCountries } from '@/components/Utils/Constants';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import React from 'react';

const LocationHeader = () => {
  return (
    <div
      className="flex flex-col items-start justify-center bg-no-repeat bg-cover bg-center text-white sm:h-[20vh] h-[60dvh] sm:px-10 px-36"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.3)), url('/images/slider/1.png')",
      }}
    >
      <h2 className="sm:text-3xl text-[2.2rem] font-extrabold mb-0.5 drop-shadow">
        Our Location
      </h2>
      <p className="font-medium text-xl">
        <span className="text-primary/80">
          Air Ambulance Services &nbsp;&nbsp;&gt;&nbsp;&nbsp;
        </span>{' '}
        Our location
      </p>
    </div>
  );
};

const Location = () => {
  return (
   
      <div className="">
        <LocationHeader />
        <div className="flex sm:flex-col gap-5 my-3 px-36">
          <div className="grid grid-cols-3 gap-6 w-full py-20">
            {locationCountries?.map((d) => {
              return (
                <div
                  className="p-2.5 aspect-[16/12] shadow-md rounded-md"
                  style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                  key={d?.country}
                >
                  <div className="w-full h-full relative flag-wrapper">
                    <div
                      className="w-full h-full bg-cover bg-top text-white flex items-center justify-center flag-card transition-all duration-700 front"
                      style={{
                        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/country_flags/${d?.flagImage}')`,
                      }}
                    >
                      <p className="font-semibold uppercase">
                        Air Ambulance in {d?.country}
                      </p>
                    </div>
                    <div className="w-full h-full bg-cover bg-top text-white flex flex-col items-center justify-center flag-card transition-all duration-700 back bg-primary p-3 gap-3">
                      <p className="font-semibold uppercase text-black">
                        Air Ambulance in {d?.country}
                      </p>
                      <p className="text-center text-sm">
                        Welcome to Qwiklif Air Ambulance, your trusted partner
                        in medical emergency transportation. As a leading
                        provider of ..
                      </p>
                      <Link
                        className="mt-3 px-5 py-2 border border-white rounded-md text-sm"
                        href="/about"
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

export default Location;

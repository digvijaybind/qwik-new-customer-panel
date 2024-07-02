import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import styles from './Roadmap.module.css';
const Roadmap = () => {
  const bookTypes = ['Charter Ambulance', 'Commercial Ambulance'];
  const [SelectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="shadow-2xl shadow-cyan-300/50">
      <div
        className={` rounded h-[430px] sm:h-[250px] lg:h-[330px] xl:h-[460px] mt-[60px] font-sans border-2 border-gray-100`}
      >
        <div className="h-[60px] sm:h-fit flex flex-row w-full rounded-t overflow-hidden">
          {bookTypes.map((item, index) => {
            return (
              <button
                key={index}
                className={`w-[50%] sm:py-1 roun flex justify-center items-center h-full sm:w-[100%] md:w-[100%] px-3 ${
                  SelectedIndex === index ? 'bg-[#19c0f0]' : 'bg-[#F0F0F09C]'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedIndex(index);
                }}
              >
                <div className="flex flex-row items-center justify-start gap-[10px] sm:flex-col px-3">
                  {SelectedIndex === index ? (
                    <div>
                      <Image
                        className="w-[40px] h-[40px] sm:w-[20px] sm:h-[20px] block sm:hidden"
                        src="/images/small_plane.svg"
                        width={40}
                        height={100}
                        alt="rapid Time"
                        layout="cover"
                      />
                    </div>
                  ) : (
                    <div>
                      <Image
                        className="w-[40px] h-[40px] sm:w-[20px] sm:h-[20px] block sm:hidden"
                        src="/images/small_plane.svg"
                        width={40}
                        height={40}
                        alt="rapid Time"
                        layout="cover"
                      />
                    </div>
                  )}
                  <p
                    className={`font-medium font-Inter text-[16px] leading-[26px] ${
                      SelectedIndex === index ? 'text-[#fff]' : 'text-[#000]'
                    }`}
                  >
                    {item}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {SelectedIndex === 0 ? (
          <Image
            className="w-full max-h-[490px] sm:h-[240px] lg:h-[320px] xl:h-[400px]"
            src="/images/DedicatedAirline.gif"
            width={40}
            height={40}
            alt="rapid Time"
            layout="responsive"
          />
        ) : (
          <Image
            className="w-full max-h-[490px] sm:h-[240px] lg:h-[320px] xl:h-[400px]"
            src="/images/CommericialAirline.gif"
            width={40}
            height={40}
            alt="Another Image"
            layout="responsive"
          />
        )}
      </div>
    </div>
  );
};

export default Roadmap;

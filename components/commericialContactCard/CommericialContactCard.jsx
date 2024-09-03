'use client';
import React from 'react';
import { useRouter } from 'next/router';
const CommericialContactCard = ({}) => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/contact');
  };
  return (
    <div
      className={`w-[590px] h-[210px] border-solid border-[1.5px] border-[#cdcdcd] rounded-lg  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-103 flex flex-col px-[25px] py-[10px] sm:w-[330px] sm:h-[250px] sm:px-[10px] sm:py-[10px]`}
    >
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="">No commercial stretcher flight Available </div>
          <br />
          <div className="text-[#000] font-extrabold text-[15px]">
            Contact to qwiklif Team
          </div>

          <div className="time-date col-span-7 flex flex-row justify-around items-center sm:col-span-3 sm:justify-between"></div>
        </div>

        <div className="col-span-5 flex justify-center mt-10">
          <button
            className="w-[200px] h-[42px] bg-[#55CDF1] rounded-full font-extrabold text-[12px] text-[#fff] font-sans hover:text-[#000]"
            onClick={handleContactClick}
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommericialContactCard;

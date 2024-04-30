import React from 'react';
import Depature from '../../public/images/inputBox/Depature.svg';
import Destination from '../../public/images/inputBox/Destination.svg';
import Patience from '../../public/images/inputBox/Patience.svg';
import Phone from '../../public/images/inputBox/Phone.svg';
import Date from '../../public/images/inputBox/Date.svg';
import Reverse from '../../public/images/inputBox/Reverse.svg';
import Telephone from '../../public/images/inputBox/telephone.svg';
import Image from 'next/image';
const MobileSearch = () => {
  return (
    <div className="flex flex-col items-center font-sans">
      <div className="w-[300px] h-[60px] px-[3px] py-[5px] flex flex-row items-center border-2 border-gray-500 rounded-lg mb-3">
        <Image src={Depature} width={44} height={24} />
        <div className="flex flex-col items-start">
          <label className="font-bold text-[8px] text-[#000]  text-[10px]s">
            FROM
          </label>
          <div className="text-[15px] font-extrabold">Mumbai</div>
          <p className="text-[7px]">
            chhatrapati Shivaji International Airports ,T2
          </p>
        </div>
      </div>
      <div className="w-[300px] h-[60px] px-[3px] py-[5px] flex flex-row items-center border-2 border-gray-500 rounded-lg mb-3">
        <Image src={Destination} width={44} height={24} />
        <div className="flex flex-col items-start">
          <label className="font-bold text-[8px] text-[#000]  text-[10px]s">
            To
          </label>
          <div className="text-[15px] font-extrabold">Dubai</div>
          <p className="text-[7px]">Dubai international Airport</p>
        </div>
      </div>
      <div className="w-[300px] h-[60px] px-[3px] py-[5px] flex flex-row items-center border-2 border-gray-500 rounded-lg mb-3">
        <Image src={Date} width={44} height={24} />
        <div className="flex flex-col items-start">
          <label className="font-bold text-[8px] text-[#000]  text-[10px]s">
            Depature date
          </label>
          <div className="text-[15px] font-extrabold">18 APR</div>
          <p className="text-[7px]">thus 2024</p>
        </div>
      </div>
      <div className="w-[300px] h-[60px] px-[3px] py-[5px] flex flex-row items-center border-2 border-gray-500 rounded-lg mb-3">
        <Image src={Date} width={44} height={24} />
        <div className="flex flex-col items-start">
          <label className="font-bold text-[8px] text-[#000]  text-[10px]s">
            Country Code
          </label>
          <div className="text-[15px] font-extrabold">+91</div>
          <p className="text-[7px]">India</p>
        </div>
      </div>
      <div className="w-[300px] h-[60px] px-[3px] py-[5px] flex flex-row items-center border-2 border-gray-500 rounded-lg mb-3">
        <Image src={Phone} width={44} height={24} />
        <div className="flex flex-col items-start">
          <label className="font-bold text-[8px] text-[#000]  text-[10px]s">
            Phone Number
          </label>
          <div className="text-[15px] font-extrabold">8788825286</div>
        </div>
      </div>
      <button className="search bg-[#12B5E4] w-[300px] h-[41px] text-[#fff] text-center rounded-md font-extrabold">
        Search
      </button>
    </div>
  );
};

export default MobileSearch;

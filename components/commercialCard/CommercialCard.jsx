import React from 'react';
import styles from './CommercialCard.module.css';
import CommercialImage from '../../public/images/commercial.svg';
import Image from 'next/image';

const CommercialCard = () => {
  return (
    <div
      className={`h-[277px] w-[680px] py-[20px] px-[20px] bg-[#fffafa]  rounded grid grid-cols-3 gap-5 items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] font-sans`}
    >
      <div className="">
        <Image
          src={CommercialImage}
          alt="Commercial Image"
          // className="object-fill"
          //   layout="fill"
          className="h-64 w-100 object-none object-center"
          //   className="rounded"
          height={600}
          width={400}
        />
      </div>
      <div className="col-span-2">
        <div className="grid grid-cols-3 gap-2 mb-5">
          <div className="">
            <span className="text-[#000000] text-[20px] font-semibold text-center">
              {' '}
              21:40
            </span>
            <br />
            <span className="font-medium">New delhi</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="">02 h 55 m</div>
            <div className="bg-[#42D1E5] w-[40px] h-[3px]"></div>
            <div className="text-[#6D7278]">Non stop</div>
          </div>
          <div className="text-end">
            <span className="text-[#000000] text-[20px] font-semibold ">
              00:35
            </span>
            <br />
            <span className="font-medium">Bengaluru</span>
          </div>
        </div>
        <div className="flex justify-between align-middle mb-3">
          <div className="">
            <div className="font-semibold">Included Perks :</div>
            <div className="font-semibold text-[14px]">-Stretcher ✅</div>
            <div className="font-semibold text-[14px]">-Doctor OnBoard ✅</div>
            <div className="font-semibold text-[14px]">
              -Medical Equipment ✅
            </div>
            <div className="font-semibold text-[14px]">-Oxygen(4L/Min) ✅</div>
          </div>
          <div className="">
            <span className="font-semibold text-[17px]">INR ₹ 8,73,070/-</span>
            <br />
            <span className="font-medium text-[16px]">Estimated Price</span>
          </div>
        </div>
        <div className="rounded text-center align-middle border border-[#4BDCF0]  h-[31px] cursor-pointer text-Bluedark hover:bg-[#4BDCF0] hover:text-[#fff]">
          <div>View Details</div>
        </div>
      </div>
    </div>
  );
};

export default CommercialCard;

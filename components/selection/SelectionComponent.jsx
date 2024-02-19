import React from 'react';
import Banner from '../../public/images/gray_plane.jpeg';
import Image from 'next/image';
const SelectionComponent = ({ img }) => {
  return (
    <div className="flex flex-col">
      <div className="mb-6">
        <Image src={Banner} height={20} width={300} />
      </div>
      <div className="font-semibold text-[24px] text-[#111] mb-5">
        Biggest Fleet Network
        <div className="flex justify-start  mb-[10px] sm:flex-row sm:w-full">
          <hr className="bg-[#396CF0] h-[4px] w-[75px]" />
        </div>
      </div>

      <div className="font-Roboto text-gray-500">
        With the largest fleet, QwikLif can respond to emergencies quickly.
        Multiple aircraft options are available to meet various medical
        requirements, providing an ideal option for all situations.
      </div>
    </div>
  );
};

export default SelectionComponent;

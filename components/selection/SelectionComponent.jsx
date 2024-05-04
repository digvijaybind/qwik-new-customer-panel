import React from 'react';
import Image from 'next/image';

const SelectionComponent = ({ img, title, descripation }) => {
  return (
    <div className="flex flex-col font-sans">
      <div className="mb-6 rounded-md overflow-hidden">
        <Image
          src={img}
          height={20}
          width={300}
          className="object-cover sm:w-full"
          alt={title}
        />
      </div>
      <div className="mb-5">
        <p className="font-semibold text-2xl sm:text-lg text-[#111] ">
          {title}
        </p>
        <div className="flex justify-start  mb-[10px] sm:flex-row sm:w-full">
          <hr className="bg-[#396CF0] h-[3px] w-[100px]" />
        </div>
      </div>

      <div className="font-sans text-gray-500 font-medium sm:text-sm text-lg">
        {descripation}
      </div>
    </div>
  );
};

export default SelectionComponent;

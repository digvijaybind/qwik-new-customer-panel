import React from "react";
import Image from "next/image";

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
      <div className="mb-5 sm:mb-3">
        <p className="font-semibold text-2xl sm:text-lg text-[#111] ">
          {title}
        </p>
        <div className="flex justify-start  mb-[10px] sm:flex-row sm:w-full mt-3">
          <hr className="bg-[#19c0f0] h-[3px] w-[80px] sm:mt-2" />
        </div>
      </div>

      <div className="font-sans text-gray-500 text-[16px]  font-normal">
        {descripation}
      </div>
    </div>
  );
};

export default SelectionComponent;

import React from "react";
import Image from "next/image";

const SelectionComponent = ({ img, title, descripation }) => {
  return (
    <div className="grid grid-cols-12 3xl:grid 3xl:grid-col-12  2xl:grid 2xl:grid-col-12 2xl:grid-rows-2 sm:grid-cols-1  gap-x-8">
      {/* Image Part: Set the col-span to 2 out of 5 columns */}
      <div className="col-span-5 sm:col-span-1 3xl:col-span-5 2xl:col-span-12">
        <Image
          src={img}
          height={590}
          width={500}
          className="object-cover h-[450px] 2xl:h-[250px] w-full sm:w-full"
          alt={title}
        />
      </div>

      {/* Content Part: Set the col-span to 3 out of 5 columns */}
      <div className="col-span-7 sm:col-span-1 flex flex-col 3xl:col-span-7 2xl:col-span-12">
        <div className="mb-5 sm:mb-3">
          <p className="font-barlow font-semibold text-[32px] sm:text-lg text-[#111]">
            {title}
          </p>
        </div>

        <div className="font-barlow font-normal text-[#1E1E1E] text-[20px]">
          {descripation}
        </div>
      </div>
    </div>
  );
};

export default SelectionComponent;

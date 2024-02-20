import React from 'react';
import styles from './SelectionComponent.module.css';
import Image from 'next/image';
const SelectionComponent = ({ img, title, descripation }) => {
  return (
    <div className="flex flex-col">
      <div className="mb-6">
        <Image src={img} height={20} width={300} />
      </div>
      <div className="font-semibold text-[24px] text-[#111] mb-5">
        {title}
        <div className="flex justify-start  mb-[10px] sm:flex-row sm:w-full">
          <hr className="bg-[#396CF0] h-[3px] w-[100px]" />
        </div>
      </div>

      <div className="font-Roboto text-gray-500 font-medium">
        {descripation}
      </div>
    </div>
  );
};

export default SelectionComponent;

import React from "react";
import styles from "./newcard.module.css";
import Image from "next/image";
const Newcard = ({Title, date, descripation, Cardimage, buttontitle}) => {
  return (
    <div class="flex flex-col items-stretch">
      <div class="w-full">
        <Image
          src={Cardimage}
          height={250}
          // width="100%"
          class="w-full"
        />
      </div>
      <div class="mt-[10px] mb-[10px] text-[#15264C] font-normal">{Title}</div>
      <div class="mb-[10px] mt-[15px] text-[#848484] font-normal text-[15px]">
        {date}
      </div>
      <div class="mb-[30px] text-[#848484] font-normal text-[15px] pr-[15px] mr-[20px]">
        {descripation}
      </div>
      <div class={`flex justify-center cursor-pointer `}>
        <div class={`${styles.Container}`}>{buttontitle}</div>
      </div>
    </div>
  );
};

export default Newcard;

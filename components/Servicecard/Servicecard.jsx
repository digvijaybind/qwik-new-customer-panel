import React from "react";
import styles from "./Servicecard.module.css";
import Image from "next/image";
const Servicecard = ({title, descriaption, bgColor, imageUrl}) => {
  return (
    <div
      class={`px-[20px] py-[30px] flex flex-col justify-start ${styles[bgColor]}`}
    >
      <div class="text-[#fff] font-normal text-[24px] mb-[30px]">{title}</div>
      <div class="flex flex-wrap text-[#fff] text-[15px] font-normal mb-[30px]">
        {descriaption}
      </div>
      <div class="w-full">
        <Image src={imageUrl} height={314} class="w-full" />
      </div>
    </div>
  );
};

export default Servicecard;

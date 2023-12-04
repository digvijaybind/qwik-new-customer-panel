import React from "react";
import styles from "./Servicecard.module.css";
import Image from "next/image";
const Servicecard = ({title, descriaption, bgColor, imageUrl}) => {
  return (
    <div className={`flex flex-col justify-start ${bgColor}`}>
      <div class="text-white font-normal text-[24px]"> {title}</div>
      <div class="text-white font-thin text-[15px]">{descriaption}</div>
      <div>
        <Image src={imageUrl} width={337} height={314} />
      </div>
    </div>
  );
};

export default Servicecard;

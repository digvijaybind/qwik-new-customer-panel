import React from "react";
import styles from "./newcard.module.css";
import Image from "next/image";
import Slider from "react-slick";
const Newcard = ({ Title, date, descripation, Cardimage, buttontitle }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Adjust the autoplay speed as needed
  };
  return (
    <Slider {...settings}>
      <div class="flex flex-col items-stretch border border-[#ececec] h-full">
        <div class="w-full">
          <Image
            src={Cardimage}
            height={250}
            // width="100%"
            class="w-full"
          />
        </div>
        <div className="px-5 pb-4">
          <div class="mt-[10px] mb-[10px] text-[#15264C] font-normal">{Title}</div>
          <div class="mb-[10px] mt-[15px] text-[#848484] font-normal text-[15px]">{date}</div>
          <div class="mb-[30px] text-[#848484] font-normal text-[14px] pr-[15px] mr-[20px]">{descripation}</div>
          <div class={`flex justify-center cursor-pointer `}>
            <div class={`${styles.Container}`}>{buttontitle}</div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Newcard;

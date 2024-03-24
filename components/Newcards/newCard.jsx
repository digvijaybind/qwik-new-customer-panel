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
      <div className="flex flex-col items-stretch border border-[#ececec] h-full">
        <div className="w-full">
          <Image
            src={Cardimage}
            height={250}
            // width="100%"
            className="w-full"
          />
        </div>
        <div className="px-5 pb-4">
          <div className="mt-[10px] mb-[10px] text-[#15264C] font-normal">{Title}</div>
          <div className="mb-[10px] mt-[15px] text-[#848484] font-normal text-[15px]">{date}</div>
          <div className="mb-[30px] text-[#848484] font-normal text-[14px] pr-[15px] mr-[20px]">{descripation}</div>
          <div className={`flex justify-center cursor-pointer `}>
            <div className={`${styles.Container}`}>{buttontitle}</div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Newcard;

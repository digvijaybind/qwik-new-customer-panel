import React, { useState } from 'react';
import Servicecard from '@/components/Servicecard/Servicecard';
import Slider from 'react-slick';
import services from '../../db/services.json';

const AboutAmbulance = ({ setCurrentIndex }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div id="services" className="mt-[100px] font-sans ">
        <h2 className="text-[#111111] font-sans font-semibold text-4xl leading-[34px] text-center">
          Our Air Ambulance Services
        </h2>
        <div className="flex justify-center items-center mt-[20px] mb-[30px]">
          <hr className="bg-[#11B6E3] h-[6px] w-[45px]" />
        </div>
        <div className="">
          <div className="w-[90%] mx-[5%] sm:w-full sm:mx-0">
            <Slider {...settings}>
              {services.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="grid grid-cols-3  gap-10  px-[4px] mb-[30px] mt-[20px] sm:grid-cols-1 sm:gap-3 sm:px-2"
                  >
                    <Servicecard
                      title={item.title}
                      description={item.description}
                      imageUrl={item.image}
                      index={index}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAmbulance;

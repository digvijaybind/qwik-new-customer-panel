import React, { useState } from 'react';
import Slider from 'react-slick';
import newsUpdates from '../../db/newsUpdates.json';
import NewsUpdates from '../NewsUpdates/NewsUpdate';

const LatestNew = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
      <div id="services" className="mt-[290px] sm:mt-[1090px]">
        <h1 className="text-[#11B6E3] font-arcaMajoraBold text-center mb-[10px]">
          Latest News
        </h1>
        <h2 className="font-arcaMajoraHeavy text-3xl text-center">
          Get Every News & Updates
        </h2>
        <div className="flex justify-center items-center mt-[20px] mb-[30px]">
          <hr className="bg-[#11B6E3] h-[4px] w-[45px]" />
        </div>
        <div class="">
          <div className="w-[90%] mx-[5%] sm:w-full sm:mx-0">
            <Slider {...settings}>
              {newsUpdates.map((item, index) => {
                return (
                  <div
                    key={index}
                    class="grid gap-4 grid-cols-3 px-[4px] mb-[30px] mt-[20px] sm:grid-cols-1 sm:gap-4 sm:px-5"
                  >
                    <NewsUpdates
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

export default LatestNew;

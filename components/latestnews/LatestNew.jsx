import React, { useState } from 'react';
import Slider from 'react-slick';
import newsUpdates from '../../db/newsUpdates.json';
import NewsUpdates from '../NewsUpdates/NewsUpdate';

const LatestNew = React.memo(() => {
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
      <div id="services" className="mt-10 sm:mt-0">
        <h1 className="text-[#11B6E3]  font-black text-[20px] text-center mb-[10px] font-sans">
          Latest News
        </h1>
        <h2 className="font-sans font-extrabold text-3xl sm:text-xl text-center">
          Get Every News & Updates
        </h2>
        <div className="flex justify-center items-center mt-[20px] mb-[30px]">
          <hr className="bg-[#11B6E3] h-[4px] w-[45px]" />
        </div>
        <div className="w-full">
          <div className="w-full">
            <Slider {...settings}>
              {newsUpdates.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="grid gap-4 grid-cols-3 px-[4px] mb-[30px] mt-[20px] sm:grid-cols-1 lg:grid-cols-2 sm:gap-4 sm:px-5"
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
});

export default LatestNew;

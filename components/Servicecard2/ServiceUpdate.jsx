// Import necessary dependencies
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import ServicesData from "../../db/services.json";

// Import Slick Carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServiceCard = ({ img, headline = "", description = "" }) => {
  return (
    <div className="mx-[10px] flex flex-col items-start justify-between border px-3 sm:px-0 rounded-lg font-sans cursor-pointer shadow-md py-5 h-[460px]">
      {" "}
      {/* Set a fixed height */}
      {/* Image Section */}
      <div className="w-full mb-4">
        <Image
          src={img}
          alt={headline}
          height={250}
          width={462}
          className="rounded-t-lg object-cover w-full"
          layout="responsive"
        />
      </div>
      {/* Headline */}
      <div className="font-barlow font-bold text-[24px] mb-2 text-gray-900">
        {headline}
      </div>
      {/* Description */}
      <div className="font-barlow font-normal text-[16px] text-gray-600 mb-6 leading-relaxed line-clamp-4">
        {description}
      </div>
      {/* Read More Button */}
      <button className="mt-auto text-[#1E1E1E] text-[20px] rounded-md self-start font-barlow font-bold text-sm">
        Read More
      </button>
    </div>
  );
};

// ServiceUpdate Component
const ServiceUpdate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slider settings
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
    // Added margin between slides
    centerMode: true,
    centerPadding: "40px", // Adjust this to control the spacing between slides
  };

  return (
    <div className="flex justify-center items-center flex-col p-8">
      {/* Heading Section */}
      <div className="font-barlow font-semibold text-[24px] text-[#1E1E1E] mb-2">
        Our Services
      </div>
      <div className="bg-headline-gradient text-transparent bg-clip-text text-[54px] font-barlow font-bold text-center mb-8">
        Specialized Air Medical Services
      </div>
      {/* Card Slider */}
      <div className="w-full max-w-7xl px-4">
        <Slider {...settings}>
          {ServicesData.map((data, index) => (
            <div
              key={index}
              className="grid gap-4 grid-cols-3   px-[4px] mb-[30px] mt-[20px] sm:mt-[10px] sm:grid-cols-1 lg:grid-cols-2 sm:gap-2 sm:px-0"
            >
              {/* Added padding here to create a gap */}
              <ServiceCard
                img={data.image}
                headline={data.title}
                description={data.description}
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* See More Button */}
      <div className="w-[240px] h-[70px] bg-gradient-to-r from-blue-500 to-blue-700 mt-8 font-barlow font-semibold text-white flex justify-center items-center text-center rounded-md text-[24px] cursor-pointer hover:shadow-lg transition-shadow duration-300">
        See More
      </div>
    </div>
  );
};

export default ServiceUpdate;

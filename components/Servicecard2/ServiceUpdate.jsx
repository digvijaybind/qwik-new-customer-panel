// Import necessary dependencies
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import ServicesData from "../../db/services.json";

// Import Slick Carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const ServiceCard = ({ img, headline = "", description = "" }) => {
  return (
    <div className="mx-[10px] flex flex-col items-start justify-between border border-2-[#fff] px-3 sm:px-0 rounded-lg font-sans cursor-pointer shadow-sm py-5 h-[500px]">
      {" "}
      {/* Set a fixed height */}
      {/* Image Section */}
      <div className="w-full ">
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
      <div className="sm:px-5">
        <div className="font-barlow font-bold text-[24px] mb-2 text-gray-900">
          {headline}
        </div>
        {/* Description */}
        <div className="font-barlow font-normal text-[16px] text-gray-600 mb-4 leading-relaxed ">
          {description}
        </div>
        {/* Read More Button */}
        <button className="mt-auto text-[#1E1E1E]  rounded-md self-start font-barlow font-bold text-[20px] mb-2">
          Read More
        </button>
      </div>
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
    slidesToShow: 3, // Default for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 1024, // For medium screens
        settings: {
          slidesToShow: 2, // Show two cards for medium screens
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // For mobile screens
        settings: {
          slidesToShow: 1, // Show only one card on mobile
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false, // Disable center mode for better layout on mobile
          centerPadding: "0px", // Remove padding to ensure full width
        },
      },
    ],
  };

  return (
    <div className="flex justify-center items-center flex-col px-8 sm:px-4">
      {/* Heading Section */}
      <div className="font-barlow font-semibold text-[24px] text-[#1E1E1E] ">
        Our Services
      </div>
      <div className="bg-headline-gradient text-transparent bg-clip-text text-[54px] font-barlow font-bold text-center mb-8">
        Specialized Air Medical Services
      </div>
      {/* Card Slider */}
      <div className="w-full ">
        <Slider {...settings}>
          {ServicesData.map((data, index) => (
            <div
              key={index}
              className="flex justify-center" // Center the card
            >
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
      <div className="w-[240px] h-[70px] bg-button-gradient mt-8 font-barlow font-[600] text-white flex justify-center items-center text-center rounded-md text-[28px] cursor-pointer hover:shadow-lg transition-shadow duration-300">
        <Link href="/services">See More</Link>
      </div>
    </div>
  );
};

export default ServiceUpdate;

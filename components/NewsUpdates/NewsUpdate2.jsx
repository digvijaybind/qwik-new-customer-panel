import React from "react";
import { useState } from "react";
import Slider from "react-slick";

const BlogCard = ({ image, title, description, link }) => {
  return (
    <div className="bg-white drop-shadow-xl">
      <img
        src={image}
        alt={title}
        className="w-full aspect-[16/11] object-cover object-top"
      />
      <div className="w-full p-8">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          className="mt-4 mb-6 text-base line-clamp-3"
        ></p>
        <Link
          href={link}
          className="bg-primary text-white px-3 py-2 rounded-sm"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

const NewsUpdate2 = () => {
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
        News & Update
      </div>
      <div className="bg-headline-gradient text-transparent bg-clip-text text-[54px] font-barlow font-bold text-center mb-8">
        Insights & Updates from Qwiklif.
      </div>
      {/* Card Slider */}
      <div className="w-full max-w-7xl px-4">
        <Slider {...settings}>
          {/* {ServicesData.map((data, index) => (
            <div
              key={index}
              className="grid gap-4 grid-cols-3   px-[4px] mb-[30px] mt-[20px] sm:mt-[10px] sm:grid-cols-1 lg:grid-cols-2 sm:gap-2 sm:px-0"
            >
            
              <BlogCard
                image={data.image}
                title={data.title}
                description={data.description}
              />
            </div>
          ))} */}
        </Slider>
      </div>

      {/* See More Button */}
      <div className="w-[240px] h-[70px] bg-button-gradient  mt-8 font-barlow font-semibold text-white flex justify-center items-center text-center rounded-md text-[24px] cursor-pointer hover:shadow-lg transition-shadow duration-300">
        Read More
      </div>
    </div>
  );
};

export default NewsUpdate2;

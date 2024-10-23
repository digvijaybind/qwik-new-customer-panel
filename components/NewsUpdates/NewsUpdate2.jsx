import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import News from "../../data/newsection.json"; // Assuming news data is stored in JSON

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
          centerPadding: "20px", // Adjust padding for tablet screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px", // Adjust padding for mobile devices
        },
      },
    ],
    centerMode: true,
    centerPadding: "40px",
  };

  // BlogCard component for displaying individual cards
  const BlogCard = ({ image, title, description }) => {
    return (
      <div className="bg-white drop-shadow-xl p-4 rounded-md h-[550px] flex flex-col cursor-pointer">
        {/* Blog Image */}
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-[200px] object-cover object-top rounded-md"
          />
        ) : (
          <div className="w-full h-[200px] bg-gray-200 rounded-md"></div>
        )}
        {/* Blog Content */}
        <div className="flex-grow p-4 flex flex-col">
          <h2 className="text-[28px] font-barlow font-semibold mb-3 sm:mb-3 text-[#1E1E1E] max-h-[140px] ">
            {title}
          </h2>
          <p className="mt-2 mb-4 text-[20px] font-normal font-barlow line-clamp-3 max-h-[105px]">
            {description}
          </p>

          {/* Read More Button */}
          <div className="text-[#1E1E1E] py-2 rounded-sm inline-block hover:bg-primary-dark transition-colors font-barlow font-semibold text-[20px] cursor-pointer">
            Read More
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center flex-col p-8 sm:p-2">
      {/* Heading Section */}
      <div className="font-barlow font-semibold text-[24px] text-[#1E1E1E] mb-2">
        News & Update
      </div>
      <div className="bg-headline-gradient text-transparent bg-clip-text text-[54px] sm:text-[34px] font-barlow font-bold text-center mb-8">
        Insights & Updates from Qwiklif
      </div>

      {/* Card Slider */}
      <div className="w-full px-4  sm:px-0 space-x-4">
        {News.length > 0 ? (
          <Slider {...settings}>
            {News.map((blog) => (
              <div
                key={blog.id}
                className="grid grid-cols-3 gap-8 sm:grid-cols-1" // Center align cards
              >
                <BlogCard
                  image={blog.image}
                  title={blog.title}
                  description={blog.description}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="text-center text-gray-500">No News available</div>
        )}
      </div>

      {/* "Read More" Button */}
      <Link href="/blogs">
        <div className="w-[240px] h-[70px] bg-button-gradient mt-8 font-barlow font-semibold text-white flex justify-center items-center text-center rounded-md text-[24px] cursor-pointer hover:shadow-lg transition-shadow duration-300">
          Read More
        </div>
      </Link>
    </div>
  );
};

export default NewsUpdate2;

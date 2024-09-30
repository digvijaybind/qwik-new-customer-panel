import React, { useEffect, useState } from "react";
import Image from "next/image"; // Import Image from "next/image"
import Review from "../../db/Googlereview.json"; // JSON data for reviews
import google from "../../public/images/review/logos_google.svg"; // Google logo image
import StarRating from "../Utils/starIcon/StarRating"; // Import the star rating component

const GoogleReviewCard = ({ img, Name, date, decripation }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg p-4 rounded-md h-[550px]">
      {/* User Image */}
      <div className="mb-4">
        {img ? (
          <Image
            src={img}
            alt={`${Name}'s picture`}
            height={133}
            width={133}
            className="rounded-full"
          />
        ) : (
          <div className="w-[133px] h-[133px] bg-gray-300 rounded-full"></div> // Placeholder if no image
        )}
      </div>

      {/* User Name */}
      <div className="font-barlow font-semibold text-lg mb-1">{Name}</div>

      {/* Review Date */}
      <div className="font-barlow font-normal text-gray-500 mb-2">{date}</div>

      {/* Star Rating */}
      <div className="mb-2">
       <StarRating/>
      </div>

      {/* Review Description */}
      <div className="font-barlow font-normal text-center mb-4">
        {decripation}
      </div>

      {/* Google Logo */}
      <div className="mt-auto">
        <Image src={google} alt="Google Logo" width={122} height={40} />
      </div>
    </div>
  );
};

const Reviewupdate = ({ interval = 4000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Setup automatic slide change
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide(
        (prevSlide) =>
          (prevSlide + 1) % Math.ceil(Review.length / slidesToShow),
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval, slidesToShow]);

  // Determine how many slides to show based on screen size
  useEffect(() => {
    setIsMounted(true);
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();

    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  if (!isMounted) return null;

  const startIdx = currentSlide * slidesToShow;
  const endIdx = Math.min(startIdx + slidesToShow, Review.length);

  return (
    <div className="flex justify-center items-center flex-col p-8">
      {/* Heading Section */}
      <div className="font-barlow font-semibold text-[24px] text-[#1E1E1E] mb-2">
        Testimonial’s
      </div>
      <div className="bg-headline-gradient text-transparent bg-clip-text text-[54px] font-barlow font-bold text-center mb-8">
        Our Google Reviews.
      </div>

      {/* Review Cards Slider */}
      <div className="w-full max-w-7xl px-4 grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Review.slice(startIdx, endIdx).map((data, index) => (
          <div key={index} className="flex justify-center">
            <GoogleReviewCard
              img={data.image}
              Name={data.UserName}
              date={data.Date}
              decripation={data.description}
            />
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="w-[240px] h-[70px] bg-button-gradient mt-8 font-barlow font-semibold text-white flex justify-center items-center text-center rounded-md text-[24px] cursor-pointer hover:shadow-lg transition-shadow duration-300">
        See More
      </div>
    </div>
  );
};

export default Reviewupdate;

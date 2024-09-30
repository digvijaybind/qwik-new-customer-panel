import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Review from "../../db/Googlereview.json";
import Googlereview from "../googlreview/Googlereview";
import google from "../../public/images/review/logos_google.svg";
import StarRating from "../Utils/starIcon/StarRating";

const GoogleReviewCard = ({ img, Name, date, decripation }) => {
  <div className="flex justify-center bg-black h-[500px]">
    <div className="">
      <Image src={img} height={133} width={133} />
    </div>
    <div className="font-barlow font-semibold">{Name}</div>
    <div className="font-barlow font-normal">{date}</div>
    <div className="">
      <StarRating />
    </div>
    <div className="font-barlow font-normal">{decripation}</div>
    <div className="">
      <Image src={google} width={122} height={40} />
    </div>
  </div>;
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
};

const Reviewupdate = ({ interval = 4000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide(
        (prevSlide) =>
          (prevSlide + 1) % Math.ceil(Review.length / slidesToShow),
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval, slidesToShow]);

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

  if (!isMounted) {
    return null;
  }

  if (!isMounted) {
    return null;
  }
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
      {/* Card Slider */}
      <div className="w-full max-w-7xl px-4 grid grid-cols-3">
        {Review.slice(startIdx, endIdx).map((data, index) => (
          <div key={index} className="">
            <Googlereview
              Userimage={data.image}
              UserName={data.UserName}
              description={data.description}
              Date={data.Date}
            />
            {/* <GoogleReviewCard
              img={data.image}
              Name={data.UserName}
              date={data.Date}
              decripation={data.description}
            /> */}
          </div>
        ))}
      </div>
      {/* See More Button */}
      <div className="w-[240px] h-[70px] bg-button-gradient  mt-8 font-barlow font-semibold text-white flex justify-center items-center text-center rounded-md text-[24px] cursor-pointer hover:shadow-lg transition-shadow duration-300">
        See More
      </div>
    </div>
  );
};

export default Reviewupdate;

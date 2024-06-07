import React, { useEffect, useState } from 'react';
import Review from '../../db/Googlereview.json';
import Googlereview from '../googlreview/Googlereview';

const ReviewCarosel = React.memo(({ interval = 4000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide(
        (prevSlide) => (prevSlide + 1) % Math.ceil(Review.length / slidesToShow)
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

    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  if (!isMounted) {
    return null;
  }

  const startIdx = currentSlide * slidesToShow;
  const endIdx = Math.min(startIdx + slidesToShow, Review.length);

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex justify-center items-center flex-col  text-[25px] mb-10 font-black">
        <div>Testimonials</div>
        <hr class="bg-[#19c0f0] h-[3px] w-[55px] mt-2 sm:mx-auto mb-3"></hr>
        <span className=" text-[15px]  font-semibold">
          Here's what our satisfied clients are saying
        </span>
      </div>
      <div className="flex space-x-4 ">
        {Review.slice(startIdx, endIdx).map((data, index) => (
          <div key={index}>
            <Googlereview
              Userimage={data.image}
              UserName={data.UserName}
              description={data.description}
              Date={data.Date}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10 text-center text-[18px] sm:text-[12px]  border-b-2 border-[#000] pb-2 ">
        <span className="font-black">Google&nbsp;</span> rating score: 4.9 of 5
        based on <span className="font-black">&nbsp;54 reviews</span>
      </div>
    </div>
  );
});

export default ReviewCarosel;

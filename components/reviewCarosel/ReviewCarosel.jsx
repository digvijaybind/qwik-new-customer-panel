import React, { useEffect, useState } from 'react';
import Review from '../../db/Googlereview.json';
import Googlereview from '../googlreview/Googlereview';

const ReviewCarosel = ({ interval = 4000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide(
        (prevSlide) => (prevSlide + 1) % Math.ceil(Review.length / 3)
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval]);

  const startIdx = currentSlide * 3;
  const endIdx = Math.min(startIdx + 3, Review.length);

  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <div className="flex justify-center items-center  text-[20px] mb-10 font-black">
        Testimonials
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
      <div className="flex justify-center items-center mt-10">
        <span className="font-black">Google &nbsp;</span> rating score:4.9 of 5
        based on <span className="font-black"> &nbsp; 54 reviews </span>
      </div>
    </div>
  );
};

export default ReviewCarosel;

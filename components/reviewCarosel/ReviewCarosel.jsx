import React, { useEffect, useState } from 'react';
import Review from '../../db/Googlereview.json';
import Googlereview from '../googlreview/Googlereview';

const ReviewCarosel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % Googlereview.length);
    }, 300);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-4">
        {Review.map((data, index) => {
          <div
            className={`grid grid-cols-3 gap-2 transition-transform duration-300 transform ${
              index === activeIndex ? 'scale-100' : 'scale-90'
            }`}
          >
            <Googlereview
              Userimg={data.image}
              UserName={data.UserName}
              description={data.description}
              Date={data.Date}
            />
          </div>;
        })}
      </div>
    </div>
  );
};

export default ReviewCarosel;

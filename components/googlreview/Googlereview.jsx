import Image from 'next/image';
import React, { useState } from 'react';
import StarRating from '../Utils/starIcon/StarRating';
import Google from '../../public/images/googleIcon/GoogleIcon.svg';
import GooglereviewData from '../../db/Googlereview.json';
const ExpandText = ({ children, descripationLength }) => {
  const fullText = children;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="">
      {isExpanded ? fullText : `${fullText?.slice(0, descripationLength)}`}
      <span
        onClick={toggleText}
        className="text-blue-500 font-normal text-[13px]"
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </span>
    </div>
  );
};
const Googlereview = () => {
  return GooglereviewData.map((index, data) => {
    return (
      <div
        className="flex flex-col px-[15px] py-[15px] w-[330px] bg-[#fff] rounded shadow-2xl cursor-pointer overflow-hidden transform transition-transform hover:scale-105 "
        key={index}
      >
        <div className="flex justify-between items-center">
          <div className="NameLogo flex flex-row">
            <Image src={Google} height={25} width={25} />
            <div className="flex flex-col ml-3">
              <span className="font-extrabold text-[13px] text-[#000] ">
                {data.UserName}
              </span>
              <span className="font-medium text-[10px] ">{data.Date}</span>
            </div>
          </div>
          <div className="GoogleLogo ">
            <Image src={data.image} height={25} width={25} />
          </div>
        </div>
        <div className="Starlogo mt-3 mb-3">
          <StarRating rating={5} />
        </div>
        <div className="descripation">
          <ExpandText descripationLength={250}>{data.description}</ExpandText>
        </div>
      </div>
    );
  });
};

export default Googlereview;

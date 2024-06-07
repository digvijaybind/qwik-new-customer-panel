import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';

const ReadMore = () => {
  return (
    <div className="flex justify-start font-bold mt-4 text-[#19c0f0] items-center">
      Read More{' '}
      <span>
        <IoIosArrowForward style={{ color: '#19c0f0' }} />
      </span>
    </div>
  );
};
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
        {isExpanded ? '' : <ReadMore />}
      </span>
    </div>
  );
};

const Servicenews = ({ title, description, imageUrl, className }) => {
  return (
    <div
      className={`${className} mx-[10px] flex flex-col items-center border px-3 py-2 rounded-lg font-sans cursor-pointer shadow-md`}
    >
      <div className="w-full overflow-hidden rounded-t">
        <img
          className="w-full aspect-[16/13] object-cover object-center"
          src={imageUrl}
          alt={title}
          layout="responsive"
        />
      </div>
      <div className="flex flex-col  p-4 items-center mt-2.5 gap-3">
        <div className="font-sans font-extrabold text-center text-xl text-slate-800 max-w-[20rem]">
          {title}
        </div>
        <div className="text-[#646464]  font-sans text-sm font-normal max-w-[26rem] text-center">
          <ExpandText descripationLength={200}>{description}</ExpandText>
        </div>
      </div>
    </div>
  );
};

export default Servicenews;

import Image from "next/image";
import React, { useState } from "react";
import StarRating from "../Utils/starIcon/StarRating";
import Google from "../../public/images/googleIcon/GoogleIcon.svg";
import GooglereviewData from "../../db/Googlereview.json";
import Vijay from "../../public/images/googleReview/vijay.png";
const ExpandText = ({ children, descripationLength }) => {
  const fullText = children;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="font-Inter font-normal">
      {isExpanded ? fullText : `${fullText?.slice(0, descripationLength)}`}
      <span
        onClick={toggleText}
        className="text-blue-500 font-medium text-[13px]"
      >
        {isExpanded ? "" : "show more "}
      </span>
    </div>
  );
};
const Googlereview = ({ Userimage, UserName, Date, description }) => {
  return (
    <div className="flex flex-col px-[15px] py-[15px] w-[330px] bg-[#fff] rounded shadow-2xl cursor-pointer overflow-hidden transform transition-transform hover:scale-105 ">
      <div className="">
        <div className="flex justify-between items-center">
          <div className="NameLogo flex flex-row">
            <img src={Userimage} height={25} width={35} />
            <div className="flex flex-col ml-3">
              <span className="font-semibold text-[13px] text-[#000] ">
                {UserName}
              </span>
              <span className="font-medium text-[10px] ">{Date}</span>
            </div>
          </div>
          <div className="GoogleLogo ">
            <Image src={Google} height={25} width={35} />
          </div>
        </div>
        <div className="Starlogo mt-3 mb-3">
          <StarRating rating={5} />
        </div>
        <div className="descripation">
          <ExpandText descripationLength={200}>{description}</ExpandText>
        </div>
      </div>
    </div>
  );
};

export default Googlereview;

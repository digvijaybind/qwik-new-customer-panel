import Image from 'next/image';
import React from 'react';
import StarRating from '../Utils/starIcon/StarRating';
import Google from '../../public/images/googleIcon/GoogleIcon.svg';
const Googlereview = () => {
  return (
    <div className="flex flex-col px-[15px] py-[15px] w-[330px] bg-[#fff] rounded-md shadow-2xl cursor-pointer overflow-hidden transform transition-transform hover:scale-110">
      <div className="flex justify-between items-center">
        <div className="NameLogo flex flex-row">
          <Image src={Google} height={25} width={25} />
          <div className="flex flex-col ml-3">
            <span className="font-extrabold text-[15px] text-[#000] ">
              Rania Nayaz
            </span>
            <span className="font-medium text-[10px] ">2022-02-21</span>
          </div>
        </div>
        <div className="GoogleLogo">
          <Image src={Google} height={25} width={25} />
        </div>
      </div>
      <div className="Starlogo">
        <StarRating rating={5} />
      </div>
      <div className="descripation">
        Best service ever. Very professional and accurate. Dealing with
        Humanitarian services and especially Mansour was a great experience.
        They were really our savers and our backbone to help going through very
        difficult moments during the repatriation of the body of our late
        colleague to his home town. Really much appreciated
      </div>
    </div>
  );
};

export default Googlereview;

import Image from 'next/image';
import React from 'react';

const QwiklifFeatureCard = ({ icon, title, description }) => {
  return (
    <div className="mx-auto flex items-start gap-8 sm:gap-6 p-8 sm:p-4  cursor-pointer hover:border  hover:shadow-2xl  shadow-lg hover:shadow-cyan-400/50 rounded-md">
      <Image
        className="max-w-[50px] max-h-[50px] sm:max-w-[40px] sm:max-h-[40px] object-contain"
        src={icon}
        width={50}
        height={50}
        alt={title}
      />

      <div className="w-full flex  flex-col items-start sm:gap-3">
        <p className="text-xl font-sans font-extrabold text-slate-700">
          {title}
        </p>
        <p className="text-[#646464] font-sans leading-[26px] text-[16px] font-normal">
          {description[1]} <br className="hidden" /> {description[2]}{' '}
          <br className="hidden" />
          {description[3]}
        </p>
      </div>
    </div>
  );
};

export default QwiklifFeatureCard;

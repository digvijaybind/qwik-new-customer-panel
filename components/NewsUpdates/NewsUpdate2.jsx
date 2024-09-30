import React from 'react'

const NewsUpdate2 = () => {
  return (
    <div className="flex justify-center items-center flex-col p-8">
      {/* Heading Section */}
      <div className="font-barlow font-semibold text-[24px] text-[#1E1E1E] mb-2">
        News & Update
      </div>
      <div className="bg-headline-gradient text-transparent bg-clip-text text-[54px] font-barlow font-bold text-center mb-8">
        Insights & Updates from Qwiklif.
      </div>
      {/* Card Slider */}

      {/* See More Button */}
      <div className="w-[240px] h-[70px] bg-button-gradient  mt-8 font-barlow font-semibold text-white flex justify-center items-center text-center rounded-md text-[24px] cursor-pointer hover:shadow-lg transition-shadow duration-300">
        Read More
      </div>
    </div>
  );
}

export default NewsUpdate2
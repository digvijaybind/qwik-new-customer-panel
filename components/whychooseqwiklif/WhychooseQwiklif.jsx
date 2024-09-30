import React from "react";
import Slider from "react-slick";

const videos = [
  {
    id: 1,
    src: "https://www.youtube.com/watch?v=E_jqCi0BwbE&t=52s", // Replace with your video URLs
  },
  {
    id: 2,
    src: "https://www.youtube.com/watch?v=E_jqCi0BwbE&t=52s",
  },
  {
    id: 3,
    src: "https://www.youtube.com/watch?v=E_jqCi0BwbE&t=52s",
  },
  // Add more video data as needed
];
// VideoCard Component
const VideoCard = ({ video }) => {
  return (
    <div className="w-[369px] h-[600px] flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-md transition-transform duration-300 hover:scale-105">
      {/* Video Frame */}
      <iframe
        width="100%"
        height="315"
        src={video.src}
        title={video.title}
        frameBorder="0"
        allowFullScreen
        className="rounded-md"
      ></iframe>
      {/* Video Title */}
      <div className="mt-4 text-lg font-bold text-center text-gray-800">
        {video.title}
      </div>
    </div>
  );
};

// Main Component
const WhychooseQwiklif = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col items-center justify-center  py-10 px-4">
      {/* Video Carousel */}

      <div className="flex justify-center items-center flex-col p-8">
        {/* Heading Section */}

        <div className="bg-headline-gradient text-transparent bg-clip-text text-[54px] font-barlow font-bold text-center mb-8">
          Why people trust Qwiklif?
        </div>
        {/* Card Slider */}
        <div className="w-full max-w-7xl px-4">
          <Slider {...settings} className="w-full max-w-4xl">
            {videos.map((video) => (
              <div key={video.id} className="grid grid-cols-3 gap-4">
                <VideoCard video={video} />
              </div>
            ))}
          </Slider>
        </div>
        {/* See More Button */}
        <div className="w-[240px] h-[70px] bg-button-gradient  mt-8 font-barlow font-semibold text-white flex justify-center items-center text-center rounded-md text-[24px] cursor-pointer hover:shadow-lg transition-shadow duration-300">
          See More
        </div>
      </div>
    </div>
  );
};

export default WhychooseQwiklif;

import React from "react";
import Slider from "react-slick";

// Video data array with unique IDs and video URLs
const videos = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/E_jqCi0BwbE?start=52", // Adjusted URL for embedding
    title: "Patient Transfer", // Replace with actual titles
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/E_jqCi0BwbE?start=52",
    title: "Patient Transfer",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/E_jqCi0BwbE?start=52",
    title: "Patient Transfer",
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/E_jqCi0BwbE?start=52",
    title: "Patient Transfer",
  },
  {
    id: 5,
    src: "https://www.youtube.com/embed/E_jqCi0BwbE?start=52",
    title: "Patient Transfer",
  },
  {
    id: 6,
    src: "https://www.youtube.com/embed/E_jqCi0BwbE?start=52",
    title: "Patient Transfer",
  },
  // Add more video data as needed
];

// VideoCard Component: Renders individual video cards
const VideoCard = ({ video }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-md transition-transform duration-300 hover:scale-105">
      {/* Video Frame */}
      <iframe
        width="100%"
        height="200"
        src={video.src}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-md"
      ></iframe>
      {/* Video Title */}
      <div className="mt-2 text-lg font-bold text-center text-gray-800">
        {video.title}
      </div>
    </div>
  );
};

// Main Component: Renders the video carousel with heading and button
const WhychooseQwiklif = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 videos per slide
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2, // Show 2 videos per slide
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1, // Show 1 video per slide
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4">
      {/* Video Carousel Container */}
      <div className="flex justify-center items-center flex-col p-8">
        {/* Heading Section */}
        <h2 className="bg-headline-gradient text-transparent bg-clip-text text-[54px] font-barlow font-bold text-center mb-8">
          Why people trust Qwiklif?
        </h2>
        {/* Card Slider */}
        <div className="w-full max-w-7xl px-4">
          <Slider {...settings} className="w-full">
            {videos.map((video) => (
              <div key={video.id} className="flex flex-col items-center">
                <VideoCard video={video} />
              </div>
            ))}
          </Slider>
        </div>
        {/* "See More" Button */}
        <button className="w-[240px] h-[70px] bg-button-gradient mt-8 font-barlow font-semibold text-white flex justify-center items-center rounded-md text-[24px] cursor-pointer hover:shadow-lg transition-shadow duration-300">
          See More
        </button>
      </div>
    </div>
  );
};

export default WhychooseQwiklif;

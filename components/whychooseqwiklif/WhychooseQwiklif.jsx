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
const VideoPlayer = ({ video }) => {
  return (
    <div className="w-full h-auto flex justify-center items-center">
      <iframe
        width="100%" // Ensure the video takes full width
        height="450" // Adjust the height as per your design requirements
        src={video.src}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-md"
      ></iframe>
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
    slidesToShow: 3, // Show 3 videos per slide on larger screens
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
    <div className="flex flex-col items-center justify-center bg-[#f5fdff] py-6 px-5 sm:py-8 sm:px-20 lg:py-12 opacity-4">
      {/* Video Carousel Container */}
      <div className="flex justify-center items-center flex-col p-4 sm:p-6 lg:p-8">
        {/* Heading Section */}
        <h2 className="bg-headline-gradient text-transparent bg-clip-text text-[54px] sm:text-[36px] md:text-[48px] lg:text-[54px] font-barlow font-bold text-center mb-6 sm:mb-6 lg:mb-8 sm:px-10">
          Why people trust Qwiklif?
        </h2>
        {/* Card Slider */}
        <div className="w-full max-w-7xl px-2 sm:px-4">
          <Slider {...settings} className="w-full">
            {videos.map((video) => (
              <div
                key={video.id}
                className="flex flex-col items-center p-2 sm:p-3"
              >
                <VideoPlayer video={video} />
              </div>
            ))}
          </Slider>
        </div>
        {/* "See More" Button */}
        <button className="w-[200px] sm:w-[220px] lg:w-[240px] h-[50px] sm:h-[60px] lg:h-[70px] bg-button-gradient mt-6 sm:mt-8  text-white flex justify-center items-center rounded-md text-[22px] sm:text-[20px] lg:text-[28px] cursor-pointer hover:shadow-lg transition-shadow duration-300 font-barlow font-semibold">
          View More
        </button>
      </div>
    </div>
  );
};

export default WhychooseQwiklif;

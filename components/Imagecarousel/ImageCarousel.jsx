import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
  };

  return (
    <Slider {...settings}>
      {images?.map((imageUrl, index) => (
        <div key={index}>
          <div
            className="w-full flex justify-center rounded-lg font-sans z-1 h-[550px] sm:h-full
          "
          >
            <Image
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              width={3000} // Set the desired width
              height={100}
              style={{ zIndex: 1 }}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ImageCarousel = ({images}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-play
    autoplaySpeed: 1200,
  };

  return (
    <Slider {...settings}>
      {images.map((imageUrl, index) => (
        <div key={index}>
          <div class="w-full flex justify-center rounded-lg">
            <Image
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              width={1900} // Set the desired width
              height={200}
              objectFit="cover"
              // style={{borderRadius: "60px"}}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;

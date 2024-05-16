import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

const AutoCarousel = ({ images, autoplaySpeed }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: autoplaySpeed || 2000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={image}
            alt={`slide ${index}`}
            height={40}
            className="rounded-xl w-full h-[160px]"
          />
        </div>
      ))}
    </Slider>
  );
};

export default AutoCarousel;

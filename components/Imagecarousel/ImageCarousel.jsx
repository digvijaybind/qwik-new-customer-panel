import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className='relative w-full'>
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <div className="w-full flex justify-center rounded-lg font-sans">
              <Image
                src={imageUrl}
                alt={`Slide ${index + 1}`}
                objectFit="cover"
                style={{ zIndex: 1 }}
                className='w-full h-[75vh]'
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;

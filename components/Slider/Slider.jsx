import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {services.map((item, index) => {
          return (
            <div
              key={index}
              class="grid gap-4 grid-cols-3 px-20 mb-[30px] mt-[20px] sm:grid-cols-1 sm:gap-4 sm:px-5"
            >
              <Servicecard
                title={item.title}
                descriaption={item.descriaption}
                imageUrl={item.image}
                index={index}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderComponent;

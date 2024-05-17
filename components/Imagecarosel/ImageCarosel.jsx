import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import CommericialAirline1 from '../../public/images/commerialImages/scheduled-flight-icu.png';
import CommericialAirline2 from '../../public/images/commerialImages/Strectres.jpg';
const ImageCarosel = () => {
  return (
    <div className="">
      <Carousel
        showArrows={true}
        autoplay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={3000}
        stopOnHover={true}
        dynamicHeight={40}
      >
        <div>
          <img
            src={CommericialAirline1}
            alt="Commericial Airline medical transfer"
          />
        </div>
        <div>
          <img
            src={CommericialAirline2}
            alt="Commericial Airline medical transfer"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarosel;

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; //
import CommericialAirline1 from "../../public/images/commerialImages/scheduledFlight.png";
import CommericialAirline2 from "../../public/images/commerialImages/Strectres.jpg";
const ImageCarosel = () => {
  return (
    <div className="w-full sm:w-full">
      <Carousel
        showArrows={true}
        autoplay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={3000}
        stopOnHover={true}
        dynamicHeight={60}
      >
        <div>
          <img
            src="/images/commerialImages/scheduledFlight.png"
            alt="Commericial Airline medical transfer"
            className="h-[100px] w-full"
          />
        </div>
        <div>
          <img
            src="/images/commerialImages/Strectres.jpg"
            alt="Commericial Airline medical transfer"
            className="h-[100px] w-full"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarosel;

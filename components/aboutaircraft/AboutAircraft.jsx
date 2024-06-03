import React from 'react';
import AboutAircraftimage from '../../public/images/Homepage/about.png';
import Image from 'next/image';
const AboutAircraft = React.memo(() => {
  return (
    <div>
      <div className="xs:px-4 grid grid-cols-2 gap-10 sm:grid-cols-1 mb-16 font-sans">
        <Image
          src={AboutAircraftimage}
          height={460}
          width={620}
          className="rounded-lg"
        />

        <div className="flex flex-col gap-3">
          <div className="font-sans text-4xl sm:text-2xl font-extrabold  text-wrap sm:px-4 sm:text-center ">
            Fastest{' '}
            <span className=" text-[#11B6E3] sm:mr-2">Air Ambulance</span>
            <br className="sm:hidden" />
            Services
          </div>
          <div className="text-[#7A7A7A] text-[16px] font-sans text-justify">
            Qwiklif Air Ambulance Service is your trusted partner for urgent
            International Air Ambulance Transportation worldwide. With a
            dedicated team of skilled professionals and state-of-the-art
            aircraft, we specialize in swift and safe medical transfers. With
            over 15+ Professional Doctors and paramedics and access to air
            ambulance aircraft worldwide in 20+ countries qwiklif Air Ambulance
            is ready for rapid response, We find the nearest aircraft available
            to you for quick response and affordable pricing, compare air
            ambulance prices from other air operators across the world.
          </div>
          <div className="text-[#7A7A7A] text-[16px] font-sans">
            We are a worldwide air ambulance company with emergency medical
            transport experience. Through our international air ambulance
            service, we can arrange quick, efficient medical evacuation flights
            worldwide to ensure you get where you need to, safely and quickly.
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutAircraft;

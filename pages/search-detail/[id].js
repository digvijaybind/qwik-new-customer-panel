'use client';

import { FaUserNurse } from 'react-icons/fa6';
import { BsSpeedometer } from 'react-icons/bs';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { GiWeight } from 'react-icons/gi';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPersonMilitaryPointing } from 'react-icons/fa6';
import { IoIosAirplane, IoIosArrowDroprightCircle } from 'react-icons/io';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SearchHeader = () => {
  return (
    <div
      className="flex flex-col items-start justify-center bg-no-repeat bg-cover bg-center text-white h-[60dvh] px-36"
      style={{ backgroundImage: "url('/images/search-detail-bg.png')" }}
    >
      <h2 className="text-[2.2rem] font-extrabold mb-0.5 drop-shadow">
        Search Result
      </h2>
      <p className="text-sm">The new generation of private jets</p>
    </div>
  );
};

const JourneyDetails = () => {
  return (
    <>
      <h3 className="font-bold">Mumbai to Chennai</h3>
      <p className="font-bold text-[0.85rem]">7 Hrs 50 Min</p>
      <p className="my-3">6 Passengers | 30 March, 2024</p>
      <div className="border-b border-t my-2">
        <p className="flex justify-between py-3">
          <span>Flying Cost</span>
          <span>₹ 11,26,217</span>
        </p>
        <p className="flex justify-between py-3">
          <span>GST (18%)</span>
          <span>₹ 2,02,719</span>
        </p>
      </div>
      <p className="flex justify-between items-center py-1 font-bold">
        <span>Estimated Cost</span>
        <span className="text-base">₹ 13,28,936</span>
      </p>
      <div className="rounded-md bg-gray-300 p-2 my-4">
        <span className="font-bold">Qwiklif</span>, grants you the opportunity
        to enjoy the luxury and convenience of flying private at commercial
        prices.
      </div>
      <div className="flex flex-col mt-5">
        <input
          name="username"
          className="border-b mb-5 px-2 py-1"
          placeholder="Your Name"
        />
        <input
          name="username"
          className="border-b mb-5 px-2 py-1"
          placeholder="Phone"
        />
        <input
          name="username"
          className="border-b mb-5 px-2 py-1"
          placeholder="Email"
        />
        <button className="bg-primary rounded-md font-medium p-2 text-sm mt-2">
          Enquire Now
        </button>
      </div>
    </>
  );
};

const FlightImages = () => {
  return (
    <>
      <div className="mb-2">
        <Slider
          className="customCarousel"
          arrows={true}
          // dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        >
          <img
            src="/images/search-detail/VT-VBSext.png"
            className="object-cover object-center h-[40dvh] w-full rounded-md overflow-hidden"
          />
          <img
            src="/images/search-detail/VT-VBSlopa.png"
            className="object-cover object-center h-[40dvh] w-full rounded-md overflow-hidden"
          />
          <img
            src="/images/search-detail/VT-VBSint.png"
            className="object-cover object-center h-[40dvh] w-full rounded-md overflow-hidden"
          />
        </Slider>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <img
          src="/images/search-detail/VT-VBSext.png"
          className="object-cover object-top h-[80%] w-full rounded-md overflow-hidden"
        />
        <img
          src="/images/search-detail/VT-VBSlopa.png"
          className="object-cover object-top h-[80%] w-full rounded-md overflow-hidden"
        />
        <img
          src="/images/search-detail/VT-VBSint.png"
          className="object-cover object-top h-[80%] w-full rounded-md overflow-hidden"
        />
      </div>
      <div className="bg-gray-200 rounded-md p-3 grid grid-cols-5 text-sm">
        <div className="flex items-center gap-1">
          <MdOutlineAirlineSeatReclineExtra className="text-base text-Bluedark" />
          6
        </div>
        <div className="flex items-center gap-1">
          <GiWeight className="text-base text-Bluedark" />
          400 Kgs.
        </div>
        <div className="flex items-center gap-1">
          <FaLocationDot className="text-base text-Bluedark" />
          Pune
        </div>
        <div className="flex items-center gap-1">
          <FaPersonMilitaryPointing className="text-base text-Bluedark" /> 6
        </div>
        <div className="flex items-center gap-1">
          <BsSpeedometer className="text-base text-Bluedark" />
          400
        </div>
        <div className="flex items-center gap-1">
          <FaUserNurse className="text-base text-Bluedark" />
          Yes
        </div>
      </div>
    </>
  );
};

const FlightDetails = () => {
  return (
    <div
      className="rounded-md p-5 text-[0.9rem]"
      style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
    >
      <h2 className="text-base font-bold">Flight Details</h2>
      <div className="mt-2 mb-3 py-3 border-b-2 border-gray-100">
        <p className="flex justify-between text-[0.85rem]">
          <span>3/30/2024</span>
          <span>3/30/2024</span>
        </p>
        <p className="flex justify-between text-[0.85rem]">
          <span>9:50:00 PM</span>
          <span>11:00:00 PM</span>
        </p>
        <div className="flex justify-between items-center w-full mt-3">
          <span className="font-bold text-base">Pune</span>
          <div className="relative">
            <div className="bg-gray-300 h-[2px] w-72">
              <IoIosAirplane className="text-primary bg-primary/20 rounded-full p-1 text-2xl absolute left-1/2 top-1/2 -translate-y-1/2" />
            </div>
          </div>
          <span className="font-bold text-base">Mumbai</span>
        </div>
        <p className="flex justify-between">
          <span className="max-w-40 text-start">Lohegaon Airport</span>
          <span className="max-w-40 text-end">
            Chhatrapati Shivaji International Airport
          </span>
        </p>
      </div>
      <div className="my-3 py-3 border-b-2 border-gray-100">
        <p className="flex justify-between text-[0.85rem]">
          <span>3/30/2024</span>
          <span>3/30/2024</span>
        </p>
        <p className="flex justify-between text-[0.85rem]">
          <span>9:50:00 PM</span>
          <span>11:00:00 PM</span>
        </p>
        <div className="flex justify-between items-center w-full mt-3">
          <span className="font-bold text-base">Pune</span>
          <div className="relative">
            <div className="bg-gray-300 h-[2px] w-72">
              <IoIosAirplane className="text-primary bg-primary/20 rounded-full p-1 text-2xl absolute left-1/2 top-1/2 -translate-y-1/2" />
            </div>
          </div>
          <span className="font-bold text-base">Mumbai</span>
        </div>
        <p className="flex justify-between">
          <span className="max-w-40 text-start">Lohegaon Airport</span>
          <span className="max-w-40 text-end">
            Chhatrapati Shivaji International Airport
          </span>
        </p>
      </div>
      <div className="my-3 py-3 border-b-2 border-gray-100">
        <p className="flex justify-between text-[0.85rem]">
          <span>3/30/2024</span>
          <span>3/30/2024</span>
        </p>
        <p className="flex justify-between text-[0.85rem]">
          <span>9:50:00 PM</span>
          <span>11:00:00 PM</span>
        </p>
        <div className="flex justify-between items-center w-full mt-3">
          <span className="font-bold text-base">Pune</span>
          <div className="relative">
            <div className="bg-gray-300 h-[2px] w-72">
              <IoIosAirplane className="text-primary bg-primary/20 rounded-full p-1 text-2xl absolute left-1/2 top-1/2 -translate-y-1/2" />
            </div>
          </div>
          <span className="font-bold text-base">Mumbai</span>
        </div>
        <p className="flex justify-between">
          <span className="max-w-40 text-start">Lohegaon Airport</span>
          <span className="max-w-40 text-end">
            Chhatrapati Shivaji International Airport
          </span>
        </p>
      </div>
    </div>
  );
};

const CostDetails = () => {
  return (
    <div
      className="flex flex-col rounded-md p-5 text-[0.9rem]"
      style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
    >
      <h2 className="text-base font-bold mb-4">Cost Details</h2>
      <div className="flex flex-col gap-3 text-[0.9rem]">
        <p className="flex justify-between">
          <span>Flight Cost (@ 1,26,500 per hour)</span>
          <span>₹ 9,00,833</span>
        </p>
        <p className="flex justify-between">
          <span>Airport handling charges</span>
          <span>₹ 1,23,000</span>
        </p>
        <p className="flex justify-between">
          <span>Sub total</span>
          <span>₹ 11,26,217</span>
        </p>
        <p className="flex justify-between">
          <span>GST (18%)</span>
          <span>₹ 2,02,719</span>
        </p>
        <p className="flex justify-between items-center">
          <span>Estimated cost</span>
          <span className='font-bold text-base'>₹ 13,28,936</span>
        </p>
      </div>
      <button className="border border-primary text-primary rounded-md p-2 text-sm mt-10 hover:bg-primary hover:text-white">
        Download Proforma Invoice
      </button>
    </div>
  );
};

const SearchDetails = () => {
  return (
    <div className="">
      <SearchHeader />
      <div className="px-36">
        <p className="text-sm my-3">
          Home Search / List /{' '}
          <span className="font-medium">Search Result</span>
        </p>
        <div className="flex gap-5 my-3">
          <div className="w-8/12">
            <FlightImages />
          </div>
          <div className="w-4/12 border border-gray-300 border-dashed rounded-md p-4 text-[0.9rem]">
            <JourneyDetails />
          </div>
        </div>
        <div className="flex gap-5 mt-8 mb-8">
          <div className="w-6/12">
            <FlightDetails />
          </div>
          <div className="w-6/12">
            <CostDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDetails;

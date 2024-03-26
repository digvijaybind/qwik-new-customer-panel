'use client';

import { FaUserNurse } from 'react-icons/fa6';
import { BsSpeedometer } from 'react-icons/bs';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { GiWeight } from 'react-icons/gi';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPersonMilitaryPointing } from 'react-icons/fa6';
import { IoIosAirplane } from 'react-icons/io';
import styles from "./Avia.module.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400','500','600','700'],
  subsets: ['latin'],
});
 
const DedicatedeHeader = () => {
  return (
    <div
      className={`${poppins.className} flex flex-col items-start justify-center bg-no-repeat bg-cover bg-center text-white sm:h-[20vh] h-[60dvh] sm:px-10 px-36`}
      style={{ backgroundImage: "url('/images/search-detail-bg.png')" }}
    >
      <h2 className="sm:text-3xl text-[2.2rem] font-extrabold mb-0.5 drop-shadow">
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
        <button className="bg-[#0FE7E7] rounded-md font-medium p-2 text-sm mt-2">
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
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        >
          <img
            src="/images/C90-airtransfer/C90-airtransfer-one.jpg"
            className="object-cover object-center sm:h-[20vh] h-[40dvh] w-full rounded-md overflow-hidden"
          />
          <img
            src="/images/C90-airtransfer/C90-airtransfer-two.jpg"
            className="object-cover object-center sm:h-[20vh] h-[40dvh] w-full rounded-md overflow-hidden"
          />
          <img
            src="/images/C90-airtransfer/C90-airtransfer-three.jpg"
            className="object-cover object-center sm:h-[20vh] h-[40dvh] w-full rounded-md overflow-hidden"
          />
          <img
            src="/images/C90-airtransfer/C90-airtransfer-four.jpg"
            className="object-cover object-center sm:h-[20vh] h-[40dvh] w-full rounded-md overflow-hidden"
          />
          <img
            src="/images/C90-airtransfer/C90-airtransfer-five.jpg"
            className="object-cover object-center sm:h-[20vh] h-[40dvh] w-full rounded-md overflow-hidden"
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

const Flightchallenger605 = () => {
  return (
    <>
      <div className="mb-2">
        <Slider
          className="customCarousel"
          arrows={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        >
          <img
            src="/images/C90-airtransfer/challenger-605-airambulance-first.jpg"
            className="object-cover object-center sm:h-[20vh] h-[40dvh] w-full rounded-md overflow-hidden"
          />
          <img
            src="/images/C90-airtransfer/challenger-605-airambulance-second.jpg"
            className="object-cover object-center sm:h-[20vh] h-[40dvh] w-full rounded-md overflow-hidden"
          />
          <img
            src="/images/C90-airtransfer/C90-airtransfer-three.jpg"
            className="object-cover object-center sm:h-[20vh] h-[40dvh] w-full rounded-md overflow-hidden"
          />
          <img
            src="/images/C90-airtransfer/C90-airtransfer-four.jpg"
            className="object-cover object-center sm:h-[20vh] h-[40dvh] w-full rounded-md overflow-hidden"
          />
          <img
            src="/images/C90-airtransfer/C90-airtransfer-five.jpg"
            className="object-cover object-center sm:h-[20vh] h-[40dvh] w-full rounded-md overflow-hidden"
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
      style={{ boxShadow: '#000 0px 0px 10px 0px' }}
    >
      <h2 className="text-base font-bold">Flight Details</h2>
      <div className="mt-2 mb-3 py-3  border-gray-100">
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
            <div className="bg-gray-300 flex flex-col items-center h-[2px] sm:w-36 w-72">
              <p className='py-[10px]'>Empty Leg</p>
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
      {/* <div className="my-3 py-3 border-b-2 border-gray-100">
        <p className="flex justify-between text-[0.85rem]">
          <span>3/30/2024</span>
          <span>3/30/2024</span>
        </p>
        <p className="flex justify-between text-[0.85rem]">
          <span>9:50:00 PM</span>
          <span>11:00:00 PM</span>
        </p> */}
        {/* <div className="flex justify-between items-center w-full mt-3">
          <span className="font-bold text-base">Pune</span>
          <div className="relative">
            <div className="bg-gray-300 h-[2px] sm:w-36 w-72">
              <IoIosAirplane className="text-primary bg-primary/20 rounded-full p-1 text-2xl absolute left-1/2 top-1/2 -translate-y-1/2" />
            </div>
          </div>
          <span className="font-bold text-base">Mumbai</span>
        </div> */}
        {/* <p className="flex justify-between">
          <span className="max-w-40 text-start">Lohegaon Airport</span>
          <span className="max-w-40 text-end">
            Chhatrapati Shivaji International Airport
          </span>
        </p>
      </div> */}
      {/* <div className="my-3 py-3 border-b-2 border-gray-100">
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
            <div className="bg-gray-300 h-[2px] sm:w-36 w-72">
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
      </div> */}
    </div>
  );
};
const CostDetails = () => {
  return (
    <div
      className={`flex flex-col rounded-md p-5 text-[0.9rem] shadow lg ${styles.Shadow}`}
    >
      <h2 className="text-base font-bold mb-4">Cost Details</h2>
      <div className="flex flex-col gap-3 text-[0.9rem]">
        <p className="flex justify-between">
          <span>Flight Cost (@ 1,26,500 per hour)</span>
          <span>₹ 9,00,833</span>
        </p>
        {/* <p className="flex justify-between">
          <span>Airport handling charges</span>
          <span>₹ 1,23,000</span>
        </p>
        <p className="flex justify-between">
          <span>Sub total</span>
          <span>₹ 11,26,217</span>
        </p> */}
        {/* <p className="flex justify-between">
          <span>GST (18%)</span>
          <span>₹ 2,02,719</span>
        </p> */}
        <p className="flex justify-between items-center">
          <span>Estimated cost</span>
          <span className="font-bold text-base">₹ 13,28,936</span>
        </p>
      </div>
      <button className="border border-[#0FE7E7] text- rounded-md p-2 text-sm mt-10 hover:bg-[#0FE7E7] hover:text-white">
        Pay Now
      </button>
    </div>
  );
};
const Airtransfer = () => {
  return (
    <div
      className={`px-[30px] w-[90%] my-[50px] m-auto py-[50px] bg-white rounded-[8px] shadow-lg ${styles.Shadow}`}
    >
      <div className="flex flex-col px-[50px] mb-10">
        <h1 className="text-center font-bold pb-[30px] text-[black] text-[25px]">
          How we do Medical transfer
        </h1>
        <div className="rounded-lg  bg-[#0FE7E7] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
          <h1 className="text-[20px] font-semibold">
            {' '}
            Step1 :-Assessment and Coordination
          </h1>
          <p className="text-[16px] font-medium">
            The need for an air ambulance transfer is typically assessed by
            medical professionals at the referring facility or by emergency
            responders at the scene of an incident. Once the decision is made to
            transfer the patient by air ambulance, coordination begins between
            the referring facility, the receiving facility, and the air
            ambulance service provider.
          </p>
        </div>
        <div className="rounded-lg  bg-[#0FE7E7] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
          <h1 className="text-[20px] font-semibold">
            {' '}
            Step 2 :- Dispatch and Arrival of Air Ambulance
          </h1>
          <p className="text-[16px] font-medium">
            Medical staff at the referring facility prepare the patient for
            transfer, which may include stabilizing their condition,
            administering necessary medications, and ensuring they are safely
            packaged for transport.
          </p>
        </div>
        <div className="rounded-lg  bg-[#0FE7E7] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
          <h1 className="text-[20px] font-semibold">
            {' '}
            Step 3:- Dispatch and Arrival of Air Ambulance
          </h1>
          <p className="text-[16px] font-medium">
            Once the air ambulance arrives, the patient is carefully transferred
            from the referring facility to the aircraft. The patient is secured
            in the aircraft and connected to any necessary medical equipment.
          </p>
        </div>
        <div className="rounded-lg  bg-[#0FE7E7] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
          <h1 className="text-[20px] font-semibold">
            {' '}
            Step 3:- Transfer to the Air Ambulance
          </h1>
          <p className="text-[16px] font-medium">
            Once the air ambulance arrives, the patient is carefully transferred
            from the referring facility to the aircraft. The patient is secured
            in the aircraft and connected to any necessary medical equipment.
          </p>
        </div>
        <div className="rounded-lg  bg-[#0FE7E7] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
          <h1 className="text-[20px] font-semibold">
            {' '}
            Step 4:- In-flight Care
          </h1>
          <p className="text-[16px] font-medium">
            During the flight, the medical crew provides continuous care to the
            patient, including monitoring vital signs, administering
            medications, and managing any medical emergencies that may arise.
          </p>
        </div>
        <div className="rounded-lg  bg-[#0FE7E7] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
          <h1 className="text-[20px] font-semibold">
            {' '}
            Step 5:- Arrival at the Receiving Facility
          </h1>
          <p className="text-[16px] font-medium">
            Upon arrival at the receiving facility, the patient is safely
            transferred from the air ambulance to the facility&apos;s medical
            staff. The receiving facility&apos;s medical staff assumes care of
            the patient and continues treatment as necessary.
          </p>
        </div>{' '}
        <div className="rounded-lg  bg-[#0FE7E7] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
          <h1 className="text-[20px] font-semibold">
            {' '}
            Step 6:- Post-transfer Documentation
          </h1>
          <p className="text-[16px] font-medium">
            After the transfer is complete, the air ambulance service provider
            and the referring and receiving facilities may exchange medical
            records and documentation related to the transfer for continuity of
            care.
          </p>
        </div>
        <div className="rounded-lg  bg-[#0FE7E7] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
          <h1 className="text-[20px] font-semibold">
            {' '}
            Step 7:- Follow-up Care
          </h1>
          <p className="text-[16px] font-medium">
            Once the patient has been transferred, follow-up care and treatment
            are provided as needed based on the patient&apos;s condition and the
            recommendations of the medical team.
          </p>
        </div>
      </div>
    </div>
  );
};

const AviapageDetails = () => {
  return (
    <div className={`${poppins.className}`}>
      <DedicatedeHeader />
      <div className="sm:px-20 lg:px-45 my-[50px] md:px-30 xl:40 2xl:30">
        {/* <p className="text-sm my-3">
          Home Search / List /{' '}
          <span className="font-medium">Search Result</span>
        </p> */}
        <div className="flex sm:flex-col gap-5 my-3 px-[5%]">
          <div className="sm:w-full w-8/12">
            <FlightImages />
          </div>
          <div className={`sm:w-full w-4/12 border border-gray-300 shadow-lg rounded-[8px] p-4 text-[0.9rem] ${styles.Shadow}`}>
            <JourneyDetails />
          </div>
        </div>
        <div className="flex sm:flex-col gap-5 mt-8 mb-8 px-[5%]">
          <div className="sm:w-full w-6/12">
            <FlightDetails />
          </div>
          <div className="sm:w-full w-6/12">
            <CostDetails />
          </div>
        </div>
        <Airtransfer />
      </div>
    </div>
  );
};
export default AviapageDetails;

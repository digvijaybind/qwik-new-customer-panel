'use client';

import { FaUserNurse } from 'react-icons/fa6';
import { BsSpeedometer } from 'react-icons/bs';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { GiWeight } from 'react-icons/gi';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPersonMilitaryPointing } from 'react-icons/fa6';
import { IoIosAirplane } from 'react-icons/io';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
const DedicatedeHeader = () => {
  return (
    <div
      className="flex flex-col items-start justify-center bg-no-repeat bg-cover bg-center text-white sm:h-[20vh] h-[60dvh] sm:px-10 px-36"
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
            className="object-cover object-center sm:h-[20vh] h-[40dvh] w-full rounded-md overflow-hidden"
          />
          <img
            src="/images/search-detail/VT-VBSlopa.png"
            className="object-cover object-center sm:h-[20vh] h-[40dvh] w-full rounded-md overflow-hidden"
          />
          <img
            src="/images/search-detail/VT-VBSint.png"
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
          <span className="font-bold text-base">₹ 13,28,936</span>
        </p>
      </div>
      <button className="border border-primary text-primary rounded-md p-2 text-sm mt-10 hover:bg-primary hover:text-white">
        Download Proforma Invoice
      </button>
    </div>
  );
};
const Airtransfer = () => {
  return (
    <div className="flex flex-col px-[50px] mb-10">
      <h1 className="text-center font-bold text-[black] text-[25px]">
        How we do Medical transfer
      </h1>
      <div className="rounded-lg shadow-lg bg-white p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
        <h1 className="text-[20px] font-semibold">
          {' '}
          Step1 :-Assessment and Coordination
        </h1>
        <p className="text-[16px] font-medium">
          The need for an air ambulance transfer is typically assessed by
          medical professionals at the referring facility or by emergency
          responders at the scene of an incident. Once the decision is made to
          transfer the patient by air ambulance, coordination begins between the
          referring facility, the receiving facility, and the air ambulance
          service provider.
        </p>
      </div>
      <div className="rounded-lg shadow-lg bg-white p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
        <h1 className="text-[20px] font-semibold">
          {' '}
          Step 2 :- Dispatch and Arrival of Air Ambulance
        </h1>
        <p className="text-[16px] font-medium">
          Medical staff at the referring facility prepare the patient for
          transfer, which may include stabilizing their condition, administering
          necessary medications, and ensuring they are safely packaged for
          transport.
        </p>
      </div>
      <div className="rounded-lg shadow-lg bg-white p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
        <h1 className="text-[20px] font-semibold">
          {' '}
          Step 3:- Dispatch and Arrival of Air Ambulance
        </h1>
        <p className="text-[16px] font-medium">
          Once the air ambulance arrives, the patient is carefully transferred
          from the referring facility to the aircraft. The patient is secured in
          the aircraft and connected to any necessary medical equipment.
        </p>
      </div>
      <div className="rounded-lg shadow-lg bg-white p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
        <h1 className="text-[20px] font-semibold">
          {' '}
          Step 3:- Transfer to the Air Ambulance
        </h1>
        <p className="text-[16px] font-medium">
          Once the air ambulance arrives, the patient is carefully transferred
          from the referring facility to the aircraft. The patient is secured in
          the aircraft and connected to any necessary medical equipment.
        </p>
      </div>
      <div className="rounded-lg shadow-lg bg-white p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
        <h1 className="text-[20px] font-semibold"> Step 4:- In-flight Care</h1>
        <p className="text-[16px] font-medium">
          During the flight, the medical crew provides continuous care to the
          patient, including monitoring vital signs, administering medications,
          and managing any medical emergencies that may arise.
        </p>
      </div>
      <div className="rounded-lg shadow-lg bg-white p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
        <h1 className="text-[20px] font-semibold">
          {' '}
          Step 5:- Arrival at the Receiving Facility
        </h1>
        <p className="text-[16px] font-medium">
          Upon arrival at the receiving facility, the patient is safely
          transferred from the air ambulance to the facility&apos;s medical
          staff. The receiving facility&apos;s medical staff assumes care of the
          patient and continues treatment as necessary.
        </p>
      </div>{' '}
      <div className="rounded-lg shadow-lg bg-white p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
        <h1 className="text-[20px] font-semibold">
          {' '}
          Step 6:- Post-transfer Documentation
        </h1>
        <p className="text-[16px] font-medium">
          After the transfer is complete, the air ambulance service provider and
          the referring and receiving facilities may exchange medical records
          and documentation related to the transfer for continuity of care.
        </p>
      </div>
      <div className="rounded-lg shadow-lg bg-white p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
        <h1 className="text-[20px] font-semibold"> Step 7:- Follow-up Care</h1>
        <p className="text-[16px] font-medium">
          Once the patient has been transferred, follow-up care and treatment
          are provided as needed based on the patient&apos;s condition and the
          recommendations of the medical team.
        </p>
      </div>
    </div>
  );
};

const AmadeuspageDetails = () => {
  const router = useRouter();
  console.log('router.query', router.query);
  const { id } = router.query;
  console.log('id11', id);
  const [results, setResults] = useState([]);
  const [Error, setError] = useState('');
  // const [locationData, setLocationData] = useState({});
  const [totalTravelDuration, setTotalTravelDuration] = useState('');
  const [techStops, setTechStops] = useState([]);
  const [availableticket, setavailableticket] = useState('');
  const [airlineName, setairlineName] = useState('');
  const [aircraftDataLoading, setAircraftDataLoading] = useState(false);
  const [Aircraftdata, setAircraftData] = useState([]);
  let locationData = {};
  const airlineNames = {
    AC: 'Air Canada',
    '6E': 'IndiGo',
    AF: 'Air France',
    AI: 'Air India',
    AA: 'American Airlines',
    BA: 'British Airways',
    CX: 'Cathay Pacific',
    DL: 'Delta Air Lines',
    EK: 'Emirates',
    EY: 'Etihad Airways',
    KL: 'KLM Royal Dutch Airlines',
    LH: 'Lufthansa',
    QF: 'Qantas',
    QR: 'Qatar Airways',
    SQ: 'Singapore Airlines',
    TK: 'Turkish Airlines',
    UA: 'United Airlines',
    VS: 'Virgin Atlantic',
    THY: 'Turkish Airlines',
    WY: 'Oman Air',
    OMA: 'Oman Air',
    SAA: 'South African Airways',
    ANA: 'All Nippon Airways',
    PAL: 'Philippine Airlines',
    VIR: 'Virgin Atlantic',
    MAU: 'Air Mauritius',
    MH: 'Malaysia Airlines',
    SV: 'Saudia',
  };

  // const AllAircraftid = () => {
  //   const id = results?.aircraft?.id;
  //   console.log('id line 166', id);
  //   setAircraftid(id);
  // };
  // const getLocationData = () => {
  //   const segments = results?.aircraft?.itineraries[0]?.segments ?? [];
  //   if (segments?.length > 1) {
  //     setLocationData({
  //       departureLocation: segments[0]?.departure?.iataCode,
  //       departureTime: segments[0]?.departure?.at,
  //       destinationLocation: segments.at(-1)?.arrival?.iataCode,
  //       destinationTime: segments.at(-1)?.arrival?.at,
  //     });
  //   } else {
  //     setLocationData({
  //       departureLocation: segments[0]?.departure?.iataCode,
  //       departureTime: segments[0]?.departure?.at,
  //       destinationLocation: segments[0]?.arrival?.iataCode,
  //       destinationTime: segments[0]?.arrival?.at,
  //     });
  //   }
  // };
  // const parseISO8601Duration = (durationString) => {
  //   let TimeDuration = [];
  //   const regex =
  //     /P(?:([0-9]+)Y)?(?:([0-9]+)M)?(?:([0-9]+)D)?(?:T(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+)S)?)?/;

  //   const matches = (durationString || '').match(regex);
  //   // const matches = true;
  //   if (!matches) {
  //     throw new Error('Invalid ISO8601 duration format');
  //   }

  //   const [, years, months, days, hours, minutes, seconds] =
  //     matches.map(Number);

  //   const totalSeconds = seconds || 0;
  //   const totalMinutes = totalSeconds / 60 + (minutes || 0);
  //   const totalHours = totalMinutes / 60 + (hours || 0);
  //   const totalDays = totalHours / 24 + (days || 0);

  //   TimeDuration.push({
  //     years: years || 0,
  //     months: months || 0,
  //     days: days || 0,
  //     hours: hours || 0,
  //     minutes: minutes || 0,
  //     seconds: seconds || 0,
  //     totalDays,
  //     totalHours,
  //     totalMinutes,
  //     totalSeconds,
  //   });
  //   console.log('TimeDuration line 196', TimeDuration);
  //   return TimeDuration;
  // };

  // const AllsingleId = () => {
  //   const id = results?.aircraft?.id;

  //   setAircraftid(id);
  // };

  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   const month = date.toLocaleString('default', { month: 'long' });
  //   const year = date.getFullYear();
  //   console.log('date month and year', `${date.getDate()} ${month} ${year}`);
  //   return `${date.getDate()} ${month} ${year}`;
  // };
  // const TicketAvailable = () => {
  //   const ticketDate = availticket ?? [];
  //   console.log(' ticketDate line 125', ticketDate);
  //   setavailableticket(formatDate(ticketDate));
  // };
  // const AirlineImage = () => {
  //   const airlineName =
  //     results?.aircraft?.itineraries[0]?.segments[0]?.carrierCode ?? [];
  //   const airlineImage = AirlineImages[airlineName];
  //   setairlineImage(airlineImage);
  // };
  // const AirlineName = () => {
  //   const airlineName =
  //     results?.aircraft?.itineraries[0]?.segments[0]?.carrierCode ?? [];
  //   console.log(' airlineName  line 125', airlineName);
  //   const airline = renderAirlineName(airlineName);
  //   setairlineName(airline);
  // };

  // const getTravelDuration = () => {
  //   const timeduration = results?.aircraft?.itineraries[0]?.duration ?? [];

  //   // let flyingTime = parseISO8601Duration(timeduration);
  //   let flyingTime = timeduration;
  //   console.log('flyingTime  line 209', flyingTime);
  //   setTotalTravelDuration(flyingTime);
  // };

  // const getTechStops = () => {
  //   const stops = [];
  //   const segments = results?.aircraft?.itineraries[0]?.segments ?? [];
  //   if (segments?.length > 1) {
  //     segments?.forEach((item, index) => {
  //       if (index !== segments?.length - 1) {
  //         stops.push(item?.arrival?.iataCode);
  //       }
  //     });
  //   }
  //   setTechStops(stops);
  // };

  // const formatTime = (date) => {
  //   return new Date(
  //     (typeof date === 'string' ? new Date(date) : date).toLocaleString(
  //       'en-US',
  //       { timeZone: currentTimeZone }
  //     )
  //   );
  // };

  const renderAirlineName = (carrierCode) => {
    return airlineNames[carrierCode] || 'Unknow Airline';
  };

  const fetchData = async () => {
    try {
      console.log('id line 450', id);
      setAircraftDataLoading(true);
      const response = await axios.get(
        `http://localhost:8000/customer/aircraft/${id}`
      );

      console.log('response data line 451', response.data.specificAircraft);
      if (response) {
        // setResults(response.data.specificAircraft);

        // setAircraftData(
        //   response.data.specificAircraft.aircraft?.itineraries[0]?.segments
        // );
        // setSelectedCurrency('EUR');
        const segments =
          response.data.specificAircraft?.aircraft?.itineraries[0]?.segments;
        console.log('segment line 632', segments);
        locationData.push({
          departureLocation: segments[0]?.departure?.iataCode,
          departureTime: segments[0]?.departure?.at,
          destinationLocation: segments.at(-1)?.arrival?.iataCode,
          destinationTime: segments.at(-1)?.arrival?.at,
        });
        // if (segments?.length > 1) {

        // } else {
        //   setLocationData({
        //     departureLocation: segments[0]?.departure?.iataCode,
        //     departureTime: segments[0]?.departure?.at,
        //     destinationLocation: segments[0]?.arrival?.iataCode,
        //     destinationTime: segments[0]?.arrival?.at,
        //   });
        // }

        const airlineName =
          aircraftData?.aircraft?.itineraries[0]?.segments[0]?.carrierCode ??
          [];
        console.log('airlineName  line 125', airlineName);
        const airline = renderAirlineName(airlineName);
        setairlineName(airline);

        console.log('results line 460', results);
      } else {
        setError('error');
        setResults([]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  console.log('segments line 636', Aircraftdata);
  console.log('destination location', locationData);
  const getLocation = () => {
    const segments = results.aircraft?.itineraries[0]?.segments ?? [];
  };
  useEffect(() => {
    fetchData();
    // getLocation();
    // getLocationData();
    // getTravelDuration();
    // getTechStops();
    // TicketAvailable();
    // AirlineImage();
    // AirlineName();
  }, []);
  return (
    <div className="">
      <DedicatedeHeader />
      <div className="sm:px-20 lg:px-45 md:px-30 xl:40 2xl:30">
        <p className="text-sm my-3">
          <span className="font-medium">Search Result</span>
        </p>
        <div className="flex sm:flex-col gap-5 my-3 px-[20px]">
          <div className="sm:w-full w-8/12">
            <FlightImages />
          </div>
          <div className="sm:w-full w-4/12 border border-gray-300 border-dashed rounded-md p-4 text-[0.9rem]">
            <JourneyDetails />
          </div>
        </div>
        <div className="flex sm:flex-col gap-5 mt-8 mb-8 px-[50px]">
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
export default AmadeuspageDetails;

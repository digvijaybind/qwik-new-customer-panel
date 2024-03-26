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
import moment from 'moment';

import Aircanada from '../../public/images/airlines/air-canada.jpg';
import Airfrance from '../../public/images/airlines/air-france.jpg';
import Airmauritius from '../../public/images/airlines/air-mauritius.jpg';
import NipponAirline from '../../public/images/airlines/all-nippon-airways.jpg';
import americanAirline from '../../public/images/airlines/american-airlines.jpg';
import BritishAirways from '../../public/images/airlines/british-airways.jpg';
import cathayAirline from '../../public/images/airlines/cathay-pacific.jpg';
import DeltaAirline from '../../public/images/airlines/delta-airlines.jpg';
import Emirates from '../../public/images/airlines/Emirates.jpg';
import Ethiads from '../../public/images/airlines/etihad-airways.jpg';
import Indigo from '../../public/images/airlines/indigo.jpg';
import KLMAirline from '../../public/images/airlines/KLM-Royal-Dutch-Airlines.jpg';
import Lufthansa from '../../public/images/airlines/Lufthansa.jpg';
import malesiyaAirline from '../../public/images/airlines/malaysi-airlines.jpg';
import PhillippinesAirlines from '../../public/images/airlines/philippine-airlines.jpg';
import Quantas from '../../public/images/airlines/Qantas.jpg';
import QatarAirway from '../../public/images/airlines/Qatar-airways.jpg';
import SaudiAirline from '../../public/images/airlines/Saudia.jpg';
import SingaporeAirline from '../../public/images/airlines/singapore-airlines.jpg';
import SouthAfrican from '../../public/images/airlines/south-african-airways.jpg';
import TurkishAirlineNew from '../../public/images/airlines/turkish-airlines.jpg';
import TurkishAirline from '../../public/images/airlines/Turkish.jpg';
import UnitedAirline from '../../public/images/airlines/united-airlines.jpg';
import VirginAtlantic from '../../public/images/airlines/virgin-atlantic-new.jpg';
import VirginAirline from '../../public/images/airlines/virgin-atlantic.jpg';
import AirIndia from '../../public/images/airlines/Air-india.jpg';
import OmanAirline from '../../public/images/airlines/Oman-airline.jpg';

const currencySymbols = {
  EUR: '€',
  AED: 'AED',
  USD: '$',
  INR: '₹',
};

const AirlineImages = {
  AC: Aircanada,
  '6E': Indigo,
  AF: Airfrance,
  AI: AirIndia,
  AA: americanAirline,
  BA: BritishAirways,
  CX: cathayAirline,
  DL: DeltaAirline,
  EK: Emirates,
  EY: Ethiads,
  KL: KLMAirline,
  LH: Lufthansa,
  QF: Quantas,
  QR: QatarAirway,
  SQ: SingaporeAirline,
  TK: TurkishAirline,
  UA: UnitedAirline,
  VS: VirginAtlantic,
  THY: TurkishAirlineNew,
  WY: OmanAirline,
  OMA: OmanAirline,
  SAA: SouthAfrican,
  ANA: NipponAirline,
  PAL: PhillippinesAirlines,
  VIR: VirginAirline,
  MAU: Airmauritius,
  MH: malesiyaAirline,
  SV: SaudiAirline,
};

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

const JourneyDetails = ({
  totalTravelDuration,
  selectedCurrency,
  handleCurrencyChange,
  locationData,
  aircraft,
  totalCost,
  price,
}) => {
  return (
    <>
      <h3 className="font-bold">
        {locationData?.departureLocation} {locationData?.destinationLocation}
      </h3>
      <p className="font-bold text-[0.85rem]">
        Total Travel:-{' '}
        {totalTravelDuration?.length > 0 &&
          totalTravelDuration.map((data) => {
            return `${Math.floor(data.totalHours)}h ${Math.floor(
              data.totalMinutes
            )}m`;
          })}
      </p>
      <p className="my-3">
        1 Passengers |{' '}
        {aircraft?.lastTicketingDate &&
          moment(aircraft?.lastTicketingDate)?.format('DD MMM, YYYY')}
      </p>
      <div className="border-b border-t my-2">
        <div className="flex items-center justify-between py-3">
          <span>Flying Cost</span>
          <span>
            {currencySymbols[selectedCurrency]}
            {totalCost}
          </span>
        </div>
        {/* <p className="flex justify-between py-3">
          <span>GST (18%)</span>
          <span>₹ 2,02,719</span>
        </p> */}
      </div>
      <div className="flex justify-between items-center py-1 font-bold">
        <span>Estimated Cost</span>
        <div className="text-base flex items-center">
          <select
            id="currencySelector"
            value={selectedCurrency}
            onChange={handleCurrencyChange}
            className="border-solid border-2 border-black rounded-md text-xs"
          >
            {Object.keys(currencySymbols)?.map((currency, index) => {
              return (
                <option value={currency} key={'currency-item' + index}>
                  {currency}
                </option>
              );
            })}
          </select>

          <div className="flex flex-row items-end ml-2">
            {currencySymbols[selectedCurrency]}
            <div className=" font-extrabold"> {totalCost}</div>
          </div>
        </div>
      </div>
      <div className="rounded-md bg-gray-300 p-2 my-4">
        <span className="font-bold">Qwiklif</span>, helps in your emergency by
        providing private air ambulance service .
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

const FlightImages = ({ locationData }) => {
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
          1
        </div>
        <div className="flex items-center gap-1">
          <GiWeight className="text-base text-Bluedark" />
          400 Kgs.
        </div>
        <div className="flex items-center gap-1">
          <FaLocationDot className="text-base text-Bluedark" />
          {locationData?.departureLocation} -{' '}
          {locationData?.destinationLocation}
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
const FlightDetails = ({ segments, data, totalTravelDuration }) => {
  return (
    <div
      className="rounded-md p-5 text-[0.9rem]"
      style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
    >
      <h2 className="text-base font-bold">Flight Details</h2>
      {segments?.map((segment) => {
        return (
          <div
            key={'segment-' + segment?.number}
            className="mt-2 mb-3 py-3 border-b-2 border-gray-100"
          >
            <p className="flex justify-between text-[0.85rem]">
              <span>
                {segment?.departure?.at
                  ? moment(segment?.arrival?.at)?.format('DD/MM/YYYY')
                  : '-/-/-'}
              </span>
              <span>
                {segment?.arrival?.at
                  ? moment(segment?.departure?.at)?.format('DD/MM/YYYY')
                  : '-/-/-'}
              </span>
            </p>

            <p className="flex justify-between text-[0.85rem]">
              <span>
                {segment?.departure?.at
                  ? moment(segment?.arrival?.at)?.format('HH:mm')
                  : '-:-'}
              </span>
              <span>
                {segment?.arrival?.at
                  ? moment(segment?.departure?.at)?.format('HH:mm')
                  : '-:-'}
              </span>
            </p>

            <div className="flex justify-between items-center w-full mt-3">
              <span className="font-bold text-base">
                {' '}
                {segment?.departure?.iataCode}
              </span>
              <div className="relative">
                <div className="bg-gray-300 h-[2px]  sm:w-36 w-72">
                  <IoIosAirplane className="text-primary bg-primary/20 rounded-full p-1 text-2xl absolute left-1/2 top-1/2 -translate-y-1/2" />
                </div>
              </div>
              <span className="font-bold text-base">
                {segment?.arrival?.iataCode}
              </span>
            </div>

            <p className="flex justify-between">
              <span className="max-w-40 text-start">
                {' '}
                {segment?.departure?.iataCode}
              </span>
              <span className="max-w-40 text-end">
                {segment?.arrival?.iataCode}
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
};
const CostDetails = ({
  price,
  selectedCurrency,
  handleCurrencyChange,
  totalCost,
}) => {
  return (
    <div
      className="flex flex-col rounded-md p-5 text-[0.9rem]"
      style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
    >
      <h2 className="text-base font-bold mb-4">Cost Details</h2>
      <div className="flex flex-col gap-3 text-[0.9rem]">
        <p className="flex justify-between">
          <span>Flight Cost </span>
          <span>
            {currencySymbols[selectedCurrency]}
            {totalCost}
          </span>
        </p>
        {/* <p className="flex justify-between">
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
        </p> */}
        <div className="flex justify-between items-center">
          <span>Estimated cost</span>
          <div className="font-bold text-base flex items-center ">
            <select
              id="currencySelector"
              value={selectedCurrency}
              onChange={handleCurrencyChange}
              className="border-solid border-2 border-black rounded-md text-xs"
            >
              {Object.keys(currencySymbols)?.map((currency, index) => {
                return (
                  <option value={currency} key={'currency-item' + index}>
                    {currency}
                  </option>
                );
              })}
            </select>

            <div className="flex flex-row items-end ml-2 ">
              {currencySymbols[selectedCurrency]}
              <div className=" font-extrabold"> {totalCost}</div>
            </div>
          </div>
        </div>
      </div>
      <button className="border border-primary rounded-md p-2 text-sm mt-10 hover:bg-primary hover:text-white shadow-lg shadow-primary/70 bg-primary text-white">
        Pay Now
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
  const { id } = router.query;
  const [results, setResults] = useState([]);
  const [Error, setError] = useState('');
  const [locationData, setLocationData] = useState({});
  const [totalTravelDuration, setTotalTravelDuration] = useState('');
  const [techStops, setTechStops] = useState([]);
  const [availableticket, setavailableticket] = useState('');
  const [airlineName, setairlineName] = useState('');
  const [aircraftDataLoading, setAircraftDataLoading] = useState(false);
  const [Aircraftdata, setAircraftData] = useState([]);
  // let locationData = {};
  const [airlineImage, setAirlineImage] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');
  const [totalCost, setTotalCost] = useState(0);
  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  console.log('results', results);
  console.log('locationData', locationData);

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

  const AllAircraftid = () => {
    const id = results?.aircraft?.id;
    console.log('id line 166', id);
    setAircraftid(id);
  };
  const getLocationData = () => {
    const segments = results?.aircraft?.itineraries[0]?.segments ?? [];
    if (segments?.length > 1) {
      // setLocationData({
      //   departureLocation: segments[0]?.departure?.iataCode,
      //   departureTime: segments[0]?.departure?.at,
      //   destinationLocation: segments.at(-1)?.arrival?.iataCode,
      //   destinationTime: segments.at(-1)?.arrival?.at,
      // });
    } else {
      // setLocationData({
      //   departureLocation: segments[0]?.departure?.iataCode,
      //   departureTime: segments[0]?.departure?.at,
      //   destinationLocation: segments[0]?.arrival?.iataCode,
      //   destinationTime: segments[0]?.arrival?.at,
      // });
    }
  };
  const parseISO8601Duration = (durationString) => {
    let TimeDuration = [];
    const regex =
      /P(?:([0-9]+)Y)?(?:([0-9]+)M)?(?:([0-9]+)D)?(?:T(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+)S)?)?/;

    const matches = (durationString || '')?.match(regex);
    // const matches = true;
    if (!matches) {
      throw new Error('Invalid ISO8601 duration format');
    }

    const [, years, months, days, hours, minutes, seconds] =
      matches.map(Number);

    const totalSeconds = seconds || 0;
    const totalMinutes = totalSeconds / 60 + (minutes || 0);
    const totalHours = totalMinutes / 60 + (hours || 0);
    const totalDays = totalHours / 24 + (days || 0);

    TimeDuration.push({
      years: years || 0,
      months: months || 0,
      days: days || 0,
      hours: hours || 0,
      minutes: minutes || 0,
      seconds: seconds || 0,
      totalDays,
      totalHours,
      totalMinutes,
      totalSeconds,
    });
    console.log('TimeDuration line 196', TimeDuration);
    return TimeDuration;
  };

  const AllsingleId = () => {
    const id = results?.aircraft?.id;

    setAircraftid(id);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    console.log('date month and year', `${date.getDate()} ${month} ${year}`);
    return `${date.getDate()} ${month} ${year}`;
  };
  const TicketAvailable = () => {
    const ticketDate = [];
    console.log(' ticketDate line 125', ticketDate);
    setavailableticket(formatDate(ticketDate));
  };

  const renderAirlineName = (carrierCode) => {
    return airlineNames[carrierCode] || 'Unknow Airline';
  };

  const AirlineImage = () => {
    const airlineName =
      results?.aircraft?.itineraries[0]?.segments[0]?.carrierCode ?? [];
    const airlineImage = AirlineImages[airlineName];
    setAirlineImage(airlineImage);
  };
  const AirlineName = () => {
    const airlineName =
      results?.aircraft?.itineraries[0]?.segments[0]?.carrierCode ?? [];
    console.log(' airlineName  line 125', airlineName);
    const airline = renderAirlineName(airlineName);
    setairlineName(airline);
  };

  const getTravelDuration = () => {
    const timeduration = results?.aircraft?.itineraries[0]?.duration ?? [];

    let flyingTime = parseISO8601Duration(timeduration);
    console.log('flyingTime  line 209', flyingTime);
    setTotalTravelDuration(flyingTime);
  };

  const getTechStops = () => {
    const stops = [];
    const segments = results?.aircraft?.itineraries[0]?.segments ?? [];
    if (segments?.length > 1) {
      segments?.forEach((item, index) => {
        if (index !== segments?.length - 1) {
          stops.push(item?.arrival?.iataCode);
        }
      });
    }
    setTechStops(stops);
  };

  const formatTime = (date) => {
    return new Date(
      (typeof date === 'string' ? new Date(date) : date).toLocaleString(
        'en-US',
        { timeZone: currentTimeZone }
      )
    );
  };

  const fetchData = async () => {
    try {
      console.log('id line 450', id);
      setAircraftDataLoading(true);
      const response = await axios.get(
        `http://localhost:8000/customer/amadeus/aircraft/${id}`
      );

      if (response) {
        setResults(response.data.specificAircraft);
        console.log('data line 752', response.data.specificAircraft);
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
        setAircraftDataLoading(false);
        console.log('results line 460', results);
        setResults([]);
      } else {
        setError('error');
        setResults([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  useEffect(() => {
    if (results?.aircraft) {
      getLocationData();
      // getTravelDuration();
      getTechStops();
      getTravelDuration();
      // TicketAvailable();
      // AirlineImage();
      // AirlineName();
      setTotalCost(
        results?.price?.totalPrice
          ? parseFloat((results?.price?.totalPrice).toFixed(2))
          : 0
      );
    }
  }, [results]);

  const getEUR = (price) => {
    const EuroPrice = price;
    return EuroPrice;
  };
  const getAED = (price) => {
    const PriceAED = price * 3.95;
    return PriceAED.toFixed(2);
  };

  const getUSD = (price) => {
    const PriceUsd = price * 1.077;
    return PriceUsd.toFixed(2);
  };

  const getINR = (price) => {
    const PriceINR = price * 89.42;
    return PriceINR.toFixed(2);
  };

  useEffect(() => {
    const actualTotalPrice = results?.price?.totalPrice
      ? parseFloat((results?.price?.totalPrice).toFixed(2))
      : 0;
    switch (selectedCurrency) {
      case 'EUR':
        setTotalCost(getEUR(actualTotalPrice));
        break;
      case 'AED':
        setTotalCost(getAED(actualTotalPrice));
        break;
      case 'USD':
        setTotalCost(getUSD(actualTotalPrice));
        break;
      case 'INR':
        setTotalCost(getINR(actualTotalPrice));
        break;
      default:
        setTotalCost(0);
    }
  }, [results?.price?.totalPrice, selectedCurrency]);

  return (
    <div className="">
      <DedicatedeHeader />
      <div className="sm:px-20 px-36">
        <p className="text-sm my-3">
          <span className="font-medium">Search Result</span>
        </p>
        <div className="flex sm:flex-col gap-5 my-3">
          <div className="sm:w-full w-8/12">
            <FlightImages locationData={locationData} />
          </div>
          <div className="sm:w-full w-4/12 border border-gray-300 border-dashed rounded-md p-4 text-[0.9rem]">
            <JourneyDetails
              totalTravelDuration={totalTravelDuration}
              locationData={locationData}
              aircraft={results?.aircraft || {}}
              price={results?.price || {}}
              selectedCurrency={selectedCurrency}
              handleCurrencyChange={handleCurrencyChange}
              totalCost={totalCost}
            />
          </div>
        </div>
        <div className="flex sm:flex-col gap-5 mt-8 mb-8">
          <div className="sm:w-full w-6/12">
            <FlightDetails
              segments={results?.aircraft?.itineraries?.[0]?.segments || []}
              totalTravelDuration={totalTravelDuration}
            />
          </div>
          <div className="sm:w-full w-6/12">
            <CostDetails
              price={results?.price || {}}
              selectedCurrency={selectedCurrency}
              handleCurrencyChange={handleCurrencyChange}
              totalCost={totalCost}
            />
          </div>
        </div>
        <Airtransfer />
      </div>
    </div>
  );
};
export default AmadeuspageDetails;

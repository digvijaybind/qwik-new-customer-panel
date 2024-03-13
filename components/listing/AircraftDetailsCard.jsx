import Image from 'next/image';
import { useEffect, useState } from 'react';
import CommercialImage from '../../public/images/commercial.svg';
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

const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const AircraftDetailsCard = ({
  aircraftData,
  selectedCurrency,
  handleCurrencyChange,
  availticket,
  departureLocation,
  destinationLocation,
}) => {
  const [totalCost, setTotalCost] = useState(
    parseFloat((aircraftData?.price?.totalPrice).toFixed(2)) ?? 0
  );
  const [locationData, setLocationData] = useState({});
  const [totalTravelDuration, setTotalTravelDuration] = useState('');
  const [techStops, setTechStops] = useState([]);
  const [availableticket, setavailableticket] = useState('');
  const [airlineName, setairlineName] = useState('');
  const [airlineImage, setairlineImage] = useState('');

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
    const actualTotalPrice = parseFloat(
      (aircraftData?.price?.totalPrice).toFixed(2)
    );
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
  }, [aircraftData?.price?.totalPrice, selectedCurrency]);

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

  const getLocationData = () => {
    const segments = aircraftData?.aircraft?.itineraries[0]?.segments ?? [];
    if (segments?.length > 1) {
      setLocationData({
        departureLocation: segments[0]?.departure?.iataCode,
        departureTime: segments[0]?.departure?.at,
        destinationLocation: segments.at(-1)?.arrival?.iataCode,
        destinationTime: segments.at(-1)?.arrival?.at,
      });
    } else {
      setLocationData({
        departureLocation: segments[0]?.departure?.iataCode,
        departureTime: segments[0]?.departure?.at,
        destinationLocation: segments[0]?.arrival?.iataCode,
        destinationTime: segments[0]?.arrival?.at,
      });
    }
  };
  const parseISO8601Duration = (durationString) => {
    let TimeDuration = [];
    const regex =
      /P(?:([0-9]+)Y)?(?:([0-9]+)M)?(?:([0-9]+)D)?(?:T(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+)S)?)?/;
    const matches = durationString.match(regex);
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    console.log('date month and year', `${date.getDate()} ${month} ${year}`);
    return `${date.getDate()} ${month} ${year}`;
  };
  const TicketAvailable = () => {
    const ticketDate = availticket ?? [];
    console.log(' ticketDate line 125', ticketDate);
    setavailableticket(formatDate(ticketDate));
  };

  const renderAirlineName = (carrierCode) => {
    return airlineNames[carrierCode] || 'Unknow Airline';
  };

  const AirlineImage = () => {
    const airlineName =
      aircraftData?.aircraft?.itineraries[0]?.segments[0]?.carrierCode ?? [];
    const airlineImage = AirlineImages[airlineName];
    setairlineImage(airlineImage);
  };
  const AirlineName = () => {
    const airlineName =
      aircraftData?.aircraft?.itineraries[0]?.segments[0]?.carrierCode ?? [];
    console.log(' airlineName  line 125', airlineName);
    const airline = renderAirlineName(airlineName);
    setairlineName(airline);
  };

  const getTravelDuration = () => {
    const timeduration = aircraftData?.aircraft?.itineraries[0]?.duration ?? [];

    let flyingTime = parseISO8601Duration(timeduration);
    console.log('flyingTime  line 209', flyingTime);
    setTotalTravelDuration(flyingTime);
  };

  const getTechStops = () => {
    const stops = [];
    const segments = aircraftData?.aircraft?.itineraries[0]?.segments ?? [];
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

  useEffect(() => {
    getLocationData();
    getTravelDuration();
    getTechStops();
    TicketAvailable();
    AirlineImage();
    AirlineName();
  }, []);

  return (
    <div
      className={`w-full px-8 py-8 bg-white rounded-2xl grid grid-cols-3 gap-5 items-center cursor-pointer transition-all duration-700 hover:scale-105 box-border`}
      style={{
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
      }}
    >
      <div class="sm:col-span-3 h-full">
        <Image
          src={airlineImage}
          alt="Commercial Image"
          className="w-full object-cover sm:max-h-40 object-center rounded-md border border-slate-100 bg-slate-100"
        />
      </div>
      <div class="sm:col-span-3 col-span-2">
        <div class="grid grid-cols-3 gap-4 mb-5">
          <div class="">
            <span class="font-semibold text-2xl">
              {locationData?.departureTime
                ? moment(formatTime(locationData?.departureTime)).format(
                    'HH:mm'
                  )
                : '--:--'}
            </span>
            <br />
            <span class="text-[#545454] text-base font-semibold text-center">
              {locationData?.departureLocation}
            </span>
          </div>
          <div class="flex flex-col items-center">
            {/* <div class="">{totalTravelDuration}</div> */}
            {totalTravelDuration?.length > 0 &&
              totalTravelDuration.map((data) => {
                return `${Math.floor(data.totalHours)}h ${Math.floor(
                  data.totalMinutes
                )}m`;
              })}
            <div class="bg-[#42D1E5] w-[40px] h-[3px]"></div>
            <div class="text-[red] text-xs">
              {techStops?.length > 0
                ? `${techStops?.length} stop via ${techStops?.join(', ')}`
                : 'Non-stop'}
            </div>
          </div>
          <div class="flex flex-col items-end">
            <div className="flex">
              <span class="font-semibold text-2xl">
                {locationData?.destinationTime
                  ? moment(formatTime(locationData?.destinationTime)).format(
                      'HH:mm'
                    )
                  : '--:--'}
              </span>
              {moment(locationData?.destinationTime).format('d') !==
                moment(locationData?.departureTime).format('d') && (
                <span className="text-[red] text-center heigh text-xs font-medium leading-3 ml-1.5">
                  +{' '}
                  {moment(locationData?.destinationTime).format('d') -
                    moment(locationData?.departureTime).format('d')}{' '}
                  <br />
                  DAY
                </span>
              )}
            </div>
            <span class="text-[#545454] text-base font-semibold text-center">
              {locationData?.destinationLocation}
            </span>
          </div>
        </div>
        <div class="flex justify-between align-middle mb-5">
          <div className="flex flex-col">
            <p class="font-semibold">Included Perks :</p>
            <ul class="list-disc ml-4 flex flex-col gap-1">
              <li class="font-semibold text-slate-600 text-xs">Stretcher ✅</li>
              <li class="font-semibold text-slate-600 text-xs">
                Doctor OnBoard ✅
              </li>
              <li class="font-semibold text-slate-600 text-xs">
                Medical Equipment ✅
              </li>
              <li class="font-semibold text-slate-600 text-xs">
                Oxygen(4L/Min) ✅
              </li>
            </ul>
          </div>
          <div class="">
            <div>
              <div class="font-semibold text-[17px] flex flex-col">
                <div class="font-semibold w-full text-end text-[13px]">
                  Estimated Price
                </div>
                <div className="flex justify-end gap-6">
                  <select
                    id="currencySelector"
                    value={selectedCurrency}
                    onChange={handleCurrencyChange}
                    class="border-solid border-2 border-black rounded-md text-xs"
                  >
                    {Object.keys(currencySymbols)?.map((currency, index) => {
                      return (
                        <option value={currency} key={'currency-item' + index}>
                          {currency}
                        </option>
                      );
                    })}
                  </select>

                  <div class="flex flex-row items-end">
                    {currencySymbols[selectedCurrency]}
                    <div class=" font-extrabold"> {totalCost}</div>
                  </div>
                </div>
              </div>
              <br />
            </div>
            <div className="flex flex-col gap-3">
              <div class="flex flex-col justify-end text-end">
                <span class="font-semibold text-[11px] text-gray-500 leading-tight">
                  Airline Name
                </span>
                <span class="font-semibold leading-tight">{airlineName}</span>
              </div>
              <div class="flex flex-col justify-end text-end">
                <span class="font-semibold text-[11px] text-gray-500 leading-tight">
                  Ticket Availability
                </span>

                <span class="font-semibold text-[12px]">
                  {availableticket ?? 0}
                </span>
                {/* <span class="font-semibold text-[14px]">
                  {aircraftData?.depatureDate}
                </span> */}
              </div>
            </div>
          </div>
        </div>
        <div class="rounded font-semibold text-Bluedark py-1.5 text-[0.9rem] text-center align-middle border cursor-pointer bg-primary/20 hover:bg-[#4BDCF0] hover:text-white">
          <div>View Details</div>
        </div>
      </div>
    </div>
  );
};

export default AircraftDetailsCard;

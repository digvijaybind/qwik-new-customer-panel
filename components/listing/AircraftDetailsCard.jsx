import Image from 'next/image';
import { useEffect, useState } from 'react';
import CommercialImage from '../../public/images/commercial.svg';
import moment from 'moment';

const currencySymbols = {
  EUR: '€',
  AED: 'AED',
  USD: '$',
  INR: '₹',
};

const AircraftDetailsCard = ({
  aircraftData,
  selectedCurrency,
  handleCurrencyChange,
  departureLocation,
  destinationLocation,
}) => {
  const [totalCost, setTotalCost] = useState(
    aircraftData?.price?.grandTotal ?? 0
  );
  const [locationData, setLocationData] = useState({});
  const [totalTravelDuration, setTotalTravelDuration] = useState('');
  const [techStops, setTechStops] = useState([]);
  console.log('aircraftData', aircraftData);
  console.log('locationData', locationData);
  console.log('techStops', techStops);

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
    switch (selectedCurrency) {
      case 'EUR':
        setTotalCost(getEUR(aircraftData?.price?.grandTotal));
        break;
      case 'AED':
        setTotalCost(getAED(aircraftData?.price?.grandTotal));
        break;
      case 'USD':
        setTotalCost(getUSD(aircraftData?.price?.grandTotal));
        break;
      case 'INR':
        setTotalCost(getINR(aircraftData?.price?.grandTotal));
        break;
      default:
        setTotalCost(0);
    }
  }, [aircraftData?.price?.grandTotal, selectedCurrency]);

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

  const getTravelDuration = () => {
    let travelDuration = 0;
    const segments = aircraftData?.aircraft?.itineraries[0]?.segments ?? [];

    if (segments?.length > 1) {
      let departureTime = segments[0]?.departure?.at;
      let arrivalTime = segments.at(-1)?.arrival?.at;
      travelDuration += Math.abs(
        new Date(arrivalTime) - new Date(departureTime)
      );
    } else {
      let departureTime = segments[0]?.departure?.at;
      let arrivalTime = segments[0]?.arrival?.at;
      travelDuration += Math.abs(
        new Date(arrivalTime) - new Date(departureTime)
      );
    }

    console.log('travelDuration', travelDuration);
    const minutes = Math.floor((travelDuration / (1000 * 60)) % 60);
    const hours = Math.floor((travelDuration / (1000 * 60 * 60)) % 24);
    setTotalTravelDuration(minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`);
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

  useEffect(() => {
    getLocationData();
    getTravelDuration();
    getTechStops();
  }, []);

  return (
    <div>
      <div
        className={`w-full py-[20px] px-[20px] bg-[#fffafa]  rounded grid grid-cols-3 gap-5 items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer  transition-all duration-700 hover:scale-105`}
      >
        <div class="">
          <Image
            src={CommercialImage}
            alt="Commercial Image"
            class="h-64 w-100 object-none object-center"
            height={600}
            width={400}
          />
        </div>
        <div class="col-span-2">
          <div class="grid grid-cols-3 gap-4 mb-5">
            <div class="">
              <span class="font-semibold text-2xl">
                {locationData?.departureTime
                  ? moment(locationData?.departureTime).format('HH:mm')
                  : '--:--'}
              </span>
              <br />
              <span class="text-[#545454] text-base font-semibold text-center">
                {locationData?.departureLocation}
              </span>
            </div>
            <div class="flex flex-col items-center">
              <div class="">{totalTravelDuration}</div>
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
                    ? moment(locationData?.destinationTime).format('HH:mm')
                    : '--:--'}
                </span>
                {moment(locationData?.destinationTime).format('dd') !==
                  moment(locationData?.departureTime).format('dd') && (
                  <span className="text-[red] text-center heigh text-xs font-medium leading-3 ml-1.5">
                    + 1 <br />
                    DAY
                  </span>
                )}
              </div>
              <span class="text-[#545454] text-base font-semibold text-center">
                {locationData?.destinationLocation}
              </span>
            </div>
          </div>
          <div class="flex justify-between align-middle mb-3">
            <ul class="list-disc ml-4">
              <li class="font-semibold">Included Perks :</li>
              <li class="font-semibold text-[14px]">Stretcher ✅</li>
              <li class="font-semibold text-[14px]">Doctor OnBoard ✅</li>
              <li class="font-semibold text-[14px]">Medical Equipment ✅</li>
              <li class="font-semibold text-[14px]">Oxygen(4L/Min) ✅</li>
            </ul>
            <div class="">
              <div>
                <span class="font-semibold text-[17px] flex flex-row">
                  <br />
                  <div>
                    <select
                      id="currencySelector"
                      value={selectedCurrency}
                      onChange={handleCurrencyChange}
                      class="mr-2 border-solid border-2 border-black rounded-md"
                    >
                      {Object.keys(currencySymbols)?.map((currency, index) => {
                        return (
                          <option
                            value={currency}
                            key={'currency-item' + index}
                          >
                            {currency}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div class="flex flex-row">
                    {currencySymbols[selectedCurrency]}
                    <div class="ml-[5px]"> {totalCost}</div>
                  </div>
                </span>
                <br />
                <span class="font-medium text-[16px] italic">
                  Estimated Price
                </span>
              </div>
              <div>
                <span class="font-semibold text-[13px]">
                  Ticket Availability
                </span>
                <br />
                <span class="font-semibold text-[14px]">
                  {aircraftData?.depatureDate}
                </span>
              </div>
            </div>
          </div>
          <div class="rounded text-center align-middle border border-[#4BDCF0]  h-[31px] cursor-pointer text-[#4BDCF0] hover:bg-[#4BDCF0] hover:text-[#fff]">
            <div>View Details</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AircraftDetailsCard;

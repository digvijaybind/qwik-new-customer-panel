import Image from "next/image";
import { useEffect, useState } from "react";
import moment from "moment";
import Aircanada from "../../public/images/airlines/air-canada.jpg";
import Airfrance from "../../public/images/airlines/air-france.jpg";
import Airmauritius from "../../public/images/airlines/air-mauritius.jpg";
import NipponAirline from "../../public/images/airlines/all-nippon-airways.jpg";
import americanAirline from "../../public/images/airlines/american-airlines.jpg";
import BritishAirways from "../../public/images/airlines/british-airways.jpg";
import cathayAirline from "../../public/images/airlines/cathay-pacific.jpg";
import DeltaAirline from "../../public/images/airlines/delta-airlines.jpg";
import Emirates from "../../public/images/airlines/Emirates.jpg";
import Ethiads from "../../public/images/airlines/etihad-airways.jpg";
import Indigo from "../../public/images/airlines/indigo.jpg";
import KLMAirline from "../../public/images/airlines/KLM-Royal-Dutch-Airlines.jpg";
import Lufthansa from "../../public/images/airlines/Lufthansa.jpg";
import malesiyaAirline from "../../public/images/airlines/malaysi-airlines.jpg";
import PhillippinesAirlines from "../../public/images/airlines/philippine-airlines.jpg";
import Quantas from "../../public/images/airlines/Qantas.jpg";
import QatarAirway from "../../public/images/airlines/Qatar-airways.jpg";
import SaudiAirline from "../../public/images/airlines/Saudia.jpg";
import SingaporeAirline from "../../public/images/airlines/singapore-airlines.jpg";
import SouthAfrican from "../../public/images/airlines/south-african-airways.jpg";
import TurkishAirlineNew from "../../public/images/airlines/turkish-airlines.jpg";
import TurkishAirline from "../../public/images/airlines/Turkish.jpg";
import UnitedAirline from "../../public/images/airlines/united-airlines.jpg";
import VirginAtlantic from "../../public/images/airlines/virgin-atlantic-new.jpg";
import VirginAirline from "../../public/images/airlines/virgin-atlantic.jpg";
import AirIndia from "../../public/images/updated-images/Air-India.svg";
import OmanAirline from "../../public/images/airlines/Oman-airline.jpg";
import Link from "next/link";
import { currencySymbols } from "../Utils/Constants";

const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const AircraftDetailsCard = ({
  aircraftData,
  selectedCurrency,
  handleCurrencyChange,
  availticket,
  CommericialId,
  departureLocation,
  destinationLocation,
}) => {
  const [totalCost, setTotalCost] = useState(
    parseFloat((aircraftData?.price?.totalPrice).toFixed(2)) ?? 0
  );
  const [locationData, setLocationData] = useState({});
  const [totalTravelDuration, setTotalTravelDuration] = useState("");
  const [techStops, setTechStops] = useState([]);
  const [availableticket, setavailableticket] = useState("");
  const [airlineName, setairlineName] = useState("");
  const [airlineImage, setAirlineImage] = useState("");
 

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
      case "EUR":
        setTotalCost(getEUR(actualTotalPrice));
        break;
      case "AED":
        setTotalCost(getAED(actualTotalPrice));
        break;
      case "USD":
        setTotalCost(getUSD(actualTotalPrice));
        break;
      case "INR":
        setTotalCost(getINR(actualTotalPrice));
        break;
      default:
        setTotalCost(0);
    }
  }, [aircraftData?.price?.totalPrice, selectedCurrency]);

  const airlineNames = {
    AC: "Air Canada",
    "6E": "IndiGo",
    AF: "Air France",
    AI: "Air India",
    AA: "American Airlines",
    BA: "British Airways",
    CX: "Cathay Pacific",
    DL: "Delta Air Lines",
    EK: "Emirates",
    EY: "Etihad Airways",
    KL: "KLM Royal Dutch Airlines",
    LH: "Lufthansa",
    QF: "Qantas",
    QR: "Qatar Airways",
    SQ: "Singapore Airlines",
    TK: "Turkish Airlines",
    UA: "United Airlines",
    VS: "Virgin Atlantic",
    THY: "Turkish Airlines",
    WY: "Oman Air",
    OMA: "Oman Air",
    SAA: "South African Airways",
    ANA: "All Nippon Airways",
    PAL: "Philippine Airlines",
    VIR: "Virgin Atlantic",
    MAU: "Air Mauritius",
    MH: "Malaysia Airlines",
    SV: "Saudia",
  };
  const AirlineImages = {
    AC: Aircanada,
    "6E": Indigo,
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
        arrivalterminal:segments[0]?.departure?.terminal,
        destinationterminal:segments.at(-1)?.arrival?.terminal
      });
    } else {
      setLocationData({
        departureLocation: segments[0]?.departure?.iataCode,
        departureTime: segments[0]?.departure?.at,
        destinationLocation: segments[0]?.arrival?.iataCode,
        destinationTime: segments[0]?.arrival?.at,
         arrivalterminal:segments[0]?.departure?.terminal,
         destinationterminal:segments[0]?.arrival?.terminal,
      });
    }
  };
  const parseISO8601Duration = (durationString) => {
    let TimeDuration = [];
    const regex =
      /P(?:([0-9]+)Y)?(?:([0-9]+)M)?(?:([0-9]+)D)?(?:T(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+)S)?)?/;
    const matches = durationString.match(regex);
    if (!matches) {
      throw new Error("Invalid ISO8601 duration format");
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
   
    return TimeDuration;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    return `${date.getDate()} ${month} ${year}`;
  };
  const TicketAvailable = () => {
    const ticketDate = availticket ?? [];

    setavailableticket(formatDate(ticketDate));
  };

  const renderAirlineName = (carrierCode) => {
    return airlineNames[carrierCode] || "Unknow Airline";
  };

  const AirlineImage = () => {
    const airlineName =
      aircraftData?.aircraft?.itineraries[0]?.segments[0]?.carrierCode ?? [];
    const airlineImage = AirlineImages[airlineName];
    setAirlineImage(airlineImage);
  };
  const AirlineName = () => {
    const airlineName =
      aircraftData?.aircraft?.itineraries[0]?.segments[0]?.carrierCode ?? [];

    const airline = renderAirlineName(airlineName);
    setairlineName(airline);
  };

  const getTravelDuration = () => {
    const timeduration = aircraftData?.aircraft?.itineraries[0]?.duration ?? [];

    let flyingTime = parseISO8601Duration(timeduration);

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
      (typeof date === "string" ? new Date(date) : date).toLocaleString(
        "en-US",
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
  }, [
    getLocationData,
    getTravelDuration,
    getTechStops,
    TicketAvailable,
    AirlineImage,
    AirlineName,
  ]);

  return (
    <div
      className={`w-full h-fit px-6 py-6 bg-white rounded-2xl grid grid-cols-3 gap-5 items-center cursor-pointer transition-all duration-700 hover:scale-105 box-border font-sans`}
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
      }}
    >
      <div className="sm:col-span-3 col-span-1 ">
        <Image
          src={airlineImage}
          alt="Commercial Image"
          height="60"
          className="w-full object-cover sm:max-h-40 h-[180px] object-center rounded-md border border-slate-100 bg-slate-100"
        />
      </div>
      <div className="sm:col-span-3 col-span-2">
        <div className="grid grid-cols-3 gap-4 mb-5">
          <div className="">
            <span className="font-semibold text-xl">
              {locationData?.departureTime
                ? moment(formatTime(locationData?.departureTime)).format(
                    "HH:mm"
                  )
                : "--:--"}
            </span>
            <br />
            <span className="text-[#111827]  font-semibold text-center text-sm">
              {locationData?.departureLocation}
            </span>
          </div>
          <div className="flex flex-col items-center text-[10px] text-[#344056]">
            {/* <div className="">{totalTravelDuration}</div> */}
            {totalTravelDuration?.length > 0 &&
              totalTravelDuration.map((data) => {
                return `${Math.floor(data.totalHours)}h ${Math.floor(
                  data.totalMinutes
                )}m`;
              })}
            <div className="bg-[#42D1E5] w-[40px] h-[3px]"></div>
            <div className="text-[red] text-xs">
              {techStops?.length > 0
                ? `${techStops?.length} stop via ${techStops?.join(", ")}`
                : "Non-stop"}
            </div>
          </div>
          <div className="flex flex-col items-end font-sans">
            <div className="flex">
              <span className="font-semibold text-xl">
                {locationData?.destinationTime
                  ? moment(formatTime(locationData?.destinationTime)).format(
                      "HH:mm"
                    )
                  : "--:--"}
              </span>
              {moment(locationData?.destinationTime).format("d") !==
                moment(locationData?.departureTime).format("d") && (
                <span className="text-[red] text-center text-xs font-medium leading-3 ml-1.5 font-sans">
                  +{" "}
                  {moment(locationData?.destinationTime).format("d") -
                    moment(locationData?.departureTime).format("d")}{" "}
                  <br />
                  DAY
                </span>
              )}
            </div>
            <span className="text-[#111827]   font-semibold text-center text-sm font-sans">
              {locationData?.destinationLocation}
            </span>
          </div>
        </div>
        <div className=" sm:flex-col">
          <div className="flex justify-between mb-5 ">
            <div className="font-semibold text-[17px] flex flex-col">
              <div
                className="font-semibold text-[11px] 
text-[#4C5564] leading-tight mb-2 font-sans"
              >
                Estimated Price
              </div>
              <div className="flex justify-end gap-2">
                <select
                  id="currencySelector"
                  value={selectedCurrency}
                  onChange={handleCurrencyChange}
                  className="border-solid border-2 border-black rounded-md text-xs  text-[#101729]"
                >
                  {Object.keys(currencySymbols)?.map((currency, index) => {
                    return (
                      <option
                        value={currency}
                        key={"currency-item" + index}
                        className="font-sans"
                      >
                        {currency}
                      </option>
                    );
                  })}
                </select>

                <div className="flex flex-row items-end text-[#101729] font-sans">
                  {currencySymbols[selectedCurrency]}
                  <div className=" font-extrabold text-[#101729] text-base font-sans">
                    {" "}
                    {totalCost}
                  </div>
                </div>
              </div>
            </div>
            <br />

            <div className="flex flex-col gap-3">
              <div className="flex flex-col justify-end text-end items-center ">
                <span className="font-semibold text-[11px] text-[#4C5564] leading-tight mb-2 font-sans">
                  Airline
                </span>
                <span className="font-medium leading-tight text-[12px] font-sans">
                  {airlineName}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center  sm:hidden">
              <span className="font-semibold text-[11px] text-[#4C5564] leading-tight mb-2 font-sans">
                Ticket Available
              </span>

              <span className="font-medium leading-tight text-[12px] font-sans">
                {availableticket ?? 0}
              </span>
              {/* <span className="font-semibold text-[14px]">
                  {aircraftData?.depatureDate}
                </span> */}
            </div>
          </div>
        </div>
        <Link
          href={`/search-details/${`${CommericialId}-${aircraftData?.aircraft?.id}`}`}
          className="block w-full"
        >
          <button
            className="rounded font-semibold text-Bluedark bg-[#11b6e3] py-1.5 text-[0.9rem] w-full text-center align-middle border cursor-pointer  hover:bg-[#5bc9e8] hover:text-white"
            onClick={() => console.log("line 441", aircraftData.aircraft.id)}
          >
            <div className="font-sans">View Details</div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AircraftDetailsCard;

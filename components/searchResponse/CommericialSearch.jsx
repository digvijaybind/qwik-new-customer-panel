import MedicalEquipmentCard from "./MedicalEquipmentCard";
import Image from "next/image";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { currencySymbols } from "../Utils/Constants";
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
// Timezone conversion function
const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
//Commericial card
const CommericialSearch = ({
  data,
  type = "commercial",
  aircraftData,
  availticket,
  aircraftId,
  activeTab,
}) => {
  const [totalCost, setTotalCost] = useState(
    parseFloat((aircraftData?.price?.totalPrice).toFixed(2)) ?? 0
  );
  const [locationData, setLocationData] = useState({});
  const [totalTravelDuration, setTotalTravelDuration] = useState({});
  const [techStops, setTechStops] = useState([]);
  const [airlineName, setairlineName] = useState("");
  const [airlineImage, setAirlineImage] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [availableticket, setavailableticket] = useState("");
  // handle currecy change
  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  console.log("locationData line 22", locationData);
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

  const AirlineImage = () => {
    const airlineName =
      aircraftData?.aircraft?.itineraries[0]?.segments[0]?.carrierCode ?? [];
    const airlineImage = AirlineImages[airlineName];
    setAirlineImage(airlineImage);
  };

  // change currency
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

  const formatTime = (date) => {
    return new Date(
      (typeof date === "string" ? new Date(date) : date).toLocaleString(
        "en-US",
        { timeZone: currentTimeZone }
      )
    );
  };
  const getLocationData = () => {
    const segments = aircraftData?.aircraft?.itineraries[0]?.segments ?? [];
    if (segments?.length > 1) {
      setLocationData({
        departureLocation: segments[0]?.departure?.iataCode,
        departureTime: segments[0]?.departure?.at,
        destinationLocation: segments.at(-1)?.arrival?.iataCode,
        destinationTime: segments.at(-1)?.arrival?.at,
        arrivalterminal: segments[0]?.departure?.terminal,
        destinationterminal: segments.at(-1)?.arrival?.terminal,
      });
    } else {
      setLocationData({
        departureLocation: segments[0]?.departure?.iataCode,
        departureTime: segments[0]?.departure?.at,
        destinationLocation: segments[0]?.arrival?.iataCode,
        destinationTime: segments[0]?.arrival?.at,
        arrivalterminal: segments[0]?.departure?.terminal,
        destinationterminal: segments[0]?.arrival?.terminal,
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

  const renderAirlineName = (carrierCode) => {
    return airlineNames[carrierCode] || "Unknow Airline";
  };

  const AirlineName = () => {
    const airlineName =
      aircraftData?.aircraft?.itineraries[0]?.segments[0]?.carrierCode ?? [];

    const airline = renderAirlineName(airlineName);
    setairlineName(airline);
  };
  const getTravelDuration = () => {
    const timeduration = aircraftData?.aircraft?.itineraries[0]?.duration ?? [];
    console.log("Time duration Line 254", timeduration);
    let flyingTime = parseISO8601Duration(timeduration);

    setTotalTravelDuration(flyingTime);
    console.log("totalTravelDuration line 258", totalTravelDuration);
    // setHours(totalTravelDuration[0].hour);
    // setMinutes(totalTravelDuration[0].minutes);
  };
  const TicketAvailable = () => {
    const ticketDate = availticket ?? [];

    setavailableticket(formatDate(ticketDate));
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
  console.log(
    "line 257 in techStops , locationData,totalTravelDuration",
    techStops,
    locationData,
    totalTravelDuration
  );
  console.log("line 263 in locationData,", locationData);

  useEffect(() => {
    console.log("line 11 commericial aircraft data", aircraftData);
    console.log(
      "aircraftData?.price?.totalPrice",
      aircraftData?.price?.totalPrice
    );
    console.log("line 12 commericial ticket date", availticket);
  }, [aircraftData, availticket]);

  useEffect(() => {
    getTravelDuration();
    getLocationData();
    getTechStops();
    AirlineName();
    TicketAvailable();
    AirlineImage();
  }, []);
  return (
    <div className="w-full flex flex-col gap-4">
      <button
        className={`cursor-none flex w-fit gap-1 capitalize items-center px-2.5 py-1 rounded-full text-xs ${
          type === "commercial"
            ? "bg-[#EBFDFF] text-primary"
            : "bg-[#FEF6F1] text-[#ED7D2D]"
        }`}
      >
        <img
          src={
            type === "commercial"
              ? "/images/searchResponse/commercialFlight.svg"
              : "/images/searchResponse/charteredFlight.svg"
          }
          alt={`${type} flights`}
          className="w-3"
        />
        {type} Flight
      </button>
      <div className="w-full flex flex-col rounded-md drop-shadow-md bg-white border border-gray-100">
        <div className="flex flex-col gap-10 p-7 sm:px-5">
          <div className="flex justify-between sm:flex-col sm:gap-4   sm:px-4 sm:py-4   sm:justify-between">
            <div className="flex justify-between gap-3">
              <Image
                src={airlineImage}
                alt="flight logo"
                className="w-[30%] h-[20%]"
              />
              <div>
                <p className="font-black text-[16px] font-sans">
                  {airlineName}
                </p>
              </div>
            </div>
            <div className="flex gap-5 sm:flex sm:justify-between sm:w-[100%] sm:items-start items-center">
              <div className="font-semibold flex flex-col sm:items-start items-center">
                <p className="text-xl mb-1">
                  {locationData?.departureTime
                    ? moment(formatTime(locationData?.departureTime)).format(
                        "HH:mm"
                      )
                    : "--:--"}
                </p>
                <p className="text-xs">{locationData?.departureLocation}</p>
              </div>
              <span className="bg-primary text-white rounded-md text-xs px-2 py-1">
                {totalTravelDuration?.length > 0 &&
                  totalTravelDuration.map((data) => {
                    return `${Math.floor(data.totalHours)}h ${Math.floor(
                      data.totalMinutes
                    )}m`;
                  })}
              </span>
              <div className="font-semibold flex flex-col sm:items-start items-center">
                <p className="text-xl mb-1">
                  {locationData?.destinationTime
                    ? moment(formatTime(locationData?.destinationTime)).format(
                        "HH:mm"
                      )
                    : "--:--"}
                </p>
                <p className="text-xs">{locationData?.destinationLocation}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col font-semibold">
              <div className="flex justify-end gap-2  ">
                <select
                  id="currencySelector"
                  value={selectedCurrency}
                  onChange={handleCurrencyChange}
                  className="border-solid border-2 border-black rounded-md text-xs h-8 text-[#101729]"
                >
                  {Object.keys(currencySymbols)?.map((currency, index) => {
                    return (
                      <option
                        value={currency}
                        key={"currency-item" + index}
                        className="font-Inter"
                      >
                        {currency}
                      </option>
                    );
                  })}
                </select>

                <div className="flex flex-row items-center text-[#101729] font-Inter">
                  {currencySymbols[selectedCurrency]}
                  <div className=" font-extrabold text-[#101729] text-[18px] font-Inter ml-2">
                    {" "}
                    {totalCost}
                  </div>
                </div>
              </div>
              <p className="sm:text-sm text-[10px] text-black/50 text-end sm:text-[9px]">
                Flight / Patient
              </p>
            </div>
            <p className="sm:text-base text-[12px] text-black font-semibold text-center justify-end sm:hidden">
              {availableticket}
            </p>
            <div className="flex flex-col font-medium">
              <button className="bg-primary text-white px-8 rounded-md py-2 mb-4 text-sm sm:px-4">
                <Link
                  href={`/commericialBookingConfirmationPage/${`${aircraftId}-${aircraftData?.aircraft?.id}`}`}
                  className="block w-full"
                >
                  Book Now
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 text-[0.65rem] font-medium flex items-start justify-around sm:gap-3 gap-4 text-center px-6 py-3.5 sm:px-1">
          <MedicalEquipmentCard
            image="/images/bookingIcon/strectres.png"
            title="Stretcher"
          />
          <MedicalEquipmentCard
            image="/images/bookingIcon/doctor.png"
            title="Doctor Onboard"
          />
          <MedicalEquipmentCard
            image="/images/bookingIcon/oxygen.svg"
            title="Oxygen"
          />
          <MedicalEquipmentCard
            image="/images/bookingIcon/medicalEquipment.svg"
            title="Medical Equipment"
          />
          <MedicalEquipmentCard
            image="/images/bookingIcon/additionalEquipment.svg"
            title="Additional Equipment"
          />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = () => {};
export default CommericialSearch;

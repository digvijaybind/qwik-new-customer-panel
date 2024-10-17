import React, { useEffect } from "react";
import styles from "./improveCommericial.module.css";
import { TbArrowsExchange2 } from "react-icons/tb";
import Airline from "../../public/images/commerialImages/Airline.svg";
import Image from "next/image";
import Strectres from "../../public/images/bookingIcon/strectres.png";
import Oxygen from "../../public/images/bookingIcon/oxygen.svg";
import Medicalequiment from "../../public/images/bookingIcon/medicalEquipment.svg";
import Doctors from "../../public/images/bookingIcon/doctor.png";
import FinalImageCarosel from "@/components/Utils/ImagesCarosel/FinalImageCarosel";
import Signature from "../../public/images/Signature.svg";
import Important from "../../db/importantCommericial.json";
import Point from "../../public/images/PointIcon.svg";
import { currencySymbols } from "../../components/Utils/Constants";
/*this component contain whole travel duration and descripation of flight and medical equiment */

import Commerialtransfer from "../../public/images/commericial-transfer/Banner.svg";
import commericialTransferOne from "../../public/images/commericial-transfer/commericailTransfer1.jpg";
import commericialTransferTwo from "../../public/images/commericial-transfer/commericialTransfer2.jpeg";
import commericialTransferThree from "../../public/images/commericial-transfer/commericialTransfer3.jpeg";
import Patience from "../../public/images/commericial-transfer/Patenice.svg";
import airLift from "../../public/images/commericial-transfer/airLift.svg";
import Transfer from "../../public/images/commericial-transfer/Transfer.svg";
import Vistara from "../../public/images/commericial-transfer/aircraft.svg";
import Bill from "../../public/images/utils/Billlogo.svg";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import moment from "moment";
import { CommericialSingleApi } from "@/redux/slices/commericialdetailSlice";
//this Timezone is used for time
const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const images = [Commerialtransfer, Commerialtransfer, Commerialtransfer];
//Time travel duration calculation
const TravelDuration = ({
  airline,
  totalTravelDuration,
  locationData,
  Ticketdate,
}) => {
  console.log("totalTravelDuration line 29", totalTravelDuration);
  const formatTime = (date) => {
    return new Date(
      (typeof date === "string" ? new Date(date) : date).toLocaleString(
        "en-US",
        { timeZone: currentTimeZone },
      ),
    );
  };
  return (
    <div className="">
      <div className="flex flex-col bg-[#F8F9FA] px-[15px] py-[15px]">
        <div className="flex flex-row justify-between sm:flex-col">
          <div className="flex justify-between items-center">
            <div className="font-black text-[20px] mr-4">
              {" "}
              {locationData?.departureLocation}
            </div>
            <div className="bg-[#54CDEF] rounded-full px-2 py-2">
              <TbArrowsExchange2
                style={{ color: "#fff", height: "25px", width: "25px" }}
              />
            </div>
            <div className="font-black text-[20px] ml-4">
              {" "}
              {locationData?.destinationLocation}
            </div>
          </div>
          <div className="bg-[#0C7A31] px-2 py-2 text-[14px] font-extralight text-white text-center block sm:mt-4 sm:hidden">
            Your Booking on priority
          </div>
        </div>
        <div className="font-medium text-black flex justify-between mt-4 sm:items-center sm:mt-6">
          <div className="flex justify-between flex-row items-center sm:justify-between">
            <div className="bg-[#54CDEF] h-[32px] w-[134px] px-2 text-[12px] text-[#fff] flex justify-center items-center sm:text-[10px]">
              {Ticketdate}
            </div>
            <div className="ml-5 font-sans text-[14px] sm:text-[10px] sm:whitespace-nowrap sm:ml-16 sm:font-extrabold">
              Non Stop{" "}
              {totalTravelDuration?.length > 0 &&
                totalTravelDuration.map((data) => {
                  return `${Math.floor(data.totalHours)}h ${Math.floor(
                    data.totalMinutes,
                  )}m`;
                })}
            </div>
          </div>
          <div className="font-medium text-[12px] text-[#171A1F] sm:text-[10px] block sm:whitespace-nowrap sm:hidden">
            Check Terms
          </div>
        </div>
        <div className="font-medium text-black flex justify-between mt-4 sm:items-center">
          <div className="flex justify-between flex-row items-center">
            <div className="">
              <Image
                src={Airline}
                width={44}
                height={42}
                alt="Qwiklif Air Ambulance"
              />
            </div>
            <div className="ml-2 font-sans text-[11px] text-[#9095A0] sm:flex sm:flex-col">
              <span className="font-black text-[18px] text-[#171A1F]">
                {airline}
              </span>{" "}
            </div>
          </div>
          <div className="font-medium text-[12px] text-[#171A1F] sm:text-[10px] sm:whitespace-nowrap sm:ml-14 sm:font-extrabold">
            Commericial Flight
          </div>
        </div>
      </div>
      {/*Depature Time and arrival Time*/}
      <div className="bg-[#F2F2F2] mx-4 flex flex-row py-8 px-8 sm:mt-4 sm:mx-0">
        <div className="Timeline flex flex-col justify-between">
          <div className="FromTime font-Inter font-bold">
            {" "}
            {locationData?.departureTime
              ? moment(formatTime(locationData?.departureTime)).format("HH:mm")
              : "--:--"}
          </div>
          <div className="ToTime font-Inter font-bold">
            {" "}
            {locationData?.destinationTime
              ? moment(formatTime(locationData?.destinationTime)).format(
                  "HH:mm",
                )
              : "--:--"}
          </div>
        </div>
        <div className="Line mx-4 self-center h-[95px] relative sm:h-[240px]">
          {/* Top circle */}
          <div className="LineDot absolute top-0 left-1/2 transform -translate-x-1/2 rounded-full w-3 h-3 mb-3">
            {/* Inner circle with border */}
            <div className="absolute inset-0 bg-transparent border-2 border-[#9095A0] rounded-full"></div>
          </div>

          {/* Dotted line */}
          <div className="h-[65px] w-1  mt-4 sm:h-[200px]">
            <div className="h-full border-l border-gray-900 border-dotted"></div>
          </div>

          {/* Bottom circle */}
          <div className="LineDot absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-full w-3 h-3 ">
            {/* Inner circle with border */}
            <div className="absolute inset-0 bg-transparent border-2 border-[#9095A0] rounded-full"></div>
          </div>
        </div>
        {/*depature location and arrival Location */}
        <div className="Location flex flex-col justify-between sm:items-unset">
          <div className="FromLocation flex justify-around items-baseline flex-row sm:flex-col">
            <span className="FromLocationName font-Inter text-[14px] font-bold">
              {locationData?.departureLocation}
            </span>
            <div className="AirportName font-Inter text-[#898888] text-[11px] ml-4 sm:mt-2">
              Terminal {locationData?.arrivalterminal}
            </div>
          </div>
          <div className="Timeduration font-Inter  text-[14px] font-medium sm:ml-2 sm:font-semibold">
            {totalTravelDuration?.length > 0 &&
              totalTravelDuration.map((data) => {
                return `${Math.floor(data.totalHours)}h ${Math.floor(
                  data.totalMinutes,
                )}m`;
              })}
          </div>
          <div className="Tolocation flex  items-baseline flex-row sm:flex-col">
            <span className="font-Inter text-[14px] font-bold">
              {locationData?.destinationLocation}
            </span>
            <div className="font-Inter text-[#898888]  text-[11px] ml-4 sm:mt-2">
              Terminal {locationData?.destinationterminal}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-3 gap-4 px-[20px] sm:grid-cols-1 sm:grid-rows-5 sm:gap-6 mt-4 sm:mt-4">
        <div className="flex flex-row">
          <div className="bg-[#daf7ff] w-[45px] h-[40px]  shadow-2xl text-center flex justify-center items-center ">
            <Image
              src={Strectres}
              width={25}
              height={15}
              className="rounded-full "
              alt="Qwiklif Air Ambulance"
            />
          </div>
          <div className=" flex flex-col text-[10px] font-black text-gray-400 ml-3">
            Stretcher :
            <span className="text-[12px] text-[#323232] font-bold ">
              {" "}
              1 stretcher per patient
            </span>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="bg-[#daf7ff] w-[45px] h-[40px]  shadow-2xl text-center flex justify-center items-center ">
            <Image
              src={Doctors}
              width={25}
              height={15}
              className="rounded-full "
              alt="Qwiklif Air Ambulance"
            />
          </div>
          <div className=" flex flex-col text-[10px] font-black  text-gray-400 ml-3">
            Doctor onboard :
            <span className="text-[12px] text-[#323232] font-bold ">
              {" "}
              2 Doctors, 1 Head nurse, 1 Attendant
            </span>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="bg-[#daf7ff] w-[45px] h-[40px]  shadow-2xl text-center flex justify-center items-center ">
            <Image
              src={Oxygen}
              width={25}
              height={15}
              className="rounded-full "
              alt="Qwiklif Air Ambulance"
            />
          </div>
          <div className=" flex flex-col text-[10px] font-black text-gray-400 ml-2">
            Oxygen :
            <span className="text-[12px] text-[#323232] font-bold  ">
              {" "}
              Oxygen(4L/Min)
            </span>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="bg-[#daf7ff] w-[45px] h-[40px]  shadow-2xl text-center flex justify-center items-center ">
            <Image
              src={Medicalequiment}
              width={25}
              height={15}
              className="rounded-full "
              alt="Qwiklif Air Ambulance"
            />
          </div>
          <div className=" flex flex-col text-[10px] font-black text-gray-400 ml-2">
            Medical equipment :
            <span className="text-[12px] text-[#323232] font-bold ">
              {" "}
              Multiple medical aid equipment
            </span>
          </div>
        </div>
        <div className="flex flex-row col-span-2 sm:col-span-1">
          <div className="bg-[#daf7ff] w-[45px] h-[40px]  shadow-2xl text-center flex justify-center items-center ">
            <Image
              src={Strectres}
              width={25}
              height={15}
              className="rounded-full "
              alt="Qwiklif Air Ambulance"
            />
          </div>
          <div className=" flex flex-col text-[10px] font-black text-gray-400 ml-2">
            Medical equipment :
            <span className="text-[12px] text-[#323232] font-bold ">
              {" "}
              Multiple medical aid equipment
            </span>
          </div>
        </div>
      </div>
      <div className="imagesCollapse mt-8">
        <div className="grid grid-rows-2 gap-4 h-full">
          {/* First row with one column */}
          <div className="grid grid-cols-1">
            <div className="w-full h-full">
              <FinalImageCarosel images={images} />
            </div>
          </div>
          {/* Second row with three columns */}
          <div className="grid grid-cols-3 gap-4 h-1/2 relative bottom-5 ">
            <div className="  h-full w-full cursor-pointer">
              <Image src={Patience} alt="Qwiklif Air Ambulance" />
            </div>
            <div className="h-full w-full cursor-pointer">
              {" "}
              <Image src={Vistara} alt="Qwiklif Air Ambulance" />
            </div>
            <div className=" w-full h-full cursor-pointer flex justify-around flex-col">
              <Image src={airLift} alt="Qwiklif Air Ambulance" />
              <Image src={Transfer} alt="Qwiklif Air Ambulance" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//this compoenent related to Information
const InfomationHead = ({ title, descripation }) => {
  return (
    <div className="grid grid-cols-12 gap-3 mt-5 sm:grid-cols-1 sm:w-[320px]">
      {/* Icon for larger screens */}
      <div className="col-span-1 flex items-start justify-center sm:hidden">
        <Image src={Point} width={24} height={24} alt="Qwiklif Air Ambulance" />
      </div>

      {/* Text content */}
      <div className="col-span-11 sm:col-span-12">
        <div className="flex items-start sm:items-center font-medium text-[16px] text-gray-800 sm:px-2">
          {/* Icon for smaller screens */}
          <div className="hidden sm:block sm:mr-2">
            <Image
              src={Point}
              width={24}
              height={24}
              alt="Qwiklif Air Ambulance"
            />
          </div>
          <span>{title}</span>
        </div>

        {/* Description content */}
        <p className="text-[14px] font-normal text-gray-600 mt-2 sm:min-w-[320px] sm:px-2">
          {descripation}
        </p>
      </div>
    </div>
  );
};
/* in this component contain whole Totalfare and taxes */
const TotalFare = ({ Totalprice }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [totalCost, setTotalCost] = useState(
    parseFloat(Totalprice?.totalPrice?.toFixed(2)) ?? 0,
  );

  Totalprice = parseFloat(Totalprice?.toFixed(2));

  // Handle currency change
  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const getPriceInCurrency = (price, currency) => {
    const conversionRates = {
      EUR: 1,
      AED: 3.95,
      USD: 1.077,
      INR: 89.42,
    };
    return (price * conversionRates[currency]).toFixed(2);
  };

  useEffect(() => {
    const actualTotalPrice = parseFloat(Totalprice?.toFixed(2));
    setTotalCost(getPriceInCurrency(actualTotalPrice, selectedCurrency));
  }, [Totalprice, selectedCurrency]);

  return (
    <div className="bg-[#F8F9FA] px-5 py-6 shadow-md rounded-lg">
      <div className="flex flex-col">
        <div className="text-[#171A1F] text-[18px] font-semibold mb-4">
          FARE SUMMARY
        </div>
        <div className="flex justify-between mb-4">
          <span className="font-medium text-[16px]">Base Fare</span>
          <div className="flex items-center">
            <span className="text-[#54CDEF] text-[16px]">
              {currencySymbols[selectedCurrency]}
            </span>
            <span className="font-semibold text-[#000] text-[18px] ml-2">
              {totalCost}
            </span>
          </div>
        </div>
        <hr className="border-[#BCC1CA] my-4" />
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-[16px]">Total Amount</span>
          <div className="flex items-center gap-2">
            <select
              id="currencySelector"
              value={selectedCurrency}
              onChange={handleCurrencyChange}
              className="border border-[#54CDEF] rounded-md text-xs px-2 py-1"
            >
              {Object.keys(currencySymbols).map((currency, index) => (
                <option value={currency} key={index}>
                  {currency}
                </option>
              ))}
            </select>
            <div className="bg-[#54CDEF] text-[#fff] text-[18px] font-semibold flex items-center px-4 py-2 rounded-md">
              {currencySymbols[selectedCurrency]}
              <span className="font-bold ml-2">{totalCost}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* in this component contain payment information */
const PayConfirmation = () => {
  return (
    <div className="bg-[#F8F9FA] shadow-md px-8 py-8 flex flex-col items-center rounded-lg mx-auto max-w-sm">
      <div className="flex items-center mb-6">
        <Image src={Bill} width={44} height={44} alt="Bill Icon" />
        <div className="ml-4 font-sans font-semibold text-[#323842] text-[16px]">
          PAY 20% TO RESERVE YOUR SEAT
        </div>
      </div>
      <div className="formdata grid grid-rows-3 gap-4 w-full">
        <div className="flex flex-col">
          <label className="text-[#424955] font-Inter font-medium mb-1">
            First Name
          </label>
          <input
            className={`${styles.customInput} w-full p-2 rounded-md border border-[#d0d5db] focus:border-[#54CDEF] transition duration-150 ease-in-out`}
            placeholder="Enter your name"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[#424955] font-Inter font-medium mb-1">
            Phone
          </label>
          <input
            className={`${styles.customInput} w-full p-2 rounded-md border border-[#d0d5db] focus:border-[#54CDEF] transition duration-150 ease-in-out`}
            placeholder="Enter your phone number"
            type="tel"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[#424955] font-Inter font-medium mb-1">
            Email
          </label>
          <input
            className={`${styles.customInput} w-full p-2 rounded-md border border-[#d0d5db] focus:border-[#54CDEF] transition duration-150 ease-in-out`}
            placeholder="Enter your email address"
            type="email"
          />
        </div>
      </div>
      <button className="bg-[#54CDEF] hover:bg-[#42a6d3] h-[52px] w-full text-[#fff] font-Inter font-semibold flex justify-center items-center mt-4 rounded-md transition duration-150 ease-in-out">
        PAY NOW
      </button>
    </div>
  );
};
/* in this component contain top section of Final booking page */
const UpperSection = ({
  Totalprice,
  airline,
  totalTravelDuration,
  locationData,
  Ticketdate,
}) => {
  return (
    <div className="grid grid-cols-9 gap-5 px-10 sm:grid-cols-1 sm:px-2 sm:gap-2">
      <div className="col-span-6 px-[20px] py-[15px]  w-full   sm:border-0 sm:border-none sm:bg-transparent sm:col-span-1 bg-[#F8F9FA] sm:px-0">
        <TravelDuration
          airline={airline}
          totalTravelDuration={totalTravelDuration}
          locationData={locationData}
          Ticketdate={Ticketdate}
        />
        {/* <ImportantInfo />
        <Guarantee /> */}
      </div>
      <div className="col-span-3 px-[15px] py-[10px]   flex flex-col justify-between sm:col-span-1 ">
        <TotalFare Totalprice={Totalprice} />
        <PayConfirmation />
      </div>
    </div>
  );
};
/* this is Gurratty component */

const Guarantee = () => {
  return (
    <div className="responsiveBoxSizing rounded-2xl border-2 border-gray-300 flex flex-col items-center py-6 px-5 sm:w-full md:w-3/4 lg:w-11/12 xl:w-11/12 mt-8 shadow-lg bg-white">
      <div className="font-bold text-[18px] sm:text-[20px] font-Inter text-gray-800 text-center mb-3">
        OUR GUARANTEE
      </div>
      <hr className="bg-[#11B6E3] h-[4px] w-[50px] mx-auto mb-4"></hr>
      <div className="text-[15px] font-normal font-Inter text-gray-600 leading-relaxed text-center px-6 sm:px-8">
        We guarantee that when choosing Qwiklif, your loved ones shall be
        treated with professional and compassionate care. We consider every
        patient as family, we strive for perfection, and continuously monitor
        our operations. When choosing a provider, remember that Qwiklif Air
        Ambulance is the world&apos;s first air ambulance service provider
        giving an instant quotation.
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <Image src={Signature} width={150} height={75} alt="CEO Signature" />
        <div className="font-extrabold text-sm font-sans text-gray-700 mt-2">
          CEO, QWIKLIF
        </div>
      </div>
    </div>
  );
};
//this component realted to ImportedInfo
const ImportantInfo = () => {
  return (
    <div className="px-8 py-6 w-full border border-gray-300 mt-4 rounded-2xl bg-white shadow-md sm:px-4 sm:py-4">
      <div className="flex flex-col items-start sm:items-center">
        <div className="text-2xl font-bold font-Inter text-gray-700 mb-4 text-start sm:text-center">
          Important Information
        </div>

        <div className="w-full space-y-4">
          {Important.map((data, index) => (
            <div key={index} className="gap-6">
              <InfomationHead
                title={data.title}
                descripation={data.descripation}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

//this is date to month and date and year formatter
const formatDate = (inputDate) => {
  const date = new Date(inputDate);

  const day = String(date.getDate()).padStart(2, "0");
  const monthName = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return `${day} ${monthName} ${year}`;
};

/* main component*/
const CommericialBookingConfirmationPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  const data = useSelector(
    (state) => state.commericialdetails.commerialflightdetails,
  );

  console.log("this is commerialflightdetails", data);
  console.log("total price", data?.specificAircraft?.price?.totalPrice);
  useEffect(() => {
    if (id) {
      dispatch(CommericialSingleApi(id));
    }
  }, [id, dispatch]);

  const [airlineName, setairlineName] = useState("");
  const [totalTravelDuration, setTotalTravelDuration] = useState({});
  const [locationData, setLocationData] = useState({});
  const [Ticketdate, setTikcetdate] = useState("");

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

  const parseISO8601Duration = (durationString) => {
    let TimeDuration = [];
    const regex =
      /P(?:([0-9]+)Y)?(?:([0-9]+)M)?(?:([0-9]+)D)?(?:T(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+)S)?)?/;
    console.log("durationstring", durationString);
    const matches = durationString?.match(regex);
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

  const getLocationData = () => {
    const segments =
      data?.specificAircraft?.aircraft?.itineraries[0]?.segments ?? [];

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

  const getTravelDuration = () => {
    const timeduration =
      data?.specificAircraft?.aircraft?.itineraries[0]?.duration;

    let flyingTime = parseISO8601Duration(timeduration);
    setTotalTravelDuration(flyingTime);
    const Flyingdate = data?.specificAircraft?.aircraft?.lastTicketingDateTime;
    const formatedate = formatDate(Flyingdate);
    setTikcetdate(formatedate);
  };
  const renderAirlineName = (carrierCode) => {
    return airlineNames[carrierCode] || "Unknow Airline";
  };

  const AirlineName = () => {
    const airlinesName =
      data?.specificAircraft?.aircraft?.itineraries[0]?.segments[0]
        ?.carrierCode;
    const airline = renderAirlineName(airlinesName);
    setairlineName(airline);

    console.log("airlines name line 562", airlineName);
  };

  useEffect(() => {
    if (data) {
      AirlineName();
      getTravelDuration();
      getLocationData();
    }
  }, [data]);

  console.log("totalprice in main component", data);
  console.log("totalTravelDuration in main compoennt", totalTravelDuration);
  console.log("locationData in main component", locationData);

  if (!data) {
    return <p>No data available</p>;
  }
  return (
    <div className={`${styles.Container}`}>
      <div className="px-[15px] font-sans z-0">
        <div className={`${styles.Section1_Container} w-full`}></div>
        <div className="relative bottom-[200px]">
          <UpperSection
            airlineName={airlineName}
            Totalprice={data?.specificAircraft?.price?.totalPrice}
            airline={airlineName}
            totalTravelDuration={totalTravelDuration}
            locationData={locationData}
            Ticketdate={Ticketdate}
          />
          <div className="grid grid-cols-9 mx-10 sm:grid-cols-1 sm:mx-0">
            <div className="col-span-6 bg-[#F8F9FA] px-10 sm:px-0">
              <ImportantInfo />
              <Guarantee />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommericialBookingConfirmationPage;

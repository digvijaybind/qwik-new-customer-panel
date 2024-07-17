import React, { useEffect } from "react";
import styles from "./improveCommericial.module.css"; //imported style css file
import { TbArrowsExchange2 } from "react-icons/tb"; // imported reverse icon
import Airline from "../../public/images/commerialImages/Airline.svg"; //imported airline image
import Image from "next/image";
import Strectres from "../../public/images/bookingIcon/strectres.png"; //imported medical equiment icon
import Oxygen from "../../public/images/bookingIcon/oxygen.svg"; //imported medical equiment icon
import Medicalequiment from "../../public/images/bookingIcon/medicalEquipment.svg"; //imported medical equiment icon
import Doctors from "../../public/images/bookingIcon/doctor.png"; //imported medical equiment icon
import FinalImageCarosel from "@/components/Utils/ImagesCarosel/FinalImageCarosel";
import Signature from "../../public/images/Signature.svg";
import Important from "../../db/importantCommericial.json";
import Point from "../../public/images/PointIcon.svg";
import { currencySymbols } from "../../components/Utils/Constants";
/*this component contain whole travel duration and descripation of flight and medical equiment */

import Commerialtransfer from "../../public/images/commericial-transfer/Banner.svg";
import Patience from "../../public/images/commericial-transfer/Patenice.svg";
import airLift from "../../public/images/commericial-transfer/airLift.svg";
import Transfer from "../../public/images/commericial-transfer/Transfer.svg";
import Vistara from "../../public/images/commericial-transfer/aircraft.svg";
import Bill from "../../public/images/utils/Billlogo.svg"; //imported bill logo
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { CommericialSingleApi } from "@/redux/slices/commericialSlice";
import { useState } from "react";
import moment from "moment";
const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const images = [Commerialtransfer, Commerialtransfer, Commerialtransfer];
const TravelDuration = ({ airline, totalTravelDuration, locationData }) => {
  console.log("totalTravelDuration line 29", totalTravelDuration);
  const formatTime = (date) => {
    return new Date(
      (typeof date === "string" ? new Date(date) : date).toLocaleString(
        "en-US",
        { timeZone: currentTimeZone }
      )
    );
  };
  return (
    <div className="">
      <div className="flex flex-col bg-[#F8F9FA] px-[15px] py-[15px]">
        <div className="flex flex-row justify-between sm:flex-col">
          <div className="flex justify-between items-center">
            <div className="font-black text-[20px] mr-4">Mumbai</div>
            <div className="bg-[#54CDEF] rounded-full px-2 py-2">
              <TbArrowsExchange2
                style={{ color: "#fff", height: "25px", width: "25px" }}
              />
            </div>
            <div className="font-black text-[20px] ml-4">Dubai</div>
          </div>
          <div className="bg-[#0C7A31] px-2 py-2 text-[14px] font-extralight text-white text-center block sm:mt-4 sm:hidden">
            Your Booking on priority
          </div>
        </div>
        <div className="font-medium text-black flex justify-between mt-4 sm:items-center sm:mt-6">
          <div className="flex justify-between flex-row items-center sm:justify-between">
            <div className="bg-[#54CDEF] h-[32px] w-[134px] px-2 text-[12px] text-[#fff] flex justify-center items-center sm:text-[10px]">
              Saturday , April 27
            </div>
            <div className="ml-5 font-sans text-[14px] sm:text-[10px] sm:whitespace-nowrap sm:ml-16 sm:font-extrabold">
              Non Stop{" "}
              {totalTravelDuration?.length > 0 &&
                totalTravelDuration.map((data) => {
                  return `${Math.floor(data.totalHours)}h ${Math.floor(
                    data.totalMinutes
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
              <Image src={Airline} width={44} height={42} />
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
                  "HH:mm"
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
                  data.totalMinutes
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
              <Image src={Patience} />
            </div>
            <div className="h-full w-full cursor-pointer">
              {" "}
              <Image src={Vistara} />
            </div>
            <div className=" w-full h-full cursor-pointer flex justify-around flex-col">
              <Image src={airLift} />
              <Image src={Transfer} />
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
    <div className="grid grid-cols-12 gap-1 mt-5 sm:grid sm:grid-cols-1 sm:w-[320px]">
      <div className="col-span-1 flex items-start justify-center  block sm:hidden">
        <Image src={Point} width={26} height={26} />
      </div>
      <div className="col-span-8 sm:w-full">
        <div
          className="font-medium text-[16px] font-Inter text-[
#171A1F] sm:px-[5px] sm:flex sm:flex-row s"
        >
          <div className="col-span-1 hidden  sm:contents sm:block sm:flex sm:item-center ">
            <Image src={Point} width={26} height={26} />
          </div>
          <span className="sm:ml-4">{title}</span>
        </div>
        <li className="text-[14px] font-normal   font-Inter mt-3 sm:min-w-[320px] sm:px-[5px] ">
          {descripation}
        </li>
      </div>
    </div>
  );
};
/* in this component contain whole Totalfare and taxes */
const TotalFare = ({ Totalprice }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [totalCost, setTotalCost] = useState(
    parseFloat(Totalprice?.totalPrice?.toFixed(2)) ?? 0
  );

  Totalprice = parseFloat(Totalprice?.totalPrice?.toFixed(2));
  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };
  const getEUR = (Totalprice) => {
    const EuroPrice = Totalprice;
    return EuroPrice;
  };
  const getAED = (Totalprice) => {
    const PriceAED = Totalprice * 3.95;
    return PriceAED.toFixed(2);
  };

  const getUSD = (Totalprice) => {
    const PriceUsd = Totalprice * 1.077;
    return PriceUsd.toFixed(2);
  };

  const getINR = (Totalprice) => {
    const PriceINR = Totalprice * 89.42;
    return PriceINR.toFixed(2);
  };

  useEffect(() => {
    const actualTotalPrice = parseFloat(Totalprice?.toFixed(2));
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
  }, [Totalprice, selectedCurrency]);
  console.log("Total Price line 269", Totalprice);
  return (
    <div className="bg-[#F8F9FA] px-5 py-6 shadow-sm">
      <div className="flex flex-col justify-between">
        <div className="text-[#171A1F] text-[18px] font-Inter font-bold mb-4">
          FARE SUMMARY
        </div>
        <div className="BaseFare flex justify-between mb-4">
          <div className="font-Inter font-medium  text-[16px]">Base Fare</div>
          <div className="font-Inter font-semibold text-[16px] flex flex-row justify-between items-center">
            {" "}
            {currencySymbols[selectedCurrency]}
            <div className=" font-semibold text-[#000] text-[18px] font-Inter  ml-2">
              {" "}
              {totalCost}
            </div>
          </div>
        </div>
        <hr className="h-[0.5px] border-none bg-[#BCC1CA] w-full " />
        <div className="Totalamount flex justify-between items-center mt-8 mb-4">
          <div className="font-sans font-black text-[16px]">Total Amount</div>
          <div className="flex justify-end gap-2 ">
            <select
              id="currencySelector"
              value={selectedCurrency}
              onChange={handleCurrencyChange}
              style={{ height: "36px", width: "74px" }}
              className="border-solid border-2 border-[#54CDEF] rounded-md text-xs h-12 W-52  text-[#101729] focus:border-[#54CDEF]"
            >
              {Object.keys(currencySymbols)?.map((currency, index) => {
                return (
                  <option
                    value={currency}
                    key={"currency-item" + index}
                    className="font-Inter  border-solid border-2 border-[#54CDEF]"
                  >
                    {currency}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="bg-[#54CDEF] text-[#fff] text-[18px] flex justify-center items-center w-[134px] h-[52px] font-Inter font-semibold">
            {currencySymbols[selectedCurrency]}
            <div className=" font-bold text-[#fff] text-[18px] font-Inter ml-2">
              {" "}
              {totalCost}
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
    <div className="bg-[#F8F9FA] shadow-sm px-10 py-10 flex flex-col items-center">
      <div className="flex justify-between items-center">
        <Image src={Bill} width={44} height={44} />
        <div className="font-sans font-black text-[#323842] text-[16px]">
          PAY 20% RESERVE YOUR SEAT
        </div>
      </div>
      <div className="formdata grid grid-rows-3 gap-2 mt-4 mb-4 min-w-[280px]">
        <div className="FirstName flex flex-col item-center ">
          <span className="text-[#424955] font-Inter font-medium">
            First Name
          </span>
          <input
            className={`${styles.customInput} min-w-[300px] p-2 rounded-sm bg-[#fff] hover:border-none `}
            placeholder="Enter a Name"
          />
        </div>
        <div className="phone number flex flex-col text-[#424955] font-Inter font-medium  item-center">
          <span className="text-[#424955] font-Inter font-medium">Phone</span>
          <input
            className={`${styles.customInput} min-w-[300px] p-2 rounded-sm bg-[#fff] hover:border-none `}
            placeholder="Enter a phone number "
          />
        </div>
        <div className="Email flex flex-col text-[#424955] font-Inter font-medium mt-2 item-center">
          <span className="text-[#424955] font-Inter font-medium">Email</span>
          <input
            className={`${styles.customInput} min-w-[300px] p-2 rounded-sm bg-[#fff] hover:border-none `}
            placeholder="Enter your email address"
          />
        </div>
      </div>
      <div className="button bg-[#54CDEF] h-[52px] w-[350px] text-[#fff] font-Inter flex justify-center items-center cursor-pointer">
        PAY NOW
      </div>
    </div>
  );
};
/* in this component contain top section of Final booking page */
const UpperSection = ({
  Totalprice,
  airline,
  totalTravelDuration,
  locationData,
}) => {
  console.log("Totalprice", Totalprice);
  return (
    <div className="grid grid-cols-9 gap-5 px-10 sm:grid-cols-1 sm:px-2 sm:gap-2">
      <div className="col-span-6 px-[20px] py-[15px]  w-full   sm:border-0 sm:border-none sm:bg-transparent sm:col-span-1 bg-[#F8F9FA] sm:px-0">
        <TravelDuration
          airline={airline}
          totalTravelDuration={totalTravelDuration}
          locationData={locationData}
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
    <div
      className="responsiveBoxSizing rounded-2xl border-2 border-gray-300 flex flex-col items-center sm:justify-center sm:items-center  py-5 
          sm:w-full md:w-3/4 lg:w-11/12 xl:w-11/12  mt-8"
    >
      <div class=" font-bold text-[16px] font-Inter text-[#565E6C] sm:text-center">
        OUR GUARANTEE
      </div>
      <hr class="bg-[#11B6E3] h-[4px] w-[40px] sm:mx-auto"></hr>
      <div class=" text-[14px] font-normal   font-Inter mt-3  px-4 sm:w-80 sm:px-4 ">
        We guarantee that when choosing Qwiklif, your loved ones shall be
        treated with professional and compassionate care. We consider every
        patient as family, we strive for perfection, and continuously monitor
        our operations. When choosing a provider, remember that Qwiklif Air
        Ambulance is the world&apos first air ambulance service provider giving
        an instant quotation.
      </div>
      <div class="flex items-center flex-col justify-center mt-2">
        <Image src={Signature} width={200} height={125} />
        <div class="font-extrabold text-sm font-sans">CEO, QWIKLIF</div>
      </div>
    </div>
  );
};

//this component realted to ImportedInfo
const ImportantInfo = () => {
  return (
    <div className=" px-[30px] py-[30px] w-full border-2 border-gray-300   mt-2 sm:px-[10px] sm:py-[10px] sm:w-full  rounded-2xl ">
      <div className="grid grid-rows-auto grid-cols-1">
        <div className="text-[20px] font-bold font-Inter text-[#565E6C] text-start sm:text-center">
          Important Information
        </div>

        <div className="">
          {Important.map((data, index) => {
            return (
              <div key={index} className="gap-4">
                <InfomationHead
                  title={data.title}
                  descripation={data.descripation}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
/* main component*/
const CommericialBookingConfirmationPage = ({ initialData }) => {
  const router = useRouter();
  const [airlineName, setairlineName] = useState("");
  const [totalTravelDuration, setTotalTravelDuration] = useState({});
  const [locationData, setLocationData] = useState({});
  const { id } = router.query;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CommericialSingleApi(id));
  }, [id]);
  const data = useSelector((state) => state.commericial.commericialflights);

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

  // const AirlineImages = {
  //   AC: Aircanada,
  //   "6E": Indigo,
  //   AF: Airfrance,
  //   AI: AirIndia,
  //   AA: americanAirline,
  //   BA: BritishAirways,
  //   CX: cathayAirline,
  //   DL: DeltaAirline,
  //   EK: Emirates,
  //   EY: Ethiads,
  //   KL: KLMAirline,
  //   LH: Lufthansa,
  //   QF: Quantas,
  //   QR: QatarAirway,
  //   SQ: SingaporeAirline,
  //   TK: TurkishAirline,
  //   UA: UnitedAirline,
  //   VS: VirginAtlantic,
  //   THY: TurkishAirlineNew,
  //   WY: OmanAirline,
  //   OMA: OmanAirline,
  //   SAA: SouthAfrican,
  //   ANA: NipponAirline,
  //   PAL: PhillippinesAirlines,
  //   VIR: VirginAirline,
  //   MAU: Airmauritius,
  //   MH: malesiyaAirline,
  //   SV: SaudiAirline,
  // };

  const parseISO8601Duration = (durationString) => {
    let TimeDuration = [];
    const regex =
      /P(?:([0-9]+)Y)?(?:([0-9]+)M)?(?:([0-9]+)D)?(?:T(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+)S)?)?/;
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

  console.log("locationData line 625", locationData);
  const getTravelDuration = () => {
    const timeduration =
      data?.specificAircraft?.aircraft?.itineraries[0]?.duration ?? [];
    console.log("timeduration line 583", timeduration);
    let flyingTime = parseISO8601Duration(timeduration);

    setTotalTravelDuration(flyingTime);
    console.log("totalTravelDuration line 587", totalTravelDuration);
    // setHours(totalTravelDuration[0].hour);
    // setMinutes(totalTravelDuration[0].minutes);
  };
  const renderAirlineName = (carrierCode) => {
    return airlineNames[carrierCode] || "Unknow Airline";
  };

  const AirlineName = () => {
    // const airlineName =
    // ?.aircraft?.itineraries[0]?.segments[0]?.carrierCode ?? [];

    const airlinesName =
      data?.specificAircraft?.aircraft?.itineraries[0]?.segments[0]
        ?.carrierCode;
    const airline = renderAirlineName(airlinesName);
    setairlineName(airline);

    console.log("airlines name line 562", airlineName);
    // if (
    //   data &&
    //   data.specificAircraft &&
    //   data.specificAircraft.itineraries &&
    //   data.specificAircraft.itineraries[0] &&
    //   data.specificAircraft.itineraries[0].segments &&
    //   data.specificAircraft.itineraries[0].segments[0]
    // ) {
    //   const airlinesName =
    //     data.specificAircraft.itineraries[0].segments[0].carrierCode ?? [];
    //   console.log("airline line 57", airlinesName);
    //   setAirlineName(airlinesName); // Assuming setAirlineName is correctly defined
    // } else {
    //   console.error("Error: Data structure is not as expected."); // Optional: Handle error or log it
    // }
  };

  useEffect(() => {
    AirlineName();
    getTravelDuration();
    getLocationData();
  }, []);

  console.log("Airline name in line 561 ", airlineName);

  return (
    <div className={`${styles.Container}`}>
      <div className="px-[15px] font-sans z-0">
        <div className={`${styles.Section1_Container} w-full`}></div>
        <div className="relative bottom-[200px]">
          <UpperSection
            airlineName={airlineName}
            Totalprice={data?.specificAircraft?.price}
            airline={airlineName}
            totalTravelDuration={totalTravelDuration}
            locationData={locationData}
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

import Image from "next/image";
import MedicalEquipmentCard from "./MedicalEquipmentCard";
import Learjet45 from "../../public/images/airline-mini-logo/learjet-405.svg";
import { useState, useEffect } from "react";
import { currencySymbols } from "../Utils/Constants";
import Link from "next/link";
import Challenger605 from "../../public/images/airline-mini-logo/challenger-605.jpg";
import C90 from "../../public/images/airline-mini-logo/C90.jpg";

const DedicatedSearch = ({ data, type = "commercial", charterdata }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [totalCost, setTotalCost] = useState(
    parseFloat(charterdata?.totalPriceWithAdminMargin?.toFixed(2)) ?? 0
  );
  const [locationData, setLocationData] = useState({});
  const [totalTravelDuration, setTotalTravelDuration] = useState({});
  const [techStops, setTechStops] = useState([]);
  const [charteraircraftName, setcharteraircraftName] = useState("");
  const [aircraftImage, setaircraftImage] = useState("");
  const [availableTicket, setavailableticket] = useState("");

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  console.log("charter data line 15", charterdata);
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
  // change currency
  useEffect(() => {
    const actualTotalPrice = parseFloat(
      charterdata?.totalPriceWithAdminMargin?.toFixed(2)
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
  }, [charterdata?.totalPriceWithAdminMargin, selectedCurrency]);

  //loaction data
  const getLocationData = () => {
    const segment = charterdata;
    setLocationData({
      depatureLocation: segment?.from,
      destinationLocation: segment?.to,
    });
  };

  //this is for formate date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    return `${date.getDate()} ${month} ${year}`;
  };

  //charter airline name
  const charterNames = {
    "Challenger 605": Challenger605,
    "Learjet 45": Learjet45,
    "C 90": C90,
  };

  //Charter Aiecraft name
  const charterName = () => {
    const aircraftName = charterdata?.operator?.Aircraft_type;
    setcharteraircraftName(aircraftName);
  };
  //charter Images

  const charterImages = () => {
    const airlineName = charterdata?.operator?.Aircraft_type ?? [];
    const airlineImage =charterNames[airlineName];
    setaircraftImage(airlineImage);
  };
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
  //Travel duration
  const getTravelDuration = () => {
    const timeduration = charterdata?.totalTime ?? [];
    console.log("Time duration Line 254", timeduration);
    let flyingTime = parseISO8601Duration(timeduration);

    setTotalTravelDuration(flyingTime);
    console.log("totalTravelDuration line 258", totalTravelDuration);
  };

  //Available ticket
  const TicketAvailable = () => {
    const ticketDate = charterdata?.operator?.date ?? [];

    setavailableticket(formatDate(ticketDate));
  };

  useEffect(() => {
    charterName();
    getLocationData();
    TicketAvailable();
    charterImages();
  }, []);

  return (
    <div className="w-full flex flex-col gap-4">
      <button
        className={`cursor-none flex w-fit gap-1.5 capitalize items-center px-2.5 py-1 rounded-full text-xs ${
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
        <div className="flex flex-col gap-7 p-7 sm:px-5">
          <div className="flex justify-between sm:flex-col sm:gap-8 items-center">
            <div className="flex items-center gap-3 sm:flex sm:justify-between sm:w-[100%]">
              <Image
                src={aircraftImage}
                alt="flight logo"
                className="w-[30%]"
              />
              <div>
                <p className="font-bold">{charteraircraftName}</p>
                <p className="text-[0.8rem] font-semibold text-black/50 mb-0">
                  {charteraircraftName}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 sm:flex sm:justify-between sm:w-[100%]">
              <div className="font-semibold flex flex-col items-center">
                <p className="text-xl mb-1">17:00</p>
                <p className="text-xs">{locationData?.depatureLocation}</p>
              </div>
              <span className="bg-primary text-white rounded-md text-xs px-2 py-1 sm:px-3 sm:py-2">
                {" "}
                4:00
              </span>
              <div className="font-semibold flex flex-col items-center">
                <p className="text-xl mb-1">21:00</p>
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
                  <div className=" font-bold text-[#101729] text-[17px] font-Inter ml-2">
                    {" "}
                    {totalCost}
                  </div>
                </div>
              </div>
              <p className="sm:text-sm text-[10px] text-black/50 text-end sm:text-[8.5px]">
                Flight / Patient
              </p>
            </div>
            <p className="sm:text-base text-[12px] text-black font-semibold text-center justify-end sm:hidden">
              {availableTicket}
            </p>
            <div className="flex flex-col font-medium">
              <button className="bg-primary text-white px-8 rounded-md py-2 mb-4 text-sm sm:px-4">
                <Link href="" className="block w-full">
                  Book Now
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 text-[0.65rem] font-medium flex items-start justify-around sm:gap-2 gap-4 text-center px-6 py-3.5 sm:px-1">
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

export default DedicatedSearch;

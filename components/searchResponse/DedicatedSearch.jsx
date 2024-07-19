import Image from "next/image";
import MedicalEquipmentCard from "./MedicalEquipmentCard";
import Learjet from "../../public/images/airline-mini-logo/learjet-405.svg";
import { useState, useEffect } from "react";
import { currencySymbols } from "../Utils/Constants";

const DedicatedSearch = ({ data, type = "commercial" }, charterdata) => {
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };
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

  // useEffect(() => {
  //   const actualTotalPrice = parseFloat(
  //     (aircraftData?.price?.totalPrice).toFixed(2)
  //   );
  //   switch (selectedCurrency) {
  //     case "EUR":
  //       setTotalCost(getEUR(actualTotalPrice));
  //       break;
  //     case "AED":
  //       setTotalCost(getAED(actualTotalPrice));
  //       break;
  //     case "USD":
  //       setTotalCost(getUSD(actualTotalPrice));
  //       break;
  //     case "INR":
  //       setTotalCost(getINR(actualTotalPrice));
  //       break;
  //     default:
  //       setTotalCost(0);
  //   }
  // }, [aircraftData?.price?.totalPrice, selectedCurrency]);
  console.log("charter data line 5", charterdata);
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
            <div className="flex items-center gap-3">
              <Image src={Learjet} alt="flight logo" className="w-[30%]" />
              <div>
                <p className="font-bold">Challenger 605</p>
                <p className="text-[0.8rem] font-semibold text-black/50 mb-0">
                  Challenger 605
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="font-semibold flex flex-col items-center">
                <p className="text-xl mb-1">17:00</p>
                <p className="text-xs">Mumbai</p>
              </div>
              <span className="bg-primary text-white rounded-md text-xs px-2 py-1">
                {" "}
                4:00hr
              </span>
              <div className="font-semibold flex flex-col items-center">
                <p className="text-xl mb-1">21:00</p>
                <p className="text-xs">Dubai</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col font-semibold">
              <div className="flex justify-end gap-2 ">
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

                <div className="flex flex-row items-center text-[#101729] font-sans">
                  {currencySymbols[selectedCurrency]}
                  <div className=" font-extrabold text-[#101729] text-[18px] font-Inter font-semibold ml-2">
                    {" "}
                    $22,4567
                  </div>
                </div>
              </div>
              <p className="sm:text-sm text-[10px] text-black/50 text-end">
                Flight / Patient
              </p>
            </div>
            <p className="sm:text-base text-[12px] text-black font-semibold text-center justify-end sm:hidden">
              27 march 2027
            </p>
            <div className="flex flex-col font-medium">
              <button className="bg-primary text-white px-8 rounded-md py-2 mb-4 text-sm">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 text-[0.65rem] font-medium flex items-start justify-around sm:gap-3 gap-4 text-center px-6 py-3.5">
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

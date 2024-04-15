import React, { useEffect, useState } from 'react';
import CommercialImage from '../../public/images/commercial.svg';
import Challenger605 from '../../public/images/challenger-605-airtransfer/challenger-605-airambulance-first.jpg';
import Learjet45 from '../../public/images/Learjet-45-airtransfer/Learjet-45-airtransfer-one.jpeg';
import C90 from '../../public/images/C90-airtransfer/C90-airtransfer-one.jpg';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { currencySymbols } from '../Utils/Constants';

const DedicatedCard = ({
  charteredData,
  AircraftType,
  charteredepature,
  chartereArrival,
  chartereId,
  selectedCurrency,
  handleCurrencyChange,
}) => {
  console.log(
    'data line 19',
    charteredData,
    charteredepature,
    chartereArrival,
    chartereId,
    AircraftType
  );

  const [price, setTotalPrice] = useState();
  const [aircraftName, setaircraftName] = useState('');
  const [Time, setTotaltime] = useState();
  const [dateAvailable, setdateAvailable] = useState('');

  const DateAvailble = () => {
    const aircraftDate = moment(charteredData.operator.date).format(
      'MMM DD, YYYY'
    );
    setdateAvailable(aircraftDate);
  };

  const getEUR = (price) => {
    const EuroPrice = price * 0.011;
    return EuroPrice.toFixed(2);
  };
  const getAED = (price) => {
    const PriceAED = price * 0.044;
    return PriceAED.toFixed(2);
  };

  const getUSD = (price) => {
    const PriceUsd = price * 0.012;
    return PriceUsd.toFixed(2);
  };

  const getINR = (price) => {
    const PriceINR = price;
    return PriceINR.toFixed(2);
  };

  useEffect(() => {
    const actualTotalPrice = parseFloat(
      charteredData?.totalPriceWithAdminMargin?.toFixed(2)
    );
    switch (selectedCurrency) {
      case 'EUR':
        setTotalPrice(getEUR(actualTotalPrice));
        break;
      case 'AED':
        setTotalPrice(getAED(actualTotalPrice));
        break;
      case 'USD':
        setTotalPrice(getUSD(actualTotalPrice));
        break;
      case 'INR':
        setTotalPrice(getINR(actualTotalPrice));
        break;
      default:
        setTotalPrice(0);
    }
  }, [charteredData?.totalPriceWithAdminMargin, selectedCurrency]);

  console.log('charteredData', charteredData);

  const TotalTime = () => {
    const time = moment(charteredData.totalTime).format('HH:mm');
    console.log('Time line 38', time);
    setTotaltime(time);
  };
  const Aircraft = () => {
    const aircraft = charteredData.operator.Aircraft_type;
    setaircraftName(aircraft);
  };

  useEffect(() => {
    TotalTime();
    Aircraft();
    DateAvailble();
  }, []);

  return (
    <div
      className={`w-full h-fit px-6 py-6 bg-white rounded-2xl grid grid-cols-3 gap-5 items-center cursor-pointer transition-all duration-700 hover:scale-105 box-border font-sans`}
      style={{
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
      }}
    >
      <div className="sm:col-span-3 col-span-1 ">
        <Image
          src={
            AircraftType === 'Challenger 605'
              ? Challenger605
              : AircraftType === 'Learjet 45'
              ? Learjet45
              : AircraftType === 'C-90'
              ? C90
              : CommercialImage
          }
          alt="Commercial Image"
          className="w-full object-cover sm:max-h-40 h-[180px] object-center rounded-md border border-slate-100 bg-slate-100"
        />
      </div>
      <div className="sm:col-span-3 col-span-2">
        <div className="grid grid-cols-3 gap-4 mb-5 items-center">
          <div className="">
            <span className="font-semibold text-2xl invisible font-sans">
              5:40
            </span>
            <br />
            <span className="text-[#111827] text-sm font-semibold text-center font-sans">
              {charteredepature}
            </span>
          </div>
          <div className="flex flex-col items-center text-[13px] text-[#344056]">
            {Time}
            <div className="bg-[#42D1E5] w-[40px] h-[5px]"></div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex">
              <span className="font-semibold text-2xl invisible font-sans">
                5:40
              </span>
            </div>
            <span className="text-[#111827] text-sm font-semibold text-center font-sans">
              {chartereArrival}
            </span>
          </div>
        </div>
        {/* <div className="flex justify-between align-middle mb-5">
          <div className="">
            <div>
              <div className="font-semibold text-[17px] flex flex-col">
                <div className="font-semibold w-full text-end text-[13px]">
                  Estimated Price
                </div>
                <div className="flex justify-end gap-6">
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

                  <div className="flex flex-row items-end">
                    {currencySymbols[selectedCurrency]}
                    <div className=" font-extrabold">{price}</div>
                  </div>
                </div>
              </div>
              <br />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col justify-end text-end">
                <span className="font-semibold text-[11px] text-gray-500 leading-tight">
                  Airline Name
                </span>
                <span className="font-semibold leading-tight">
                  {aircraftName}
                </span>
              </div>
              <div className="flex flex-col justify-end text-end">
                <span className="font-semibold text-[11px] text-gray-500 leading-tight">
                  Ticket Availability
                </span>

                <span className="font-semibold text-[12px]">
                  {dateAvailable}
                </span>
            
              </div>
            </div>
          </div>
        </div> */}
        <div className=" sm:flex-col">
          <div className="flex justify-between mb-5 ">
            <div className="font-semibold text-[17px] flex flex-col">
              <div className="font-semibold text-[11px] text-[#4C5564] leading-tight mb-2 font-sans">
                Estimated Price
              </div>
              <div className="flex justify-end gap-2">
                <select
                  id="currencySelector"
                  value={selectedCurrency}
                  onChange={handleCurrencyChange}
                  className="border-solid border-2 border-black rounded-md text-xs"
                >
                  {Object.keys(currencySymbols)?.map((currency, index) => {
                    return (
                      <option
                        value={currency}
                        key={'currency-item' + index}
                        className="font-sans"
                      >
                        {currency}
                      </option>
                    );
                  })}
                </select>

                <div className="flex flex-row items-end text-[#101729]">
                  {currencySymbols[selectedCurrency]}
                  <div className="font-extrabold font-weight-[900] text-[#101729] font-sans">
                    {' '}
                    {price}
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="flex flex-col items-center">
              <span className="font-semibold text-[11px] text-[#4C5564] leading-tight mb-2 ">
                Aircraft
              </span>
              <span className="font-medium text-[10px]">{aircraftName}</span>
            </div>
            <div className="flex flex-col items-center  sm:hidden">
              <span className="font-semibold text-[11px] text-[#4C5564] leading-tight mb-2">
                Ticket Available
              </span>

              <span className="font-medium leading-tight text-[12px]">
                {dateAvailable}
              </span>
              {/* <span className="font-semibold text-[14px]">
                  {aircraftData?.depatureDate}
                </span> */}
            </div>
          </div>
        </div>
        <Link
          href={`/aviapage/${`${chartereId}-${charteredData?.operator?._id}`}`}
          className="block w-full"
        >
          <div className="rounded font-semibold text-Bluedark py-1.5 text-[0.9rem] text-center align-middle border cursor-pointer bg-[#11b6e3] hover:bg-[#4BDCF0] hover:text-white">
            <div>View Details</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DedicatedCard;

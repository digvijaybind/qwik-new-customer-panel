import React, { useEffect, useState } from 'react';
import CommercialImage from '../../public/images/commercial.svg';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
const DedicatedCard = ({
  CharteredData,
  Charteredepature,
  ChartereArrival,
  ChartereId,
}) => {
  console.log(
    'data line 11',
    CharteredData,
    Charteredepature,
    ChartereArrival,
    ChartereId
  );
  const [price, setTotalPrice] = useState();
  const [aircraftName, setaircraftName] = useState('');
  const [Time, setTotaltime] = useState();
  const [dateAvailable, setdateAvailable] = useState('');

  const DateAvailble = () => {
    const aircraftDate = moment(CharteredData.operator.date).format(
      'MMMM DD, YYYY'
    );
    setdateAvailable(aircraftDate);
  };

  const Pricedata = () => {
    const cost = CharteredData.price;
    console.log('PriceDatawithmargin', cost);
    setTotalPrice(cost);
  };
  const TotalTime = () => {
    const time = moment(CharteredData.totalTime).format('HH:mm');
    setTotaltime(time);
  };
  const Aircraft = () => {
    const aircraft = CharteredData.operator.Aircraft_type;
    setaircraftName(aircraft);
  };

  useEffect(() => {
    Pricedata();
    TotalTime();
    Aircraft();
    DateAvailble();
  }, []);
  return (
    <div
      className={`w-full px-8 py-8 bg-white rounded-2xl grid grid-cols-3 gap-5 items-center cursor-pointer  transition-all duration-700 hover:scale-105`}
      style={{
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
      }}
    >
      <div class="h-full sm:col-span-3">
        <Image
          src={CommercialImage}
          alt="Commercial Image"
          class="h-full w-full object-cover  object-center rounded-md sm:max-h-40"
        />
      </div>
      <div class=" sm:col-span-3 col-span-2">
        <div class="grid grid-cols-3 gap-4 mb-5">
          <div class="flex flex-col items-start">
            <span class="text-[#545454] text-base font-semibold">
              {Charteredepature}
            </span>
          </div>
          <div class="flex flex-col items-center">
            <div class="text-[red] text-xs">{Time}</div>
            <div class="bg-[#42D1E5] w-[40px] h-[3px]"></div>
          </div>
          <div class=" flex flex-col items-end">
            <span class="text-[#545454] text-base font-semibold text-center">
              {ChartereArrival}
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
                Medical Equipment✅
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
                  <div class="flex flex-row items-end">
                    ₹<div class=" font-extrabold">{price} </div>
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
                <span class="font-semibold leading-tight">{aircraftName}</span>
              </div>
              <div class="flex flex-col justify-end text-end">
                <span class="font-semibold text-[11px] text-gray-500 leading-tight">
                  Ticket Availability
                </span>

                <span class="font-semibold text-[12px]">{dateAvailable}</span>
                {/* <span class="font-semibold text-[14px]">
              {aircraftData?.depatureDate}
            </span> */}
              </div>
            </div>
          </div>
        </div>
        <Link
          href={`/aviapage/${`${ChartereId}-${CharteredData?.operator?._id}`}`}
          className="block w-full"
        >
          <div class="rounded font-semibold text-Bluedark py-1.5 text-[0.9rem] text-center align-middle border cursor-pointer bg-primary/20 hover:bg-[#4BDCF0] hover:text-white">
            <div>View Details</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DedicatedCard;

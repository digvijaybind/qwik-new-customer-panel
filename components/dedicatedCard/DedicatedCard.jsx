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
    const cost = CharteredData.totalPriceWithAdminMargin;
    console.log('PriceDatawithmargin', cost);
    setTotalPrice(cost);
  };
  const TotalTime = () => {
    const time = moment(CharteredData.totalTime).format('HH:mm');
    console.log('Time line 38', time);
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
      <div className="h-full sm:col-span-3">
        <Image
          src={CommercialImage}
          alt="Commercial Image"
          className="h-full w-full object-cover  object-center rounded-md sm:max-h-40"
        />
      </div>
      <div className=" sm:col-span-3 col-span-2">
        <div className="grid grid-cols-3 gap-4 mb-5">
          <div className="flex flex-col items-start">
            <span className="text-[#545454] text-base font-semibold">
              {Charteredepature}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-[red] text-xs">{Time}</div>
            <div className="bg-[#42D1E5] w-[40px] h-[3px]"></div>
          </div>
          <div className=" flex flex-col items-end">
            <span className="text-[#545454] text-base font-semibold text-center">
              {ChartereArrival}
            </span>
          </div>
        </div>
        <div className="flex justify-between align-middle mb-5">
          <div className="flex flex-col">
            <p className="font-semibold">Included Perks :</p>
            <ul className="list-disc ml-4 flex flex-col gap-1">
              <li className="font-semibold text-slate-600 text-xs">
                Stretcher ✅
              </li>
              <li className="font-semibold text-slate-600 text-xs">
                Doctor OnBoard ✅
              </li>
              <li className="font-semibold text-slate-600 text-xs">
                Medical Equipment✅
              </li>
              <li className="font-semibold text-slate-600 text-xs">
                Oxygen(4L/Min) ✅
              </li>
            </ul>
          </div>
          <div className="">
            <div>
              <div className="font-semibold text-[17px] flex flex-col">
                <div className="font-semibold w-full text-end text-[13px]">
                  Estimated Price
                </div>
                <div className="flex justify-end gap-6">
                  <div className="flex flex-row items-end">
                    ₹
                    <div className=" font-extrabold">
                      {price ? price?.toFixed(2) : '-'}{' '}
                    </div>
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
                {/* <span className="font-semibold text-[14px]">
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
          <div className="rounded font-semibold text-Bluedark py-1.5 text-[0.9rem] text-center align-middle border cursor-pointer bg-primary/20 hover:bg-[#4BDCF0] hover:text-white">
            <div>View Details</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DedicatedCard;

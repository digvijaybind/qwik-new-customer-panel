"use client";

import styles from "./page.module.css";
import {Shadow} from "@/components/Utils/utils";
import {TextInput} from "@/components/Form/input";
import Planedesc from "../../components/Planedesc/planedesc";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useData} from "../../context/DataContext";
import {Switch} from "@mui/material";

const Listing = () => {
  const {apiData} = useData();

  const [airdata, setAirData] = useState({});
  useEffect(() => {
    // setAirData(JSON?.parse(localStorage?.getItem("aircraft")));
  }, []);

  const convertTime = (data) => {
    const hours = Math.floor(data); // Extract whole hours
    const minutes = Math.round((data - hours) * 60); // Convert fractional part to minutes and round

    const result = `${hours}h ${minutes}m`;
    return result;
  };
  return (
    <div className="font-poppins">
      <Shadow
        classname={`mt-[20px] w-[90%] p-[20px] flex flex-wrap ml-[50%] transform translate-x-[-50%] items-center`}
      >
        <TextInput
          className={"w-[300px] sm:w-[100%] mr-[30px] mb-[15px]"}
          label={"From"}
          labelClass="text-sm px-1"
        ></TextInput>
        <TextInput
          className={"w-[150px]  sm:w-[100%] mr-[30px] mb-[15px]"}
          label={"To"}
          labelClass="text-sm px-1"
        ></TextInput>
        <TextInput
          className={"w-[150px]  sm:w-[100%] mb-[15px] mr-[30px]"}
          label={"Depart"}
          labelClass="text-sm px-1"
        ></TextInput>
        <TextInput
          className={"w-[200px]  sm:w-[100%] mb-[15px] mr-[30px]"}
          label={"Departure Time"}
          labelClass="text-sm px-1"
        ></TextInput>
        <TextInput
          className={"w-[300px]  sm:w-[100%] mb-[15px] mr-[30px]"}
          label={"Passenger (Apart from patient)"}
          labelClass="text-sm px-1"
        ></TextInput>
        <div className="py-[8px] mb-[15px] px-[16px] bg-[#40D1F0]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.9781 15.3281L16.9659 15.3444L16.9803 15.3588L21.3903 19.7688C21.5856 19.9875 21.6898 20.2727 21.6816 20.5658C21.6734 20.8591 21.5532 21.1382 21.3457 21.3457C21.1382 21.5532 20.8591 21.6734 20.5658 21.6816C20.2727 21.6898 19.9875 21.5856 19.7688 21.3903L15.3588 16.9803L15.3444 16.9659L15.3281 16.9781C13.9186 18.0369 12.2029 18.6085 10.44 18.6066C5.93701 18.6066 2.27344 14.943 2.27344 10.44C2.27344 5.93701 5.93701 2.27344 10.44 2.27344C14.943 2.27344 18.6066 5.93701 18.6066 10.44C18.6085 12.2029 18.0369 13.9186 16.9781 15.3281ZM4.56656 10.44V10.44C4.56843 11.9972 5.18783 13.49 6.28891 14.5911C7.38998 15.6922 8.88282 16.3116 10.44 16.3134H10.44C11.6017 16.3134 12.7372 15.969 13.7031 15.3236C14.669 14.6782 15.4218 13.7609 15.8664 12.6877C16.3109 11.6144 16.4272 10.4335 16.2006 9.29415C15.974 8.15481 15.4146 7.10827 14.5931 6.28685C13.7717 5.46544 12.7252 4.90605 11.5859 4.67942C10.4465 4.45279 9.26556 4.56911 8.19233 5.01365C7.1191 5.4582 6.2018 6.21101 5.55642 7.17689C4.91103 8.14278 4.56656 9.27834 4.56656 10.44Z"
              fill="#112211"
              stroke="#112211"
              stroke-width="0.046875"
            />
          </svg>
        </div>
      </Shadow>
      <Shadow
        classname={`mt-[20px] w-[90%] p-[10px] sm:hidden flex  ml-[50%] transform translate-x-[-50%] items-center`}
      >
        <div className="flex w-[50%]">
          <div className={`${styles.Right_border} w-[50%] text-center`}>
            <h2 className="font-[600]">Cheapest</h2>
            <p className="text-[#A0A7A0] font-semibold">9h 2002</p>
          </div>
          <div className={`${styles.Right_border}  w-[50%] text-center`}>
            <h2 className="font-[600]">Fastest</h2>
            <p className="text-[#A0A7A0] font-semibold">9h 2002</p>
          </div>
        </div>
        <div className="flex w-[50%] justify-between items-center">
          <div className={`w-[50%] text-center`}>
            <h2 className="font-[700]">Commercial</h2>
          </div>
          <Switch />
          <div className={`w-[50%] text-center`}>
            <h2 className="font-[700]">Chartered</h2>
          </div>
        </div>
      </Shadow>
      <Shadow
        classname={`mt-[20px] w-[90%]  font-bold mb-[15px] text-center p-[10px] flex  ml-[50%] transform translate-x-[-50%] items-center`}
      >
        <h1 className={`${styles.Right_border} w-[50%]  font-extrabold`}>
          COMMERCIAL
        </h1>
        <h1 className="w-[50%] font-extrabold">CHARTERED</h1>
      </Shadow>
      {apiData?.nearestOperatorWithPrice?.length > 0 && (
        <p className="my-3 w-[90%] ml-[50%] transform translate-x-[-50%] font-semibold text-sm">
          Showing {apiData?.nearestOperatorWithPrice?.length} results
        </p>
      )}
      <div className="px-[5%] flex justify-between items-stretch flex-wrap">
        {apiData?.nearestOperatorWithPrice?.map((el, i) => (
          <Planedesc
            key={"reesult-item-" + i}
            name={el.operator.Aircraft_type}
            price={Math.ceil(el.price * 10) / 10}
            time={convertTime(el.totalTime)}
            speed={el.operator.speed}
            from={apiData.from}
            to={apiData.to}
          ></Planedesc>
        ))}
      </div>
      <button className="w-[90%] ml-[50%] transform translate-x-[-50%] rounded-[4px] my-[20px] px-[16px] py-[8px] bg-[#40D1F0] text-white font-[600] text-[14px]">
        Show more results
      </button>
    </div>
  );
};

export default Listing;

"use client";

import styles from "./page.module.css";
import { Shadow } from "@/components/Utils/utils";
import { TextInput } from "@/components/Form/input";
import Planedesc from "../../components/Planedesc/planedesc";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";
import { Switch } from "@mui/material";

const Listing = () => {
  const { apiData } = useData();

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
    <div className="font-Montserrat">
      <Shadow classname={`${styles.Nav_container}`}>
        {/* <div className={`${styles.Nav_first} sm:hidden`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M8.74733 22.25H7.49952C7.37414 22.25 7.25077 22.2185 7.14069 22.1585C7.03062 22.0984 6.93735 22.0118 6.86941 21.9064C6.80147 21.801 6.76104 21.6803 6.7518 21.5552C6.74257 21.4302 6.76483 21.3048 6.81655 21.1906L9.83811 14.5227L5.30108 14.4219L3.64639 16.4267C3.33092 16.8233 3.07921 17 2.43702 17H1.59702C1.46402 17.0043 1.33195 16.9764 1.212 16.9188C1.09205 16.8612 0.987757 16.7755 0.907956 16.6691C0.796393 16.5186 0.686706 16.2636 0.793581 15.8998L1.72264 12.5717C1.72967 12.5469 1.73811 12.522 1.74749 12.4977C1.74795 12.4953 1.74795 12.4929 1.74749 12.4906C1.73781 12.4663 1.72951 12.4414 1.72264 12.4161L0.792643 9.06687C0.691862 8.71016 0.802018 8.46078 0.912643 8.31406C0.986929 8.21549 1.08331 8.13573 1.19403 8.08118C1.30475 8.02664 1.42672 7.99883 1.55014 8H2.43702C2.91655 8 3.38202 8.21516 3.65577 8.5625L5.27624 10.5336L9.83811 10.4661L6.81749 3.80984C6.7657 3.69568 6.74335 3.57036 6.75249 3.44533C6.76163 3.3203 6.80196 3.19956 6.8698 3.09414C6.93764 2.98872 7.03082 2.90198 7.14083 2.84186C7.25083 2.78175 7.37416 2.75016 7.49952 2.75H8.76092C8.9369 2.75354 9.10983 2.79667 9.26685 2.8762C9.42388 2.95572 9.56097 3.0696 9.66796 3.20937L15.5297 10.3344L18.2376 10.2631C18.4359 10.2523 18.9853 10.2486 19.1123 10.2486C21.7026 10.25 23.2495 11.0909 23.2495 12.5C23.2495 12.9434 23.0723 13.7656 21.8869 14.2887C21.187 14.5981 20.2533 14.7547 19.1114 14.7547C18.9858 14.7547 18.4378 14.7509 18.2367 14.7402L15.5292 14.668L9.65296 21.793C9.54588 21.9321 9.40891 22.0454 9.25216 22.1246C9.0954 22.2037 8.92288 22.2465 8.74733 22.25Z" fill="#112211" />
          </svg>
          <p className="">Find flight</p>
        </div> */}
        <img onClick={() => router.push("/")} src="/images/logo.png" alt="logo" className="ml-16" />
        <div className="flex items-center mr-16">
          <div className={`${styles.Nav_first} mr-[30px]`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
              <g clip-path="url(#clip0_177_1304)">
                <path d="M11.2875 4.16671C12.02 4.32551 12.6932 4.72359 13.221 5.30999C13.7488 5.89639 14.107 6.64443 14.2499 7.45837M11.2875 0.833374C12.8094 1.02124 14.2286 1.77852 15.3121 2.98088C16.3956 4.18324 17.079 5.75922 17.2499 7.45004M16.4999 14.1V16.6C16.5008 16.8321 16.458 17.0618 16.3743 17.2745C16.2907 17.4871 16.1679 17.678 16.014 17.8349C15.8601 17.9918 15.6784 18.1113 15.4805 18.1856C15.2826 18.26 15.073 18.2876 14.8649 18.2667C12.5571 17.9881 10.3402 17.1118 8.39245 15.7084C6.58032 14.4289 5.04395 12.7219 3.89245 10.7084C2.62493 8.53438 1.83613 6.0592 1.58995 3.48337C1.57121 3.25293 1.59586 3.02067 1.66233 2.80139C1.72879 2.58211 1.83563 2.38061 1.97602 2.20972C2.11642 2.03883 2.2873 1.9023 2.47779 1.80881C2.66828 1.71532 2.87421 1.66693 3.08245 1.66671H5.33245C5.69643 1.66273 6.04929 1.80594 6.32527 2.06965C6.60125 2.33336 6.78151 2.69958 6.83245 3.10004C6.92742 3.9001 7.10354 4.68565 7.35745 5.44171C7.45836 5.73998 7.4802 6.06414 7.42038 6.37577C7.36056 6.68741 7.2216 6.97347 7.01995 7.20004L6.06745 8.25837C7.13512 10.3447 8.68979 12.0721 10.5675 13.2584L11.5199 12.2C11.7239 11.976 11.9813 11.8216 12.2618 11.7551C12.5423 11.6887 12.834 11.7129 13.1024 11.825C13.7829 12.1072 14.4899 12.3029 15.21 12.4084C15.5743 12.4655 15.907 12.6694 16.1448 12.9813C16.3827 13.2932 16.5091 13.6914 16.4999 14.1Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_177_1304">
                  <rect width="18" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>180012345</p>
          </div>
          <div className="flex items-center sm:hidden ">
            <img src="/images/man.svg" alt="man" />
            <p className="font-[600] text-[14px] px-[10px]">Qwiklif</p>
          </div>
        </div>
      </Shadow>
      <Shadow classname={`mt-[20px] w-[90%] p-[20px] flex flex-wrap ml-[50%] transform translate-x-[-50%] items-center`}>
        <TextInput className={"w-[300px] sm:w-[100%] mr-[30px] mb-[15px]"} label={"From"} labelClass="text-sm px-1"></TextInput>
        <TextInput className={"w-[150px]  sm:w-[100%] mr-[30px] mb-[15px]"} label={"To"} labelClass="text-sm px-1"></TextInput>
        <TextInput className={"w-[150px]  sm:w-[100%] mb-[15px] mr-[30px]"} label={"Depart"} labelClass="text-sm px-1"></TextInput>
        <TextInput className={"w-[200px]  sm:w-[100%] mb-[15px] mr-[30px]"} label={"Departure Time"} labelClass="text-sm px-1"></TextInput>
        <TextInput className={"w-[300px]  sm:w-[100%] mb-[15px] mr-[30px]"} label={"Passenger (Apart from patient)"} labelClass="text-sm px-1"></TextInput>
        <div className="py-[8px] mb-[15px] px-[16px] bg-[#40D1F0]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M16.9781 15.3281L16.9659 15.3444L16.9803 15.3588L21.3903 19.7688C21.5856 19.9875 21.6898 20.2727 21.6816 20.5658C21.6734 20.8591 21.5532 21.1382 21.3457 21.3457C21.1382 21.5532 20.8591 21.6734 20.5658 21.6816C20.2727 21.6898 19.9875 21.5856 19.7688 21.3903L15.3588 16.9803L15.3444 16.9659L15.3281 16.9781C13.9186 18.0369 12.2029 18.6085 10.44 18.6066C5.93701 18.6066 2.27344 14.943 2.27344 10.44C2.27344 5.93701 5.93701 2.27344 10.44 2.27344C14.943 2.27344 18.6066 5.93701 18.6066 10.44C18.6085 12.2029 18.0369 13.9186 16.9781 15.3281ZM4.56656 10.44V10.44C4.56843 11.9972 5.18783 13.49 6.28891 14.5911C7.38998 15.6922 8.88282 16.3116 10.44 16.3134H10.44C11.6017 16.3134 12.7372 15.969 13.7031 15.3236C14.669 14.6782 15.4218 13.7609 15.8664 12.6877C16.3109 11.6144 16.4272 10.4335 16.2006 9.29415C15.974 8.15481 15.4146 7.10827 14.5931 6.28685C13.7717 5.46544 12.7252 4.90605 11.5859 4.67942C10.4465 4.45279 9.26556 4.56911 8.19233 5.01365C7.1191 5.4582 6.2018 6.21101 5.55642 7.17689C4.91103 8.14278 4.56656 9.27834 4.56656 10.44Z" fill="#112211" stroke="#112211" stroke-width="0.046875" />
          </svg>
        </div>
      </Shadow>
      <Shadow classname={`mt-[20px] w-[90%] p-[10px] sm:hidden flex  ml-[50%] transform translate-x-[-50%] items-center`}>
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
      <Shadow classname={`mt-[20px] w-[90%]  font-bold mb-[15px] text-center p-[10px] flex  ml-[50%] transform translate-x-[-50%] items-center`}>
        <h1 className={`${styles.Right_border} w-[50%]  font-extrabold`}>COMMERCIAL</h1>
        <h1 className="w-[50%] font-extrabold">CHARTERED</h1>
      </Shadow>
      {apiData?.nearestOperatorWithPrice?.length > 0 && <p className="my-3 w-[90%] ml-[50%] transform translate-x-[-50%] font-semibold text-sm">Showing {apiData?.nearestOperatorWithPrice?.length} results</p>}
      <div className="px-[5%] flex justify-between items-stretch flex-wrap">
        {apiData?.nearestOperatorWithPrice?.map((el, i) => (
          <Planedesc key={"reesult-item-" + i} name={el.operator.Aircraft_type} price={Math.ceil(el.price * 10) / 10} time={convertTime(el.totalTime)} speed={el.operator.speed} from={apiData.from} to={apiData.to}></Planedesc>
        ))}
      </div>
      <button className="w-[90%] ml-[50%] transform translate-x-[-50%] rounded-[4px] my-[20px] px-[16px] py-[8px] bg-[#40D1F0] text-white font-[600] text-[14px]">Show more results</button>
    </div>
  );
};

export default Listing;

"use client";

import Image from "next/image";
import {Inter, Montserrat} from "@next/font/google";
import styles from "../styles/page.module.css";
import Nav from "../components/Nav/nav";
import Planetype from "../components/PlaneType/planetype";
import Review from "../components/Review/review";
import {TextInput, DateInput} from "../components/Form/input";
import {useState} from "react";
import {Shadow} from "../components/Utils/utils";

import {useForm} from "react-hook-form";
import axios from "axios";
import {useEffect} from "react";
import {useData} from "../context/DataContext";
import {useRouter} from "next/router";
const montesserat = Montserrat({subsets: ["latin"]});

export default function Home() {
  const router = useRouter();

  const [formData, setformData] = useState({});
  const [otherData, setOtherData] = useState({
    From: "",
    To: "",
    Pax: "",
    Date: "",
    Aircraft: "Learjet 45",
  });
  const {setApiData} = useData();
  const [selectedOption, setSelectedOption] = useState("");
  const [Cities, setCities] = useState({});
  const [cityMatch, setCitymatch] = useState([]);
  useEffect(() => {
    try {
      fetch("http://localhost:8000/all-airports")
        .then((response) => response.json())
        .then((data) => setCities(data))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log("error", err);
    }
  }, []);
  console.log("cities", Cities);
  const searchCity = (text) => {
    let matches = Cities.filter((city) => {
      const regex = new RegExp(`${text}`);
      return (
        city.icao.match(regex) ||
        city.city_name.match(regex) ||
        city.country_name.match(regex)
      );
    });
    setCitymatch(matches);
  };
  // useEffect(() => {
  //   handleSubmit();
  // }, [setApiData]);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(API_ENDPOINT.THIRD_API, {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       const responseData = await response.json();
  //       console.log("API response", responseData);
  //     } else {
  //       console.error("API error", response.statusText);
  //     }
  //   } catch (error) {
  //     console.log(error, "error");
  //   }
  // };

  const handleSelectChange = (e) => {
    setOtherData((pre) => ({
      ...pre,
      Aircraft: e.target.value,
    }));
  };
  const handleOtherInputChange = (field, e) => {
    const {name, value} = e.target;
    setOtherData((pre) => ({
      ...pre,
      [field]: value,
    }));
    // console.log(e, "handleOtherInputChange");
    // const {name, value} = e.target;
    // setOtherData({

    //   [field]: value,
    // });
  };
  const handleSubmit = async () => {
    // router.push({
    //   pathname: "/listing",
    //   query: "hello",
    // });

    try {
      // Make a POST request using Axios
      // const headers = {
      //   "Content-Type": "application/json",
      //   Authorization: "Bearer YOUR_ACCESS_TOKEN", // Include authorization token if needed
      // };
      // const response = await axios.post(
      //   `192.168.1.39:8000/customer/customerSearch`,

      //   {
      //     selectedOption,
      //     otherData,
      //     headers,
      //   }
      // );

      // Handle success (optional)
      // console.log("API Response:", response.data);
      console.log(otherData);

      // const response = await axios.post(
      //   "http://localhost:8000/customer/customerSearch",
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   },
      //   otherData
      // );
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify(otherData);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:8000/customer/customerSearch", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setApiData(result);
          console.log("result.data", result);
          router.push("/listing");
        })
        .catch((error) => console.log("error", error));
      console.log("API Response:", response.data);
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error.message);
    }
  };

  const planetypes = [
    {
      no: 1,
      head: "Airbus A-350",
      text: "The Airbus A350 is a long-range, wide-body twin-engine jet airliner developed and produced by Airbus.",
    },
    {
      no: 2,
      head: "G - 650",
      text: "The Gulfstream G650 is a large business jet produced by Gulfstream Aerospace. The model is designated Gulfstream GVI in its type certificate, and may be configured to carry from 11 to 18 passengers.",
    },
    {
      no: 3,
      head: "Boeing 777",
      text: "The Boeing 777, commonly referred to as the Triple Seven, is an American long-range wide-body airliner developed and manufactured by Boeing Commercial Airplanes.",
    },
    {
      no: 4,
      head: "Learjet",
      text: "Learjet is a Canadian-owned aerospace manufacturer of business jets for civilian and military use based in Wichita, Kansas, United States. Founded in the late 1950s by William Powell Lear as Swiss American Aviation Corporation",
    },
    {
      no: 5,
      head: "Sukhoi Superjet SSJ100 SSJ100",
      text: "Sukhoi Superjet SSJ100 SSJ100, the first airliner in which engine and airframe have been designed together to optimize performance. The SSJ100 – a fusion of Russia’s famed aviation design.",
    },
    {
      no: 6,
      head: "Gulf Stream 4",
      text: "The Gulfstream IV (or G-IV or GIV) and derivatives are a family of twinjet aircraft, mainly for private or business use. They were designed and built by Gulfstream Aerospace.",
    },
  ];
  return (
    <main>
      <div>
        <Nav></Nav>
        <Shadow
          classname={`${styles.Top_container} px-[10px] py-[15px] mt-[-100px]`}
        >
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.74733 21.75H7.49952C7.37414 21.75 7.25077 21.7185 7.14069 21.6585C7.03062 21.5984 6.93735 21.5118 6.86941 21.4064C6.80147 21.301 6.76104 21.1803 6.7518 21.0552C6.74257 20.9302 6.76483 20.8048 6.81655 20.6906L9.83811 14.0227L5.30108 13.9219L3.64639 15.9267C3.33092 16.3233 3.07921 16.5 2.43702 16.5H1.59702C1.46402 16.5043 1.33195 16.4764 1.212 16.4188C1.09205 16.3612 0.987757 16.2755 0.907956 16.1691C0.796393 16.0186 0.686706 15.7636 0.793581 15.3998L1.72264 12.0717C1.72967 12.0469 1.73811 12.022 1.74749 11.9977C1.74795 11.9953 1.74795 11.9929 1.74749 11.9906C1.73781 11.9663 1.72951 11.9414 1.72264 11.9161L0.792643 8.56687C0.691862 8.21016 0.802018 7.96078 0.912643 7.81406C0.986929 7.71549 1.08331 7.63573 1.19403 7.58118C1.30475 7.52664 1.42672 7.49883 1.55014 7.5H2.43702C2.91655 7.5 3.38202 7.71516 3.65577 8.0625L5.27624 10.0336L9.83811 9.96609L6.81749 3.30984C6.7657 3.19568 6.74335 3.07036 6.75249 2.94533C6.76163 2.8203 6.80196 2.69956 6.8698 2.59414C6.93764 2.48872 7.03082 2.40198 7.14083 2.34186C7.25083 2.28175 7.37416 2.25016 7.49952 2.25H8.76092C8.9369 2.25354 9.10983 2.29667 9.26685 2.3762C9.42388 2.45572 9.56097 2.5696 9.66796 2.70937L15.5297 9.83438L18.2376 9.76312C18.4359 9.75234 18.9853 9.74859 19.1123 9.74859C21.7026 9.75 23.2495 10.5909 23.2495 12C23.2495 12.4434 23.0723 13.2656 21.8869 13.7887C21.187 14.0981 20.2533 14.2547 19.1114 14.2547C18.9858 14.2547 18.4378 14.2509 18.2367 14.2402L15.5292 14.168L9.65296 21.293C9.54588 21.4321 9.40891 21.5454 9.25216 21.6246C9.0954 21.7037 8.92288 21.7465 8.74733 21.75Z"
                fill="#112211"
              />
            </svg>
            <p className="p-[10px]">Flights</p>
          </div>
          <div className="flex sm:justify-center flex-wrap px-[5%] sm:px-[2%] pt-[40px]">
            <TextInput
              className={"w-[200px] sm:w-[100%] mb-[15px] mr-[20px]"}
              label={"From"}
              // register={register("From")}
              value={otherData.From}
              name="from"
              onChange={(e) => {
                handleOtherInputChange("From", e);
                searchCity(e.target.value);
              }}
            ></TextInput>
            {cityMatch &&
              cityMatch.map((item, index) => {
                <div>
                  <div style={{width: "50%"}} title={`city:{item.name}`}>
                    city:{item.city_name}
                  </div>
                </div>;
              })}
            <TextInput
              className={"w-[100px] sm:w-[100%] mb-[15px]  mr-[20px]"}
              label={"To"}
              name="to"
              value={otherData.To}
              onChange={(e) => handleOtherInputChange("To", e)}
              // register={register("To")}
            ></TextInput>
            {cityMatch &&
              cityMatch.map((item, index) => {
                <div>
                  <div style={{width: "50%"}} title={`city:{item.name}`}>
                    city:{item.city_name}
                  </div>
                </div>;
              })}
            {/* <TextInput
              className={"w-[100px] sm:w-[100%]  mr-[20px] mb-[15px]"}
              label={"Depart"}

            ></TextInput> */}
            <div className="relative  mb-[15px]  w-[200px] sm:w-[100%]  mr-[20px]">
              <label htmlFor="" className="absolute bg-white top-[-10px]">
                Aircraft
              </label>
              <select
                // {...register("Aircraft")}
                className={`${styles.SelectInput}  h-[40px]  outline-0 mb-[15px]  w-[200px] sm:w-[100%]  mr-[20px]`}
                name="Aircraft"
                id=""
                value={otherData.Aircraft}
                onChange={handleSelectChange}
                defaultValue={"Learjet 45"}
              >
                <option value="Learjet 45">Learjet 45</option>
                <option value="C90">C90</option>
                <option value="Challenger 605">Challenger 605</option>
              </select>
            </div>

            <TextInput
              className={"w-[200px] sm:w-[100%]  mr-[20px] mb-[15px]"}
              label={"Pax"}
              value={otherData.Pax}
              name="pax"
              onChange={(e) => handleOtherInputChange("Pax", e)}
              // register={register("Pax")}
            ></TextInput>
            <DateInput
              className={"w-[250px] sm:w-[100%]  mr-[20px] mb-[15px]"}
              label={"Date"}
              value={otherData.Date}
              name="date"
              onChange={(e) => handleOtherInputChange("Date", e)}
              // register={register("Date")}
            ></DateInput>
          </div>
          <div className="px-[5%] py-[20px] flex sm:flex-col justify-end text-[14px] items-center">
            <div className="flex items-center sm:mb-[10px] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path d="M8 3.5V12.5V3.5ZM12.5 8H3.5H12.5Z" fill="#112211" />
                <path
                  d="M8 3.5V12.5M12.5 8H3.5"
                  stroke="#112211"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="pl-[10px] sm:text-[14px]">Add Promo Code</p>
            </div>
            <div
              onClick={() => handleSubmit()}
              className="flex items-center sm:text-[14px] ml-[15px] px-[16px] py-[8px] bg-[#40D1F0] cursor-pointer rounded-[4px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M9.46858 14.9999H9.49983C9.65427 15.0008 9.80542 14.9552 9.9336 14.869C10.0618 14.7829 10.1611 14.6601 10.2186 14.5168L10.1967 14.5085L10.1967 14.5083C10.141 14.6472 10.0447 14.7661 9.92052 14.8496C9.79624 14.9331 9.64971 14.9773 9.49996 14.9765H9.49983H9.4691M9.46858 14.9999L9.46963 14.9765C9.46945 14.9765 9.46928 14.9765 9.4691 14.9765M9.46858 14.9999V14.9765H9.4691M9.46858 14.9999L9.4691 14.9765M9.4691 14.9765C9.17379 14.963 8.92874 14.7657 8.83168 14.4844L8.83151 14.484C8.82949 14.4785 8.82777 14.4734 8.82603 14.4675L8.82617 14.4675L8.82513 14.4651L6.99283 10.1731C6.96895 10.0937 6.9662 10.0095 6.98487 9.92865C7.00363 9.84744 7.04336 9.77257 7.1001 9.71152L9.4691 14.9765ZM14.7645 1.23676C14.8636 1.33623 14.9317 1.46227 14.9607 1.59965C14.9896 1.73703 14.9781 1.87985 14.9276 2.01085L14.9276 2.01099L10.1968 14.5081L7.10012 9.71149L13.5164 2.82898C13.5165 2.82888 13.5166 2.82879 13.5167 2.82869C13.5393 2.80605 13.5572 2.77921 13.5694 2.74969C13.5817 2.72004 13.588 2.68825 13.588 2.65616C13.588 2.62406 13.5817 2.59228 13.5694 2.56263C13.5571 2.53297 13.5391 2.50603 13.5164 2.48334C13.4937 2.46064 13.4668 2.44264 13.4371 2.43035C13.4075 2.41807 13.3757 2.41175 13.3436 2.41175C13.3115 2.41175 13.2797 2.41807 13.25 2.43035C13.2205 2.44258 13.1937 2.46048 13.1711 2.48304C13.171 2.48314 13.1709 2.48324 13.1708 2.48334L6.28512 8.8993C6.22406 8.95605 6.14918 8.99579 6.06797 9.01455C5.98716 9.03322 5.90288 9.03048 5.82347 9.0066L1.53403 7.17492L1.53408 7.17481L1.53191 7.17413L1.51945 7.17018C1.51939 7.17016 1.51933 7.17014 1.51927 7.17012C1.37747 7.12263 1.25378 7.03255 1.16507 6.91216C1.07633 6.79172 1.02693 6.64682 1.02362 6.49725C1.0203 6.34768 1.06324 6.20074 1.14657 6.07649C1.22872 5.954 1.34617 5.85945 1.48327 5.80534V5.80622L1.49156 5.80308L13.9925 1.07152L13.9925 1.0715C14.1235 1.02171 14.266 1.01083 14.4029 1.04015C14.5399 1.06947 14.6654 1.13775 14.7645 1.23676ZM14.7645 1.23676C14.7645 1.23677 14.7645 1.23678 14.7645 1.2368L14.7811 1.22022L14.7645 1.23676Z"
                  fill="black"
                  stroke="#112211"
                  stroke-width="0.046875"
                />
              </svg>
              <p className="pl-[10px]">Show Flights </p>
            </div>
          </div>
        </Shadow>
        <div className="flex sm:flex-col justify-between items-center sm:items-start px-[10%] py-[20px]">
          <div>
            <p className="font-semibold text-[32px] py-[7px]">Top Fleets</p>
            <p>Promoted as the ultimate long-distance air ambulance</p>
          </div>
          <div>
            <p className="text-[#121] sm:mt-[15px] text-[14px] font-medium border rounded-[4px] px-[16px] py-[8px] border-[#40D1F0]">
              See more Fleets
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Shadow
            classname={
              "w-[80%] text-[16px]  font-[800] px-[5%] flex justify-between items-center py-[20px]"
            }
          >
            <p>Commercial</p>
            <p>Chartered</p>
          </Shadow>
        </div>
        <div className="flex justify-center py-[20px]">
          <div className="flex w-[80%] sm:w-[90%] sm:flex-col justify-between items-stretch flex-wrap">
            {planetypes.map(({no, head, text}) => (
              <Planetype
                key={no}
                image={no}
                head={head}
                desc={text}
              ></Planetype>
            ))}
          </div>
        </div>
        <div className="flex  justify-center">
          <img className="w-[80%]" src="/images/bigplane.png" alt="" />
        </div>
        <div className="flex sm:flex-col justify-between items-center sm:items-start px-[10%] pb-[20px]">
          <div>
            <p className="font-semibold text-[32px] py-[7px]">Reviews</p>
            <p>What people says about Qwiklif facilities</p>
          </div>
          <div>
            <p className="text-[#121] text-[14px] font-medium border rounded-[4px] px-[16px] py-[8px] border-[#40D1F0]">
              See All
            </p>
          </div>
        </div>
        <div className="flex sm:flex-col justify-between pb-[40px] px-[10%] sm:px-[5%]">
          <Review></Review>
          <Review></Review>
          <Review></Review>
        </div>
        <div className="flex justify-end px-[10%] mb-[30px]">
          <div className="flex items-center px-[20px] py-[5px] rounded-[30px] bg-[#40D1F0]">
            <img
              className="w-[64px] pl-[10px]"
              src="/images/whatsapp.png"
              alt="whatsapp"
            />
            <p className="ml-[15px] text-[22px] font-[800]">
              How can we help you?
            </p>
          </div>
        </div>
        <div className="flex flex-row ">

        </div>
      </div>
    </main>
  );
}

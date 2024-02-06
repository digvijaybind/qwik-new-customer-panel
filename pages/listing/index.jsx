"use client";

import styles from "./page.module.css";
import {Shadow} from "@/components/Utils/utils";
import {DateInput, TextInput} from "@/components/Form/input";
import Planedesc from "../../components/Planedesc/planedesc";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useData} from "../../context/DataContext";
import {Switch} from "@mui/material";
import Search from "../../public/images/search.svg";
import CommercialCard from "@/components/commercialCard/CommercialCard";
import Image from "next/image";
import Landing from "../../public/images/Searchlanding.svg";
import axios from "axios";

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

  const [apiResponse, setApiResponse] = useState(null);
  const [otherData, setOtherData] = useState({
    From: "",
    To: "",
    Date: "",
    Pax: "",
  });

  // function handle(e) {
  //   const newdata = {...otherData};
  //   newdata[e.target.id] = e.target.value;
  //   setOtherData(newdata);
  //   console.log(newdata);
  // }
  const url = "http://localhost:8000/customer/Amadeusairline";
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    pax: "",
    max: 5,
  });

  console.log("formdata", formData);
  // const handle = (e) => {
  //   const newData = {...data};
  //   newData[e.target.id] = e.target.value;
  //  (newData);
  //   console.log(newData);
  // };
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  // const submit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .get(url, {
  //       from: data.from,
  //       to: data.to,
  //       date: data.date,
  //       pax: data.pax,
  //       max: 5,
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //     });
  // };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await fetch(
      //   "http://localhost:8000/customer/Amadeusairline",
      //   {
      //     method: "GET", // Use GET method for fetching data
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     // Do not include a body for GET requests
      //   }
      // );

      // Handle the API response here, if necessary

      // const queryParams = new URLSearchParams(formData).toString();
      // console.log("queryParams", queryParams);

      // Make the API call with the query parameters appended to the URL
      const response = await axios.get(
        `http://localhost:8000/customer/Amadeusairline`,
        {
          body: JSON.stringify({
            formData,
          }),
        }
      );

      // Handle the API response here
      console.log("Response:", response.data);
      setFormData(response.data);
      console.log("final data", response.data);
      setError(null);
      // const jsonData = await response.json();
      // console.log("response", jsonData);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const formatDate = (date) => {
    return date.toISOString().substr(0, 10); // Format the date as "YYYY-MM-DD"
  };
  return (
    <div className="font-poppins">
      <Image src={Landing} height={377} width={1874} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="from"
          placeholder="From"
          value={formData.from}
          onChange={handleChange}
        />
        <input
          type="text"
          name="to"
          placeholder="To"
          value={formData.to}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={() => formData.formatDate}
          onChange={handleChange}
        />
        <input
          type="number"
          name="pax"
          placeholder="Pax"
          value={formData.pax}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
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

      <div class="grid grid-rows-5 grid-cols-1 gap-4 px-[50px]">
        <CommercialCard />
        <CommercialCard />
        <CommercialCard />
        <CommercialCard />
        <CommercialCard />
      </div>

      <button className="w-[90%] ml-[50%] transform translate-x-[-50%] rounded-[4px] my-[20px] px-[16px] py-[8px] bg-[#40D1F0] text-white font-[600] text-[14px]">
        Show more results
      </button>
    </div>
  );
};

export default Listing;

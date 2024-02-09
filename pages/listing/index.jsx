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
import CommercialImage from "../../public/images/commercial.svg";
import moment from "moment";
const Listing = ({isMobile}) => {
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

  // function handle(e) {
  //   const newdata = {...otherData};
  //   newdata[e.target.id] = e.target.value;
  //   setOtherData(newdata);
  //   console.log(newdata);
  // }
  const url = "http://localhost:8000/customer/Amadeusairline";
  const [formData, setFormData] = useState({
    originLocationCode: "",
    destinationLocationCode: "",
    departureDate: "",
    pax: 0,
    countryCode: "",
    mobile: "",
    max: 5,
  });
  const [finalData, setFinaldata] = useState([]);
  const [ArrivalLocation, setArrivalLocation] = useState();
  const [depatureLocation, setdepatureLocation] = useState();
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [depatureDate, setdepatureDate] = useState();

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

  const handleOtherInputChange = (e) => {
    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name]: name === "pax" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert(formData);
    console.log("Form submitted with data", formData);
    try {
      // const response = await axios.get(
      //   `http://localhost:8000/customer/Amadeusairline`,
      //   {
      //     body: JSON.stringify({
      //       formData,
      //     }),
      //   }
      // );
      console.log("formdata in line 89", formData);
      const response = await axios.post(
        `http://localhost:8000/customer/Amadeusairline`,
        formData
      );
      console.log("Response:", response.data);
      // setFormData(response.data);
      setFinaldata(response.data);

      const parsedDepartureDate = moment(
        response.data.ResponseData.departureDate
      );
      const formattedDepartureDate = parsedDepartureDate.format("DD MMM YYYY");

      console.log("formattedDepartureDate", formattedDepartureDate);
      setdepatureDate(formattedDepartureDate);
      console.log("final data", response.data);
      setError(null);
      // const jsonData = await response.json();
      // console.log("response", jsonData);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  console.log("depatureDate", depatureDate);
  // console.log("Form submitted with data", formData);
  const formatDate = (date) => {
    return date.toISOString().substr(0, 10); // Format the date as "YYYY-MM-DD"
  };

  console.log("final data", finalData);
  return (
    <div className="font-poppins">
      <Image src={Landing} height={377} width={1874} />

      <Shadow
        classname={`${styles.Top_container} px-[10px] py-[15px] mt-[60px] relative bottom-[140px]  lg:relative sm:static drop-shadow-xl border-8 border-solid border-[#14B4E3] p-4`}
      >
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row items-baseline justify-evenly  md:flex-col md:mb-3  sm:flex-col sm:mb-3 ">
            {/* From Input */}

            <TextInput
              className="w-[190px] md:w-[145px] sm:w-[100%] mr-[20px] md:mb-3 sm:mb-3"
              label="From"
              name="from"
              value={formData.originLocationCode}
              onChange={(e) => handleOtherInputChange("Date", e)}
            />
            {/* <div
                className="absolute overflow-auto z-[100] max-h-[300px]"
                id="fromAutoComplete"
              >
                {fieldType === "From" &&
                  cityMatch?.length > 0 &&
                  cityMatch?.map((item, index) => (
                    <div
                      key={index + "city-match-item"}
                      className="bg-[#E6F7FF] hover:#B3E0FF px-3 py-2"
                      onClick={() => handleCityItemClick("From", item)}
                    >
                      <p className="text-[0.95rem] font-semibold text-blue-900">
                        {item?.icao}
                        {item?.iata ? `(${item?.iata})` : null}
                        {item?.icao || item?.iata ? "," : null} {item?.name}
                      </p>
                      <p className="text-[0.7rem]">
                        {item?.city_name}
                        {item?.city_name ? "," : null} {item?.country_name}
                      </p>
                    </div>
                  ))}
              </div> */}

            {/* To Input */}
            <div
              style={{position: "relative"}}
              className="mb-[15px] w-[200px] sm:w-[100%] mr-[20px] md:mb-3 sm:md-3"
            >
              <TextInput
                className="w-[190px]  md:w-[145px] sm:w-[100%] mr-[20px]"
                label="To"
                name="to"
                value={formData.destinationLocationCode}
                onChange={(e) => handleOtherInputChange("Date", e)}
              />
            </div>

            {/* Date Input */}
            <DateInput
              className="w-[160px] md:w-[145px] sm:w-[100%] mr-[20px] mb-[15px]"
              label="Date"
              name="Date"
              value={formData.departureDate}
              onChange={(e) => handleOtherInputChange("Date", e)}
            />

            {/* Country Code Selection */}

            <div className="mr-2 md:mb-2 sm:mb-3">
              <select
                className="border border-solid border-gray-300 rounded-md bg-white p-3 w-[160px]"
                onChange={(e) =>
                  console.log("Selected country code:", e.target.value)
                }
              >
                <option value="" clsss="font-medium text-[8px]">
                  Select a country code
                </option>
                <option value="+1" class="font-semibold text-[8px]">
                  US (+1)
                </option>
                <option value="+1" class="font-semibold text-[8px]">
                  CA (+1)
                </option>
                <option value="+44" class="font-semibold text-[8px]">
                  UK (+44)
                </option>
                <option value="+971" class="font-semibold text-[8px]">
                  UAE (+971)
                </option>
              </select>
            </div>

            {/* Mobile Number Input */}
            <div class="md:mb-3 sm:mb-3">
              <TextInput
                className="w-[180px] md:w-[145px] sm:w-[100%] mr-[20px]"
                label="Mobile Number"
                name="mobileNumber"
                placeholder="123-456-7890"
                value={formData.mobile}
                onChange={(e) => {
                  handleOtherInputChange("mobileNumber");
                }}
              />
            </div>

            {/* Pax Input */}
            <TextInput
              className="w-[90px]  md:w-[145px] sm:w-[100%] mr-[20px] mb-[15px]"
              label="Pax"
              name="pax"
              value={formData.pax}
              onChange={(e) => handleOtherInputChange("Pax", e)}
            />

            {/* Search Button */}
            <div className="md:justify-center sm:justify-center">
              {isMobile ? (
                <div></div>
              ) : (
                <button className="h-[56px] w-[56px] bg-[#40D1F0] flex justify-center align-middle rounded-md items-center">
                  <Image src={Search} height={24} width={24} />
                </button>
              )}
            </div>
          </div>
        </form>
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

      <div class="grid grid-rows-5 grid-cols-1 gap-4 px-[50px]">
        {/* <CommercialCard />
        <CommercialCard />
        <CommercialCard />
        <CommercialCard />
        <CommercialCard /> */}

        {finalData?.AirCraftDatawithNotechStop?.length > 0 &&
          finalData?.AirCraftDatawithNotechStop?.map((data, index) => {
            const departureLocations = [];
            const arrivalLocations = [];
            const flightDurations = [];
            data.aircraft.itineraries.forEach((Innerdata) => {
              Innerdata.segments.forEach((segmentData) => {
                const departureIataCode = segmentData.departure.iataCode;
                const arrivalIataCode = segmentData.arrival.iataCode;

                console.log("departure", departureIataCode);
                console.log("arrival", arrivalIataCode);
                const departureTime = moment(segmentData.departure.at);
                const arrivalTime = moment(segmentData.arrival.at);
                const duration = moment.duration(
                  arrivalTime.diff(departureTime)
                );
                flightDurations.push(duration.asHours());
                departureLocations.push(departureIataCode);
                arrivalLocations.push(arrivalIataCode);
              });
            });

            console.log("departureLocations", departureLocations);
            console.log(" arrivalLocations", arrivalLocations);
            // data.aircraft.itineraries.forEach((Innerdata) => {
            //   Innerdata.segments.forEach((segmentData) => {
            //     const departureIataCode = segmentData.departure.iataCode;
            //     const arrivalIataCode = segmentData.arrival.iataCode;

            //     console.log("departure", departureIataCode);
            //     console.log("arrival", arrivalIataCode);

            //     // Update state after collecting all necessary data
            //     setdepatureLocation(departureIataCode);
            //     setArrivalLocation(arrivalIataCode);
            //   });
            // });
            return (
              <div key={index}>
                <div
                  className={`h-[277px] w-[680px] py-[20px] px-[20px] bg-[#fffafa]  rounded grid grid-cols-3 gap-5 items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer`}
                >
                  <div class="">
                    <Image
                      src={CommercialImage}
                      alt="Commercial Image"
                      // class="object-fill"
                      //   layout="fill"
                      class="h-64 w-100 object-none object-center"
                      //   className="rounded"
                      height={600}
                      width={400}
                    />
                  </div>
                  <div class="col-span-2">
                    <div class="grid grid-cols-3 gap-2 mb-5">
                      <div class="">
                        <span class="text-[#000000] text-[20px] font-semibold text-center">
                          {" "}
                          21:40
                        </span>
                        <br />
                        <span class="font-medium">{departureLocations[0]}</span>
                      </div>
                      <div class="flex flex-col items-center">
                        <div class="">{flightDurations[0].toFixed(2)}h</div>
                        <div class="bg-[#42D1E5] w-[40px] h-[3px]"></div>
                        <div class="text-[red] text-[14px]">Non-stop</div>
                      </div>
                      <div class="text-end">
                        <span class="text-[#000000] text-[20px] font-semibold ">
                          00:35
                        </span>
                        <br />
                        <span class="font-medium">{arrivalLocations[0]}</span>
                      </div>
                    </div>
                    <div class="flex justify-between align-middle mb-3">
                      <div class="">
                        <div class="font-semibold">Included Perks :</div>
                        <div class="font-semibold text-[14px]">
                          -Stretcher ✅
                        </div>
                        <div class="font-semibold text-[14px]">
                          -Doctor OnBoard ✅
                        </div>
                        <div class="font-semibold text-[14px]">
                          -Medical Equipment ✅
                        </div>
                        <div class="font-semibold text-[14px]">
                          -Oxygen(4L/Min) ✅
                        </div>
                      </div>
                      <div class="">
                        <div>
                          <span class="font-semibold text-[17px]">
                            € {data.price.totalPrice.toFixed(3)}
                          </span>
                          <br />
                          <span class="font-medium text-[16px] italic">
                            Estimated Price
                          </span>
                        </div>
                        <div>
                          <span class="font-semibold text-[13px]">
                            Ticket Availability
                          </span>
                          <br />
                          <span class="font-semibold text-[14px]">
                            {depatureDate}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="rounded text-center align-middle border border-[#4BDCF0] hover:border-[#4BDCF0] h-[31px] cursor-pointer text-[#4BDCF0]">
                      <div>View Details</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        {(!finalData?.AirCraftDatawithNotechStop ||
          finalData?.AirCraftDatawithNotechStop?.length === 0) &&
          finalData?.AirCraftDatawithtechStop?.length > 0 &&
          finalData?.AirCraftDatawithtechStop?.map((data, index) => {
            const departureLocations = [];
            const arrivalLocations = [];

            data.aircraft.itineraries.forEach((Innerdata) => {
              let totalDuration = 0;
              const calculateTotalDuration = (segments) => {
                let totalDuration = 0;

                segments.forEach((segment) => {
                  const departureTime = moment(segment.departure.at);
                  const arrivalTime = moment(segment.arrival.at);
                  const duration = moment.duration(
                    arrivalTime.diff(departureTime)
                  );
                  totalDuration += duration.asMinutes(); // Convert duration to minutes and accumulate
                });
                return totalDuration;
              };

              const totalDurationInMinutes = calculateTotalDuration(
                Innerdata.segments
              );

              Innerdata.segments.forEach((segmentData) => {
                const departureIataCode = segmentData.departure.iataCode;
                const arrivalIataCode = segmentData.arrival.iataCode;

                console.log("departure", departureIataCode);
                console.log("arrival", arrivalIataCode);

                departureLocations.push(departureIataCode);
                arrivalLocations.push(arrivalIataCode);
              });
            });

            console.log("departureLocations", departureLocations);
            console.log(" arrivalLocations", arrivalLocations);

            return (
              <div key={index}>
                <div
                  className={`h-[277px] w-[680px] py-[20px] px-[20px] bg-[#fffafa]  rounded grid grid-cols-3 gap-5 items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]`}
                >
                  <div class="">
                    <Image
                      src={CommercialImage}
                      alt="Commercial Image"
                      // class="object-fill"
                      //   layout="fill"
                      class="h-64 w-100 object-none object-center"
                      //   className="rounded"
                      height={600}
                      width={400}
                    />
                  </div>
                  <div class="col-span-2">
                    <div class="grid grid-cols-3 gap-2 mb-5">
                      <div class="">
                        <span class="text-[#000000] text-[20px] font-semibold text-center">
                          {" "}
                          21:40
                        </span>
                        <br />
                        <span class="font-bold">
                          {/* {data.aircraft.itineraries?.segments[0].departure} */}
                          {departureLocations[0]}
                        </span>
                      </div>
                      <div class="flex flex-col items-center">
                        <div class="">totalDurationHours</div>
                        <div class="bg-[#42D1E5] w-[56px] h-[3px]"></div>
                        <div class="text-[red] font-[3px] font-semibold">
                          1+STOP{" "}
                          <span class="font-semibold text-[10px] ">
                            {departureLocations[1]}
                          </span>
                        </div>
                      </div>
                      <div class="text-end">
                        <span class="text-[#000000] text-[20px] font-semibold ">
                          00:35
                        </span>
                        <br />
                        <span class="font-bold">{arrivalLocations[1]}</span>
                      </div>
                    </div>
                    <div class="flex justify-between align-middle mb-3">
                      <div class="">
                        <div class="font-semibold">Included Perks :</div>
                        <div class="font-semibold text-[14px]">
                          -Stretcher ✅
                        </div>
                        <div class="font-semibold text-[14px]">
                          -Doctor OnBoard ✅
                        </div>
                        <div class="font-semibold text-[14px]">
                          -Medical Equipment ✅
                        </div>
                        <div class="font-semibold text-[14px]">
                          -Oxygen(4L/Min) ✅
                        </div>
                      </div>
                      <div class="">
                        <div>
                          <span class="font-semibold text-[17px]">
                            € {data.price.totalPrice.toFixed(3)}
                          </span>
                          <br />
                          <span class="font-medium text-[16px] italic">
                            Estimated Price
                          </span>
                        </div>
                        <div>
                          <span class="font-semibold text-[13px]">
                            Ticket Availability
                          </span>
                          <br />
                          <span class="font-semibold text-[14px]">
                            {depatureDate}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="rounded text-center align-middle border border-[#4BDCF0] hover:border-[#4BDCF0] h-[31px] cursor-pointer text-[#4BDCF0]">
                      <div>View Details</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <button className="w-[90%] ml-[50%] transform translate-x-[-50%] rounded-[4px] my-[20px] px-[16px] py-[8px] bg-[#40D1F0] text-white font-[600] text-[14px]">
        Show more results
      </button>
    </div>
  );
};

export default Listing;

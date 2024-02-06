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

import {useEffect} from "react";
import {useData} from "../context/DataContext";
import {useRouter} from "next/router";
const montesserat = Montserrat({subsets: ["latin"]});
import Helicaptor from "../public/images/helicaptor.svg";
import Servicecard from "@/components/Servicecard/Servicecard";
import Training from "../public/images/training.svg";
import MRO from "../public/images/mro.svg";
import Aviation from "../public/images/aviation.svg";

import Global from "../public/images/global.jpg";
import JoinMailingList from "@/components/JoinMailingList/JoinMailingList";
import Newcard from "@/components/Newcards/newCard";
import NewAwards from "../public/images/newsAwards.svg";
import newEarn from "../public/images/newsEarn.svg";
import newHelipcator from "../public/images/newshelicaptor.svg";
import newOnline from "../public/images/newsOnline.svg";
import Popular from "@/components/popular-fleet/Popular";
import serviceTrain from "../public/images/Servicetraining.svg";
import Slider from "react-slick";
import Navnew from "@/components/Nav/Navnew";
import ImageCarousel from "@/components/Imagecarousel/ImageCarousel";
import Image1 from "../public/images/qwiklif1.jpg";
import Image2 from "../public/images/qwiklif2.jpg";
import Image3 from "../public/images/qwiklif3.jpg";
import Image4 from "../public/images/qwiklif4.jpg";
import Image5 from "../public/images/qwiklif5.jpg";
import Image6 from "../public/images/qwiklif6.jpg";
import Search from "../public/images/search.svg";
import AboutAircraft from "../public/images/Homepage/about.png";
const images = [Image1, Image2, Image3, Image4, Image5, Image6];

export default function Home() {
  const router = useRouter();
  const [formData, setformData] = useState({});
  const [fromSearch, setfromSearch] = useState("");
  const [tosearch, setTosearch] = useState("");
  const [otherData, setOtherData] = useState({
    From: "",
    To: "",
    Pax: "",
    Date: "",
    Aircraft: "Learjet 45",
  });

  const [selectedOption, setSelectedOption] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cityMatch, setCitymatch] = useState([]);
  const [fieldType, setFieldtype] = useState("");
  const {loading, startLoading, stopLoading, setApiData} = useData();

  console.log("fieldType", fieldType);
  useEffect(() => {
    // Simulate an asynchronous task (e.g., fetching user data)
    const asyncTask = async () => {
      // Replace this with your actual async logic
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Once the task is done, set loading to false
      stopLoading();
    };

    asyncTask();
  }, []);

  useEffect(() => {
    document.addEventListener("mouseup", function (e) {
      console.log("event FIred");
      let container1 = document.querySelector("#fromAutoComplete");
      console.log("container1", container1);
      let container2 = document.querySelector("#toAutoComplete");
      console.log("container2", container2);
      console.log(
        "container1 && !container1?.contains(e.target)",
        container1 && !container1?.contains(e.target)
      );
      console.log(
        "container1?.contains(e.target)",
        container1?.contains(e.target)
      );
      console.log(
        "container2 && !container2?.contains(e.target)",
        container2 && !container2?.contains(e.target)
      );
      console.log(
        "container2?.contains(e.target)",
        container2?.contains(e.target)
      );
      console.log(e.target);
      if (container1 && !container1?.contains(e.target)) {
        setFieldtype((state) => (state === "From" ? "" : state));
      }
      if (container2 && !container2?.contains(e.target)) {
        setFieldtype((state) => (state === "To" ? "" : state));
      }
    });
  }, []);

  const searchCity = (text) => {
    console.log("text", text);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}all-airports?q=${text}`)
      .then((response) => response.json())
      .then((result) => {
        console.log("result55", result);
        setCitymatch(result);
      })
      .catch((error) => console.log("error", error));
  };
  console.log("cityMatch", cityMatch);
  useEffect(() => {
    let interval = setTimeout(() => {
      if (fromSearch || tosearch) {
        searchCity(fieldType === "From" ? fromSearch : tosearch);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [fromSearch, tosearch]);
  console.log("cityMatch", cityMatch);
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
  const plane = [
    {
      title: "1200",
      content1: "Life",
      content2: "Saves",
    },
    {
      title: "50",
      content1: "Awards",
      content2: "Gained",
    },
    {
      title: "20",
      content1: "Years",
      content2: "Experiences",
    },
  ];
  const services = [
    {
      title: "Dedicated air ambulance service",
      descriaption:
        "Fully equipped dedicated charter aircraft with stretcher configuration an best for patient transfer, We have largest network of air ambulance across the world to give you the best air ambulance cost .",
      color: "#3CB3CC",
      image: Training,
    },
    {
      title: "Commercial Airline stretcher transfer",
      descriaption:
        "Transferring patient in commercial airline is another best and cost effective optionCommercial airline patient transfer works only if the patient is less on 4L of oxygen support  - whatsapp",
      color: "#D93838",
      image: Aviation,
    },
    {
      title: " International Patient transfer",
      descriaption:
        "Qwiklif offers International patient transfer service by dedicated air ambulance as well as   commercial stretcher, Qwiklif takes care of all the documentation process for smooth transfer of patient. quick deployment, ensuring a rapid response to medical emergencies.",
      color: "#3CB3CC",
      image: MRO,
    },
    {
      title: " ECMO Initiation and Air Transfer",
      descriaption:
        "Qwiklif Expert ECMO team, Initiate ECMO,stabilises patient and then transfer the patient on ECMO using air ambulance across  world.life-saving intervention for patients whose heart or lungs are severely compromised,Patients with acute",
      color: "#3CB3CC",
      image: serviceTrain,
    },
    {
      title: "Neonatal and pediatric Air Transfer",
      descriaption:
        "Qwiklif neonatal team excels in transferring critical babies from one place to another using dedicated air ambulance with advance medical equipments on board.  specialized medical care ",
      color: "#3CB3CC",
      image: Helicaptor,
    },
  ];
  const Blogs = [
    {
      Title: "Qwiklif Expands ...",
      date: "19 Nov 2023",
      descripation:
        "At Qwiklif we're committed to elevating healthcare through swift, top-notch air ambulance services. That's why ...",
      Cardimage: newHelipcator,
      buttontitle: "Read More",
    },
    {
      Title: "Qwiklif wins Air ...",
      date: "10 Apr 2023",
      descripation:
        "For the first time ever, Qwiklif wins the prestigious Air Ambulance of the Year Award at the ITIJ Awards 2022 which ...",
      Cardimage: NewAwards,
      buttontitle: "Read More",
    },
    {
      Title: "Qwiklif Earns ...",
      date: "19 Mar 2023",
      descripation:
        "Qwiklif, a global leader in the aviation industry, is soaring high with pride once again as we are thrilled to ...",
      Cardimage: newEarn,
      buttontitle: "Read More",
    },
    {
      Title: "QwiklifMag is Now Online!",
      date: "18 Mar 2023",
      descripation:
        "We are constantly on the move – whether it is with our ongoing commitment to enhancing investments or our constant efforts ...",
      Cardimage: newOnline,
      buttontitle: "Read More",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [services]);
  const [apiResponse, setApiResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = "http://localhost:8000/customer/Amadeusairline";
    const apiPayload = {
      originLocationCode: otherData.From,
      destinationLocationCode: otherData.To,
      departureDate: otherData.Date,
      pax: otherData.Pax,
      max: 20,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // Convert the payload to a query string and append it to the URL
        // ...

        // The rest of your fetch logic...
      });

      if (response.ok) {
        const data = await response.json();

        // Store the API response
        setApiResponse(data);

        // Use the response data as needed
        console.log("API Response:", data);
      } else {
        // Handle errors if the response status is not ok
        console.error("API Error:", response.statusText);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error:", error.message);
    }
  };

  return (
    <main>
      <div class="font-Montserrat">
        <Navnew></Navnew>

        <Shadow
          classname={`${styles.Top_container} px-[10px] py-[15px] mt-[-60px] relative bottom-[170px]  lg:relative sm:static drop-shadow-xl border-8 border-solid border-[#14B4E3] p-4`}
        >
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row items-center">
              {/* From Input */}
              <TextInput
                className="w-[190px] sm:w-[100%] mr-[20px]"
                label="From"
                value={otherData.From}
                name="from"
                onChange={(e) => {
                  handleOtherInputChange("From", e);
                  setFieldtype("From");
                  setFromSearch(e.currentTarget.value);
                }}
              />
              <div
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
              </div>

              {/* To Input */}
              <div
                style={{position: "relative"}}
                className="mb-[15px] w-[200px] sm:w-[100%] mr-[20px]"
              >
                <TextInput
                  className="w-[190px] sm:w-[100%] mr-[20px]"
                  label="To"
                  name="to"
                  value={otherData.To}
                  onChange={(e) => {
                    handleOtherInputChange("To", e);
                    setFieldtype("To");
                    setToSearch(e.currentTarget.value);
                  }}
                />
                <div
                  className="absolute overflow-auto z-[100] max-h-[300px]"
                  id="toAutoComplete"
                >
                  {fieldType === "To" &&
                    cityMatch?.length > 0 &&
                    cityMatch?.map((item, index) => (
                      <div
                        key={index + "city-match-item"}
                        className="bg-[#E6F7FF] hover:#B3E0FF px-3 py-2"
                        onClick={() => handleCityItemClick("To", item)}
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
                </div>
              </div>

              {/* Date Input */}
              <DateInput
                className="w-[160px] sm:w-[100%] mr-[20px] mb-[15px]"
                label="Date"
                value={otherData.Date}
                name="date"
                onChange={(e) => handleOtherInputChange("Date", e)}
              />

              {/* Country Code Selection */}
              <div className="mr-2">
                <select
                  className="border border-solid border-gray-300 rounded-md bg-white p-3 w-[120px]"
                  onChange={(e) =>
                    console.log("Selected country code:", e.target.value)
                  }
                >
                  {/* Your country code options */}
                </select>
              </div>

              {/* Mobile Number Input */}
              <div>
                <TextInput
                  className="w-[180px] sm:w-[100%] mr-[20px]"
                  label="Mobile Number"
                  name="mobileNumber"
                  placeholder="123-456-7890"
                  value={otherData.mobileNumber}
                  onChange={(e) => {
                    handleOtherInputChange("mobileNumber", e);
                    setFieldtype("mobileNumber");
                  }}
                />
              </div>

              {/* Pax Input */}
              <TextInput
                className="w-[90px] sm:w-[100%] mr-[20px] mb-[15px]"
                label="Pax"
                value={otherData.Pax}
                name="pax"
                onChange={(e) => handleOtherInputChange("Pax", e)}
              />

              {/* Search Button */}
              <div className="h-[56px] w-[56px] bg-[#40D1F0] flex justify-center align-middle rounded-md">
                <Image src={Search} height={24} width={24} />
              </div>
            </div>
          </form>
        </Shadow>
        <div class="px-10">
          {/* <div class="grid grid-cols-2 gap-5">
            <div class="w-full h-64 overflow-hidden">
              <Image src={AboutAircraft} />
            </div>
            <div class=""></div>
          </div> */}
          <div class="grid grid-cols-2 gap-2">
            <Image src={AboutAircraft} height={460} width={620} />

            <div class="grid grid-rows-3 gap-3">
              <div class="text-[38px] text-[#111111] font-bold">
                Fastest{" "}
                <span class="text-[38px] text-[#11B6E3] font-bold">
                  Air Ambulance
                </span>
                <br />
                Services
              </div>
              <div class="text-[#7A7A7A] text-[16px]">
                Qwiklif Air Ambulance Service is your trusted partner for urgent
                International Air Ambulance Transportation worldwide. With a
                dedicated team of skilled professionals and state-of-the-art
                aircraft, we specialize in swift and safe medical transfers.
                With over 15+ Professional Doctors and paramedics and access to
                air ambulance aircraft worldwide in 20+ countries qwiklif Air
                Ambulance is ready for rapid response, We find the nearest
                aircraft available to you for quick response and affordable
                pricing, compare air ambulance prices from other air operators
                across the world.
              </div>
              <div class="text-[#7A7A7A] text-[16px]">
                We are a worldwide air ambulance company with emergency medical
                transport experience. Through our international air ambulance
                service, we can arrange quick, efficient medical evacuation
                flights worldwide to ensure you get where you need to, safely
                and quickly.
              </div>
            </div>
          </div>

          <div class=""></div>
        </div>

        <div class="w-full flex justify-center mb-[100px] sm:mb-[10px]">
          <div class="grid grid-cols-3 gap-8 px-[8%] sm:grid-cols-1 sm:px-[4%] sm:gap-3 sm:mb-[50px]">
            <div class="">
              <Image
                src={Helicaptor}
                width={512}
                // height={545}
                style={{height: "100%"}}
              />
            </div>
            <div class=" col-span-2 flex items-center pl-28 sm:pl-[0]">
              <div class="flex flex-col">
                <div class="text-black text-[48px] font-bold sm:text-center">
                  Care Above, Speed Beyond
                </div>
                <div class="text-gray text-[18px] mb-[30px] mt-[30px] pr-[100px] sm:pr-[0px]">
                  QwikLif Air Ambulance Dubai is your trusted partner for urgent
                  International Air Ambulance Transportation in Dubai. With a
                  dedicated team of skilled professionals and state-of-the-art
                  aircraft, we specialize in swift and safe medical transfers.
                  Our mission is simple: to provide best air ambulance services,
                  delivering critical care and support when every moment counts.
                  We prioritize patient well-being, ensuring comfort and the
                  highest standards of medical care throughout the journey. At
                  QwikLif Air Ambulance, we stand committed to being your
                  reliable lifeline in times of medical emergencies.
                </div>
                {/* <div class="grid grid-cols-3 gap-0">
                  {plane.map((item, index) => {
                    return (
                      <div class="flex flex-col" key={index + "plane-item"}>
                        <div class="text-black font-extrabold text-[36px]">
                          {item.title}
                        </div>
                        <div class="text-black font-normal text-[18px]">
                          {item.content1}
                        </div>
                        <div class="text-black font-normal text-[18px]">
                          {item.content2}
                        </div>
                      </div>
                    );
                  })}
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex  justify-center">
          <img className="w-[80%]" src="/images/bigplane.png" alt="" />
        </div> */}
        {/* <div className="flex sm:flex-col justify-between items-center sm:items-start px-[10%] pb-[20px]">
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
        </div> */}

        {/* <div className="flex justify-end px-[10%] mb-[30px]">
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
        </div> */}
        {/* <div className="flex flex-row "></div> */}
        <div id="services">
          <div class="flex justify-center text-[#616161] font-bold text-[48px] mb-[80px] sm:mb-[10px]">
            SERVICES
          </div>
          <div class="">
            {/* {services.length > 0 &&
              services.map((item, index) => {
                return (
                  <div key={index}>
                    <Servicecard
                      title={item.title}
                      descriaption={item.descriaption}
                      bgColor={item.color}
                      imageUrl={item.image}
                    />
                  </div>
                );
              })} */}

            {/* <div class="px-[20px] py-[30px] flex flex-col justify-start bg-[#3CB3CC]">
              <div class="text-[#fff] font-normal text-[24px] mb-[30px]">
                TRAINING
              </div>
              <div class="flex flex-wrap text-[#fff] text-[15px] font-normal mb-[30px]">
                On Site practical training with top notch equipment and
                technology paired with outstanding skillset and expertise makes
                Qwiklif ’s training program like no other.
              </div>
              <div class="w-full">
                <Image src={serviceTrain} height={314} class="w-full" />
              </div>
            </div> */}

            <Slider {...settings}>
              {services.map((item, index) => {
                return (
                  <div
                    key={index}
                    class="grid gap-4 grid-cols-3 px-20 mb-[30px] mt-[20px] sm:grid-cols-1 sm:gap-4 sm:px-5"
                  >
                    <Servicecard
                      title={item.title}
                      descriaption={item.descriaption}
                      imageUrl={item.image}
                      index={index}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
          <div class="flex flex-col px-[8%]">
            {/* <div class="flex justify-between items-center">
              <span class="text-black font-bold text-[48px]">
                Popular Fleets <br />
                Right Now
              </span>
              <div class="grid grid-cols-2 gap-4 cursor-pointer">
                <Image src={LeftButton} width={79} height={72} />
                <Image src={RightButton} width={79} heifght={72} />
              </div>
            </div> */}
            <Popular />
            {/* <div class="grid grid-cols-2 gap-4">
              <Image
                objectFit="cover"
                src={Bombadier}
                width={681}
                height={796}
              />
              <div class="grid grid-rows-2 gap-4">
                <Image
                  objectFit="cover"
                  src={Bombadier1}
                  width={627}
                  height={376}
                />
                <Image
                  objectFit="cover"
                  src={beechcraft}
                  width={627}
                  height={376}
                />
              </div>
            </div> */}
            {/* <div class="grid grid-rows-3 grid-flow-col gap-4">
              <div class="row-span-3 ...">
                {" "}
                <Image
                  objectFit="cover"
                  src={Bombadier}
                  width={681}
                  height={796}
                />
              </div>
              <div class="col-span-2 ...">
                {" "}
                <Image
                  objectFit="cover"
                  src={Bombadier1}
                  width={627}
                  height={376}
                />
              </div>
              <div class="row-span-2 col-span-2 ...">
                <Image
                  objectFit="cover"
                  src={beechcraft}
                  width={627}
                  height={376}
                />
              </div>
            </div> */}
            {/* <div class="grid grid-rows-3 grid-flow-col gap-4 mb-[70px]">
              <div class="row-span-2 bg-cover ...">
                {" "}
                <Image src={Bombadier} width={681} height={796} />
              </div>
              <div class="col-span-1...">
                {" "}
                <Image src={Bombadier1} width={627} height={100} />
              </div>
              <div class="col-span-1...">
                {" "}
                <Image src={Bombadier1} width={627} height={100} />
              </div>
            </div> */}
            {/* flex box approach */}
            {/* <div class="flex flex-row justify-between">
              <div class="">
                <Image
                  objectFit="cover"
                  src={Bombadier}
                  width={681}
                  height={796}
                />
              </div>
              <div class="flex flex-col justify-between">
                <Image
                  objectFit="cover"
                  src={Bombadier1}
                  width={627}
                  height={376}
                />
                <Image
                  objectFit="cover"
                  src={beechcraft}
                  width={627}
                  height={376}
                />
              </div>
            </div> */}
          </div>
          <div class="flex flex-col justify-center mt-[100px] mb-[150px]">
            <div class="flex justify-center text-[#8a8a8a] font-extralight text-[48px] sm:text-[24px] mb-[40px] font-[xx-large]">
              QWIKLIF Global Coverage
            </div>
            <div class="w-full xl:w-full 2xl:w-full">
              <Image
                src={Global}
                width="100%"
                height=""
                class="w-full xl:w-full 2xl:w-full"
              />
            </div>
          </div>
          {/* <div class="mt-[40px] mb-[100px]">
            <div class="flex justify-center text-[#616161] font-bold text-[40px] mb-[30px]">
              Blogs
            </div>
            <div class="grid grid-cols-4 gap-10 px-[8%] sm:grid-cols-1">
              {Blogs.length > 0 &&
                Blogs.map((item, index) => {
                  return (
                    <div key={index}>
                      <Newcard
                        Title={item.Title}
                        date={item.date}
                        descripation={item.descripation}
                        Cardimage={item.Cardimage}
                        buttontitle={item.buttontitle}
                      />
                    </div>
                  );
                })}
            </div>
            <div class="px-[8%]">
              <JoinMailingList />
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
}

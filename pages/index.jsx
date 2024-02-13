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
          classname={`${styles.Top_container} px-[10px] py-[15px] bottom-[135px]  mx-[30px] relative   lg:relative sm:static drop-shadow-xl border-8 border-solid border-[#14B4E3] p-4`}
        >
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row items-baseline justify-evenly  md:flex-col md:mb-3  sm:flex-col sm:mb-3 ">
              {/* From Input */}

              <TextInput
                className="w-[220px] md:w-[145px] sm:w-[100%] mr-[20px] md:mb-3 sm:mb-3"
                label="From"
                name="originLocationCode"
                value={formData.originLocationCode}
                onChange={(e) =>
                  handleInpUTChange("originLocationCode", e.target.value)
                }
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
                  className="w-[220px]  md:w-[145px] sm:w-[100%] mr-[20px]"
                  label="To"
                  name="destinationLocationCode"
                  value={formData.destinationLocationCode}
                  onChange={(e) =>
                    handleInpUTChange("destinationLocationCode", e.target.value)
                  }
                />
              </div>

              {/* Date Input */}
              <DateInput
                className="w-[160px] md:w-[145px] sm:w-[100%] mr-[20px] mb-[15px]"
                label="Date"
                name="departureDate"
                value={formData.departureDate}
              />
              {/* Country Code Selection */}

              <div>
                {/* <select className="border border-solid border-gray-300 rounded-md bg-white p-3 w-[160px]">
                <option value="+1" className="font-semibold text-[8px]">
                  
                </option>
                <option value="+91" className="font-semibold text-[8px]">
                  IN
                </option>
                <option value="+971" className="font-semibold text-[8px]">
                  UAE
                </option>
              </select> */}
                <select
                  value={formData.countryCode}
                  className="w-32 px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"
                >
                  <option>Sele country code</option>{" "}
                  <option value="+93">Afghanistan (AF)</option>
                  <option value="+358">Åland Islands (AX)</option>
                  <option value="+355">Albania (AL)</option>
                  <option value="+213">Algeria (DZ)</option>
                  <option value="+1">American Samoa (AS)</option>
                  <option value="+376">Andorra (AD)</option>
                  <option value="+244">Angola (AO)</option>
                  <option value="+1">Anguilla (AI)</option>
                  <option value="+672">Antarctica (AQ)</option>
                  <option value="+1">Antigua and Barbuda (AG)</option>
                  <option value="+54">Argentina (AR)</option>
                  <option value="+374">Armenia (AM)</option>
                  <option value="+297">Aruba (AW)</option>
                  <option value="+61">Australia (AU)</option>
                  <option value="+43">Austria (AT)</option>
                  <option value="+994">Azerbaijan (AZ)</option>
                  <option value="+1">Bahamas (BS)</option>
                  <option value="+973">Bahrain (BH)</option>
                  <option value="+880">Bangladesh (BD)</option>
                  <option value="+1">Barbados (BB)</option>
                  <option value="+375">Belarus (BY)</option>
                  <option value="+32">Belgium (BE)</option>
                  <option value="+501">Belize (BZ)</option>
                  <option value="+229">Benin (BJ)</option>
                  <option value="+1">Bermuda (BM)</option>
                  <option value="+975">Bhutan (BT)</option>
                  <option value="+591">Bolivia (BO)</option>
                  <option value="+387">Bosnia and Herzegovina (BA)</option>
                  <option value="+267">Botswana (BW)</option>
                  <option value="+55">Brazil (BR)</option>
                  <option value="+246">
                    British Indian Ocean Territory (IO)
                  </option>
                  <option value="+673">Brunei Darussalam (BN)</option>
                  <option value="+359">Bulgaria (BG)</option>
                  <option value="+226">Burkina Faso (BF)</option>
                  <option value="+257">Burundi (BI)</option>
                  <option value="+855">Cambodia (KH)</option>
                  <option value="+237">Cameroon (CM)</option>
                  <option value="+1">Canada (CA)</option>
                  <option value="+238">Cape Verde (CV)</option>
                  <option>Cayman Islands (KY)</option>
                  <option value="+236">Central African Republic (CF)</option>
                  <option value="+235">Chad (TD)</option>
                  <option value="+56">Chile (CL)</option>
                  <option value="+86">China (CN)</option>
                  <option value="+61">Christmas Island (CX)</option>
                  <option value="+61">Cocos (Keeling) Islands (CC)</option>
                  <option value="+57">Colombia (CO)</option>
                  <option value="+269">Comoros (KM)</option>
                  <option value="+242">Congo (CG)</option>
                  <option value="+243">
                    Congo, The Democratic Republic of The (CD)
                  </option>
                  <option value="+682">Cook Islands (CK)</option>
                  <option value="+506">Costa Rica (CR)</option>
                  <option value="+225">Cote D'ivoire (CI)</option>
                  <option value="+385">Croatia (HR)</option>
                  <option value="+53">Cuba (CU)</option>
                  <option value="+357">Cyprus (CY)</option>
                  <option value="+420">Czech Republic (CZ)</option>
                  <option value="+45">Denmark (DK)</option>
                  <option value="+253">Djibouti (DJ)</option>
                  <option value="+1">Dominica (DM)</option>
                  <option value="+1">Dominican Republic (DO)</option>
                  <option value="+593">Ecuador (EC)</option>
                  <option value="+20">Egypt (EG)</option>
                  <option value="+503">El Salvador (SV)</option>
                  <option value="+240">Equatorial Guinea (GQ)</option>
                  <option value="+291">Eritrea (ER)</option>
                  <option value="+372">Estonia (EE)</option>
                  <option value="+251">Ethiopia (ET)</option>
                  <option value="+500">Falkland Islands (Malvinas) (FK)</option>
                  <option value="+298">Faroe Islands (FO)</option>
                  <option value="+679">Fiji (FJ)</option>
                  <option value="+358">Finland (FI)</option>
                  <option value="+33">France (FR)</option>
                  <option value="+594">French Guiana (GF)</option>
                  <option value="+689">French Polynesia (PF)</option>
                  <option value="+262">French Southern Territories (TF)</option>
                  <option value="+241">Gabon (GA)</option>
                  <option value="+220">Gambia (GM)</option>
                  <option value="+995">Georgia (GE)</option>
                  <option value="+49">Germany (DE)</option>
                  <option value="+233">Ghana (GH)</option>
                  <option value="+350">Gibraltar (GI)</option>
                  <option value="+30">Greece (GR)</option>
                  <option value="+299">Greenland (GL)</option>
                  <option value="+1">Grenada (GD)</option>
                  <option value="+590">Guadeloupe (GP)</option>
                  <option value="+1">Guam (GU)</option>
                  <option value="+502">Guatemala (GT)</option>
                  <option value="+44">Guernsey (GG)</option>
                  <option value="+224">Guinea (GN)</option>
                  <option value="+245">Guinea-bissau (GW)</option>
                  <option value="+592">Guyana (GY)</option>
                  <option value="+509">Haiti (HT)</option>
                  <option value="+672">
                    Heard Island and Mcdonald Islands (HM)
                  </option>
                  <option value="+379">
                    Holy See (Vatican City State) (VA)
                  </option>
                  <option value="+504">Honduras (HN)</option>
                  <option value="+852">Hong Kong (HK)</option>
                  <option value="+36">Hungary (HU)</option>
                  <option value="+354">Iceland (IS)</option>
                  <option value="+91">India (IN)</option>
                  <option value="+62">Indonesia (ID)</option>
                  <option value="+98">Iran, Islamic Republic of (IR)</option>
                  <option value="+964">Iraq (IQ)</option>
                  <option value="+353">Ireland (IE)</option>
                  <option value="+44">Isle of Man (IM)</option>
                  <option value="+972">Israel (IL)</option>
                  <option value="+39">Italy (IT)</option>
                  <option value="+1">Jamaica (JM)</option>
                  <option value="+81">Japan (JP)</option>
                  <option value="+44">Jersey (JE)</option>
                  <option value="+962">Jordan (JO)</option>
                  <option value="+7">Kazakhstan (KZ)</option>
                  <option value="+254">Kenya (KE)</option>
                  <option value="+686">Kiribati (KI)</option>
                  <option value="+850">
                    Korea, Democratic People's Republic of (KP)
                  </option>
                  <option value="+82">Korea, Republic of (KR)</option>
                  <option value="+965">Kuwait (KW)</option>
                  <option value="+996">Kyrgyzstan (KG)</option>
                  <option value="+856">
                    Lao People's Democratic Republic (LA)
                  </option>
                  <option value="+371">Latvia (LV)</option>
                  <option value="+961">Lebanon (LB)</option>
                  <option value="+266">Lesotho (LS)</option>
                  <option value="+231">Liberia (LR)</option>
                  <option value="+218">Libyan Arab Jamahiriya (LY)</option>
                  <option value="+423">Liechtenstein (LI)</option>
                  <option value="+370">Lithuania (LT)</option>
                  <option value="+352">Luxembourg (LU)</option>
                  <option value="+853">Macao (MO)</option>
                  <option value="+389">
                    Macedonia, The Former Yugoslav Republic of (MK)
                  </option>
                  <option value="+261">Madagascar (MG)</option>
                  <option value="+265">Malawi (MW)</option>
                  <option value="+60">Malaysia (MY)</option>
                  <option value="+960">Maldives (MV)</option>
                  <option value="+223">Mali (ML)</option>
                  <option value="+356">Malta (MT)</option>
                  <option value="+692">Marshall Islands (MH)</option>
                  <option value="+596">Martinique (MQ)</option>
                  <option value="+222">Mauritania (MR)</option>
                  <option value="+230">Mauritius (MU)</option>
                  <option value="+269">Mayotte (YT)</option>
                  <option value="+52">Mexico (MX)</option>
                  <option value="+691">
                    Micronesia, Federated States of (FM)
                  </option>
                  <option value="+373">Moldova, Republic of (MD)</option>
                  <option value="+377">Monaco (MC)</option>
                  <option value="+976">Mongolia (MN)</option>
                  <option value="+382">Montenegro (ME)</option>
                  <option value="+1">Montserrat (MS)</option>
                  <option value="+212">Morocco (MA)</option>
                  <option value="+258">Mozambique (MZ)</option>
                  <option value="+95">Myanmar (MM)</option>
                  <option value="+264">Namibia (NA)</option>
                  <option value="+674">Nauru (NR)</option>
                  <option value="+977">Nepal (NP)</option>
                  <option value="+31">Netherlands (NL)</option>
                  <option value="+599">Netherlands Antilles (AN)</option>
                  <option value="+687">New Caledonia (NC)</option>
                  <option value="+64">New Zealand (NZ)</option>
                  <option value="+505">Nicaragua (NI)</option>
                  <option value="+227">Niger (NE)</option>
                  <option value="+234">Nigeria (NG)</option>
                  <option value="+683">Niue (NU)</option>
                  <option value="+672">Norfolk Island (NF)</option>
                  <option value="+1">Northern Mariana Islands (MP)</option>
                  <option value="+47">Norway (NO)</option>
                  <option value="+968">Oman (OM)</option>
                  <option value="+92">Pakistan (PK)</option>
                  <option value="+680">Palau (PW)</option>
                  <option value="+970">
                    Palestinian Territory, Occupied (PS)
                  </option>
                  <option value="+507">Panama (PA)</option>
                  <option value="+675">Papua New Guinea (PG)</option>
                  <option value="+595">Paraguay (PY)</option>
                  <option value="+51">Peru (PE)</option>
                  <option value="+63">Philippines (PH)</option>
                  <option value="+64">Pitcairn (PN)</option>
                  <option value="+48">Poland (PL)</option>
                  <option value="+351">Portugal (PT)</option>
                  <option value="+1">Puerto Rico (PR)</option>
                  <option value="+974">Qatar (QA)</option>
                  <option value="+262">Reunion (RE)</option>
                  <option value="+40">Romania (RO)</option>
                  <option value="+7">Russian Federation (RU)</option>
                  <option value="+250">Rwanda (RW)</option>
                  <option value="+290">Saint Helena (SH)</option>
                  <option value="+1">Saint Kitts and Nevis (KN)</option>
                  <option value="+1">Saint Lucia (LC)</option>
                  <option value="+508">Saint Pierre and Miquelon (PM)</option>
                  <option value="+1">
                    Saint Vincent and The Grenadines (VC)
                  </option>
                  <option value="+685">Samoa (WS)</option>
                  <option value="+378">San Marino (SM)</option>
                  <option value="+239">Sao Tome and Principe (ST)</option>
                  <option value="+966">Saudi Arabia (SA)</option>
                  <option value="+221">Senegal (SN)</option>
                  <option value="+381">Serbia (RS)</option>
                  <option value="+248">Seychelles (SC)</option>
                  <option value="+232">Sierra Leone (SL)</option>
                  <option value="+65">Singapore (SG)</option>
                  <option value="+421">Slovakia (SK)</option>
                  <option value="+386">Slovenia (SI)</option>
                  <option value="+677">Solomon Islands (SB)</option>
                  <option value="+252">Somalia (SO)</option>
                  <option value="+27">South Africa (ZA)</option>
                  <option value="+500">
                    South Georgia and The South Sandwich Islands (GS)
                  </option>
                  <option value="+34">Spain (ES)</option>
                  <option value="+94">Sri Lanka (LK)</option>
                  <option value="+249">Sudan (SD)</option>
                  <option value="+597">Suriname (SR)</option>
                  <option value="+47">Svalbard and Jan Mayen (SJ)</option>
                  <option value="+268">Swaziland (SZ)</option>
                  <option value="+46">Sweden (SE)</option>
                  <option value="+41">Switzerland (CH)</option>
                  <option value="+963">Syrian Arab Republic (SY)</option>
                  <option value="+886">Taiwan (TW)</option>
                  <option value="+992">Tajikistan (TJ)</option>
                  <option value="+255">
                    Tanzania, United Republic of (TZ)
                  </option>
                  <option value="+66">Thailand (TH)</option>
                  <option value="+670">Timor-leste (TL)</option>
                  <option value="+228">Togo (TG)</option>
                  <option value="+690">Tokelau (TK)</option>
                  <option value="+676">Tonga (TO)</option>
                  <option value="+1">Trinidad and Tobago (TT)</option>
                  <option value="+216">Tunisia (TN)</option>
                  <option value="+90">Turkey (TR)</option>
                  <option value="+993">Turkmenistan (TM)</option>
                  <option value="+1">Turks and Caicos Islands (TC)</option>
                  <option value="+688">Tuvalu (TV)</option>
                  <option value="+256">Uganda (UG)</option>
                  <option value="+380">Ukraine (UA)</option>
                  <option value="+971">United Arab Emirates (AE)</option>
                  <option value="+44">United Kingdom (GB)</option>
                  <option value="+1">United States (US)</option>
                  <option value="+1">
                    United States Minor Outlying Islands (UM)
                  </option>
                  <option value="+598">Uruguay (UY)</option>
                  <option value="+998">Uzbekistan (UZ)</option>
                  <option value="+678">Vanuatu (VU)</option>
                  <option value="+58">Venezuela (VE)</option>
                  <option value="+84">Viet Nam (VN)</option>
                  <option value="+1">Virgin Islands, British (VG)</option>
                  <option value="+1">Virgin Islands, U.S. (VI)</option>
                  <option value="+681">Wallis and Futuna (WF)</option>
                  <option value="+212">Western Sahara (EH)</option>
                  <option value="+967">Yemen (YE)</option>
                  <option value="+260">Zambia (ZM)</option>
                  <option value="+263">Zimbabwe (ZW)</option>
                  {/* Add more options as needed */}{" "}
                </select>
              </div>

              {/* Mobile Number Input */}
              <div class="md:mb-3 sm:mb-3">
                <TextInput
                  className="w-[180px] md:w-[145px] sm:w-[100%] mr-[20px]"
                  label="Mobile Number"
                  name="mobile"
                  placeholder="123-456-7890"
                  value={formData.mobile}
                  onChange={(e) => handleInpUTChange("mobile", e.target.value)}
                />
              </div>

              {/* Pax Input */}
              <TextInput
                className="w-[90px]  md:w-[145px] sm:w-[100%] mr-[20px] mb-[15px]"
                label="Pax"
                name="pax"
                value={formData.pax}
                onChange={(e) => handleInpUTChange("pax", e.target.value)}
              />

              {/* Search Button */}
              <div className="md:justify-center sm:justify-center">
                <button className="h-[45px] w-[45px] bg-[#40D1F0] flex justify-center align-middle rounded-md items-center">
                  <Image src={Search} height={24} width={24} />
                </button>
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

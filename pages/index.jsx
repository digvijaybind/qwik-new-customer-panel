import Image from 'next/image';
import styles from '../styles/page.module.css';
import Review from '@/components/review/Review';
import { TextInput, DateInput } from '../components/Form/input';
import { useState } from 'react';
import { Shadow } from '../components/Utils/utils';
import { useEffect } from 'react';
import { useData } from '../context/DataContext';
import { useRouter } from 'next/router';
import countries from '../db/country.json';
import Slider from 'react-slick';
import Navnew from '@/components/Nav/Navnew';
import Search from '../public/images/search-white.svg';
import CustomDatePicker from '@/components/date/CustomDatePicker';
import Trusted from '@/components/trusted/Trusted';
import Aeroplane1 from '../public/images/trusted_contact/aeroplane1.svg';
import DoctorIcon from '../public/images/trusted_contact/doctor.svg';
import Champion from '../public/images/trusted_contact/champion.svg';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { IoAirplaneSharp } from 'react-icons/io5';
import AboutAircraft from '@/components/aboutaircraft/AboutAircraft';
import QwiklifFeature from '@/components/qwiklifFeatures/QwiklifFeature';
import Roadmap from '@/components/roadmaps/Roadmap';
import ChooseQwiklif from '@/components/whychooseqwiklif/ChooseQwiklif';
import FastestMedical from '@/components/fastestmedicalcare/FastestMedical';
import LatestNew from '@/components/latestnews/LatestNew';
import { homeCollapsable, homeServices } from '@/components/Utils/Constants';
import { TiUserOutline } from 'react-icons/ti';
import { RiPriceTag3Line } from 'react-icons/ri';
import { HiOutlineGlobeAlt } from 'react-icons/hi2';
import Link from 'next/link';
import SearchBar from '@/components/SearchBar/SearchBar';

export default function Home() {
  const [formData, setformData] = useState({});
  const [fromSearch, setfromSearch] = useState('');
  const [tosearch, setTosearch] = useState('');
  const [otherData, setOtherData] = useState({
    From: '',
    To: '',
    Pax: '',
    Date: '',
    Aircraft: 'Learjet 45',
  });
  const [selectedDate, setSelectedDate] = useState('');
  const bookTypes = ['Dedicated Air Ambulance', 'Commercial stretcher'];
  const [SelectedIndex, setSelectedIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cityMatch, setCitymatch] = useState([]);
  const [fieldType, setFieldtype] = useState('');
  const { loading, startLoading, stopLoading, setApiData } = useData();
  const [activeTab, setActiveTab] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000); // Change threshold as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const asyncTask = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      stopLoading();
    };

    asyncTask();
  }, []);

  useEffect(() => {
    document.addEventListener('mouseup', function (e) {
      console.log('event FIred');
      let container1 = document.querySelector('#fromAutoComplete');
      console.log('container1', container1);
      let container2 = document.querySelector('#toAutoComplete');
      console.log('container2', container2);
      console.log(
        'container1 && !container1?.contains(e.target)',
        container1 && !container1?.contains(e.target)
      );
      console.log(
        'container1?.contains(e.target)',
        container1?.contains(e.target)
      );
      console.log(
        'container2 && !container2?.contains(e.target)',
        container2 && !container2?.contains(e.target)
      );
      console.log(
        'container2?.contains(e.target)',
        container2?.contains(e.target)
      );
      console.log(e.target);
      if (container1 && !container1?.contains(e.target)) {
        setFieldtype((state) => (state === 'From' ? '' : state));
      }
      if (container2 && !container2?.contains(e.target)) {
        setFieldtype((state) => (state === 'To' ? '' : state));
      }
    });
  }, []);

  const searchCity = (text) => {
    console.log('text', text);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}all-airports?q=${text}`)
      .then((response) => response.json())
      .then((result) => {
        console.log('result55', result);
        setCitymatch(result);
      })
      .catch((error) => console.log('error', error));
  };
  console.log('cityMatch', cityMatch);
  useEffect(() => {
    let interval = setTimeout(() => {
      if (fromSearch || tosearch) {
        searchCity(fieldType === 'From' ? fromSearch : tosearch);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [fromSearch, tosearch]);
  console.log('cityMatch', cityMatch);

  const handleSelectChange = (e) => {
    setOtherData((pre) => ({
      ...pre,
      Aircraft: e.target.value,
    }));
  };
  const handleOtherInputChange = (field, e) => {
    const { name, value } = e.target;
    setOtherData((pre) => ({
      ...pre,
      [field]: value,
    }));
  };
  const handleInputChange = (field, e) => {
    const { name, value } = e.target;
    setformData((pre) => ({
      ...pre,
      [field]: value,
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % homeServices.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [homeServices]);
  const [apiResponse, setApiResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = 'http://localhost:8000/customer/Amadeusairline';
    const apiPayload = {
      originLocationCode: otherData.From,
      destinationLocationCode: otherData.To,
      departureDate: otherData.Date,
      pax: otherData.Pax,
      max: 20,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setApiResponse(data);
        console.log('API Response:', data);
      } else {
        console.error('API Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleDateChange = (event) => {
    const selected = new Date(event.target.value);
    const today = new Date();
    if (selected < today) {
      setSelectedDate('');
    } else {
      setSelectedDate(event.target.value);
    }
  };

  const handlePress = (item, index) => {
    setSelectedIndex(index);
  };

  const tasktab = [
    {
      img: Aeroplane1,
      title: 'Express Lane to Care',
      description:
        'Time is precious, especially during emergencies. Our air ambulances are not just vehicles; they are a beacon of hope on the fastest route to medical assistance. We pride ourselves on a lightning-quick response that bridges the gap between distress and relief',
    },
    {
      img: DoctorIcon,
      title: 'Innovation in Every Flight',
      description:
        "QwikLif Air Ambulance embraces cutting-edge medical technology. Think of our ambulances as flying hospitals, complete with state-of-the-art equipment. We're not just transporting patients; we're bringing a mobile medical unit to ensure the best care possible.",
    },
    {
      img: Champion,
      title: 'Angels in the Air:',
      description:
        "Behind the wings of our aircraft are skilled and compassionate medical professionals. Our team is not just here to transport; they're here to comfort. From experienced paramedics to caring nurses, our crew turns a challenging journey into a voyage of support and expertise.",
    },
  ];
  const [SelectedCollapseIndex, setSelectedCollapseIndex] = useState(-1);
  return (
    <main>
      <div className="font-Montserrat">
        <Navnew></Navnew>
        <SearchBar
          className="bottom-56"
          isMobile={isMobile}
          formData={formData}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
        <AboutAircraft />
        <div>
          <QwiklifFeature />
        </div>

        <div id="services" className="w-full">
          <div className="px-36 sm:px-10">
            <div className="py-24">
              <h2 className="font-arcaMajoraHeavy text-4xl text-center">
                How to Book Air Ambulance
              </h2>
              <p className="text-[#413D3D] leading-[26px] text-[18px] font-normal text-center mt-[30px]">
                Here’s simple step to Book Air Ambulance
                <br /> Call now to our professional doctors to discuss patient
                medical condition
              </p>
              <Roadmap />
            </div>
            <ChooseQwiklif />
          </div>
          <FastestMedical />
          <LatestNew />

          <div
            className="mt-14"
            style={{
              background: `#007BFF url("/images/honeycomb.png")`,
            }}
          >
            <Review />
          </div>

          <div className="flex flex-col items-start px-36 sm:px-10 py-16">
            <div className="flex flex-col items-start w-full sm:items-center ">
              <h1 className="font-arcaMajoraHeavy text-3xl text-center mb-2">
                Why you should choose our services
              </h1>
              <h2 className="text-[#646464] font-medium text-[16px] leading-[26px] text-center sm:mx-[5%]">
                Do you have questions about flying privately? Wondering more
                about Whether you’re flying in a small, medium, or large group,
              </h2>
              <div className="flex justify-center items-center mt-[20px] mb-[30px] sm:flex-row sm:w-full">
                <hr className="bg-[#11B6E3] h-[4px] w-[45px]" />
              </div>
            </div>

            <div className="flex-col items-start w-full mt-[40px] flex gap-[10px]">
              {homeCollapsable.map((item, index) => {
                return (
                  <div
                    key={'choose-us-features' + index}
                    className="flex-col items-start w-full h-auto"
                  >
                    <div
                      className={`w-full flex-row justify-between rounded-md items-center h-[90px] flex hover:bg-primary hover:!text-white transition-all duration-300 ${
                        SelectedCollapseIndex != index
                          ? 'bg-[#F1F7FA]'
                          : 'bg-[#11B6E3]'
                      }`}
                    >
                      <h4
                        className={`ml-[30px] ${
                          SelectedCollapseIndex === index
                            ? 'text-[#FFFFFF]'
                            : ''
                        }  font-arcaMajoraBold text-xl`}
                      >
                        {item.header}
                      </h4>
                      <div
                        className={`flex flex-row justify-start items-center mr-[30px]`}
                      >
                        {SelectedCollapseIndex != index ? (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedCollapseIndex(index);
                            }}
                          >
                            <FaPlus className="text-2xl" />
                          </button>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedCollapseIndex(-1);
                            }}
                          >
                            <FaMinus className="text-2xl text-white" />
                          </button>
                        )}
                      </div>
                    </div>

                    {SelectedCollapseIndex === index ? (
                      <div className="h-[180px] sm:h-[290px] bg-[#FBFBFB] w-full">
                        <p className="w-[90%] mx-[5%] text-[#7A7A7A] text-[16px] font-normal leading-[26px] pt-[50px] sm:pt-[30px]">
                          {item.description}
                        </p>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className={`${styles.gray_plane} py-12 sm:px-3 px-36 w-full mt-[90px] sm:flex-col items-center grid grid-cols-12 gap-10 sm:grid-cols-1 `}
          >
            <div className="flex items-start flex-col col-span-7 sm:col-span-1  sm:px-7">
              <div className="text-[#a9b5bf] font-arcaMajoraBold">
                QwikLif Air Ambulance
              </div>
              <div className="font-arcaMajoraHeavy text-4xl text-white mt-1 mb-6">
                Your Trusted Global Air Ambulance <br /> Provider
              </div>
              {tasktab.map((data, index) => {
                return (
                  <div key={'tasktab' + index} className="mb-3">
                    <Trusted
                      img={data.img}
                      title={data.title}
                      descripation={data.description}
                    />
                  </div>
                );
              })}
            </div>

            <div className="bg-white flex flex-col items-start shadow-2xl rounded-lg col-span-5 sm:col-span-1 py-10 sm:px-6 px-12">
              <div className="flex flex-col items-start sm:w-full sm:items-center ">
                <h2 className="font-arcaMajoraHeavy text-3xl sm:text-2xl text-center">
                  Get Quote Now
                </h2>
                <hr className="bg-[#11B6E3] h-[4px] w-[45px] mt-[20px]" />
              </div>

              <form
                onSubmit={handleSubmit}
                className={`mt-[30px] w-full ${styles.form}`}
              >
                <div className="grid grid-cols-5 gap-3">
                  <input
                    type="text"
                    value=""
                    placeholder="From *"
                    // className="border-[#DEE5E9] border-[1px] h-[50px] outline-0 rounded-md"
                    className=" h-[50px] col-span-5 sm:col-span-5  rounded-md  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                  />

                  <input
                    type="text"
                    value=""
                    placeholder="To *"
                    className=" rounded-md  col-span-5 sm:col-span-5 !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                  <input
                    type="text"
                    value=""
                    placeholder="Phone *"
                    className="h-[50px]  col-span-2 sm:col-span-5 sm:w-full rounded-md  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                  <input
                    type="text"
                    value=""
                    placeholder="E-mail*"
                    className=" h-[50px]  col-span-3 sm:col-span-5 sm:w-full rounded-md  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                  />

                  <CustomDatePicker
                    containerClass="col-span-3 sm:col-span-5"
                    ClassName="h-[50px] rounded-md  !border w-full !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                  <input
                    type="text"
                    value=""
                    placeholder="Time*"
                    className="h-[50px] col-span-2 sm:col-span-5 rounded-md !border !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                  <div className="col-span-5">
                    <button
                      className={`${styles.boxShado} w-full h-[50px] bg-[#11B6E3] rounded-[4px] mt-[25px] font-semibold text-[15px] leading-[22.5px] text-white hover:bg-[#3c70fa] shadow-lg shadow-[#11B6E3]`}
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

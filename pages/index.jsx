//Importing Required modules and component's
import { FaMinus, FaPlus } from 'react-icons/fa';
import styles from '../styles/page.module.css';
import { Suspense, useState } from 'react';
import { useEffect } from 'react';
import { useData } from '../context/DataContext';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Navnew from '@/components/Nav/Navnew';
import CustomDatePicker from '@/components/date/CustomDatePicker';
import Trusted from '@/components/trusted/Trusted';
import Aeroplane1 from '../public/images/trusted_contact/aeroplane1.svg';
import DoctorIcon from '../public/images/trusted_contact/doctor.svg';
import Champion from '../public/images/trusted_contact/champion.svg';
import Roadmap from '@/components/roadmaps/Roadmap';
import { homeCollapsable, homeServices } from '@/components/Utils/Constants';
import UpdateSearch from '@/components/SearchBar/UpdateSearch';
import MobileSearch from '@/components/mobileSearch/MobileSearch';
import { StyledSection } from '@/components/shared';
const AboutAircraft = dynamic(() =>
  import('@/components/aboutaircraft/AboutAircraft')
);
const QwiklifFeature = dynamic(() =>
  import('@/components/qwiklifFeatures/Qwikliffeature')
);
const ChooseQwiklif = dynamic(() =>
  import('@/components/whychooseqwiklif/ChooseQwiklif')
);
const FastestMedical = dynamic(() =>
  import('@/components/fastestmedicalcare/FastestMedical')
);
const LatestNew = dynamic(() => import('@/components/latestnews/LatestNew'));
const ReviewCarosel = dynamic(() =>
  import('@/components/reviewCarosel/ReviewCarosel')
);
const Rotatemap = dynamic(() => import('@/components/rotateMap/Rotatemap'));
//Main component function
export default function Home() {
  const router = useRouter();
  const [formData, setformData] = useState({
    originLocationCode: '',
    destinationLocationCode: '',
    departureDate: '',
    pax: 1,
    countryCode: '',
    mobile: '',
    max: 5,
  });
  const [fromSearch, setfromSearch] = useState('');
  const [tosearch, setTosearch] = useState('');

  const [selectedDate, setSelectedDate] = useState('');
  const bookTypes = ['Dedicated Air Ambulance', 'Commercial stretcher'];
  const [SelectedIndex, setSelectedIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cityMatch, setCitymatch] = useState([]);
  const [fieldType, setFieldtype] = useState('');
  const { loading, startLoading, stopLoading, setApiData } = useData();
  const [isMobile, setIsMobile] = useState(false);

  //handle resize function for mobiel view

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //search for autoSuggestion
  useEffect(() => {
    const asyncTask = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      stopLoading();
    };

    asyncTask();
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

  //handle submit form API calling

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push({
      pathname: '/searchResponse',
      query: {
        pax: formData?.pax,
        originLocationCode: formData.originLocationCode,
        destinationLocationCode: formData.destinationLocationCode,
        mobile: formData.mobile,
        departureDate: formData.departureDate,
        countryCode: formData.countryCode,
      },
    });
  };

  //tab array
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
      <div className="font-sans z-0">
        {/*Navbar */}
        <Navnew />
        {/*conditional search bar component depend on view search bar will update */}
        {!isMobile ? (
          <div className="relative bottom-56 flex justify-center">
            <UpdateSearch
              className="bottom-60 sm:bottom-60"
              isMobile={isMobile}
              formData={formData}
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
            />
          </div>
        ) : (
          <div className="relative bottom-15">
            <MobileSearch
              formData={formData}
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
            />
          </div>
        )}

        <Suspense fallback={<div>Loading...</div>}>
          <StyledSection className="relative bottom-[220px] sm:bottom-0">
            {/*About us section component */}
            <AboutAircraft />
            {/*Qwiklif Feautres Component  */}
            <QwiklifFeature />
          </StyledSection>

          {/* Roadmap */}
          <StyledSection className="relative bottom-[150px] sm:bottom-0">
            <div className="py-5 sm:py-5">
              <h2 className="font-sans font-extrabold text-4xl sm:text-xl text-center">
                How to Book Air Ambulance
              </h2>
              <p className="text-[#413D3D] text-lg sm:text-sm font-sans font-normal text-center mt-4">
                Here’s simple step to Book Air Ambulance.
                <br /> Call now to our professional doctors to discuss patient
                medical condition.
              </p>
              <Roadmap />
            </div>
            <ChooseQwiklif />
          </StyledSection>
          {/* Roadmap */}

          {/* Medical Care */}
          <StyledSection
            containerStyles={{
              backgroundImage: "url('/images/lower_plane.png')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
            className="px-10 py-5"
          >
            <FastestMedical />
          </StyledSection>
          {/* Medical Care */}
          {/*News */}
          <StyledSection className="relative top-10 sm:bottom-0">
            <LatestNew />
          </StyledSection>

          {/*News */}

          {/* <ReviewCarosel /> */}

          {/* Why Choose Our Services */}
          <StyledSection className="relative top-10">
            <div className="flex flex-col items-start px-36 sm:px-10 py-16">
              <div className="flex flex-col items-start w-full sm:items-center ">
                <h1 className="font-sans font-extrabold text-3xl text-center mb-2">
                  Why you should choose our services
                </h1>
                <h2 className="text-[#646464] font-sans font-medium text-[16px] leading-[26px] text-center sm:mx-[5%]">
                  Do you have questions about flying privately? Wondering more
                  about Whether you’re flying in a small, medium, or large
                  group,
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
                      className="relative flex-col items-start w-full h-auto cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedCollapseIndex(
                          SelectedCollapseIndex != index ? index : -1
                        );
                      }}
                    >
                      <div
                        className={`w-full flex-row justify-between rounded-md items-center h-[90px] flex hover:bg-[#19c0f0] hover:!text-white transition-all duration-300 ${
                          SelectedCollapseIndex != index
                            ? 'bg-[#F1F7FA]'
                            : 'bg-[#19c0f0] rounded-b-none'
                        }`}
                      >
                        <h4
                          className={`ml-[30px] ${
                            SelectedCollapseIndex === index
                              ? 'text-[#FFFFFF]'
                              : ''
                          }  font-sans font-extrabold text-lg sm:text-sm`}
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
                        <div className=" bg-[#FBFBFB] w-full py-6 rounded-b-md transition-all duration-300">
                          <p className="w-[90%] mx-[5%] text-[#7A7A7A] text-[16px] sm:text-sm sm:leading-6 font-normal font-sans leading-[26px] ">
                            {item.description}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </StyledSection>
          {/* Why Choose Our Services */}

          {/* Reviews */}
          <StyledSection className="relative bottom-4 mt-5">
            {/* <ReviewCarosel/> */}

            {/* <Googlereview /> */}
            <ReviewCarosel />
          </StyledSection>
          {/* Reviews */}

          <div className="flex justify-center mt-8">
            <Rotatemap />
          </div>

          {/* Air Ambulance */}
          <div
            className={`${styles.gray_plane} py-12 sm:px-3 px-36 w-full mt-[90px] sm:flex-col items-center grid grid-cols-12 gap-10 sm:grid-cols-1 `}
          >
            <div className="flex items-start flex-col col-span-7 sm:col-span-1  sm:px-7">
              <div className="text-[#a9b5bf] font-sans font-extrabold">
                QwikLif Air Ambulance
              </div>
              <div className="font-sans font-extrabold text-4xl text-white mt-1 mb-6">
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
                <h2 className="font-sans font-extrabold text-3xl sm:text-2xl text-center">
                  Get Quote Now
                </h2>
                <hr className="bg-[#11B6E3] h-[4px] w-[45px] mt-[20px]" />
              </div>
              {/* this is form of landing page */}
              <form
                onSubmit={handleSubmit}
                className={`mt-[30px] w-full ${styles.form}`}
              >
                <div className="grid grid-cols-5 gap-3">
                  <input
                    type="text"
                    value=""
                    placeholder="From *"
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
                      className={`${styles.boxShado} w-full h-[50px] bg-[#19c0f0] rounded-[4px] mt-[25px] font-semibold text-[15px] leading-[22.5px] text-white hover:bg-[#19c0f0] shadow-lg shadow-[#19c0f0]`}
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Suspense>
        {/* Air Ambulance */}
      </div>
    </main>
  );
}

import { FaMinus, FaPlus } from 'react-icons/fa';
import styles from '../styles/page.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useData } from '../context/DataContext';
import { useRouter } from 'next/router';
import Navnew from '@/components/Nav/Navnew';
import Trusted from '@/components/trusted/Trusted';
import Aeroplane1 from '../public/images/trusted_contact/aeroplane1.svg';
import DoctorIcon from '../public/images/trusted_contact/doctor.svg';
import Champion from '../public/images/trusted_contact/champion.svg';
import AboutAircraft from '@/components/aboutaircraft/AboutAircraft';
import QwiklifFeature from '@/components/qwiklifFeatures/Qwikliffeature';
import Roadmap from '@/components/roadmaps/Roadmap';
import ChooseQwiklif from '@/components/whychooseqwiklif/ChooseQwiklif';
import FastestMedical from '@/components/fastestmedicalcare/FastestMedical';
import LatestNew from '@/components/latestnews/LatestNew';
import { homeCollapsable, homeServices } from '@/components/Utils/Constants';
import UpdateSearch from '@/components/SearchBar/UpdateSearch';
import MobileSearch from '@/components/mobileSearch/MobileSearch';
import Review from '@/components/Review/review';
import { StyledSection } from '@/components/shared';
import { AirAmbulancerForm } from '@/components/ambulance';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    router.push({
      pathname: '/listing',
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
      <div className="font-sans">
        <Navnew />
        {/* <SearchBar
          className="bottom-60 sm:bottom-60"
          isMobile={isMobile}
          formData={formData}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        /> */}


        <StyledSection containerClassName='-translate-y-1/2'>
          <UpdateSearch
            isMobile={isMobile}
            formData={formData}
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
          />
        </StyledSection>
        
        {/* {!isMobile ? (
          <StyledSection containerClassName='-translate-y-1/2'>
            <UpdateSearch
              isMobile={isMobile}
              formData={formData}
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
            />
          </StyledSection>
        ) : (
          <StyledSection className="">
            <MobileSearch
              formData={formData}
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
            />
          </StyledSection>
        )} */}

        {/* About Air Craft && Qwiklif Features */}
        <StyledSection>
          <AboutAircraft />
          <QwiklifFeature />
        </StyledSection>
        {/* About Air Craft && Qwiklif Features */}


        {/* Roadmap */}
        <StyledSection>
          <div className="py-24">
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
          containerStyles={{ backgroundImage: "url('/images/lower_plane.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
        >
          <FastestMedical />
        </StyledSection>
        {/* Medical Care */}

        {/* Latest News */}
        <StyledSection>
          <LatestNew />
        </StyledSection>
        {/* Latest News */}


        {/* Reviews */}
        <StyledSection
          containerClassName='mt-14'
          containerStyles={{ background: `#007BFF url("/images/honeycomb.png")` }}
        >
          <Review />
        </StyledSection>
        {/* Reviews */}


        {/* Why Choose Our Services */}
        <StyledSection>
          <div className="flex flex-col items-start px-36 sm:px-10 py-16">
            <div className="flex flex-col items-start w-full sm:items-center ">
              <h1 className="font-sans font-extrabold text-3xl text-center mb-2">
                Why you should choose our services
              </h1>
              <h2 className="text-[#646464] font-sans font-medium text-[16px] leading-[26px] text-center sm:mx-[5%]">
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
                    className="relative flex-col items-start w-full h-auto cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedCollapseIndex(SelectedCollapseIndex != index ? index : -1);
                    }}
                  >
                    <div
                      className={`w-full flex-row justify-between rounded-md items-center h-[90px] flex hover:bg-[#4B68B8] hover:!text-white transition-all duration-300 ${SelectedCollapseIndex != index
                        ? 'bg-[#F1F7FA]'
                        : 'bg-[#4B68B8] rounded-b-none'
                        }`}
                    >
                      <h4
                        className={`ml-[30px] ${SelectedCollapseIndex === index
                          ? 'text-[#FFFFFF]'
                          : ''
                          }  font-sans font-extrabold text-xl`}
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

        {/* Air Ambulance */}
        <StyledSection
          className={`py-12 w-full mt-[90px]`}
          containerClassName={styles.gray_plane}
        >
          <div className='flex items-center flex-col gap-2'>
            <div className="text-[#a9b5bf] font-sans font-extrabold">
              QwikLif Air Ambulance
            </div>
            <p className="font-sans font-extrabold text-4xl sm:text-xl lg:text-3xl text-center text-white mt-1 mb-6">
              Your Trusted Global Air Ambulance <br /> Provider
            </p>
          </div>

          <div className="flex items-start flex-col col-span-7 sm:col-span-1  sm:px-7">
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
          <AirAmbulancerForm
            formData={formData}
          />
        </StyledSection>
        {/* Air Ambulance */}

      </div>
    </main >
  );
}

//Importing Required modules and component's
import { FaMinus, FaPlus } from "react-icons/fa";
import styles from "../styles/page.module.css";
import { Suspense, useState } from "react";
import { useEffect } from "react";
import { useData } from "../context/DataContext";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Navnew from "@/components/Nav/Navnew";
import CustomDatePicker from "@/components/date/CustomDatePicker";
import Trusted from "@/components/trusted/Trusted";
import Aeroplane1 from "../public/images/trusted_contact/aeroplane1.svg";
import DoctorIcon from "../public/images/trusted_contact/doctor.svg";
import Champion from "../public/images/trusted_contact/champion.svg";
import Roadmap from "@/components/roadmaps/Roadmap";
import { homeCollapsable, homeServices } from "@/components/Utils/Constants";
import MobileSearch from "@/components/mobileSearch/MobileSearch";
import { StyledSection } from "@/components/shared";
import UpdateSearchNew from "@/components/updatesearch/UpdateSearch";
import { useCallback } from "react";
import AboutAircraftUpdate from "@/components/aboutaircraft/AboutAircraftUpdate";
import ServicesHight from "@/components/serviceshight/ServicesHight";
import ServiceUpdate from "@/components/Servicecard2/ServiceUpdate";
import Bookambulance from "@/components/bookambulance/Bookambulance";
import WhychooseQwiklif from "@/components/whychooseqwiklif/WhychooseQwiklif";
import NewsUpdate2 from "@/components/NewsUpdates/NewsUpdate2";
import Reviewupdate from "@/components/Review/Reviewupdate";
import LoactionUpdate from "@/components/locationupdate/LoactionUpdate";
import Link from "next/link";
import ExpereinceAirambulance from "@/components/experienceAirmabulance/ExpereinceAirambulance";

const AboutAircraft = dynamic(
  () => import("@/components/aboutaircraft/AboutAircraft"),
);
const ServicesSection = dynamic(
  () => import("@/components/Servicecard2/Servicecard2"),
);
const QwiklifFeature = dynamic(
  () => import("@/components/qwiklifFeatures/Qwikliffeature"),
);
const ChooseQwiklif = dynamic(
  () => import("@/components/whychooseqwiklif/ChooseQwiklif"),
);
const FastestMedical = dynamic(
  () => import("@/components/fastestmedicalcare/FastestMedical"),
);
const LatestNew = dynamic(() => import("@/components/latestnews/LatestNew"));
const ReviewCarosel = dynamic(
  () => import("@/components/reviewCarosel/ReviewCarosel"),
);
const Rotatemap = dynamic(() => import("@/components/rotateMap/Rotatemap"));
//Main component function
const Home = () => {
  const router = useRouter();
  const [fromSearch, setfromSearch] = useState("");
  const bookTypes = ["Dedicated Air Ambulance", "Commercial stretcher"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const { loading, startLoading, stopLoading, setApiData } = useData();
  const [isMobile, setIsMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("static");
  //handle resize function for mobiel view
  const [formData, setFormData] = useState({
    originLocationCode: "",
    destinationLocationCode: "",
    departureDate: "",
    countryCode: "",
    mobile: "",
  });
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
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
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % homeServices.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [homeServices]);

  useEffect(() => {
    console.log("currentIndex changed:", currentIndex);
  }, [currentIndex]);

  const stableSetFormData = useCallback((data) => {
    setFormData(data);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setLastScrollY(window.scrollY);
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const tasktab = [
    {
      img: Aeroplane1,
      title: "Express Lane to Care",
      description:
        "Time is precious, especially during emergencies. Our air ambulances are not just vehicles; they are a beacon of hope on the fastest route to medical assistance. We pride ourselves on a lightning-quick response that bridges the gap between distress and relief",
    },
    {
      img: DoctorIcon,
      title: "Innovation in Every Flight",
      description:
        "QwikLif Air Ambulance embraces cutting-edge medical technology. Think of our ambulances as flying hospitals, complete with state-of-the-art equipment. We're not just transporting patients; we're bringing a mobile medical unit to ensure the best care possible.",
    },
    {
      img: Champion,
      title: "Angels in the Air:",
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
        {/* {!isMobile ? (
          <div id="staticSection" className={`relative bottom-40 sm:hidden`}>
            <div className="flex justify-center ">
              <UpdateSearchNew
                className={`${
                  isSticky
                    ? `${styles.Searchbar2} flex justify-center items-center `
                    : `${styles.Searchbar} flex justify-center items-center `
                } `}
                formData={formData}
                setFormData={stableSetFormData}
              />
            </div>
          </div>
        ) : (
          <div className="relative top-5 flex justify-center px-5">
            <MobileSearch formData={formData} setfromSearch={setfromSearch} />
          </div>
        )} */}

        <div
          className={`${styles.LandingImage} h-[600px] w-full bg-cover bg-center px-20 flex justify-start items-center sm:justify-center sm:px-10 `}
        >
          <div className="flex flex-col justify-start max-w-[630px] max-h-[480px]sm:max-h-[550px] space-y-4 sm:justify-center">
            {/* Headline */}
            <h1 className="bg-headline-gradient text-transparent bg-clip-text font-barlow font-bold text-[54px] leading-tight sm:text-[34px]">
              FAST, TRUSTED <br />
              AIR AMBULANCE CARE.
            </h1>

            {/* Subheadline */}
            <p className="text-lg leading-relaxed font-barlow font-regular text-[#1E1E1E]">
              Expert air medical transport ensuring critical care and rapid
              response, tailored to meet urgent needs across the globe.
            </p>

            {/* Services Section */}
            <div className="grid grid-cols-4 gap-x-4 mt-20 mb-20 sm:gap-x-2">
              <div className="flex items-center space-x-2">
                {/* Colored Dot */}
                <div className="h-3 w-3 sm:h-4 sm:w-6 rounded-full bg-[#00FF00]"></div>
                {/* Text */}
                <span className="text-[#1E1E1E] text-[20px] sm:text-[15px] font-barlow font-semibold inline-block">
                  24/7 Support
                </span>
              </div>
              <div className="flex items-center space-x-2">
                {/* Colored Dot */}
                <div className="h-3 w-3 sm:h-4 sm:w-6 rounded-full bg-[#FB8500]"></div>
                {/* Text */}
                <span className="text-[#1E1E1E] text-[20px] sm:text-[15px] font-barlow font-semibold inline-block">
                  Expert Doctor
                </span>
              </div>
              <div className="flex items-center space-x-2">
                {/* Colored Dot */}
                <div className="h-3 w-3 sm:h-4 sm:w-6 rounded-full bg-[#FF0000]"></div>
                {/* Text */}
                <span className="text-[#1E1E1E] text-[20px] sm:text-[15px] font-barlow font-semibold inline-block">
                  Critical Care
                </span>
              </div>
            </div>

            {/* Call to Action Button */}
            <button className="h-[60px] w-[350px] bg-button-gradient text-white font-semibold rounded-md flex justify-center items-center cursor-pointer mt-30 sm:mt-10">
              <Link href="/contact">Book An Air Ambulance Now</Link>
            </button>
          </div>
        </div>

        {/*this is updated about us  */}
        <div ClassName="mt-10">
          <AboutAircraftUpdate />
        </div>

        {/*Services hightlight */}
        <div ClassName="sm:mt-5">
          <ServicesHight />
        </div>

        {/*Our services*/}
        <div className="mt-5">
          <ServiceUpdate />
        </div>

        {/*How to book air ambulance */}
        <div className="mt-5">
          <Bookambulance />
        </div>

        {/*Why to choose qwiklif */}
        <div className="mt-5">
          <ExpereinceAirambulance />
        </div>

        {/*Why to trust on Qwiklif? */}
        <div className="mt5">
          <WhychooseQwiklif />
        </div>

        {/* News and update*/}

        <div className="mt-10">
          <NewsUpdate2 />
        </div>

        {/* review */}

        <div className="mt-10">
          <Reviewupdate />
        </div>

        {/* get in touch */}
        <div></div>

        {/* location */}

        <div>
          <LoactionUpdate />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <StyledSection className="relative bottom-[5px] sm:bottom-0 mt-20 sm:mt-8">
            {/*About us section component */}
            {/* <AboutAircraft /> */}

            {/*Qwiklif Feautres Component  */}
            {/* <QwiklifFeature /> */}
            {/* <div className="mt-5 mb-5 sm:mt-10 sm:mb-5 md:mt-3 md:mb-3">
              <ChooseQwiklif />
            </div> */}
          </StyledSection>
          {/* <StyledSection ClassName="sm:mt-25">
            <ServicesSection />
          </StyledSection> */}

          {/* Roadmap */}
          {/* <StyledSection className="relative  top-[60px] sm:top-[40px]  sm:bottom-0 mt-3">
            <div className="py-5 sm:py-5">
              <div className="flex justify-center flex-col items-center">
                <h2 className="font-sans font-semibold text-4xl sm:text-xl text-center">
                  How to Book Air Ambulance
                </h2>

                <p className="text-[#413D3D] text-lg sm:text-base sm:font-normal font-Inter font-medium text-center mt-4 sm:mt-3">
                  Here’s simple step to Book Air Ambulance.
                  <br /> Call now to our professional doctors to discuss patient
                  medical condition.
                </p>
                <hr class="bg-[#11B6E3] h-[4px] w-[65px] mt-2 sm:mt-3"></hr>
              </div>
              <Roadmap />
            </div>
           
          </StyledSection> */}
          {/* Roadmap */}

          {/* Medical Care */}
          {/* <StyledSection className="px-10 py-3 mt-16 sm:mt-10 md:mt-8">
            <FastestMedical className="relative bottom-0" />
          </StyledSection> */}

          {/* Medical Care */}
          {/*News */}
          {/* <StyledSection className="relative top-10 sm:bottom-0 ">
            <LatestNew />
          </StyledSection> */}

          {/*News */}

          {/* <ReviewCarosel /> */}

          {/* Why Choose Our Services */}
          {/* <StyledSection className="relative top-20">
            <div className="flex flex-col items-start px-15 sm:px-5 py-16 sm:py-8">
              <div className="flex flex-col items-start w-full sm:items-center ">
                <h1 className="font-sans font-semibold text-3xl text-center mb-2">
                  Why you should choose our services
                </h1>
                <h2 className="text-[#646464] font-sans font-medium text-[16px] leading-[26px] text-center sm:mx-[5%]">
                  Do you have questions about flying privately? Wondering more
                  about Whether you’re flying in a small, medium, or large
                  group,
                </h2>
                <div className="flex justify-center items-center mt-[20px] mb-[30px] sm:flex-row sm:w-full">
                  <hr className="bg-[#11B6E3] h-[4px] w-[25px]" />
                </div>
              </div>

              <div className="flex-col items-start w-full mt-[40px] flex gap-[10px]">
                {homeCollapsable.map((item, index) => {
                  return (
                    <div
                      key={"choose-us-features" + index}
                      className="relative flex-col items-start w-full h-auto cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedCollapseIndex(
                          SelectedCollapseIndex != index ? index : -1,
                        );
                      }}
                    >
                      <div
                        className={`w-full flex-row justify-between rounded-md items-center h-[70px] sm:h-[85px] sm:px-[5px] sm:py-[10px] flex hover:bg-[#19c0f0] hover:!text-white transition-all duration-300 ${
                          SelectedCollapseIndex != index
                            ? "bg-[#F1F7FA]"
                            : "bg-[#19c0f0] rounded-b-none"
                        }`}
                      >
                        <h4
                          className={`ml-[30px] sm:ml-[10px] ${
                            SelectedCollapseIndex === index
                              ? "text-[#FFFFFF]"
                              : ""
                          }  font-sans font-semibold text-base sm:text-sm`}
                        >
                          {item.header}
                        </h4>
                        <div
                          className={`flex flex-row justify-start items-center mr-[30px] sm:ml-[10px]`}
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
                          <p className="w-[90%] mx-[5%] text-[#7A7A7A] text-[16px] sm:text-sm sm:leading-6 font-medium font-Inter leading-[26px] ">
                            {item.description}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </StyledSection> */}
          {/* Why Choose Our Services */}
          <StyledSection></StyledSection>
          {/* <StyledSection>
            <AboutAmbulance setCurrentIndex={setCurrentIndex}/>
          </StyledSection> */}
          {/* Reviews */}
          {/* <StyledSection className=" mt-14">
          
            <ReviewCarosel />
          </StyledSection> */}
          {/* Reviews */}

          {/* <div className="flex justify-center mt-8">
            <Rotatemap />
          </div> */}

          {/* Air Ambulance */}
          <div
            className={`${styles.gray_plane} py-12 sm:px-3 px-36 w-full mt-[90px] sm:flex-col items-center grid grid-cols-12 gap-10 sm:grid-cols-1 `}
          >
            <div className="flex items-start flex-col col-span-7 sm:col-span-1  sm:px-7">
              <div className="text-[#a9b5bf] font-sans font-semibold">
                QwikLif Air Ambulance
              </div>
              <div className="font-sans font-semoibold text-2xl text-white mt-2 mb-6">
                Your Trusted Global Air Ambulance Provider
              </div>
              {tasktab.map((data, index) => {
                return (
                  <div key={"tasktab" + index} className="mb-6">
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
              <form className={`mt-[30px] w-full ${styles.form}`}>
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
                      className={`${styles.boxShado} w-full h-[50px] bg-[#19c0f0] rounded-[4px] mt-[25px] font-semibold text-[15px] leading-[22.5px] text-white hover:bg-[#19c0f0] shadow-lg shadow-[#85d2e7]`}
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
};

export default Home;

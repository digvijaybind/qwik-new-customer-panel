"use client";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { DedicatedApi } from "@/redux/slices/dedicatedSlice";
import { CommericialApi } from "@/redux/slices/commericialSlice";
import styles from "../../styles/page.module.css";
import UpdateSearchNew from "@/components/updatesearch/UpdateSearch";
import MobileSearch from "@/components/mobileSearch/MobileSearch";
import DedicatedSearch from "@/components/searchResponse/DedicatedSearch";
import CommericialSearch from "@/components/searchResponse/CommericialSearch";
import CommericialContactCard from "@/components/commericialContactCard/CommericialContactCard";
import DedicatedLoader from "@/components/dedicatedContactCard/DedicatedLoader";
import DedicatedContactCard from "@/components/dedicatedContactCard/DedicatedContactCard";

const SearchResponse = ({ initialData }) => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  const { commericialflights, loadingFlights, errorFlights } = useSelector(
    (state) => state.commericial,
  );
  const { DedicatedFlights, status, error } = useSelector(
    (state) => state.dedicated,
  );

  const [isMobile, setIsMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeTab, setActiveTab] = useState("commercial");
  const [formData, setFormData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  useEffect(() => {
    if (
      searchParams.has("originLocationCode") &&
      searchParams.has("destinationLocationCode")
    ) {
      console.log("Data destination", searchParams.has("originLocationCode"));
      console.log(
        "Data originLocation",
        searchParams.has("destinationLocationCode"),
      );
      const formDetails = {
        originLocationCode: searchParams.get("originLocationCode"),
        destinationLocationCode: searchParams.get("destinationLocationCode"),
        departureDate: searchParams.get("departureDate"),
        pax: 1,
        countryCode: searchParams.get("countryCode"),
        mobile: searchParams.get("mobile"),
        max: 5,
      };
      setFormData(formDetails);
    } else {
      console.log("query params id mising ");
    }
  }, [searchParams]);

  const stableSetFormData = useCallback((data) => {
    setFormData(data);
  }, []);

  useEffect(() => {
    if (formData?.originLocationCode && formData?.destinationLocationCode) {
      setLoading(true);
      Promise.all([
        dispatch(CommericialApi(formData)),
        dispatch(DedicatedApi(formData)),
      ]).finally(() => setLoading(false));
    }
  }, [formData, dispatch]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="font-sans bg-white">
        <div className="flex flex-col items-center relative">
          <img
            src="/images/searchResponse/BannerImage.png"
            className="w-full object-cover sm:mt-0 mt-20"
            alt="banner"
          />
          <div className="flex flex-col items-center relative sm:px-7 px-[10%] w-full font-montserrat">
            {isMobile ? (
              <MobileSearch
                formData={formData}
                setfromSearch={() => {}}
                className="!w-full !bottom-5"
              />
            ) : (
              <UpdateSearchNew
                className={`${
                  isSticky
                    ? `${styles.Searchbar2} flex justify-center items-center w-full`
                    : `${styles.Searchbar} flex justify-center items-center !static !w-full !-mt-24`
                } `}
                formData={formData}
                setFormData={stableSetFormData}
              />
            )}

            <div className="w-full grid grid-cols-2 gap-2 p-[0.2rem] sm:mt-0 mt-8 font-medium rounded-[0.4rem] bg-primary">
              <button
                value="commercial"
                onClick={() => handleTabChange("commercial")}
                className={`${
                  activeTab === "commercial"
                    ? "bg-white text-primary"
                    : "bg-none text-white"
                } text-center sm:px-2 px-5 sm:py-2.5 py-3 text-sm rounded-[0.25rem]`}
              >
                Commericial Flight
              </button>

              <button
                value="chartered"
                onClick={() => handleTabChange("chartered")}
                className={`${
                  activeTab === "chartered"
                    ? "bg-white text-primary"
                    : "bg-none text-white"
                } text-center sm:px-2 px-5 sm:py-2.5 py-3 text-sm rounded-[0.25rem]`}
              >
                Chartered Flight
              </button>
            </div>
            <div className="w-full grid sm:grid-cols-1 grid-cols-2 gap-7 mt-7 mb-14">
              <div
                className={`grid grid-cols-1 gap-4 ${
                  !isMobile || activeTab === "commercial" ? "grid" : "hidden"
                }`}
              >
                {loadingFlights && !errorFlights && (<div  className="mt-[40px]"><DedicatedLoader /> </div>) }
               
                {!loadingFlights &&
                  !errorFlights &&
                  commericialflights?.ResponseData?.AirCraftDatawithNotechStop?.map(
                    (data, index) => {
                      return (
                        <CommericialSearch
                          key={index}
                          isMobile={isMobile}
                          aircraftData={data}
                          activeTab={activeTab}
                          availticket={
                            commericialflights?.ResponseData?.TicketAvailability
                          }
                          aircraftId={commericialflights?.aircraftId}
                        />
                      );
                    },
                  )}

                {!loadingFlights &&
                  !errorFlights &&
                  !commericialflights?.ResponseData
                    ?.AirCraftDatawithNotechStop &&
                  commericialflights?.ResponseData?.AirCraftDatawithtechStop?.map(
                    (data, index) => {
                      return (
                        <CommericialSearch
                          key={index}
                          isMobile={isMobile}
                          aircraftData={data}
                          availticket={
                            commericialflights?.ResponseData?.TicketAvailability
                          }
                          aircraftId={commericialflights?.aircraftId}
                        />
                      );
                    },
                  )}
                   {errorFlights  && (
                  <div className="mt-[40px]">
                    {" "}
                    <CommericialContactCard />{" "}
                  </div>
                )}
              </div>
              <div
                className={`grid grid-cols-1 gap-4  ${
                  !isMobile || activeTab === "chartered" ? "grid" : "hidden"
                } sm:`}
              >
                {status === "pending" && !DedicatedFlights && (
                  <DedicatedLoader />
                )}
                {status === "succeeded" &&
                  DedicatedFlights.map((data, index) => {
                    console.log("charter data in index page", data);
                    return (
                      <DedicatedSearch
                        type="chartered"
                        key={index}
                        charterdata={data}
                      />
                    );
                  })}
                {status === "failed" && !DedicatedFlights && (
                  <div className="mt-[40px]">
                    <DedicatedContactCard />
                  </div>
                )}
                {/* {!loading } */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const searchParams = context.query;
  console.log("searchparams query line 236", searchParams);
  const initialData = {
    originLocationCode: searchParams.originLocationCode || "",
    destinationLocationCode: searchParams.destinationLocationCode || "",
    departureDate: searchParams.departureDate || "",
    pax: searchParams.pax || 1,
    mobile: searchParams.mobile || "",
    max: searchParams.max || 5,
  };

  return {
    props: {
      initialData,
    },
  };
};

export default SearchResponse;

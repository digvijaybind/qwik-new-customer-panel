"use client";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";

import { DedicatedApi } from "@/redux/slices/dedicatedSlice";
import { CommericialApi } from "@/redux/slices/commericialSlice";

import styles from "../../styles/page.module.css";

import UpdateSearchNew from "@/components/updatesearch/UpdateSearch";
import SearchResponseCard from "@/components/searchResponse/SearchResponseCard";
import MobileSearch from "@/components/mobileSearch/MobileSearch";

const SearchResponse = ({ commericialTab }) => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  const commericialflights = useSelector(
    (state) => state.commericial.commericialflights
  );
  const DedicatedFlights = useSelector(
    (state) => state.dedicated.dedicatedflights
  );

  const [isMobile, setIsMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeTab, setActiveTab] = useState("commercial");
  const [formData, setFormData] = useState({
    originLocationCode: "",
    destinationLocationCode: "",
    departureDate: "",
    pax: 1,
    countryCode: "",
    mobile: "",
    max: 5,
  });

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
      // searchCity(formDetails);
    } else {
      console.log("query params id mising ");
    }
  }, [searchParams]);

  const stableSetFormData = useCallback((data) => {
    setFormData(data);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData) {
      dispatch(DedicatedApi(formData));
      dispatch(CommericialApi(formData));
    }
  };

  const handleTabChange = (e) => {
    setActiveTab(e.target.value);
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
                    ? `${styles.Searchbar2} flex justify-center items-center !w-[80%]`
                    : `${styles.Searchbar} flex justify-center items-center !static !w-full !-mt-24`
                } `}
                formData={formData}
                setFormData={stableSetFormData}
              />
            )}
            <div
              className="w-full grid grid-cols-2 gap-2 p-[0.2rem] sm:mt-0 mt-8 font-medium rounded-[0.4rem] bg-primary"
              onClick={handleTabChange}
            >
              <button
                value="commercial"
                className={`${
                  activeTab === "commercial"
                    ? "bg-white text-primary"
                    : "bg-none text-white"
                } text-center sm:px-2 px-5 sm:py-2.5 py-3 text-sm rounded-[0.25rem]`}
              >
                Commercial Flight
              </button>
              <button
                value="chartered"
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
                className={`grid grid-cols-1 gap-12 ${
                  !isMobile || activeTab === "commercial" ? "grid" : "hidden"
                }`}
              >
                {commericialflights?.ResponseData?.AirCraftDatawithNotechStop?.map(
                  (data, index) => {
                    return (
                      <SearchResponseCard
                        key={index}
                        isMobile={isMobile}
                        aircraftData={data}
                        availticket={data.ResponseData.TicketAvailability}
                        selectedCurrency={selectedCurrency}
                        handleCurrencyChange={handleCurrencyChange}
                      />
                    );
                  }
                )}
                <SearchResponseCard type="commercial" />
                <SearchResponseCard type="commercial" />
                <SearchResponseCard type="commercial" />
                <SearchResponseCard type="commercial" />
                <SearchResponseCard type="commercial" />
              </div>
              <div
                className={`grid grid-cols-1 gap-12 ${
                  !isMobile || activeTab === "chartered" ? "grid" : "hidden"
                }`}
              >
                {(!commericialflights?.ResponseData
                  ?.AirCraftDatawithNotechStop ||
                  commericialflights?.ResponseData?.AirCraftDatawithNotechStop
                    ?.length === 0) &&
                  commericialflights?.ResponseData?.AirCraftDatawithtechStop?.map(
                    (data) => {
                      return (
                        <SearchResponseCard
                          type="commercial"
                          key={index}
                          isMobile={isMobile}
                          aircraftData={data}
                          availticket={data.ResponseData.TicketAvailability}
                          selectedCurrency={selectedCurrency}
                          handleCurrencyChange={handleCurrencyChange}
                        />
                      );
                    }
                  )}
                <SearchResponseCard type="chartered" />
                <SearchResponseCard type="chartered" />
                <SearchResponseCard type="chartered" />
                <SearchResponseCard type="chartered" />
                <SearchResponseCard type="chartered" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResponse;

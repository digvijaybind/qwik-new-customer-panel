"use client";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { DedicatedApi } from "@/redux/slices/dedicatedSlice";
import { CommericialApi } from "@/redux/slices/commericialSlice";
import { useDispatch, useSelector } from "react-redux";
import CommericialContactCard from "@/components/commericialContactCard/CommericialContactCard";
import styles from "../../styles/page.module.css";
import UpdateSearchNew from "@/components/updatesearch/UpdateSearch";
import SearchResponseCard from "@/components/searchResponse/SearchResponseCard";

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
      <div className="sm:px-[20px] sm:py-[20px] font-sans bg-white">
        <div className="flex flex-col items-center relative">
          <img
            src="/images/searchResponse/BannerImage.png"
            className="w-full object-cover mt-20"
            alt="banner"
          />
          <div className="flex flex-col items-center relative px-[10%] w-full font-montserrat">
            <UpdateSearchNew
              className={`${
                isSticky
                  ? `${styles.Searchbar2} flex justify-center items-center !w-[80%]`
                  : `${styles.Searchbar} flex justify-center items-center !static !w-full !-mt-24`
              } `}
              formData={formData}
              setFormData={stableSetFormData}
            />
            <div
              className="w-full grid sm:grid-cols-1 grid-cols-2 gap-2 p-[0.2rem] mt-8 font-medium rounded-[0.25rem] bg-primary"
              onClick={handleTabChange}
            >
              <button
                value="commercial"
                className={`${
                  activeTab === "commercial"
                    ? "bg-white text-primary"
                    : "bg-none text-white"
                } text-center px-5 py-2 text-sm rounded-[0.25rem]`}
              >
                Commercial Flight
              </button>
              <button
                value="chartered"
                className={`${
                  activeTab === "chartered"
                    ? "bg-white text-primary"
                    : "bg-none text-white"
                } text-center px-5 py-2 text-sm rounded-[0.25rem]`}
              >
                Chartered Flight
              </button>
            </div>
            <div className="w-full grid sm:grid-cols-1 grid-cols-2 gap-5 mt-5">
              <div className="grid grid-cols-1">
                <SearchResponseCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResponse;

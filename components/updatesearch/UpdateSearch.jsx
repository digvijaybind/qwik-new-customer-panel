import React, { useEffect, useState, useCallback } from "react";
import styles from "./UpdateSearch.module.css";
import LeftImage from "../../public/images/inputimages/Flight.svg";
import RightImage from "../../public/images/inputimages/Dropdown.svg";
import UpdateInput from "./UpdateInput";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { useRouter } from "next/router";
import CountryFlag from "react-country-flag";
import Select from "react-select";
import PhoneInput, {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input";
import _debounce from "lodash/debounce";
import UpdateInputTo from "./UpdateInputTo";
import apiClient from "@/api/apiClient";
import Endpoint from "@/api/endpoint";

const CustomPhoneInput = React.forwardRef(
  ({ value, onChange, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        value={value}
        onChange={onChange}
        {...rest}
        className={styles.customPhoneInput}
        placeholder="Enter Number"
      />
    );
  }
);

CustomPhoneInput.displayName = "CustomPhoneInput";
const CustomCountrySelect = ({ value, onChange, labels, ...rest }) => {
  const countries = getCountries();

  const options = countries
    .map((country) => {
      const callingCode = getCountryCallingCode(country);

      if (!callingCode) {
        return null; // Skip this option if the country code is not valid
      }

      return {
        value: country,
        label: (
          <div className="flex items-center">
            <div className="mr-2"> (+{callingCode})</div>
            <CountryFlag
              countryCode={country}
              svg
              style={{ width: "20px", height: "20px" }}
            />
          </div>
        ),
      };
    })
    .filter(Boolean); // Remove any null values from the options array

  return (
    <div className="flex items-center">
      <Select
        {...rest}
        value={options.find((option) => option.value === value)}
        onChange={(option) => onChange(option.value)}
        options={options}
        className=""
        styles={{
          // Custom styles for the select component
          control: (provided) => ({
            ...provided,
            width: "8rem",
            minHeight: "2.5rem",
            backgroundColor: "#eeeee",
            border: "none",
          }),
          menu: (provided) => ({
            ...provided,
            backgroundColor: "#ffffff",
            zIndex: 9999,
          }),
        }}
      />
      {/* <div className="h-full border-r border-gray-400"></div> */}
    </div>
  );
};

const UpdateSearchNew = React.memo(
  ({ className, onClick, setFormData, formData = {}, btnClassName = "" }) => {
    const router = useRouter();
    const [scrollDirection, setScrollDirection] = useState("static");
    const [isScrolled, setIsScrolled] = useState(false);
    const [queryFrom, setQueryFrom] = useState("");
    const [queryTo, setQueryTo] = useState("");
    const [resultsFrom, setResultsFrom] = useState([]);
    const [resultsTo, setResultsTo] = useState([]);
    const [loadingFrom, setLoadingFrom] = useState(false);
    const [loadingTo, setLoadingTo] = useState(false);

    const search = async (searchTerm, name) => {
      console.log("searchTerm", searchTerm);
      if (name === "originLocationCode") {
        setLoadingFrom(true);
      } else if (name === "destinationLocationCode") {
        setLoadingTo(true);
      }

      try {
        const response = await apiClient.get(
          `${Endpoint.Allairports}?q=${searchTerm}`
        );

        if (name === "originLocationCode") {
          console.log(
            "response data line 113 originLocationCode",
            response.data
          );
          setResultsFrom(response.data);
        } else if (name === "destinationLocationCode") {
          console.log("response data line 116 destinationCode ", response.data);
          setResultsTo(response.data);
        }
      } catch (error) {
        console.log("Error Fetchiing data", error);
      } finally {
        if (name === "originLocationCode") {
          setLoadingFrom(false);
        } else if (name === "destinationLocationCode") {
          setLoadingTo(false);
        }
      }
    };

    const debounceSearch = useCallback(
      _debounce((SearchTerm, name) => {
        search(SearchTerm, name);
      }, 400),
      []
    );

    const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === "originLocationCode") {
        debounceSearch(value, "originLocationCode");
      } else if (name === "destinationLocationCode") {
        debounceSearch(value, "destinationLocationCode");
      }
      setFormData((formData) => ({
        ...formData,
        [name]: value,
      }));
    };

    useEffect(() => {
      let lastScrollY = window.scrollY;

      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 0) {
          setIsScrolled(true);
          if (currentScrollY > lastScrollY) {
            setScrollDirection("down");
          } else {
            setScrollDirection("up");
          }
        } else {
          setIsScrolled(false);
          setScrollDirection("static");
        }
        lastScrollY = currentScrollY;
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    const handlePhoneChange = useCallback((value) => {
      if (typeof value === "string") {
        const phoneNumber = parsePhoneNumberFromString(value);
        const countryCode = phoneNumber ? phoneNumber.country : "";
        setFormData((formData) => ({
          ...formData,
          mobile: value,
          countryCode: countryCode,
        }));
      }
    }, []);

    const formSubmit = async (e) => {
      e.preventDefault();
      router.push({
        pathname: "/SearchResultsPage",
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

    return (
      <div
        className={`${
          isScrolled
            ? scrollDirection === "up"
              ? "sticky top-10 z-10 bg-white shadow-2xl rounded-md py-3 px-4 transition-transform duration-300 translate-y-0 w-[75%]"
              : scrollDirection === "down"
              ? "sticky top-10 z-10 bg-white shadow-2xl rounded-md py-3 px-4 transition-transform duration-300 translate-y-0 w-[75%]"
              : ""
            : "bg-white rounded-md shadow-2xl py-3 px-5 transition-transform duration-300"
        } ${className}`}
      >
        <form
          onSubmit={formSubmit}
          className={`${
            isScrolled
              ? "flex items-center flex-row"
              : "flex items-center flex-col"
          }`}
        >
          <div className={`${styles.container} px-[25px] rounded-md sm:px-0`}>
            {/* "From" city search input */}
            <div className={`${styles.searchBarSection} mr-2`}>
              <div
                className={`${
                  isScrolled
                    ? "font-sans font-medium text-[#000] text-[14px] mb-1"
                    : "font-sans font-medium text-[#000] text-[17px] mb-3"
                }`}
              >
                From:
              </div>
              <UpdateInput
                type="text"
                LeftImage={LeftImage}
                RightImage={RightImage}
                RightIcon
                LeftIcon
                placeholder="Enter City"
                name="originLocationCode"
                value={formData.originLocationCode}
                onChange={handleChange}
              />
            </div>
            {/* "To" city search input */}
            <div className={`${styles.searchBarSection} mr-2`}>
              <div
                className={`${
                  isScrolled
                    ? "font-sans font-medium text-[#000] text-[14px] mb-1"
                    : "font-sans font-medium text-[#000] text-[17px] mb-3"
                }`}
              >
                To:
              </div>
              <UpdateInputTo
                type="text"
                LeftImage={LeftImage}
                RightImage={RightImage}
                RightIcon
                LeftIcon
                placeholder="Enter City"
                name="destinationLocationCode"
                value={formData.destinationLocationCode}
                onChange={handleChange}
              />
            </div>
            {/* Departure date section */}
            <div className={`${styles.searchBarSection} mr-2`}>
              <div
                className={`${
                  isScrolled
                    ? "font-sans font-medium text-[#000] text-[14px] mb-1"
                    : "font-sans font-medium text-[#000] text-[17px] mb-3"
                }`}
              >
                Date:
              </div>
              <UpdateInput
                type="date"
                LeftImage={LeftImage}
                RightImage={RightImage}
                RightIcon={false}
                LeftIcon={false}
                name="departureDate"
                value={formData.departureDate}
                onChange={handleChange}
              />
            </div>
            {/* Mobile number section */}
            <div className={`${styles.searchBarSection} mr-2 rounded-md`}>
              <div
                className={`${
                  isScrolled
                    ? "font-sans font-medium text-[#000] text-[14px] mb-1"
                    : "font-sans font-medium text-[#000] text-[17px] mb-3"
                }`}
              >
                Mobile Number:
              </div>
              <div className="flex flex-row rounded-md">
                <PhoneInput
                  defaultCountry="AE"
                  className={`${styles.phoneInput} rounded-md h-[60px] font-bold text-[14px]`}
                  placeholder="Enter Number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handlePhoneChange}
                  countrySelectComponent={CustomCountrySelect}
                  inputComponent={CustomPhoneInput}
                />
              </div>
            </div>
          </div>
          <button
            className={`font-sans font-bold text-[18px] ${styles.searchButton} px-[20px] py-[20px] rounded-full flex justify-center items-center mt-8 text-[#fff]  sm:py-0 ${btnClassName}`}
            onClick={onClick}
          >
            Search Now
          </button>
        </form>
      </div>
    );
  }
);

UpdateSearchNew.displayName = "UpdateSearchNew";
export default UpdateSearchNew;

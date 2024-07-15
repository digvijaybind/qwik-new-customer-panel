//import libraries and components
import React from "react";
import styles from "./Input.module.css";
import Image from "next/image";
import { GiAirplaneDeparture } from "react-icons/gi";
import Loader from "../Utils/Loader";
import { useState } from "react";
import { GiAirplaneArrival } from "react-icons/gi";
import { FaX } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
const UpdateInput = React.memo(
  ({
    LeftImage,
    RightImage,
    type,
    LeftIcon,
    RightIcon,
    placeholder,
    name,
    value,
    onChange,
    setFormData,
    loading,
    results,
    onSelect,
    className,
    isArrival = false,
  }) => {
    const [showResults, setShowResults] = useState(null);
    const [selectedOrigin, setSelectedOrigin] = useState(false);
    const [selectedDestination, setSelectedDestion] = useState(false);
    const [selectedOption, setselectedOption] = useState(null);
    const handleBlur = () => {
      setTimeout(() => setShowResults(false), 200); // Delay to allow click event to register
    };
    const handleSelect = (location) => {
      const selectedValue = location.city_name;

      onSelect(name, selectedValue);
      if (name == "originLocationCode") {
        setSelectedOrigin(true);
        setselectedOption(location);
        setShowResults(true);
        setFormData((prev) => ({ ...prev, originLocationCode: "" }));
      } else {
        setSelectedDestion(true);
        setselectedOption(location);
        setShowResults(true);
        setFormData((prev) => ({ ...prev, destinationLocationCode: "" }));
      }
    };

    const handleunSelect = () => {
      onSelect(name, "");
      setShowResults(false);
      if (name == "originLocationCode") {
        setSelectedOrigin(false);
      } else {
        setSelectedDestion(false);
      }
    };
    const handleFocus = () => {
      setShowResults(true);
    };

    return (
      <div className="flex items-center flex-col sm:w-full">
        <div className={`${styles.Container} rounded-md`}>
          {/*Conditional rendering for left icon */}
          {LeftIcon && (
            <div style={{ marginRight: "5px", height: "30px", width: "30px" }}>
              {isArrival ? (
                <GiAirplaneArrival
                  style={{ marginRight: "10px", height: "30px", width: "30px" }}
                />
              ) : (
                <GiAirplaneDeparture
                  style={{ marginRight: "10px", height: "30px", width: "30px" }}
                />
              )}
            </div>
          )}

          <input
            type={type}
            className={`${className} font-Inter ${
              type === "date" ? styles.customDateInput : ""
            } ${styles.inputField} ${
              value !== "" ? styles.dateInput : ""
            } sm:w-full ${selectedOption ? "hidden" : ""}`}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          {selectedOption && selectedDestination && !selectedOrigin && (
            <div className="flex-1 h-full w-full bg-white py-2 flex flex-row justify-between items-center ml-2 mr-2">
              <div className="h-full w-full  text-sm flex items-center py-0.5 pl-2 ">
                <span className="font-bold text-[12px]">
                  {" "}
                  {selectedOption.city_name}{" "}
                </span>
                {selectedOption.iata ? `(${selectedOption.iata})` : ""}
              </div>
              <div>
                <FaTimes
                  className="text-gray-400 cursor-pointer w-5 h-3"
                  onClick={handleunSelect}
                />
              </div>
            </div>
          )}

          {selectedOption && selectedOrigin && !selectedDestination && (
            <div className="flex-1 h-full w-full bg-white py-2 flex flex-row justify-between items-center  ml-2 mr-2">
              <div className="h-full w-full  text-sm flex items-center py-0.5 pl-2 ">
                <span className="font-bold text-[12px]">
                  {" "}
                  {selectedOption.city_name}{" "}
                </span>
                {selectedOption.iata ? `(${selectedOption.iata})` : ""}
              </div>
              <div>
                <FaTimes
                  className="text-gray-400 cursor-pointer w-5 h-3"
                  onClick={handleunSelect}
                />
              </div>
            </div>
          )}

          {RightIcon && (
            <Image src={RightImage} alt="Right Icon" width={40} height={40} />
          )}
        </div>
        {loading && <Loader />}
        {!loading && results?.length > 0 && showResults && !selectedOption && (
          <ul className="absolute w-[257px] mt-12 bg-white border border-gray-200 rounded  max-h-60 overflow-y-auto z-10">
            {results?.map((location, index) => (
              <li
                className={`w-full px-3 py-2 hover:bg-gray-200 cursor-pointer ${
                  selectedOption?.city_name === location.city_name
                    ? "bg-blue p-4"
                    : ""
                } `}
                key={"origin-search-result" + index}
                onClick={() => handleSelect(location)}
              >
                <p className="flex justify-between">
                  <span>{location.city_name}</span>
                  <span className="text-gray-500 font-Inter font-bold text-[12px]">
                    {location.iata}
                  </span>
                </p>
                <p className="text-sm font-Inter text-gray-400">
                  {location.country_name}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);
UpdateInput.displayName = "UpdateInput";
export default UpdateInput;

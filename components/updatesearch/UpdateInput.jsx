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
    loading,
    results,
    onSelect,
    className,
    isArrival = false,
  }) => {
    const [showResults, setShowResults] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleBlur = () => {
      setTimeout(() => setShowResults(false), 200); // Delay to allow click event to register
    };
    const handleSelect = (location) => {
      const selectedValue = location.city_name;
      onSelect(name, selectedValue);
      setSelectedOption(location);
      setShowResults(true);
    };

    const handleunSelect = () => {
      onSelect(name, "");
      setSelectedOption(null);
      setShowResults(false);
    };
    const handleFocus = () => {
      setShowResults(true);
    };
    return (
      <div className="flex items-center flex-col">
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
          {/*input type with props */}

          <input
            type={type}
            className={`${className} font-Inter ${
              type === "date" ? styles.customDateInput : ""
            } ${styles.inputField} ${value !== "" ? styles.dateInput : ""}`}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseDown={() => handleSelect(location)}
          />

          {selectedOption && (
            <div className="absolute top-full left-0 right-0 z-10">
              <div className="bg-red border border-gray-200 rounded shadow-md mt-2">
                <div className="p-2">
                  <div className="flex items-center">
                    <div className="flex-1 text-black">
                      {selectedOption.city_name}{" "}
                      {selectedOption.iata ? `(${selectedOption.iata})` : ""}
                    </div>
                    <div>
                      <FaTimes
                        className="text-gray-400 cursor-pointer"
                        onClick={handleunSelect}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {RightIcon && (
            <Image src={RightImage} alt="Right Icon" width={40} height={40} />
          )}
        </div>
        {loading && <Loader />}
        {!loading && results?.length > 0 && showResults && (
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

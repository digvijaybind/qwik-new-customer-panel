import React, { useState } from "react";
import styles from "./Input.module.css";
import Image from "next/image";
import { GiAirplaneArrival } from "react-icons/gi";
import Loader from "../Utils/Loader";
const UpdateInputTo = ({
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
}) => {
  const [showResults, setShowResults] = useState(false);

  const handleFocus = () => {
    setShowResults(true);
  };

  const handleBlur = () => {
    setTimeout(() => setShowResults(false), 200); // Delay to allow click event to register
  };
  const handleSelect = (location) => {
    const selectedValue = location.city_name;
    onSelect(name, selectedValue);
    setShowResults(false);
  };
  return (
    <div className="flex items-center flex-col">
      <div className={`${styles.Container} rounded-md sm:rounded`}>
        {/*Conditional rendering for left icon */}

        {LeftIcon && (
          // <Image src={LeftImage} alt="Left Icon" width={40} height={40} />
          <GiAirplaneArrival
            style={{ marginRight: "10px", height: "30px", width: "30px" }}
          />
        )}

        {/*input type with props */}
        <input
          type={type}
          className={`${styles.className} ${
            type === "date" ? styles.customDateInput : ""
          } ${styles.inputField}  ${value !== "" ? styles.dateInput : ""}`}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
        {/*Conditional rendering for Right icon */}

        {RightIcon && (
          <Image src={RightImage} alt="Right Icon" width={40} height={40} />
        )}
      </div>
      {loading && <Loader />}
      {!loading && results?.length > 0 && (
        <ul className="absolute w-[257px] mt-12 bg-white border border-gray-200 rounded  max-h-60 overflow-y-auto z-10">
          {results?.map((location, index) => (
            <li
              className="w-full px-3 py-2 hover:bg-gray-200 cursor-pointer"
              key={"origin-search-result" + index}
              onMouseDown={() => handleSelect(location)}
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
};
UpdateInputTo.displayName = "UpdateInputTo";

export default UpdateInputTo;

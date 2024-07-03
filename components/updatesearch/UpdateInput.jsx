//import libraries and components
import React from "react";
import styles from "./Input.module.css";
import Image from "next/image";
import { FaPlaneDeparture } from "react-icons/fa6";
import { RiFlightLandLine } from "react-icons/ri";
import LeftImage from "../../public/images/inputimages/Flight.svg";
import { FaPlaneArrival } from "react-icons/fa";
import { GiAirplaneDeparture } from "react-icons/gi";
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
    className,
  }) => {
    return (
      <div className={`${styles.Container} rounded-md`}>
        {/*Conditional rendering for left icon */}

        {LeftIcon && (
          <GiAirplaneDeparture
            style={{ marginRight: "5px", height: "30px", width: "30px" }}
          />
        )}

        {/*input type with props */}
        <input
          type={type}
          className={`${className} font-Inter ${
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
    );
  }
);

export default UpdateInput;

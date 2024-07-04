import React from 'react';
import styles from './Input.module.css';
import Image from 'next/image';
import { FaPlaneDeparture } from 'react-icons/fa6';
import { RiFlightLandLine } from 'react-icons/ri';
import LeftImage from '../../public/images/inputimages/Flight.svg';
import { FaPlaneArrival } from 'react-icons/fa';
import { GiAirplaneArrival } from 'react-icons/gi';
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
  className,
}) => {
  return (
    <div className={`${styles.Container} rounded-md sm:rounded`}>
      {/*Conditional rendering for left icon */}

      {LeftIcon && (
        // <Image src={LeftImage} alt="Left Icon" width={40} height={40} />
        <GiAirplaneArrival
          style={{ marginRight: '10px', height: '30px', width: '30px' }}
        />
      )}

      {/*input type with props */}
      <input
        type={type}
        className={`${styles.className} ${
          type === 'date' ? styles.customDateInput : ''
        } ${styles.inputField}  ${value !== '' ? styles.dateInput : ''}`}
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
};
UpdateInputTo.displayName = "UpdateInputTo";

export default UpdateInputTo;

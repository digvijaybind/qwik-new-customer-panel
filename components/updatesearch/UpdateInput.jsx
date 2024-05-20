//import libraries and components
import React from 'react';
import styles from './Input.module.css';
import Image from 'next/image';
const UpdateInput = ({
  LeftImage,
  RightImage,
  type,
  LeftIcon,
  RightIcon,
  placeholder,
}) => {
  return (
    <div className={`${styles.Container} rounded-md`}>
      {/*Conditional rendering for left icon */}
      {LeftIcon && (
        <Image src={LeftImage} alt="Left Icon" width={40} height={40} />
      )}
      {/*input type with props */}
      <input
        type={type}
        className={`${styles.inputField }`}
        placeholder={placeholder}
      />
      {/*Conditional rendering for Right icon */}
      {RightIcon && (
        <Image src={RightImage} alt="Right Icon" width={40} height={40} />
      )}
    </div>
  );
};

export default UpdateInput;

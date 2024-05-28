import React from 'react';
import styles from './Input.module.css';
const CustomPhoneInput = ({ placeholder,placeholderColor , ...rest }) => {
  return (
    <input
      placeholder={placeholder}
      className={`${styles.inputField}`}
      style={{ color: placeholderColor }}
      {...rest}
    />
  );
};

export default CustomPhoneInput;

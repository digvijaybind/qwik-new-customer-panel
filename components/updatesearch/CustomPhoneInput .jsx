import React from "react";
import styles from "./Input.module.css";
const CustomPhoneInput = React.memo(
  ({ placeholder, placeholderColor, ...rest }) => {
    return (
      <input
        placeholder={placeholder}
        className={`${styles.inputField}`}
        style={{ color: placeholderColor }}
        {...rest}
      />
    );
  }
);
CustomPhoneInput.displayName = "CustomPhoneInput";

export default CustomPhoneInput;

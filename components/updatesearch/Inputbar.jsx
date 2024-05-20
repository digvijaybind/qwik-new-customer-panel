import React from 'react';
import styles from './Input.module.css';
import Image from 'next/image';
const Inputbar = ({
  placeholder,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  LeftImage,
  RightImage,
}) => {
  return (
    <div className={`${styles.inputContainer} px-[10px] py-[10px]`}>
      {LeftIcon && (
        <div className={`${styles.leftIcon}`}>
          <Image src={LeftImage} height={20} width={20} />
        </div>
      )}
      <input placeholder={placeholder} className={`styles.input-field`} />
      {RightIcon && (
        <div className={`${styles.inputIcon} ${styles.rightIcon}`}>
          <Image src={RightImage} height={20} width={20} />
        </div>
      )}
    </div>
  );
};

export default Inputbar;

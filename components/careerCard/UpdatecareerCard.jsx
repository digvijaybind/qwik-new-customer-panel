import React from "react";
import Image from "next/image";
import styles from "./UpdatecareerCard.module.css";

const UpdatecareerCard = ({
  image,
  height,
  width,
  headline,
  descripation,
  onClick,
}) => {
  return (
    <div className={styles.cardContainer} onClick={onClick}>
      <div className={styles.cardImageWrapper}>
        <Image
          src={image}
          height={height}
          width={width}
          layout="responsive"
          alt="Qwiklif Air Ambulance"
          className={styles.cardImage}
        />
      </div>
      <div className={styles.cardContent}>
        <h6 className={styles.cardHeadline}>{headline}</h6>
        <p className={styles.cardDescription}>{descripation}</p>
        <button type="button" className={styles.applyButton}>
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default UpdatecareerCard;

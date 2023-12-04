import React from "react";
import styles from "./newcard.module.css";
const Newcard = () => {
  return (
    <div class={`flex justify-center cursor-pointer `}>
      <div class={`${styles.Container}`}>Read More</div>
    </div>
  );
};

export default Newcard;

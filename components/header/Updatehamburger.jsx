import React from "react";
import styles from "./Updatehamburger.module.css";

const Updatehamburger = () => {
  return (
    <div className={styles.container}>
      <input id="toggle" type="checkbox" className={styles.toggle} />

      <label htmlFor="toggle" className={styles.hamburger}>
        <div className={`${styles.bun} ${styles.topBun}`}></div>
        <div className={styles.meat}></div>
        <div className={`${styles.bun} ${styles.bottomBun}`}></div>
      </label>

      <div className={styles.nav}>
        <div className={styles.navWrapper}>
          <nav>
            <a href="#">HOME</a>
            <br />
            <a href="#">ABOUT</a>
            <br />
            <a href="#">WORK</a>
            <br />
            <a href="#">SERVICES</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Updatehamburger;

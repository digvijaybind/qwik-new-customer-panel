import React from "react";
import Modal from "react-modal";
import styles from "./careermodal.module.css";
import { ImCancelCircle } from "react-icons/im";

const CustomModal = ({ isOpen, onRequestClose, payload, handleChange }) => {
  const renderFields = () => {
    return Object.keys(payload).map((key) => (
      <div className={styles.formGroup} key={key}>
        <label className={styles.label}>{key}:</label>
        <input
          type="text"
          className={styles.input}
          value={payload[key]}
          onChange={(e) => handleChange(key, e.target.value)}
        />
      </div>
    ));
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Custom Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
        ariaHideApp={false}
      >
        <div className="flex justify-end">
          <button onClick={onRequestClose} className={styles.closeButton}>
            <ImCancelCircle />
          </button>
        </div>
        <div className={`${styles.header} flex justify-center`}>
          <h2 className="text-center font-black font-barlow text-[22px]">
            Apply Now
            <hr className="bg-[#11B6E3] h-[4px] w-[40px] mt-2 mx-auto sm:mx-auto"></hr>
          </h2>
        </div>

        <div className={styles.content}>{renderFields()}</div>
        <button className={`${styles.submitButton} font-barlow`}>Submit</button>
      </Modal>
    </div>
  );
};

export default CustomModal;

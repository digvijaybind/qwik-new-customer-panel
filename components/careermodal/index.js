import React from "react";
import Modal from "react-modal";
import styles from "./careermodal.module.css";

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
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Custom Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.header}>
        <h2>Apply Now</h2>
        <button onClick={onRequestClose} className={styles.closeButton}>
          &times;
        </button>
      </div>
      <div className={styles.content}>{renderFields()}</div>
      <button className={styles.submitButton}>Submit</button>
    </Modal>
  );
};

export default CustomModal;

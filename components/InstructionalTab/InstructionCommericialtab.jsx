import React, { useState } from 'react';
import styles from './InstructionalTab.module.css'; // Import the CSS module

const instructions = [
  'In Dedicated Aircraft, You are able to book Chartered Aircraft with Our paramedics and experienced doctors ',
];

const InstructionCommericialtab = ({ className }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setisVisible] = useState(true);
  const nextStep = () => {
    if (currentStep < instructions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClick = () => {
    setisVisible(false);
  };
  return (
    <div
      className={`${
        styles.instructionTab
      } h-auto w-[200px] bg-[#fff] rounded-md ${styles.className}  ${
        isVisible ? '' : 'hidden'
      }`}
    >
      <h1>Attention!</h1>
      <p className="font-sans text-[12px]">{instructions[currentStep]}</p>
      <div className={`${styles.buttons}  `}>
        <button
          className={`${styles.button} rounded-md `}
          onClick={() => handleClick()}
          disabled={currentStep === instructions.length - 1}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default InstructionCommericialtab;

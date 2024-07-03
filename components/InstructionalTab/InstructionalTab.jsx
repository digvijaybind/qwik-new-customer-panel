import React, { useState } from 'react';
import styles from './InstructionalTab.module.css'; // Import the CSS module
import { useRouter } from 'next/router';
import SearchResponse from '@/pages/SearchResultsPage';
const instructions = [
  'In commericial Airline ,You are able to book commericial Airline stretcher with our paramedics and experience doctors',
  'In Dedicated Aircraft, You are able to book Chartered Aircraft with Our paramedics and experienced doctors ',
];

const InstructionTab = ({ className }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [commericialTab, setCommericialTab] = useState(true);
  const router = useRouter();
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
    setCommericialTab(false);
  };

  return (
    <div
      className={`${
        commericialTab
          ? styles.instructionTab
          : styles.InstructionCommericialTab
      } h-auto w-[200px] bg-[#fff] rounded-md ${className}`}
    >
      <h1>Attention!</h1>
      <p className="font-sans text-[12px]">{instructions[currentStep]}</p>
      <div className={`${styles.buttons}  `}>
        <button
          className={`${styles.button} rounded-md`}
          onClick={() => handleClick()}
          disabled={currentStep === instructions.length - 1}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default InstructionTab;

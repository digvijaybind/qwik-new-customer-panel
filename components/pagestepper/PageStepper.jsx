import React, { useState } from "react";

const PageStepper = ({ minStep = 1, maxStep = 5 }) => {
  const [currentStep, setCurrentStep] = useState(minStep); // Initial step is the minStep

  const handleNext = () => {
    if (currentStep < maxStep) {
      setCurrentStep(currentStep + 1); // Go to the next step if it's less than maxStep
    }
  };

  const handlePrevious = () => {
    if (currentStep > minStep) {
      setCurrentStep(currentStep - 1); // Go to the previous step if it's more than minStep
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* Stepper Display */}
      <div className="flex items-center justify-center space-x-2">
        {Array.from(
          { length: maxStep - minStep + 1 },
          (_, i) => minStep + i,
        ).map((step) => (
          <div
            key={step}
            className={`flex items-center justify-center w-12 h-12 rounded-[10px] cursor-pointer transition-colors duration-200 ease-in-out
              ${
                step === currentStep
                  ? " bg-button-gradient text-white font-barlow font-bold text-[32px]" // Active step style
                  : "bg-[#F7F7F7] text-[#1E1E1E] font-barlow font-bold text-[32px]" // Inactive step style
              }
            `}
            onClick={() => setCurrentStep(step)} // Step onClick to jump directly to a step
          >
            {step}
          </div>
        ))}
      </div>

   
    </div>
  );
};

export default PageStepper;

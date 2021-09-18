import React from "react";
import Step from '../Step/Index'
const StepNavigation = (props) => {
  return (
    <>
      <div className="stepWrapper">
        {props.labelArray.map((item, index) => (
          <Step
            key={index}
            index={index}
            label={item}
            selected={props.currentStep === index + 1}
            updateStep={props.updateStep}
          />
        ))}
      </div>
    </>
  );
};

export default StepNavigation;

import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ title, steps, currentStep }) => {
  const progress = (currentStep / steps) * 100;
  const circles = Array.from({ length: steps }, (_, index) => (
    <div
      key={index}
      className={`progress-circle ${index < currentStep ? "active" : ""}`}
    />
  ));

  return (
    <div className="progress-container">
      <h2 className="progress-title">{title}</h2>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        />
        <div className="progress-bar-circles">{circles}</div>
      </div>
    </div>
  );
};

export default ProgressBar;

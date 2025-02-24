// components/StatsCard.jsx
import React from "react";
// import "./StatsSection.css";

const StatsCard = ({ icon, number, label }) => {
  return (
    <div className="stats-card">
      <div className="StatsCard-icon">{icon}</div>
      <h2>
        {number} <span>+</span>
      </h2>
      <p>{label}</p>
    </div>
  );
};

export default StatsCard;

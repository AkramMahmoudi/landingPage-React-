// components/StatsSection.jsx
import React from "react";
import StatsCard from "./statscard";
import { FaFileAlt, FaAward, FaProjectDiagram, FaUsers } from "react-icons/fa";
// import "./StatsSection.css";

const StatsSection = () => {
  const stats = [
    { id: 1, icon: <FaFileAlt />, number: 299, label: "Project Done" },
    { id: 2, icon: <FaAward />, number: 20, label: "Years Of Experience" },
    {
      id: 3,
      icon: <FaProjectDiagram />,
      number: 599,
      label: "Project Success",
    },
    { id: 4, icon: <FaUsers />, number: 50, label: "Happy Client" },
  ];

  return (
    <div className="stats-section">
      {stats.map((stat) => (
        <StatsCard
          key={stat.id}
          icon={stat.icon}
          number={stat.number}
          label={stat.label}
        />
      ))}
    </div>
  );
};

export default StatsSection;

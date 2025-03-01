// components/StatsSection.jsx
import React from "react";
import StatsCard from "./statscard";
import { FaFileAlt, FaAward, FaProjectDiagram, FaUsers } from "react-icons/fa";
// import "./StatsSection.css";
import { motion } from "framer-motion";

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
      {stats.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <StatsCard
            key={stat.id}
            icon={stat.icon}
            number={stat.number}
            label={stat.label}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default StatsSection;

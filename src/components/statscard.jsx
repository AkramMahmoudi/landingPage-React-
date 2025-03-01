// components/StatsCard.jsx
import React, { useEffect } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
// import "./StatsSection.css";

const StatsCard = ({ icon, number, label }) => {
  const count = useMotionValue(0);
  const springCount = useSpring(count, { stiffness: 50, damping: 25 });
  const roundedCount = useTransform(springCount, (latest) =>
    Math.round(latest)
  );

  // const [count, setCount] = useState(0);
  useEffect(() => {
    count.set(number);
  }, [number, count]);
  return (
    <div className="stats-card">
      <div className="StatsCard-icon">{icon}</div>
      <h2>
        {console.log(roundedCount)}
        <motion.span>{roundedCount}</motion.span>
        <span>+</span>
      </h2>
      <p>{label}</p>
    </div>
  );
};

export default StatsCard;

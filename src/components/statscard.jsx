// components/StatsCard.jsx
import React, { useEffect } from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  useTransform,
  useInView,
} from "framer-motion";
// import "./StatsSection.css";

const StatsCard = ({ icon, number, label }) => {
  const count = useMotionValue(0);
  // const [count, setCount] = useState(0);

  const springCount = useSpring(count, { stiffness: 60, damping: 25 });
  const roundedCount = useTransform(springCount, (latest) =>
    Math.round(latest)
  );
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      count.set(number);
    }
  }, [number, isInView, count]);
  return (
    <div ref={ref} className="stats-card">
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

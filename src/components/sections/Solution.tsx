
import React from "react";
import { motion } from "framer-motion";
import SolutionSection from "../problem-solution/SolutionSection";

const Solution = () => {
  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <motion.div 
      className="flex-1 pr-0" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }} 
      variants={staggerContainer}
    >
      <SolutionSection />
    </motion.div>
  );
};

export default Solution;

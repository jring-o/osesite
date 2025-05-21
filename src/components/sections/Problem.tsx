
import React from "react";
import { motion } from "framer-motion";
import ProblemSection from "../problem-solution/ProblemSection";

const Problem = () => {
  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <motion.div 
      className="flex-1 pl-0" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }} 
      variants={staggerContainer}
    >
      <ProblemSection />
    </motion.div>
  );
};

export default Problem;

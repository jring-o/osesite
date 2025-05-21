import React from "react";
import { motion } from "framer-motion";
import SolutionFeatures from "./SolutionFeatures";

const SolutionSection: React.FC = () => {
  const fadeIn = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div variants={fadeIn} className="mb-12">
      <h3 className="text-xl md:text-2xl font-mono font-bold tracking-tight mb-3">
        <span className="text-brand-green text-xl">New Solution</span>
      </h3>
      <h2 className="text-3xl font-bold tracking-tight mb-8 text-zinc-900 md:text-3xl">
        Endowment Model
      </h2>
      <p className="text-zinc-700 leading-relaxed mb-10 text-lg">
        An endowment invests all donations in low-risk assets to build a permanent fund. It then uses only the generated investment income to support its mission. This strategy creates a predictable and sustainable funding stream, designed to weather economic and political volatility for generations.
      </p>
      
      <SolutionFeatures />

      <p className="text-sm text-zinc-600 mt-6 italic">
        Read more: <a href="https://kvinogradov.com/oss-universities" target="_blank" rel="noopener noreferrer" className="underline text-brand-green hover:text-brand-green/80">
          What OSS can learn from universities to fix its funding
        </a> by Konstantin Vinogradov
      </p>
    </motion.div>
  );
};

export default SolutionSection;
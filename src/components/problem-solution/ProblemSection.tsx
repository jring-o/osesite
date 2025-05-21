import React from "react";
import { motion } from "framer-motion";
import ProblemStats from "./ProblemStats";

const ProblemSection: React.FC = () => {
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
    <motion.div variants={fadeIn} className="mb-16">
      <h3 className="text-xl md:text-2xl font-mono font-bold tracking-tight mb-3">
        <span className="text-brand-blue text-xl">Old Problem</span>
      </h3>
      <h2 className="text-3xl font-bold tracking-tight mb-8 text-zinc-900 md:text-3xl">
        Open Source Sustainability
      </h2>
      
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <p className="text-zinc-700 leading-relaxed flex-1 text-lg">
          Open Source Software is the backbone of our digital world. Still, this critical infrastructure is largely maintained by unpaid volunteers who often lack stable funding and ecosystem support.<br/><br/> 

          This under-resourced model leads to volunteer burnout and an increased risk of bugs and vulnerabilities. Such flaws can result in severe incidents like <a href="https://en.wikipedia.org/wiki/Log4Shell" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Log4Shell</a> and <a href="https://en.wikipedia.org/wiki/Heartbleed" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Heartbleed</a>, costing the global economy billions in damages and remediation.
        </p>
        <div className="flex-1">
          <img src="/ose-images/xkcd.png" alt="Comic showing modern digital infrastructure maintained by one person" className="w-full h-auto object-contain" />
        </div>
      </div>

      <ProblemStats />

      <p className="text-sm text-zinc-600 mt-6 italic">
        Read more: <a href="https://openpath.quest/2024/the-open-source-sustainability-crisis/" target="_blank" rel="noopener noreferrer" className="underline text-brand-blue hover:text-brand-blue/80">
          Open Source Sustainability Crisis
        </a> by Chad Whitacre
      </p>
    </motion.div>
  );
};

export default ProblemSection;
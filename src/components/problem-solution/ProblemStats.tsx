
import React from "react";
import StatCard from "./StatCard";

const ProblemStats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <StatCard 
        number="96%" 
        text="codebases contain OSS, which constitutes 77% of all their code" 
      />
      
      <StatCard 
        number="86%" 
        text="OSS contributors are not paid for its development & maintenance" 
      />
    </div>
  );
};

export default ProblemStats;

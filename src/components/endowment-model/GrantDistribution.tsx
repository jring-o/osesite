
import React from "react";

const GrantDistribution: React.FC = () => {
  return (
    <div className="relative h-[200px] w-full">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-brand-blue text-white rounded-lg px-6 py-3 font-medium">
        Endowment Fund
      </div>
      
      <div className="absolute top-14 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-green-600">
        $$$
      </div>
      
      <div className="absolute top-[70px] left-1/4 w-1 h-16 bg-brand-green transform rotate-45"></div>
      <div className="absolute top-[70px] left-1/2 w-1 h-16 bg-brand-green"></div>
      <div className="absolute top-[70px] right-1/4 w-1 h-16 bg-brand-green transform -rotate-45"></div>
      
      <div className="absolute bottom-0 left-[12%] bg-brand-green/20 rounded-lg px-4 py-2 text-sm">
        Core Infrastructure
      </div>
      <div className="absolute bottom-0 left-[38%] bg-brand-green/20 rounded-lg px-4 py-2 text-sm">
        Security Tools
      </div>
      <div className="absolute bottom-0 right-[38%] bg-brand-green/20 rounded-lg px-4 py-2 text-sm">
        Libraries
      </div>
      <div className="absolute bottom-0 right-[12%] bg-brand-green/20 rounded-lg px-4 py-2 text-sm">
        Frameworks
      </div>
    </div>
  );
};

export default GrantDistribution;

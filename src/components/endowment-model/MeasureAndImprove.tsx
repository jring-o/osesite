
import React from "react";

const MeasureAndImprove: React.FC = () => {
  return (
    <div className="relative h-[200px] w-full">
      <div className="absolute top-0 left-1/4 bg-brand-green/20 rounded-lg px-4 py-2 text-sm">
        Project A
      </div>
      <div className="absolute top-0 right-1/4 bg-brand-green/20 rounded-lg px-4 py-2 text-sm">
        Project B
      </div>
      
      <div className="absolute top-[40px] left-[30%] w-1 h-16 bg-brand-blue transform rotate-45"></div>
      <div className="absolute top-[40px] right-[30%] w-1 h-16 bg-brand-blue transform -rotate-45"></div>
      
      <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2 text-brand-blue text-sm font-medium">
        Impact Data
      </div>
      
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-brand-blue text-white rounded-lg px-6 py-3 font-medium">
        Continuous Improvement
      </div>
    </div>
  );
};

export default MeasureAndImprove;

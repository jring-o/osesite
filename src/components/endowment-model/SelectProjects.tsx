
import React from "react";
import { HandHelping, Star } from "lucide-react";

const SelectProjects: React.FC = () => {
  return (
    <div className="relative h-[200px] w-full flex flex-col items-center justify-center">
      <div className="flex items-center gap-2">
        <HandHelping size={32} className="text-brand-blue" />
        <span className="text-brand-blue font-semibold">Community</span>
      </div>
      <div className="w-0.5 h-10 bg-brand-blue my-2"></div>
      <div className="flex gap-3">
        <div className="bg-brand-green/20 rounded-lg px-5 py-2 text-sm flex items-center gap-1">
          <Star size={16} className="text-brand-green" />
          Project X
        </div>
        <div className="bg-brand-green/20 rounded-lg px-5 py-2 text-sm flex items-center gap-1">
          <Star size={16} className="text-brand-green" />
          Project Y
        </div>
        <div className="bg-brand-green/20 rounded-lg px-5 py-2 text-sm flex items-center gap-1">
          <Star size={16} className="text-brand-green" />
          Project Z
        </div>
      </div>
    </div>
  );
};

export default SelectProjects;

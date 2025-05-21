
import React from "react";
import Problem from "./sections/Problem";
import Solution from "./sections/Solution";

const ProblemSolution = () => {
  return (
    <div className="section-container px-6 pb-0">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 relative">
          <Problem />
          <Solution />
        </div>
      </div>
    </div>
  );
};

export default ProblemSolution;

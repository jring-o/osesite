
import React from "react";
import StatCard from "./StatCard";

export const solutionFeatures = [
  {
    title: "A Model Proven by Universities",
    text: "For centuries, universities have relied on endowments to fund vital research and long-term initiatives, especially those without immediate commercial outcomes. This established model typically disburses ~5% of the fund annually, contributing significantly (around 10%) to university operating budgets."
  },
  {
    title: "A Natural Fit for Open Source Culture",
    text: "The open source ecosystem shares a similar culture and purpose with universities—both fostering innovation and public good. Adopting this proven endowment model provides a culturally aligned, long-term solution to sustain the critical open source infrastructure on which our digital world depends."
  },
];

const SolutionFeatures: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      {solutionFeatures.map((feature, index) => (
        <StatCard
          key={index}
          number=""
          text={feature.text}
          title={feature.title}
          variant="heading"
        />
      ))}
    </div>
  );
};

export default SolutionFeatures;

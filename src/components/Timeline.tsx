import React from "react";
import { cn } from "@/lib/utils";

interface MilestoneProps {
  quarter: string;
  description: string;
}

const Milestone = ({ quarter, description }: MilestoneProps) => {
  return (
    <div className="p-3"> {/* Removed px-3, using grid gap instead */}
      <h4 className="font-bold text-brand-blue text-lg md:text-xl mb-2">{quarter}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

interface TimelineProps {
  className?: string;
}

const Timeline = ({ className }: TimelineProps) => {
  const milestones = [
    {
      quarter: "Q1 2025",
      description: "Legal setup & initial seed funding.",
    },
    {
      quarter: "Q2 2025",
      description: "Launch Member Club & website. Appoint investment managers.",
    },
    {
      quarter: "Q3 2025",
      description: "Co-develop v1.0 distribution model. Prepare MVP funding.",
    },
    {
      quarter: "Q4 2025",
      description: "Target 501(c)(3) status. Public launch & fundraising.",
    },
    {
      quarter: "Q1 2026",
      description: "Vote on model. Execute MVP distribution. Assess & refine.",
    }
  ];

  return (
    <div className={cn("pt-16 pb-10 px-4 relative", className)}>
      <h3 className="text-center mb-12 text-2xl md:text-3xl font-bold">Roadmap</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto"> {/* Responsive grid layout */}
        {milestones.map((milestone, i) => (
          <Milestone 
            key={i}
            quarter={milestone.quarter}
            description={milestone.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
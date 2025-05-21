
import React from "react";
import { cn } from "@/lib/utils";
import { CalendarDays, Circle } from "lucide-react";

interface MilestoneColumnProps {
  quarter: string;
  description: string;
  details: string[];
  isLast?: boolean;
}

const MilestoneColumn = ({ quarter, description, details, isLast = false }: MilestoneColumnProps) => {
  return (
    <div className="flex flex-col items-center bg-white/5 p-6 rounded-xl border border-zinc-100 shadow-sm hover:shadow-md transition-all h-full">
      <div className="flex items-center justify-center mb-4">
        <div className="h-12 w-12 rounded-full bg-brand-blue flex items-center justify-center text-white">
          <CalendarDays size={22} />
        </div>
      </div>
      <div className="text-center">
        <div className="font-bold text-brand-blue text-xl mb-3">{quarter}</div>
        <div className="text-muted-foreground mb-4">{description}</div>
        
        <ul className="text-left text-sm space-y-2">
          {details.map((detail, i) => (
            <li key={i} className="flex items-start">
              <Circle className="h-2 w-2 mt-1.5 mr-2 text-brand-blue flex-shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
      
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
      description: "Begin",
      details: [
        "Complete legal documents",
        "Secure initial commitments",
        "Establish governance structure"
      ]
    },
    {
      quarter: "Q2 2025",
      description: "Community and Coin",
      details: [
        "Appoint portfolio managers",
        "Launch Members Club",
        "Launch website"
      ]
    },
    {
      quarter: "Q3 2025",
      description: "Model Development",
      details: [
        "Soft launch OSE",
        "Begin development of OSE Distribution Model v1.0", 
        "Prepare MVP funding round"
      ]
    },
    {
      quarter: "Q4 2025",
      description: "501(c)3 status expected",
      details: [
        "Public launch",
        "'1k for 10k' fundraising drive",
        "Finalize OSE Distribution Model v1.0 "
      ]
    },
    {
      quarter: "Q1 2026",
      description: "First Distribution",
      details: [
        "Vote on OSE Distribution Model v1.0",
        "MVP distribution",
        "Assess and refine 2026 Goals"
      ]
    }
  ];

  return (
    <div className={cn("py-16 px-4 relative", className)}>
      <h3 className="text-center mb-12 text-2xl font-bold">Roadmap</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 gap-y-10 max-w-6xl mx-auto relative">
        {milestones.map((milestone, i) => (
          <div key={i} className="relative">
            <MilestoneColumn 
              quarter={milestone.quarter}
              description={milestone.description}
              details={milestone.details}
              isLast={i === milestones.length - 1}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const OperationsTeam = () => {
  const teamMembers = [
    {
      name: "Konstantin Vinogradov",
      role: "Board Chairman",
      description: "Former open source maintainer with 15+ years experience in software development and non-profit management.",
      imgSrc: "https://images.unsplash.com/photo-1580518337843-f959e992563b?w=400&auto=format&fit=crop",
    },
    {
      name: "Chad Whitacre",
      role: "Board Director",
      description: "20+ years in asset management with expertise in sustainable investment strategies for non-profit organizations.",
      imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop",
    },
    {
      name: "Maxim Konovalov",
      role: "Board Director",
      description: "Core contributor to Linux kernel and maintainer of several critical open source security projects.",
      imgSrc: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop",
    },
    {
      name: "Amy Parker",
      role: "Board Advisor",
      description: "Community builder with experience spanning developer relations at major tech companies and open source foundations.",
      imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop",
    },
    {
      name: "Jonathan Starr",
      role: "Executive Director",
      description: "Specialized in intellectual property and open source licensing with 12+ years experience advising tech organizations.",
      imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <h2 className="section-title text-3xl md:text-4xl font-bold tracking-tight">
        Operations <span className="gradient-text">Team</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {teamMembers.map((member, index) => (
          <Card key={index} className="bg-white border border-muted/30 hover:shadow-md transition-shadow duration-300 flex flex-col">
            <div className="flex p-4 items-center">
              <div className="w-16 h-16 overflow-hidden rounded-lg flex-shrink-0 mr-4">
                <img src={member.imgSrc} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-zinc-900">{member.name}</h3>
                <p className="text-sm text-brand-blue font-medium">{member.role}</p>
              </div>
            </div>
            <CardContent className="pt-0 p-4 flex-grow">
              <p className="text-sm text-muted-foreground">{member.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default OperationsTeam;
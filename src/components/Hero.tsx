
import React from "react";
import { Zap, Brain, Users } from "lucide-react";
import FeatureCard from "./hero/FeatureCard";
import HeroContent from "./hero/HeroContent";
import GridBackground from "./hero/GridBackground";

const Hero = () => {
  const features = [{
    icon: <Zap className="h-5 w-5 text-brand-blue" />,
    title: "Sustainable",
    description: "Provides stable, long-term funding for OSS maintenance, independent of yearly donation cycles or short-term corporate budgets."
  }, {
    icon: <Brain className="h-5 w-5 text-brand-blue" />,
    title: "Systemic",
    description: "Supports crucial 'long tail' of OSS—foundational projects vital for the entire ecosystem, often overlooked by typical funding."
  }, {
    icon: <Users className="h-5 w-5 text-brand-blue" />,
    title: "Efficient",
    description: "Maximizes impact with a community-first, transparent digital operation, attracting diverse support from tech and beyond."
  }];

  return (
    <div className="w-full relative overflow-hidden">
      <GridBackground />
      <div className="max-w-[1200px] px-6 mx-auto relative z-10">
        <HeroContent />

        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto" 
          style={{
            marginBottom: '-80px',
            paddingBottom: '160px'
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

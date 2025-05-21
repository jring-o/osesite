import React from "react";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
const HeroContent: React.FC = () => {
  return <div className="text-center max-w-3xl mx-auto space-y-10 pt-36 pb-12 md:pt-48 md:pb-16">
      {/* Badge */}
      <div className="mb-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-sm font-medium text-brand-blue">
        <Code size={14} className="inline-block" />
        <span>US nonprofit corporation, 501(c)(3) status pending</span>
      </div>
      
      <h1 className="font-mono font-bold tracking-tight text-5xl md:text-6xl leading-tight">
        The World's First
        <span className="gradient-text block font-sans">Open Source Endowment</span>
      </h1>
      
      <p className="text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed md:text-xl">Truly sustainable funding for critical OSS through a community-driven endowment fund.</p>
      
      <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center">
        <a href="#donate">
          <Button size="lg" className="bg-brand-green text-white font-medium px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:brightness-105 transition-all">
            Donate now
          </Button>
        </a>
        
        <a href="#how-it-works">
          <Button size="lg" variant="outline" className="font-medium border-2 hover:bg-accent/30 hover:border-brand-blue/30 px-8 py-6 text-lg transition-all">
            Learn more
          </Button>
        </a>
      </div>
    </div>;
};
export default HeroContent;
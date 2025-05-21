import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, ListChecks, GitCommit, ShieldCheck, Maximize, HeartHandshake, SearchCode, Package, GitBranch, Coins, RefreshCw } from "lucide-react";

const ModelDevelopment = () => {
  const corePrinciples = [
    {
      icon: <Maximize className="h-8 w-8 text-brand-blue" />,
      title: "Transparency & Measurability",
      description: "We prioritize clear, data-driven approaches. Grant decisions aim to be simple, verifiable, and based on open inputs where possible, building trust within the community.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-brand-blue" />,
      title: "Systemic & Proactive Impact",
      description: "Our focus is on fundamental OSS infrastructure and addressing systemic issues like maintainer burnout, rather than just reactive firefighting. We aim to proactively identify and support critical, underfunded projects.",
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-brand-blue" />,
      title: "Community-Led Evolution",
      description: "The OSE funding model is not static. It's co-developed and refined with input from our members. The community may select varied approaches for different funding rounds, allowing for experimentation and continuous adaptation to the ecosystem's needs.",
    },
  ];

  const explorationAreas = [
    {
      icon: <Package className="h-6 w-6 text-brand-blue" />,
      title: "Targeting Support: Ecosystems & Beyond",
      description: "How do we best define target areas for each funding round? The community will explore focusing on specific programming language ecosystems, broader categories like 'Research Software,' or even supporting foundational organizations, adapting priorities as we learn.",
    },
    {
      icon: <Coins className="h-6 w-6 text-brand-blue" />,
      title: "Grant Formats & Sizes",
      description: "What are the most effective ways to deliver funds in a given cycle? We're considering various approaches, from efficient microgrants to broader distributions, with the flexibility to choose the best fit for each round's objectives.",
    },
    {
      icon: <SearchCode className="h-6 w-6 text-brand-blue" />,
      title: "Selection Methodologies: Evolving Strategies",
      description: "How do we identify critical projects? We're discussing the development of open algorithms and selection criteria. These methodologies can evolve, and different strategies might be employed for different funding rounds based on community decisions and learned insights.",
    },
    {
      icon: <GitBranch className="h-6 w-6 text-brand-blue" />,
      title: "Distribution Channels & Partnerships",
      description: "What's the best way to get funds to recipients? While OSE makes core allocation decisions, we are exploring collaborations with existing platforms. The choice of partners and methods may vary to optimize efficiency and alignment for each funding cycle.",
    }
  ];

  return (
    <>
      <h2 className="section-title">
        Developing Our Funding <span className="gradient-text">Model</span>
      </h2>
      <p className="section-description">
        OSE is committed to building a transparent, effective, and community-driven funding model for open source. Our approach is iterative, informed by core principles, and designed to make a systemic, lasting impact through open discussion, experimentation, and adaptation.
      </p>

      <div className="max-w-5xl mx-auto mt-12 mb-10">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-zinc-800 dark:text-zinc-200">
          Our Guiding Principles
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {corePrinciples.map((principle, index) => (
            <Card key={index} className="bg-white dark:bg-card shadow-lg hover:shadow-xl transition-all flex flex-col text-center h-full">
              <CardHeader className="items-center pt-6 pb-3">
                <div className="p-3 rounded-full bg-brand-blue/10 flex-shrink-0 mb-2">
                  {principle.icon}
                </div>
                <CardTitle className="text-lg text-zinc-900 dark:text-zinc-100">{principle.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto mt-16 mb-10 p-6 bg-brand-blue/5 rounded-lg">
        <h3 className="text-2xl font-bold mb-8 text-center text-zinc-800 dark:text-zinc-200">
          Exploring the <span className="gradient-text">Potentials</span>
        </h3>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Crafting the ideal funding model is an ongoing journey of exploration, community dialogue, and iteration. We anticipate that our approach will evolve, with the potential for different strategies and focuses from one funding round to the next, as guided by our members:
        </p>
        <div className="space-y-8">
          {explorationAreas.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1 p-2 bg-brand-blue/20 rounded-full">
                {item.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground text-center">
          <em>The OSE model for any given funding cycle will transparently define how projects are selected, grant sizes determined, funds distributed, and impact measured. This dynamism is key to our long-term effectiveness and responsiveness to the ever-changing open source landscape.</em>
        </p>
      </div>
      
      <p className="text-center max-w-3xl mx-auto text-md text-muted-foreground mt-8">
        OSE is dedicated to supporting the broad OSS ecosystem—a public good essential to the modern world—not just specific software or languages with limited lifespans.
      </p>
    </>
  );
};

export default ModelDevelopment;
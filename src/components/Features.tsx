import React from "react";
const Features = () => {
  const featuresList = [{
    title: "Digital-First",
    description: "Leverage a digital-first, automated approach, minimizing overhead and maximizing efficiency, transparency, and global reach."
  }, {
    title: "Ecosystem Outlook",
    description: "Support the developers, maintainers, contributors, collaborative networks, educational pathways, and cultural elements that ensure open source's long-term health and innovation."
  }, {
    title: "Radical Transparency",
    description: "Commit to radical transparency with open data, public governance processes, and clear accountability in every funding decision."
  }, {
    title: "People-First",
    description: "Empower passionate and committed individuals to shape our direction and impact."
  }, {
    title: "Data Driven",
    description: "Utilize data and analytics to inform funding allocations, measure impact, and guide strategic decisions towards achieving clear, long-term ecosystem objectives."
  }, {
    title: "Decentralized",
    description: "Build a broad and diversified funding base, making every contribution meaningful and fostering collective ownership of the endowment's success."
  }, {
    title: "Neutrality",
    description: "Remain independent from political or corporate influence, ensuring unbiased, mission-driven funding."
  }, {
    title: "Innovation-Driven",
    description: "Foster innovation in open source funding models and community engagement methodology."
  }, {
    title: "Member Led",
    description: "Ensure key decisions are driven by those with a direct stake in the endowment's success"
  }];
  return <div className="section-container relative">
      <div className="absolute inset-0 -mx-[50vw] bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-green/5" />
      
      <div className="relative max-w-[1200px] mx-auto">
        <h2 className="section-title">
          <span className="gradient-text">Next-gen nonprofit</span> for the tech industry
        </h2>
        <p className="section-description">OSE is pioneering sustainable open source funding with the agility of a modern tech start-up.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 px-4">
          {featuresList.map((feature, index) => <div key={index} className={`
                space-y-2 p-6
                ${index < featuresList.length - 3 ? 'border-b border-brand-blue/10 dark:border-brand-green/10' : ''}
                ${(index + 1) % 3 !== 0 && index < featuresList.length - 1 ? 'border-r border-brand-blue/10 dark:border-brand-green/10' : ''}
                ${index < 6 && index >= 3 ? 'md:border-b md:border-brand-blue/10 md:dark:border-brand-green/10' : ''}
                ${index < 3 ? 'md:border-b md:border-brand-blue/10 md:dark:border-brand-green/10' : ''}
                ${(index + 1) % 2 !== 0 && index < featuresList.length - 1 ? 'md:border-r md:border-brand-blue/10 md:dark:border-brand-green/10' : ''}
                ${index < 2 ? 'md:col-span-1' : ''}
              `}>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {feature.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>)}
        </div>
      </div>
    </div>;
};
export default Features;
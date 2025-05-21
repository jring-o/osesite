import React from "react";
const Features = () => {
  const featuresList = [
    {
      title: "Digital-First",
      description: "Operates like a tech startup with minimal overhead and automated, data-driven processes for efficiency and transparency."
    },
    {
      title: "Global Outlook",
      description: "Supports the worldwide open source community, focusing on developers, maintainers, networks, and cultural elements for long-term health."
    },
    {
      title: "Radical Transparency",
      description: "Commits to open data, public governance processes, and clear accountability in all funding decisions and operations."
    },
    {
      title: "People-Centric & Bottom-Up",
      description: "Empowers individuals and the community to shape our direction, with inclusive governance and low thresholds for participation."
    },
    {
      title: "Data-Driven & SMART Goals",
      description: "Utilizes analytics to inform funding, measure impact, and guide strategy, ensuring even small donations make a measurable difference."
    },
    {
      title: "Decentralized & Diversified",
      description: "Builds a broad funding base from diverse sources, making every contribution meaningful and fostering collective ownership."
    },
    {
      title: "Neutrality",
      description: "Remains independent from political or corporate influence, ensuring unbiased, mission-driven funding for the public good."
    },
    {
      title: "Innovation & Viral Growth",
      description: "Fosters innovation in funding models and community engagement, encouraging donors and projects to spread the word and boost organic growth."
    },
    {
      title: "Member-Led Governance",
      description: "Ensures key strategic decisions, particularly around grant-making, are advised and driven by members with a direct stake in OSE's success."
    }
  ];
  return <div className="section-container relative">
      <div className="absolute inset-0 -mx-[50vw] bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-green/5" />
      
      <div className="relative max-w-[1200px] mx-auto">
        <h2 className="section-title">
          <span className="gradient-text">Next-gen nonprofit</span> for the tech industry
        </h2>
        <p className="section-description">OSE is pioneering sustainable open source funding with the agility of a modern tech start-up, guided by core principles for maximum impact and community trust.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 px-4">
          {featuresList.map((feature, index) => <div key={index} className={`
                space-y-2 p-6
                ${index < featuresList.length - (featuresList.length % 3 === 0 ? 3 : featuresList.length % 3) ? 'border-b border-brand-blue/10 dark:border-brand-green/10' : ''}
                ${(index + 1) % 3 !== 0 && index < featuresList.length -1 ? 'md:border-r md:border-brand-blue/10 md:dark:border-brand-green/10' : ''}
                ${index < featuresList.length -1 && (index + 1) % 3 === 0 ? '' : 'border-b md:border-b-0 border-brand-blue/10 dark:border-brand-green/10'}
                 ${/* Apply bottom border for all items on mobile except the last row equivalent */''}
                ${ index >= featuresList.length - (featuresList.length % 3 || 3) ? '' : 'md:border-b md:border-brand-blue/10 md:dark:border-brand-green/10' }

              `}>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400"> {/* Applied text-sm for consistency */}
                {feature.description}
              </p>
            </div>)}
        </div>
      </div>
    </div>;
};
export default Features;
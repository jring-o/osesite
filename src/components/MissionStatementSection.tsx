import React from "react";
import GridBackground from "./hero/GridBackground";

const MissionStatementSection: React.FC = () => {
  return (
    <section className="w-full bg-zinc-900 text-white py-20 px-6 relative overflow-hidden">
      <GridBackground />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
        <p className="section-description text-zinc-200 leading-relaxed">
          Open Source is the world's largest public good institution, fostering global education, professional connections, community, and significant economic activity—all underpinned by a unique collaborative culture. The Open Source Endowment offers an efficient, lasting solution to ensure this vital institution and its global community can meet the fundamental challenge of sustainable funding, securing its contributions for generations to come.
        </p>
      </div>
    </section>
  );
};
export default MissionStatementSection;
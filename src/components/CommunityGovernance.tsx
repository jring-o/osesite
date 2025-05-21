import React from "react";
import { Button } from "@/components/ui/button";

const CommunityGovernance = () => {
  return (
    <>
      <h2 className="section-title text-3xl md:text-4xl font-bold tracking-tight">
        Community-based <span className="gradient-text">governance</span>
      </h2>
      <p className="section-description text-xl max-w-3xl mx-auto">
        Open Source Endowment is managed by its Board of Directors and the OSE Member Club. Donors contributing $1000+ annually gain additional governance rights, including advising on the grant-making model and nominating community board directors.
      </p>

      <div className="text-center mt-10 md:mt-12">
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Ready to make a deeper impact and help guide the future of open source funding?
        </p>
        <a href="#donate">
          <Button size="lg" className="bg-brand-green text-white font-medium px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:brightness-105 transition-all">
            Support OSE & Join the Club
          </Button>
        </a>
        <p className="text-xs text-muted-foreground mt-4">
          Membership is governed by the OSE Membership Policy.
        </p>
      </div>
    </>
  );
};

export default CommunityGovernance;
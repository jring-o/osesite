import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import EndowmentModel from "@/components/EndowmentModel";
import Features from "@/components/Features";
import CommunityGovernance from "@/components/CommunityGovernance";
import ModelDevelopment from "@/components/ModelDevelopment";
// import GuidingPrinciplesDocs from "@/components/GuidingPrinciplesDocs";
import OperationsTeam from "@/components/OperationsTeam";
import DonationForm from "@/components/DonationForm";
import Footer from "@/components/Footer";
import SectionContainer from "@/components/SectionContainer";
import MissionStatementSection from "@/components/MissionStatementSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <SectionContainer id="hero" fullBleed={true} noPaddingBottom={true}>
          <Hero />
        </SectionContainer>
        
        <SectionContainer 
          id="problem-solution" 
          noPaddingTop={true}
          withBackground={true}
          withVerticalSeparator={true}
        >
          <ProblemSolution />
        </SectionContainer>

        <MissionStatementSection />

        <SectionContainer id="how-it-works" withBackground={true} noPaddingTop={true} noPaddingBottom={true}>
          <EndowmentModel />
        </SectionContainer>
        
        <SectionContainer id="features" noPaddingTop={true} noPaddingBottom={true}>
          <Features />
        </SectionContainer>
        
        <SectionContainer 
          id="community-governance" 
          withBackground={true}
        >
          <CommunityGovernance />
        </SectionContainer>
                
        <SectionContainer 
        id="funding-model"
        withBackground={true}
      >
          <ModelDevelopment />
        </SectionContainer>

        {/* <SectionContainer 
          id="guiding-principles" 
          withBackground={true}
          noPaddingTop={true} 
        >
          <GuidingPrinciplesDocs />
        </SectionContainer>*/}

        <SectionContainer id="operations-team">
          <OperationsTeam />
        </SectionContainer>
               
        <SectionContainer id="donate" noPaddingTop={true} noPaddingBottom={true} fullBleed={true}>
          <DonationForm />
        </SectionContainer>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
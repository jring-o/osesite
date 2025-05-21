
import React from "react";

const EndowmentDiagram: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4 text-brand-blue">Sustainable Funding Model</h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold mr-4">1</div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Community donations form the principal</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold mr-4">2</div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Endowment invests conservatively</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-bold mr-4">3</div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Investment proceeds fund projects</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="relative h-[200px] w-full">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-brand-blue/10 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-brand-blue">Endowment</span>
            </div>
            
            <div className="absolute top-[120px] left-1/4 w-1 h-16 bg-brand-green transform rotate-45"></div>
            <div className="absolute top-[120px] right-1/4 w-1 h-16 bg-brand-green transform -rotate-45"></div>
            
            <div className="absolute bottom-0 left-[15%] w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center">
              <span className="text-xs text-center text-brand-green">Core Projects</span>
            </div>
            <div className="absolute bottom-0 right-[15%] w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center">
              <span className="text-xs text-center text-brand-green">Libraries</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndowmentDiagram;

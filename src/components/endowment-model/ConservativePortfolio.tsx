
import React from "react";

const ConservativePortfolio: React.FC = () => {
  const assets = [
    { name: "Bonds", percentage: 40, color: "bg-brand-blue" },
    { name: "Stocks", percentage: 35, color: "bg-brand-green" },
    { name: "Real Estate", percentage: 15, color: "bg-amber-500" },
    { name: "Cash", percentage: 10, color: "bg-gray-400" }
  ];
  
  return (
    <div className="w-full">
      <div className="flex h-10 w-full overflow-hidden rounded-lg">
        {assets.map(asset => (
          <div 
            key={asset.name}
            className={`${asset.color} h-full`}
            style={{ width: `${asset.percentage}%` }}
          />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {assets.map(asset => (
          <div key={asset.name} className="flex items-center text-sm">
            <div className={`${asset.color} h-3 w-3 rounded-full mr-2`}></div>
            <span>{asset.name}: {asset.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConservativePortfolio;

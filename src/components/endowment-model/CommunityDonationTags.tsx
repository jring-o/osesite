
import React from "react";

const CommunityDonationTags: React.FC = () => {
  const tags = [
    "developers", "founders", "executives", "investors", 
    "startups", "corporations", "foundations"
  ];
  
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {tags.map((tag, index) => (
        <div 
          key={tag} 
          className={`px-3 py-1.5 rounded-full text-sm font-medium ${
            index % 2 === 0 ? 'bg-brand-blue/20 text-brand-blue' : 'bg-brand-green/20 text-brand-green'
          }`}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

export default CommunityDonationTags;

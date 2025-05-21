import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white/70 border border-border/50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:border-brand-blue/30 hover:bg-white/90 backdrop-blur-sm">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center gap-3">
          {icon}
          <h3 className="text-xl font-semibold text-gray-900">
            {title}
          </h3>
        </div>
        <p className="text-zinc-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  number: string;
  text: string;
  title?: string;
  variant?: 'number' | 'heading';
}

const StatCard: React.FC<StatCardProps> = ({ number, text, title, variant = 'number' }) => {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
      <CardContent className="p-6 flex flex-col justify-start h-full">
        {variant === 'number' ? (
          <div className="text-3xl font-bold text-brand-blue mb-2">{number}</div>
        ) : (
          <h3 className="text-xl font-semibold text-brand-blue mb-2">{title}</h3>
        )}
        <p className="text-sm text-zinc-600">{text}</p>
      </CardContent>
    </Card>
  );
};

export default StatCard;


import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface EndowmentStepProps {
  number: number;
  title: string;
  description: string;
  visualization: React.ReactNode;
}

const EndowmentStep: React.FC<EndowmentStepProps> = ({ 
  number, 
  title, 
  description, 
  visualization 
}) => {
  return (
    <Card className="flex flex-col">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <div className="w-full aspect-square bg-white rounded-lg flex items-center justify-center">
            {visualization}
          </div>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-sm">
              {number}
            </div>
            <h3 className="text-lg font-bold text-brand-blue">{title}</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EndowmentStep;

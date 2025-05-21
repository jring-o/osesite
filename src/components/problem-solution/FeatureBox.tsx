
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureBoxProps {
  title: string;
  text: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ title, text }) => {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-all">
      <CardContent className="p-6">
        <div className="text-brand-green font-semibold mb-2">{title}</div>
        <p className="text-sm text-zinc-600">{text}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureBox;

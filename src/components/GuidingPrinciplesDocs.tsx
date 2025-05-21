import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

const GuidingPrinciplesDocs = () => {
  const principles = [
    "US nonprofit corporation",
    "Applied for 501(c)(3) tax-exempt status",
    "Community self-governance model",
    "Only individuals on board, no corporate seats",
    "Members ($1K+ donors) can nominate board members",
    "Board oversees investment strategy and operations",
  ];

  const documents = [
    { title: "Bylaws", description: "Governance structure", icon: <FileText className="h-8 w-8 text-brand-blue mb-3 mt-2" /> },
    { title: "501(c)(3)", description: "US tax-exempt status", icon: <FileText className="h-8 w-8 text-brand-blue mb-3 mt-2" /> },
    { title: "Investment Policy", description: "Asset management", icon: <FileText className="h-8 w-8 text-brand-blue mb-3 mt-2" /> },
  ];

  return (
    <>
      <h2 className="section-title text-3xl md:text-4xl font-bold tracking-tight">
        Guiding Principles & <span className="gradient-text">Documentation</span>
      </h2>
      <p className="section-description text-xl">
        Our operations and grant distribution are guided by clear principles and public documentation, ensuring transparency and accountability in our mission to sustainably fund open source.
      </p>

      <div className="bg-brand-blue/5 rounded-lg p-8 max-w-3xl mx-auto">
        <h3 className="font-semibold text-xl mb-6 text-center text-zinc-800 dark:text-zinc-200">Key Documentation</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {documents.map((doc) => (
            <Card key={doc.title} className="bg-white border border-muted/30 hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-4 flex flex-col items-center text-center">
                {doc.icon}
                <h4 className="font-semibold text-base mb-1 text-zinc-900">{doc.title}</h4>
                <p className="text-xs text-muted-foreground">
                  {doc.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="font-semibold text-xl mb-6 text-center mt-12 text-zinc-800 dark:text-zinc-200">Core Principles</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-sm text-muted-foreground">
          {principles.map((principle, index) => (
            <li key={index} className="flex items-start">
              <span className="text-brand-blue font-bold mr-2 mt-0.5">•</span>
              <span>{principle}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GuidingPrinciplesDocs;
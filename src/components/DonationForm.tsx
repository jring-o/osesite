import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const DonationForm = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-blue/5 via-brand-blue/10 to-brand-green/5 pb-20 pt-20 md:pt-28">
      <div className="section-container pb-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">
            Support <span className="gradient-text">Open Source</span>
          </h2>
          <p className="section-description">
            Your contribution helps create sustainable funding for critical open source projects.
          </p>

          <Card className="mt-10 border-muted/30 shadow-md hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 sm:p-10">
              <div className="text-center">
                <p className="text-xl text-muted-foreground mb-6">
                  Our 501(c)(3) status is pending. We will update this once we are approved!
                </p>
                <p className="text-xl text-muted-foreground">
                  If you are interested in becoming a founding member, please reach out at <a href="mailto:donations@endowment.dev" className="text-brand-blue hover:underline font-medium">donations@endowment.dev</a>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DonationForm;
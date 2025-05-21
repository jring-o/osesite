import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, MessageSquare, Award, CalendarDays, Star, Handshake, DollarSign } from "lucide-react";

const CommunityGovernance = () => {
  const membershipCriteria = [
    {
      title: "Monetary Contribution",
      description: "Join with an annual contribution of $1,000 (gross USD value). Membership duration is proportional to your support (e.g., $1,000 grants one year). Donations via personal legal entities (like family trusts) are welcome.",
      icon: <DollarSign className="h-10 w-10 text-brand-blue mb-4" />,
    },
    {
      title: "Non-Monetary Contribution",
      description: "In exceptional cases, significant non-monetary contributions (e.g., labor, expertise) may qualify for a one-year membership, subject to Board approval.",
      icon: <Handshake className="h-10 w-10 text-brand-green mb-4" />,
    },
  ];

  const benefits = [
    {
      icon: <Users className="h-6 w-6 text-brand-blue" />,
      title: "Appoint Board Directors",
      description: "Play a crucial role in OSE's governance by appointing community-nominated directors to the Board.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-brand-blue" />,
      title: "Advise on Strategy",
      description: "Provide input and advise the Board on strategic matters, including OSE's grant-making models and priorities.",
    },
    {
      icon: <Award className="h-6 w-6 text-brand-blue" />,
      title: "Exclusive Access & Events",
      description: "Receive invitations to exclusive Member Club roundtables, webinars, online resources, and virtual/in-person events.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-brand-blue" />,
      title: "Direct Engagement & Updates",
      description: "Access dedicated communication channels for direct interaction and receive regular updates on OSE’s activities and development.",
    },
    {
      icon: <Star className="h-6 w-6 text-brand-blue" />,
      title: "Public Recognition",
      description: "Be acknowledged (with your consent) in the annual OSE report and featured on the OSE website.",
    },
  ];

  return (
    <>
      <h2 className="section-title text-3xl md:text-4xl font-bold tracking-tight">
        Community-based <span className="gradient-text">governance</span>
      </h2>
      <p className="section-description text-xl">
        Open Source Endowment is managed by its Board of Directors and the OSE Member Club. This structure ensures that committed donors are not just financial supporters but strategic partners in shaping the future of open source sustainability.
      </p>

      <div className="mt-12 md:mt-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-zinc-800 dark:text-zinc-200">
          The OSE Member Club
        </h3>
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <h4 className="text-xl md:text-2xl font-semibold text-center mb-8 text-zinc-800 dark:text-zinc-200">
            Becoming a Member
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {membershipCriteria.map((item) => (
              <Card key={item.title} className="text-center premium-card hover-lift h-full flex flex-col">
                <CardHeader className="pt-6">
                  {item.icon}
                  <CardTitle className="text-lg md:text-xl text-zinc-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-6 px-4 flex-grow">
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-12 md:mb-16">
          <h4 className="text-xl md:text-2xl font-semibold text-center mb-8 text-zinc-800 dark:text-zinc-200">
            Member Privileges
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-background rounded-lg border border-muted/20 hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                <div>
                  <h5 className="font-semibold text-md text-zinc-900 dark:text-zinc-100 mb-1">{benefit.title}</h5>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto mb-12 md:mb-16 text-center">
          <h4 className="text-xl md:text-2xl font-semibold mb-6 text-zinc-800 dark:text-zinc-200">
            Your Role as a Member
          </h4>
          <p className="text-md text-muted-foreground leading-relaxed">
            Members are central to OSE's mission. You are encouraged to actively participate in discussions, help shape grant-making models, serve as an ambassador for OSE, and provide constructive feedback. Your collective voice is essential in guiding our strategic direction.
          </p>
        </div>
        <div className="text-center mt-10">
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ready to make a deeper impact and help guide the future of open source funding?
          </p>
          <a href="#donate">
            <Button size="lg" className="bg-brand-green text-white font-medium px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:brightness-105 transition-all">
              Support OSE & Join the Club
            </Button>
          </a>
           <p className="text-xs text-muted-foreground mt-4">
            Membership is governed by the OSE Membership Policy.
          </p>
        </div>
      </div>
    </>
  );
};

export default CommunityGovernance;
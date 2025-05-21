
import React from "react";
import Timeline from "./Timeline";

const EndowmentModel = () => {
  return <div className="max-w-[1200px] mx-auto px-4 py-20 md:py-28">
      <h2 className="section-title">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        <div className="flex flex-col items-start bg-white rounded-2xl shadow-lg border border-zinc-100 p-0 overflow-hidden hover-lift transition-all h-full">
          <div className="w-full aspect-square overflow-hidden flex items-start justify-start">
            <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80" alt="Donations" className="w-full h-full object-cover rounded-none border-0" loading="lazy" style={{
            background: "#f2f2f2"
          }} />
          </div>
          <div className="w-full px-6 pt-6 pb-6 flex flex-col items-start">
            <div className="text-brand-blue font-semibold text-base mb-1" style={{
            fontSize: 16
          }}>Step 1</div>
            <div className="font-bold text-black text-lg mb-2 text-left" style={{
            fontSize: 18,
            color: "#000"
          }}>Donations</div>
            <div className="text-left text-[14px] text-muted-foreground leading-relaxed font-normal">Individuals, companies, and foundations build the endowment's permanent principal by contributing diverse assets like cash or stocks. This creates a lasting capital base dedicated to supporting open source. (Note: US 501(c)(3) status is pending; ETA Q4 2025 for potential retroactive tax-deductibility for US donations.)"</div>
          </div>
        </div>
        <div className="flex flex-col items-start bg-white rounded-2xl shadow-lg border border-zinc-100 p-0 overflow-hidden hover-lift transition-all h-full">
          <div className="w-full aspect-square overflow-hidden flex items-start justify-start">
            <img src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80" alt="Investments" className="w-full h-full object-cover rounded-none border-0" loading="lazy" style={{
            background: "#f2f2f2"
          }} />
          </div>
          <div className="w-full px-6 pt-6 pb-6 flex flex-col items-start">
            <div className="text-brand-blue font-semibold text-base mb-1" style={{
            fontSize: 16
          }}>Step 2</div>
            <div className="font-bold text-black text-lg mb-2 text-left" style={{
            fontSize: 18,
            color: "#000"
          }}>Investments</div>
            <div className="text-left text-[14px] text-muted-foreground leading-relaxed font-normal">The endowment strategically invests this principal in a diversified, low-risk portfolio. This approach is designed to generate sustainable annual returns (e.g., 5-7%) that provide ongoing grant funding while preserving the original capital.</div>
          </div>
        </div>
        <div className="flex flex-col items-start bg-white rounded-2xl shadow-lg border border-zinc-100 p-0 overflow-hidden hover-lift transition-all h-full">
          <div className="w-full aspect-square overflow-hidden flex items-start justify-start">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" alt="Selection" className="w-full h-full object-cover rounded-none border-0" loading="lazy" style={{
            background: "#f2f2f2"
          }} />
          </div>
          <div className="w-full px-6 pt-6 pb-6 flex flex-col items-start">
            <div className="text-brand-blue font-semibold text-base mb-1" style={{
            fontSize: 16
          }}>Step 3</div>
            <div className="font-bold text-black text-lg mb-2 text-left" style={{
            fontSize: 18,
            color: "#000"
          }}>Selection</div>
            <div className="text-left text-[14px] text-muted-foreground leading-relaxed font-normal">
            A transparent, data-informed process—involving community input, model development, expert oversight, and member voting—identifies and prioritizes critical open source projects for funding. Emphasis is placed on vital infrastructure and high-impact tools.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start bg-white rounded-2xl shadow-lg border border-zinc-100 p-0 overflow-hidden hover-lift transition-all h-full">
          <div className="w-full aspect-square overflow-hidden flex items-start justify-start">
            <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80" alt="Monitoring" className="w-full h-full object-cover rounded-none border-0" loading="lazy" style={{
            background: "#f2f2f2"
          }} />
          </div>
          <div className="w-full px-6 pt-6 pb-6 flex flex-col items-start">
            <div className="text-brand-blue font-semibold text-base mb-1" style={{
            fontSize: 16
          }}>Step 4</div>
            <div className="font-bold text-black text-lg mb-2 text-left" style={{
            fontSize: 18,
            color: "#000"
          }}>Monitoring</div>
            <div className="text-left text-[14px] text-muted-foreground leading-relaxed font-normal">
            We actively track the outcomes and impact of funded projects. These insights create a vital feedback loop, allowing us to learn, demonstrate accountability, and continuously refine our strategy to maximize benefits for the open source ecosystem.
            </div>
          </div>
        </div>
      </div>
      
      <Timeline />
    </div>;
};
export default EndowmentModel;

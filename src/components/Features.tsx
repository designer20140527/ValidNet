'use client';

import Button from './Button';

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
  icon?: string;
}

const FeatureCard = ({ title, description, className = '', icon }: FeatureCardProps) => (
  <div className={`features-card bg-[#1A1A1A] rounded-2xl p-8 w-[440px] ${className}`}>
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 flex items-center justify-center shrink-0">
        <svg className="w-8 h-8 text-[#2563eb]" viewBox="0 0 24 24" fill="none">
          {icon === 'node' && (
            <path d="M12 4L4 8v8l8 4 8-4V8l-8-4zM4 12l8 4 8-4M12 4v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          )}
          {icon === 'anchor' && (
            <path d="M12 8v13m0-13a3 3 0 100-6 3 3 0 000 6zm7 13H5m14-7l-4.6 4.6a2 2 0 01-2.8 0L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          )}
          {icon === 'proof' && (
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          )}
          {icon === 'incentive' && (
            <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          )}
          {icon === 'transparency' && (
            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          )}
          {icon === 'builder' && (
            <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          )}
        </svg>
      </div>
      <h3 className="text-2xl font-[Formula] text-white">{title}</h3>
    </div>
    <p className="text-gray-400 font-[Neue] leading-relaxed mb-6">{description}</p>
    <Button className="text-sm px-6 [&.alternative]:bg-[#2563eb] [&.alternative]:text-white [&.alternative.in:not(.out)]:bg-black [&.alternative.in:not(.out)]:text-[#2563eb]">Learn More</Button>
  </div>
);

const Features = () => {
  return (
    <section className="w-full flex justify-center px-4 py-20 bg-[#111111]">
      <div className="w-full max-w-[1400px] relative">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4">
          {/* Left Column */}
          <div className="flex flex-col gap-8 self-start">
            <FeatureCard
              icon="node"
              title="Lightweight Node Participation"
              description="Run a ValidNet node on desktop or Docker with no special hardware required. Any computer can contribute a computer to validate AI outputs."
              className="translate-x-16"
            />
            <FeatureCard
              icon="anchor"
              title="Memory Anchors"
              description="Modular, reusable templates that define how AI outputs are verified. Users can create, trade, and earn from anchors used in tasks."
            />
            <FeatureCard
              icon="transparency"
              title="On-Chain Transparency"
              description="All actions and results are recorded on-chain. Smart contracts handle reward distribution and task coordination automatically."
              className="translate-x-16"
            />
          </div>

          {/* Center Image Container */}
          <div className="flex items-center justify-center">
            <div className="w-[400px] h-[400px] rounded-full bg-[#2563eb] bg-opacity-20 flex items-center justify-center">
              <div className="w-[320px] h-[320px] rounded-full bg-[#1A1A1A] flex items-center justify-center">
                <span className="text-3xl font-[Formula] text-white">AIOZ DePIN</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 self-start items-end">
            <FeatureCard
              icon="proof"
              title="Proof-of-Validation (PoV)"
              description="Each task is verified by multiple nodes. Results are cross-checked and stored on-chain, ensuring reliable and trustless validation."
              className="-translate-x-16"
            />
            <FeatureCard
              icon="builder"
              title="Anchor Builder Tools"
              description="Create custom validation tasks with your own rules and logic. Earn royalties whenever your anchors are used by the network."
            />
            <FeatureCard
              icon="incentive"
              title="Dual-Layer Incentive & Punishment"
              description="Nodes must stake $VAT to participate. Correct results are rewarded based on task pricing, performance, and uptime. Wrong answers = slash the stake. "
              className="-translate-x-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 
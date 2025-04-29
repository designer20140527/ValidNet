'use client';

interface TokenomicsCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const TokenomicsCard = ({ title, children, className = '' }: TokenomicsCardProps) => (
  <div className={`bg-[#ecf1f7] border border-black rounded-2xl p-8 w-full ${className}`}>
    {title && <h3 className="text-2xl font-[Formula] text-black mb-6">{title}</h3>}
    {children}
  </div>
);

const UtilityIcon = ({ type }: { type: string }) => {
  return (
    <svg className="w-5 h-5 text-[#2563eb]" viewBox="0 0 24 24" fill="none">
      {type === 'stake' && (
        <path d="M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12V0L24 6l-4 6v-4zm-4 12v-4H4a2 2 0 01-2-2c0-1.1.9-2 2-2h12v-4l4 6-4 6z" fill="currentColor" />
      )}
      {type === 'earn' && (
        <path d="M12 8V4l8 8-8 8v-4H4V8h8z" fill="currentColor" />
      )}
      {type === 'anchor' && (
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-14a2 2 0 100-4 2 2 0 000 4zm-6 8h12M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      )}
      {type === 'governance' && (
        <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
};

const Tokenomics = () => {
  return (
    <section className="w-full flex justify-center px-4 py-20 bg-[#ecf1f7]">
      <div className="w-full max-w-[1400px]">
        <h2 className="text-4xl font-[Formula] text-black text-center mb-16">Tokenomics</h2>
        <div className="flex flex-col gap-8">
          {/* First Row - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Token Info */}
            <TokenomicsCard>
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="mb-2">
                  <p className="text-[#2563eb] font-[Formula] text-lg mb-1">Token Name</p>
                  <p className="text-4xl font-[Formula] text-black">$VAT</p>
                </div>
                <div>
                  <p className="text-[#2563eb] font-[Formula] text-lg mb-1">Total Supply</p>
                  <p className="text-4xl font-[Formula] text-black">1,000,000,000</p>
                </div>
              </div>
            </TokenomicsCard>

            {/* Token Allocation */}
            <TokenomicsCard title="Token Allocation">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-black font-[Neue]">Fair Launch</span>
                  <span className="text-[#2563eb] font-[Formula]">60%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-black font-[Neue]">Validator Rewards</span>
                  <span className="text-[#2563eb] font-[Formula]">20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-black font-[Neue]">Ecosystem & Partnerships</span>
                  <span className="text-[#2563eb] font-[Formula]">10%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-black font-[Neue]">Team & Development</span>
                  <span className="text-[#2563eb] font-[Formula]">5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-black font-[Neue]">Advisors & Early Supporters</span>
                  <span className="text-[#2563eb] font-[Formula]">5%</span>
                </div>
              </div>
            </TokenomicsCard>
          </div>

          {/* Second Row - Full width */}
          <TokenomicsCard>
            <div>
              <h3 className="text-2xl font-[Formula] text-black px-8 -mx-8">Utility</h3>
              <div className="h-px bg-black my-6 -mx-8" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <UtilityIcon type="stake" />
                      <p className="text-[#2563eb] font-[Formula]">Stake to Validate</p>
                    </div>
                    <p className="text-black font-[Neue]">Nodes must stake $VAT to participate in verification tasks.</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <UtilityIcon type="earn" />
                      <p className="text-[#2563eb] font-[Formula]">Earn Rewards</p>
                    </div>
                    <p className="text-black font-[Neue]">Validators are rewarded for accurate contributions based on performance.</p>
                  </div>
                </div>
                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <UtilityIcon type="anchor" />
                      <p className="text-[#2563eb] font-[Formula]">Anchor Economy</p>
                    </div>
                    <p className="text-black font-[Neue]">Create and monetize validation templates (Memory Anchors).</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <UtilityIcon type="governance" />
                      <p className="text-[#2563eb] font-[Formula]">Governance</p>
                    </div>
                    <p className="text-black font-[Neue]">$VAT holders can vote on protocol upgrades and economic parameters.</p>
                  </div>
                </div>
              </div>
            </div>
          </TokenomicsCard>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics; 
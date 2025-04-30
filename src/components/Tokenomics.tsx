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
        <g>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="12" cy="12" r="6.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
          <path d="M12 7v2M12 15v2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 12h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      )}
      {type === 'anchor' && (
        <g>
          <path d="M12 2L4 6V12C4 16.42 7.28 20.44 12 22C16.72 20.44 20 16.42 20 12V6L12 2Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M12 22V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </g>
      )}
      {type === 'governance' && (
        <g>
          <path d="M2 6H22M12 2V10M12 10L16 6M12 10L8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="4" y="12" width="16" height="10" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M10 16.5L11.5 18L14 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
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
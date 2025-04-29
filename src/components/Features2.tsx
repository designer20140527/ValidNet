'use client';

import Image from 'next/image';

interface FeatureItemProps {
  title: string;
  isLast?: boolean;
}

const Features2 = () => {
  const items = [
    "Fixes AI Hallucination & Inconsistency Problems",
    "Staking-backed Security Prevents Malicious Validators",
    "Efficient Resource Matching - No Wasted Compute",
    "On-Chain Provenance for Every Output",
    "Composable & Monetizable Validation Templates (Anchors)",
    "Permissionless Participation — Run Nodes, Build Anchors, Earn"
  ];

  return (
    <section className="w-full flex justify-center px-4 py-20 bg-[#111111]">
      <div className="w-full max-w-[1400px]">
        <div className="bg-[#ecf1f7] border border-black rounded-2xl overflow-hidden">
          <div className="grid grid-cols-[1fr_1px_1fr]">
            {/* Left Column - Features List */}
            <div className="relative">
              <div className="grid grid-rows-6">
                {items.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="p-8 h-full flex items-center">
                      <h3 className="text-lg font-[Formula] text-black">{item}</h3>
                    </div>
                    {index < items.length - 1 && (
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-black" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Center Divider */}
            <div className="bg-black h-full"></div>

            {/* Right Column - Image Container */}
            <div className="p-8 flex items-center justify-center">
              <div className="w-full h-[400px] flex items-center justify-center overflow-visible">
                <Image 
                  src="/image-2.png" 
                  alt="ValidNet Features" 
                  width={500} 
                  height={400}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features2; 
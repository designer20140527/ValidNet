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
          {/* 手机版布局 - 上下结构 */}
          <div className="flex flex-col sm:hidden">
            {/* 上部图像容器 */}
            <div className="px-4 py-6 flex items-center justify-center border-b border-black">
              <div className="w-full h-[240px] flex items-center justify-center">
                <Image 
                  src="/image-2.png" 
                  alt="ValidNet Features" 
                  width={280} 
                  height={240}
                  style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}
                  className="object-contain"
                />
              </div>
            </div>
            
            {/* 下部功能列表 */}
            <div className="relative pt-2">
              <div className="flex flex-col">
                {items.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="p-5 flex items-center">
                      <h3 className="text-sm sm:text-base md:text-lg font-[Formula] text-black">{item}</h3>
                    </div>
                    {index < items.length - 1 && (
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-black" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* 原始布局 - 左右结构（平板和桌面） */}
          <div className="hidden sm:grid grid-cols-[1fr_1px_1fr]">
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
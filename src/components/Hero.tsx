'use client';

import Button from './Button';
import { World } from './ui/globe';
import arcsData from './data/arc-data';

const Hero = () => {
  return (
    <section className="w-full h-screen flex justify-center px-4 bg-[#ecf1f7] overflow-visible">
      <div className="w-full max-w-[1400px] flex gap-8 items-center overflow-visible pt-20 md:flex-row md:flex-wrap xl:flex-nowrap">
        {/* Left Content */}
        <div className="flex-1 z-10 relative">
          <h1 className="text-8xl md:text-5xl xl:text-8xl font-[Formula] mb-4 leading-tight">Welcome to ValidNet</h1>
          <div className="flex gap-2 mb-8">
            <span className="text-4xl md:text-2xl xl:text-4xl font-[Formula] text-gray-900">Build Trust.</span>
            <span className="text-4xl md:text-2xl xl:text-4xl font-[Formula] text-blue-600">Validate Intelligence.</span>
          </div>
          <p className="text-lg md:text-base xl:text-lg font-[Neue] text-gray-700 max-w-[600px] leading-relaxed mb-8">
            In a world where AI outputs are increasingly powerful but often unreliable, ValidNet offers a trustless solution to validate and verify AI-generated content using decentralized computation, smart contracts, and staking-based security. We are building the foundational layer of truth for the AI era.
          </p>
          <Button>Gitbook</Button>
        </div>
        
        {/* Right Content - Globe */}
        <div className="flex-1 flex items-center justify-center overflow-visible" style={{ position: 'relative', height: '600px' }}>
          <div style={{ 
            position: 'absolute', 
            width: '1400px', 
            height: '1400px', 
            left: '80%', 
            top: '50%', 
            transform: 'translate(-50%, -50%)',
            zIndex: 0
          }}
          className="md:!w-[800px] md:!h-[800px] xl:!w-[1400px] xl:!h-[1400px]"
          >
            <World 
              globeConfig={{
                globeColor: "#1d072e",
                ambientLight: "#ffffff",
                directionalLeftLight: "#ffffff",
                directionalTopLight: "#ffffff", 
                pointLight: "#ffffff",
                atmosphereColor: "#1e90ff",
                emissive: "#220033"
              }} 
              data={arcsData} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
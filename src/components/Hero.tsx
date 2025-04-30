'use client';

import Button from './Button';
import { World } from './ui/globe';
import arcsData from './data/arc-data';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="w-full h-screen flex justify-center px-4 bg-[#ecf1f7] overflow-visible">
      <div className="w-full max-w-[1400px] flex gap-8 items-center overflow-visible pt-20 flex-col-reverse md:flex-row md:flex-wrap xl:flex-nowrap">
        {/* Left Content */}
        <div className="flex-1 z-10 relative sm:mt-16 md:mt-0">
          <h1 
            className={`text-4xl sm:text-5xl md:text-5xl xl:text-8xl font-[Formula] mb-4 leading-tight text-center md:text-left transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Welcome to ValidNet
          </h1>
          <div 
            className={`flex gap-2 mb-4 md:mb-8 justify-center md:justify-start transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <span className="text-xl sm:text-2xl md:text-2xl xl:text-4xl font-[Formula] text-gray-900">Build Trust.</span>
            <span className="text-xl sm:text-2xl md:text-2xl xl:text-4xl font-[Formula] text-blue-600">Validate Intelligence.</span>
          </div>
          <p 
            className={`text-sm sm:text-base md:text-base xl:text-lg font-[Neue] text-gray-700 max-w-[600px] leading-relaxed mb-6 md:mb-8 text-center md:text-left mx-auto md:mx-0 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            In a world where AI outputs are increasingly powerful but often unreliable, ValidNet offers a trustless solution to validate and verify AI-generated content using decentralized computation, smart contracts, and staking-based security. We are building the foundational layer of truth for the AI era.
          </p>
          <div 
            className={`flex justify-center md:justify-start transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <Button href="https://validnet.gitbook.io/docs" target="_blank">Gitbook</Button>
          </div>
        </div>
        
        {/* Right Content - Globe */}
        <div className="flex-1 flex items-center justify-center overflow-visible" style={{ position: 'relative', height: '320px', maxHeight: '40vh', width: '100%', marginBottom: '30px' }}>
          <div style={{ 
            position: 'absolute', 
            width: '600px', 
            height: '600px', 
            left: '50%', 
            top: '50%', 
            transform: 'translate(-50%, -50%)',
            zIndex: 0
          }}
          className="sm:!w-[650px] sm:!h-[650px] md:!w-[900px] md:!h-[900px] xl:!w-[1500px] xl:!h-[1500px] md:!left-[80%]"
          >
            <World 
              globeConfig={{
                globeColor: "#1d072e",
                ambientLight: "#ffffff",
                directionalLeftLight: "#ffffff",
                directionalTopLight: "#ffffff", 
                pointLight: "#ffffff",
                atmosphereColor: "#1e90ff",
                emissive: "#220033",
                emissiveIntensity: 0.15,
                atmosphereAltitude: 0.1
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
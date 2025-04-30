'use client';

import Button from './Button';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
  icon?: string;
  delay?: number;
}

const FeatureCard = ({ title, description, className = '', icon, delay = 0 }: FeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          if (cardRef.current) observer.unobserve(cardRef.current);
        }
      });
    }, { threshold: 0.2 });
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [delay]);
  
  return (
    <div 
      ref={cardRef}
      className={`features-card bg-[#1A1A1A] rounded-2xl p-8 w-full sm:w-[440px] md:w-[320px] xl:w-[440px] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 flex items-center justify-center shrink-0">
          <svg className="w-8 h-8 text-[#2563eb]" viewBox="0 0 24 24" fill="none">
            {icon === 'node' && (
              <g transform="scale(1.7)" fill="currentColor">
                <path fill-rule="evenodd" d="M10.375 0.375C9.75368 0.375 9.25 0.87868 9.25 1.5V4c0 0.61809 0.49846 1.11976 1.1153 1.12496L9.82684 6.875H8.5c-0.18526 0 -0.36006 0.04478 -0.51417 0.12411L6.625 5.8857V3.5c0 -0.62132 -0.50368 -1.125 -1.125 -1.125H3c-0.62132 0 -1.125 0.50368 -1.125 1.125V6c0 0.57655 0.43371 1.05181 0.99267 1.1173L2.32684 8.875H1.125C0.50368 8.875 0 9.37868 0 10v2.5c0 0.6213 0.50368 1.125 1.125 1.125h2.5c0.62132 0 1.125 -0.5037 1.125 -1.125V10c0 -0.6181 -0.49847 -1.11977 -1.11534 -1.12496L4.17314 7.125H5.5c0.18523 0 0.36 -0.04476 0.51409 -0.12406L7.375 8.11441V10.5c0 0.6213 0.50368 1.125 1.125 1.125H11c0.6213 0 1.125 -0.5037 1.125 -1.125V8c0 -0.57656 -0.4337 -1.05182 -0.9927 -1.1173l0.5408 -1.7577h1.2019C13.4963 5.125 14 4.62132 14 4V1.5c0 -0.62132 -0.5037 -1.125 -1.125 -1.125h-2.5Zm-0.1007 7.75c0.0096 0.00022 0.0192 0.00022 0.0287 0h0.572v2.25h-2.25v-2.25h1.6493Zm-7.4713 2c-0.00953 0.0002 -0.0191 0.0002 -0.02868 0H1.25v2.25H3.5v-2.25h-0.697Z" clip-rule="evenodd" />
              </g>
            )}
            {icon === 'anchor' && (
              <g transform="scale(1.7)" fill="currentColor">
                <path fill-rule="evenodd" d="M4.66515 0.979874c-1.59836 0 -2.90081 1.266986 -2.95782 2.851436C0.690751 4.62493 -0.000976562 5.67789 -0.000976562 7.17822c0 1.14978 0.417839562 1.92544 1.033416562 2.65329 0.05722 1.77069 1.51061 3.18869 3.2953 3.18869 1.09943 0 2.07318 -0.5381 2.67223 -1.3654 0.59905 0.8273 1.5728 1.3654 2.67223 1.3654 1.7847 0 3.2381 -1.418 3.2953 -3.18869 0.6156 -0.72785 1.0334 -1.50351 1.0334 -2.65329 0 -1.50033 -0.6917 -2.55329 -1.7083 -3.34691 -0.057 -1.58445 -1.3594 -2.851436 -2.95781 -2.851436 -0.94871 0 -1.79317 0.446356 -2.33482 1.140526C6.45832 1.42623 5.61386 0.979874 4.66515 0.979874ZM2.95539 3.93964c0 -0.94428 0.76549 -1.70977 1.70976 -1.70977 0.94428 0 1.70977 0.76549 1.70977 1.70977L6.3749 5.86218c-0.01634 0.18969 -0.12495 0.5874 -0.37436 0.9511 -0.24716 0.36041 -0.5905 0.63058 -1.0611 0.68311 -0.34305 0.03828 -0.59011 0.34742 -0.55182 0.69047 0.03829 0.34304 0.34742 0.5901 0.69047 0.55181 0.52263 -0.05833 0.9519 -0.25669 1.29679 -0.52008l-0.00002 1.50447c0 1.13064 -0.91653 2.04714 -2.04712 2.04714 -1.13057 0 -2.04705 -0.9165 -2.04705 -2.04714v-0.01897c0.03552 -0.18671 0.10725 -0.405 0.20408 -0.60191 0.10425 -0.21201 0.21058 -0.34444 0.28194 -0.40079 0.27091 -0.21391 0.31712 -0.60693 0.10321 -0.87784 -0.2139 -0.2709 -0.60692 -0.31711 -0.87783 -0.10321 -0.20146 0.15908 -0.36585 0.36999 -0.49611 0.58611 -0.16475 -0.33285 -0.24696 -0.68703 -0.24696 -1.12823 0 -0.81621 0.27799 -1.44107 0.79088 -1.97254 0.11125 0.19263 0.24112 0.3595 0.37708 0.50063 0.31738 0.32945 0.70034 0.55146 1.01423 0.62302 0.33654 0.07673 0.67156 -0.1339 0.74829 -0.47044 0.07672 -0.33654 -0.1339 -0.67156 -0.47044 -0.74829 0.00019 0.00005 0.00017 0.00004 -0.00006 -0.00003 -0.00171 -0.00047 -0.01474 -0.00408 -0.03865 -0.01436 -0.02603 -0.0112 -0.05951 -0.02798 -0.0983 -0.05142 -0.07802 -0.04717 -0.16797 -0.11554 -0.25484 -0.20572 -0.16957 -0.17602 -0.31945 -0.42569 -0.36182 -0.76147v-0.13796Zm5.96646 4.79903c-0.52263 -0.05833 -0.9519 -0.25669 -1.29679 -0.52008l0.00002 1.50447c0 1.13064 0.91653 2.04714 2.04712 2.04714 1.1306 0 2.047 -0.9165 2.047 -2.04714v-0.01897c-0.0355 -0.18671 -0.1072 -0.405 -0.204 -0.60191 -0.1043 -0.21201 -0.2106 -0.34444 -0.282 -0.40079 -0.2709 -0.21391 -0.3171 -0.60693 -0.1032 -0.87784 0.2139 -0.2709 0.6069 -0.31711 0.8779 -0.10321 0.2014 0.15908 0.3658 0.36999 0.4961 0.58611 0.1647 -0.33285 0.2469 -0.68703 0.2469 -1.12823 0 -0.81617 -0.2779 -1.44101 -0.7908 -1.97246 -0.1112 0.19259 -0.2411 0.35944 -0.377 0.50055 -0.3174 0.32945 -0.7004 0.55146 -1.0142 0.62302 -0.3366 0.07673 -0.67161 -0.1339 -0.74833 -0.47044 -0.07673 -0.33654 0.13389 -0.67156 0.47043 -0.74829l0.0001 -0.00002 0 -0.00001c0.0017 -0.00047 0.0147 -0.00408 0.0386 -0.01436 0.026 -0.0112 0.0595 -0.02798 0.0983 -0.05142 0.078 -0.04717 0.168 -0.11554 0.2549 -0.20572 0.1694 -0.17585 0.3191 -0.42521 0.3617 -0.7605v-0.13893c0 -0.94428 -0.7655 -1.70977 -1.70981 -1.70977 -0.94428 0 -1.70977 0.76549 -1.70977 1.70977l0.00002 1.92255c0.01634 0.1897 0.12495 0.58739 0.37436 0.95109 0.24716 0.36041 0.5905 0.63058 1.0611 0.68311 0.34305 0.03828 0.59011 0.34742 0.55182 0.69047 -0.03829 0.34304 -0.34742 0.5901 -0.69047 0.55181Z" clip-rule="evenodd" />
              </g>
            )}
            {icon === 'transparency' && (
              <g transform="scale(1.7)" fill="currentColor">
                <path fill-rule="evenodd" d="M2 0.375C1.10254 0.375 0.375 1.10254 0.375 2v2.67544c0 4.04599 2.589 7.63806 6.42736 8.91746 0.12829 0.0428 0.26699 0.0428 0.39528 0C11.036 12.3135 13.625 8.72143 13.625 4.67544V2c0 -0.89746 -0.7275 -1.625 -1.625 -1.625H2ZM1.625 2c0 -0.20711 0.16789 -0.375 0.375 -0.375h10c0.2071 0 0.375 0.16789 0.375 0.375v2.67544c0 3.43805 -2.1562 6.49806 -5.375 7.66296 -3.21885 -1.1649 -5.375 -4.22491 -5.375 -7.66296V2Zm8.9356 2.49827c0.2751 -0.30958 0.2473 -0.78364 -0.0623 -1.05883 -0.3096 -0.27519 -0.78367 -0.2473 -1.05886 0.06229L5.89792 7.48594 4.45 6.4c-0.33137 -0.24853 -0.80147 -0.18137 -1.05 0.15 -0.24853 0.33137 -0.18137 0.80147 0.15 1.05l2 1.5c0.31205 0.23404 0.75141 0.18981 1.01056 -0.10173l4.00004 -4.5Z" clip-rule="evenodd" />
              </g>
            )}
            {icon === 'proof' && (
              <g transform="scale(1.7)" fill="currentColor">
                <path fill-rule="evenodd" d="M6.5 1.25c-2.8995 0 -5.25 2.3505 -5.25 5.25s2.3505 5.25 5.25 5.25 5.25 -2.3505 5.25 -5.25S9.3995 1.25 6.5 1.25ZM0 6.5C0 2.91015 2.91015 0 6.5 0 10.0899 0 13 2.91015 13 6.5c0 1.43417 -0.4645 2.75985 -1.2512 3.8348l1.9583 1.9583c0.3905 0.3906 0.3905 1.0237 0 1.4142 -0.3905 0.3906 -1.0237 0.3906 -1.4142 0l-1.9584 -1.9583C9.25962 12.5356 7.93404 13 6.5 13 2.91015 13 0 10.0899 0 6.5Zm5.78033 -1.46967c0.29289 -0.29289 0.29289 -0.76777 0 -1.06066s-0.76777 -0.29289 -1.06066 0l-2 2c-0.29289 0.29289 -0.29289 0.76777 0 1.06066l2 2c0.29289 0.29289 0.76777 0.29289 1.06066 0s0.29289 -0.76777 0 -1.06066L4.31066 6.5l1.46967 -1.46967Zm2.5 -1.06066c-0.29289 -0.29289 -0.76777 -0.29289 -1.06066 0s-0.29289 0.76777 0 1.06066L8.68934 6.5 7.21967 7.96967c-0.29289 0.29289 -0.29289 0.76777 0 1.06066s0.76777 0.29289 1.06066 0l1.99997 -2c0.2929 -0.29289 0.2929 -0.76777 0 -1.06066l-1.99997 -2Z" clip-rule="evenodd" />
              </g>
            )}
            {icon === 'builder' && (
              <g transform="scale(1.7)">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M13.2844 3.72131c-0.0193 -0.1048 -0.0605 -0.20436 -0.1208 -0.29222 -0.0603 -0.08786 -0.1384 -0.16206 -0.2292 -0.21778l-2 2c-0.0933 0.09678 -0.2051 0.17376 -0.3288 0.22634 -0.1238 0.05258 -0.2568 0.07968 -0.3912 0.07968 -0.1344 0 -0.26748 -0.0271 -0.39119 -0.07968 -0.12371 -0.05258 -0.23554 -0.12956 -0.32883 -0.22634l-0.76 -0.68c-0.18322 -0.18693 -0.28585 -0.43825 -0.28585 -0.7s0.10263 -0.51307 0.28585 -0.7l2.00002 -2c-0.0436 -0.10246 -0.1092 -0.19409 -0.1922 -0.268396 -0.0829 -0.074305 -0.1812 -0.129475 -0.2878 -0.161605 -0.69784 -0.13916 -1.42072 -0.079592 -2.08635 0.171923 -0.66564 0.251518 -1.24728 0.684868 -1.6787 1.250728 -0.43143 0.56586 -0.69531 1.24148 -0.7616 1.94996 -0.0621 0.66366 0.05152 1.33116 0.32833 1.93579L0.939379 11.1264c-0.396169 0.3962 -0.389599 1.0405 0.014566 1.4285l0.560775 0.5384c0.39115 0.3755 1.0103 0.3708 1.39579 -0.0105l5.17832 -5.11953c0.58713 0.24247 1.22667 0.3347 1.8604 0.26676 0.70077 -0.07512 1.36697 -0.34313 1.92447 -0.77424 0.5575 -0.4311 0.9846 -1.00839 1.2336 -1.66769 0.249 -0.65929 0.3103 -1.37474 0.1771 -2.06679Z" />
              </g>
            )}
            {icon === 'incentive' && (
              <g transform="scale(1.7)" fill="currentColor">
                <path fill-rule="evenodd" d="M1 0.375C0.654822 0.375 0.375 0.654822 0.375 1v3c0 1.62517 1.24058 2.96059 2.8264 3.11092 0.51707 1.21774 1.6026 2.13577 2.9236 2.42109V12.125H4.5c-0.48325 0 -0.875 0.3918 -0.875 0.875s0.39175 0.875 0.875 0.875h5c0.48325 0 0.875 -0.3918 0.875 -0.875s-0.39175 -0.875 -0.875 -0.875H7.875V9.53201c1.321 -0.28532 2.4065 -1.20335 2.9236 -2.42109C12.3844 6.9606 13.625 5.62517 13.625 4V1c0 -0.345178 -0.2798 -0.625 -0.625 -0.625H1Zm3.125 1.25V5.5c0 1.58782 1.28718 2.875 2.875 2.875S9.875 7.08782 9.875 5.5V1.625h-5.75Zm-1.25 0h-1.25V4c0 0.81639 0.52175 1.51091 1.25 1.76831V1.625Zm8.25 0v4.14331c0.7282 -0.2574 1.25 -0.95192 1.25 -1.76831V1.625h-1.25Z" clip-rule="evenodd" />
              </g>
            )}
          </svg>
        </div>
        <h3 className="text-xl sm:text-2xl md:text-xl xl:text-2xl font-[Formula] text-white">{title}</h3>
      </div>
      <p className="text-sm sm:text-base md:text-sm xl:text-base font-[Neue] text-gray-400 leading-relaxed mb-6">{description}</p>
      <div className="relative">
        <Button 
          href="https://validnet.gitbook.io/docs" 
          target="_blank" 
          variant="alternative"
          className="text-xs sm:text-sm px-6"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="w-full flex justify-center px-4 py-20 bg-[#111111]">
      <div className="w-full max-w-[1400px] relative">
        {/* Mobile layout - Only show on mobile */}
        <div className="block sm:hidden">
          <div className="flex flex-col items-center mb-10">
            <div className="relative w-[250px] h-[250px] flex items-center justify-center overflow-visible mb-6">
              <div className="absolute animate-float">
                <Image 
                  src="/image-1.png" 
                  alt="ValidNet Core Features" 
                  width={300} 
                  height={300}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className="text-3xl font-[Formula] text-white z-10">Core Features</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <FeatureCard
              icon="node"
              title="Lightweight Node Participation"
              description="Run a ValidNet node on desktop or Docker with no special hardware required. Any computer can contribute a computer to validate AI outputs."
              delay={100}
            />
            <FeatureCard
              icon="anchor"
              title="Memory Anchors"
              description="Modular, reusable templates that define how AI outputs are verified. Users can create, trade, and earn from anchors used in tasks."
              delay={200}
            />
            <FeatureCard
              icon="transparency"
              title="On-Chain Transparency"
              description="All actions and results are recorded on-chain. Smart contracts handle reward distribution and task coordination automatically."
              delay={300}
            />
            <FeatureCard
              icon="proof"
              title="Proof-of-Validation (PoV)"
              description="Each task is verified by multiple nodes. Results are cross-checked and stored on-chain, ensuring reliable and trustless validation."
              delay={400}
            />
            <FeatureCard
              icon="builder"
              title="Anchor Builder Tools"
              description="Create custom validation tasks with your own rules and logic. Earn royalties whenever your anchors are used by the network."
              delay={500}
            />
            <FeatureCard
              icon="incentive"
              title="Dual-Layer Incentive & Punishment"
              description="Nodes must stake $VAT to participate. Correct results are rewarded based on task pricing, performance, and uptime. Wrong answers = slash the stake. "
              delay={600}
            />
          </div>
        </div>

        {/* Original layout - iPads and desktop */}
        <div className="hidden sm:grid grid-cols-[1fr_auto_1fr] md:grid-cols-1 xl:grid-cols-[1fr_auto_1fr] gap-4">
          {/* Center Image - For iPad, show at top */}
          <div className="hidden md:flex md:col-span-1 xl:hidden items-center justify-center mb-12">
            <div className="relative w-[400px] h-[400px] flex items-center justify-center overflow-visible">
              <div className="absolute animate-float">
                <Image 
                  src="/image-1.png" 
                  alt="ValidNet Core Features" 
                  width={500} 
                  height={500}
                  style={{ objectFit: 'contain' }}
                  className="max-w-[350px]"
                />
              </div>
              <span className="text-4xl font-[Formula] text-white z-10">Core Features</span>
            </div>
          </div>

          {/* Features grid for iPad - 3 items per row */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-4 md:col-span-1 xl:hidden">
            <FeatureCard
              icon="node"
              title="Lightweight Node Participation"
              description="Run a ValidNet node on desktop or Docker with no special hardware required. Any computer can contribute a computer to validate AI outputs."
              className="md:w-full"
              delay={100}
            />
            <FeatureCard
              icon="anchor"
              title="Memory Anchors"
              description="Modular, reusable templates that define how AI outputs are verified. Users can create, trade, and earn from anchors used in tasks."
              className="md:w-full"
              delay={200}
            />
            <FeatureCard
              icon="transparency"
              title="On-Chain Transparency"
              description="All actions and results are recorded on-chain. Smart contracts handle reward distribution and task coordination automatically."
              className="md:w-full"
              delay={300}
            />
            <FeatureCard
              icon="proof"
              title="Proof-of-Validation (PoV)"
              description="Each task is verified by multiple nodes. Results are cross-checked and stored on-chain, ensuring reliable and trustless validation."
              className="md:w-full"
              delay={400}
            />
            <FeatureCard
              icon="builder"
              title="Anchor Builder Tools"
              description="Create custom validation tasks with your own rules and logic. Earn royalties whenever your anchors are used by the network."
              className="md:w-full"
              delay={500}
            />
            <FeatureCard
              icon="incentive"
              title="Dual-Layer Incentive & Punishment"
              description="Nodes must stake $VAT to participate. Correct results are rewarded based on task pricing, performance, and uptime. Wrong answers = slash the stake. "
              className="md:w-full"
              delay={600}
            />
          </div>

          {/* Original Desktop Layout - Only show on desktop */}
          <div className="flex flex-col gap-12 self-start xl:block md:hidden">
            <FeatureCard
              icon="node"
              title="Lightweight Node Participation"
              description="Run a ValidNet node on desktop or Docker with no special hardware required. Any computer can contribute a computer to validate AI outputs."
              className="translate-x-16 mb-12"
              delay={100}
            />
            <FeatureCard
              icon="anchor"
              title="Memory Anchors"
              description="Modular, reusable templates that define how AI outputs are verified. Users can create, trade, and earn from anchors used in tasks."
              className="mb-12"
              delay={300}
            />
            <FeatureCard
              icon="transparency"
              title="On-Chain Transparency"
              description="All actions and results are recorded on-chain. Smart contracts handle reward distribution and task coordination automatically."
              className="translate-x-16"
              delay={500}
            />
          </div>

          {/* Center Image Container - Only show on desktop */}
          <div className="flex items-center justify-center h-full xl:flex md:hidden">
            <div className="relative w-[500px] h-[500px] flex items-center justify-center overflow-visible">
              <div className="absolute animate-float">
                <Image 
                  src="/image-1.png" 
                  alt="ValidNet Core Features" 
                  width={500} 
                  height={500}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className="text-5xl font-[Formula] text-white z-10">Core Features</span>
            </div>
          </div>

          {/* Right Column - Only show on desktop */}
          <div className="flex flex-col gap-12 self-start items-end xl:block md:hidden">
            <FeatureCard
              icon="proof"
              title="Proof-of-Validation (PoV)"
              description="Each task is verified by multiple nodes. Results are cross-checked and stored on-chain, ensuring reliable and trustless validation."
              className="-translate-x-16 mb-12"
              delay={200}
            />
            <FeatureCard
              icon="builder"
              title="Anchor Builder Tools"
              description="Create custom validation tasks with your own rules and logic. Earn royalties whenever your anchors are used by the network."
              className="mb-12"
              delay={400}
            />
            <FeatureCard
              icon="incentive"
              title="Dual-Layer Incentive & Punishment"
              description="Nodes must stake $VAT to participate. Correct results are rewarded based on task pricing, performance, and uptime. Wrong answers = slash the stake. "
              className="-translate-x-16"
              delay={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 
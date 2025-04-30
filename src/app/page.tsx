import Header from '@/components/Header/Header';
import MobileHeader from '@/components/Header/MobileHeader';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Tokenomics from '@/components/Tokenomics';
import Features2 from '@/components/Features2';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ecf1f7] overflow-visible">
      <Header />
      <MobileHeader />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="tokenomics">
        <Tokenomics />
      </div>
      <div id="advantages">
        <Features2 />
      </div>
      <div className="bg-[#111111]">
        <div id="faq">
          <FAQ />
        </div>
        <Footer />
      </div>
    </div>
  );
}

import Header from '@/components/Header/Header';
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
      <div className="pt-28">
        <Hero />
        <Features />
        <Tokenomics />
        <Features2 />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

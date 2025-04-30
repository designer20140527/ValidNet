'use client';

import { useState } from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  isLast?: boolean;
}

const AccordionItem = ({ question, answer, isOpen, onClick, isLast }: AccordionItemProps) => {
  return (
    <div className="relative">
      <div>
        <button
          className="flex justify-between items-center w-full py-8 text-left"
          onClick={onClick}
        >
          <h3 className="text-base sm:text-xl font-[Formula] text-white">{question}</h3>
          <svg
            className={`w-5 h-5 sm:w-6 sm:h-6 text-[#2563eb] transform transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-xs sm:text-base text-gray-400 font-[Neue] leading-relaxed mt-0 mb-8">{answer}</p>
      </div>
      
      {!isLast && (
        <div className="absolute left-0 right-0 h-px bg-[#2a2a2a] -mx-8" style={{ 
          bottom: 0,
          transition: 'transform 0.3s ease-in-out',
        }} />
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqItems = [
    {
      question: 'What is ValidNet?',
      answer:
        'ValidNet is a decentralized AI validation network that leverages user-run nodes, Memory Anchors, and staking to verify AI outputs in a transparent and trustless way.',
    },
    {
      question: 'How can I participate in the ValidNet network?',
      answer:
        'You can participate by running a lightweight ValidNet node (desktop app or Docker), staking $VAT tokens, and contributing compute power to validate AI-generated outputs.',
    },
    {
      question: 'What are Memory Anchors?',
      answer:
        'Memory Anchors are reusable, on-chain templates that define validation rules. Anyone can create, trade, and monetize them for use in AI output verification tasks.',
    },
    {
      question: 'How does the validation process work?',
      answer:
        'Each task is assigned to multiple validators. Their results are cross-verified using a Proof-of-Validation (PoV) mechanism, with outcomes stored on-chain for full transparency.',
    },
    {
      question: 'What is the role of staking in ValidNet?',
      answer:
        'Validators must stake $VAT tokens to receive tasks. Accurate work earns rewards, while incorrect or malicious behavior leads to slashing of the stake.',
    },
    {
      question: 'What can I do with $VAT tokens?',
      answer:
        '$VAT tokens are used for staking, earning validator rewards, creating and deploying Memory Anchors, and participating in governance decisions.',
    },
  ];

  return (
    <section className="w-full flex justify-center px-4 py-20 bg-[#111111] relative">
      <div className="w-full max-w-[1400px] relative" style={{ zIndex: 10 }}>
        <h2 className="text-3xl sm:text-4xl font-[Formula] text-white text-center mb-12">FAQ</h2>
        <div className="bg-[#1A1A1A] rounded-2xl px-6 sm:px-8">
          <div className="space-y-0">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={index === openIndex}
                onClick={() => toggleAccordion(index)}
                isLast={index === faqItems.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 
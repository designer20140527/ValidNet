'use client';

import Image from 'next/image';
import Link from 'next/link';

const MobileHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ecf1f7] border-b border-black sm:hidden w-screen">
      <div className="px-4 py-3 flex items-center justify-between max-w-full">
        {/* Logo and Website Name */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-black.png"
            alt="ValidNet Logo"
            width={30}
            height={30}
            className="h-7 w-auto"
          />
          <span className="text-base font-[Formula] text-gray-900">ValidNet</span>
        </Link>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {/* Telegram */}
          <a href="https://t.me/ValidNet_Portal" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.37097 0 0 5.37097 0 12C0 18.629 5.37097 24 12 24C18.629 24 24 18.629 24 12C24 5.37097 18.629 0 12 0ZM17.8935 8.22097L15.9194 17.3952C15.7645 18.0581 15.3581 18.2226 14.8064 17.9177L11.8065 15.7016L10.3694 17.0758C10.2 17.2452 10.0548 17.3903 9.72581 17.3903L9.95323 14.3323L15.7403 9.10645C15.9952 8.87904 15.6823 8.75323 15.3403 8.98065L8.14839 13.4612L5.17742 12.4823C4.52903 12.2855 4.51936 11.8258 5.32903 11.5258L17.0613 7.14194C17.6081 6.95323 18.0774 7.29194 17.8935 8.22581V8.22097Z" fill="black"/>
            </svg>
          </a>
          
          {/* Twitter X */}
          <a href="https://x.com/ValidNet_" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.901 1.15298H22.581L14.541 10.343L24 22.846H16.594L10.794 15.562L4.156 22.846H0.474L9.074 13.038L0 1.15398H7.594L12.837 7.85698L18.901 1.15298ZM17.61 20.644H19.649L6.486 3.23998H4.298L17.61 20.644Z" fill="black"/>
            </svg>
          </a>
          
          {/* Dextools */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center">
            <Image 
              src="/dextools.svg"
              alt="Dextools"
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </a>
          
          {/* Dexscreener */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center">
            <Image 
              src="/dexscreener.svg"
              alt="Dexscreener"
              width={20}
              height={20}
              className="h-5 w-5 invert"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader; 

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { name: 'DePIN', desc: 'Collaborative Infrastructure' },
    { name: 'AI', desc: 'Compute Economy' },
    { name: 'Stream', desc: 'P2P Content Network' },
    { name: 'Storage', desc: 'S3 Compatible' },
    { name: 'Pin', desc: 'IPFS' },
  ];

  const socialLinks = [
    { name: 'Telegram', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Dextools', url: '#' },
    { name: 'Dex Screener', url: '#' },
  ];

  return (
    <header className="w-full flex justify-center px-4 py-5 fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <div className="w-full max-w-[1400px] bg-[#ecf1f7] rounded-xl border border-black flex items-stretch py-0">
        {/* Logo */}
        <Link href="/" className="px-8 flex items-center">
          <Image
            src="/logo-black.png"
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Divider */}
        <div className="w-px bg-black self-stretch" />

        {/* Menu Items */}
        <nav className="flex-1 flex">
          {menuItems.map((item, index) => (
            <div key={item.name} className="flex items-stretch flex-1">
              {/* 使用覆盖整个区域的hover目标 */}
              <Link
                href="#"
                className="px-4 py-4 hover:bg-black transition-colors w-full flex items-center group"
              >
                <div className="flex flex-col items-center text-center w-full">
                  <span className="text-base font-[Formula] text-gray-900 group-hover:text-blue-600 transition-colors">{item.name}</span>
                  <span className="text-sm font-[Neue] text-gray-500 group-hover:text-blue-400 transition-colors">{item.desc}</span>
                </div>
              </Link>
              {index < menuItems.length - 1 && (
                <div className="w-px bg-black self-stretch" />
              )}
            </div>
          ))}
        </nav>

        {/* Divider */}
        <div className="w-px bg-black self-stretch" />

        {/* Menu Button */}
        <div className="relative px-8 flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-white hover:bg-opacity-0 rounded-lg transition-colors w-full h-full group overflow-visible"
          >
            <div className="absolute inset-0 hover:bg-black group-hover:bg-black rounded-r-xl transition-colors"></div>
            {isMenuOpen ? (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 group-hover:text-white transition-colors"
              >
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 group-hover:text-white transition-colors"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 top-[calc(100%+10px)] w-48 bg-[#ecf1f7] border border-black rounded-xl shadow-lg py-0 overflow-hidden">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  className="block px-4 py-3 text-base font-[Neue] text-gray-700 hover:bg-black hover:text-blue-600"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 
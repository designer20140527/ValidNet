'use client';
import Image from 'next/image';

const Footer = () => {
  const links = [
    { name: 'Telegram', href: 'https://t.me/ValidNet_Official', target: '_blank' },
    { name: 'Twitter', href: 'https://x.com/ValidNet_', target: '_blank' },
    { name: 'Dextools', href: '#', target: '_blank' },
    { name: 'Dex Screener', href: '#', target: '_blank' },
  ];

  return (
    <footer className="w-full bg-[#111111] text-white py-16 relative">
      {/* 底部背景图 - 全屏宽度，位置底部居中，层级为1 */}
      <div className="absolute bottom-0 left-0 w-full" style={{ zIndex: 1 }}>
        <Image
          src="/bg-bottom.png"
          alt="Background"
          width={1920}
          height={1080}
          className="w-full h-auto opacity-50 pointer-events-none"
          style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
        />
      </div>
      
      {/* 内容 - 确保在背景图之上 */}
      <div className="w-full max-w-[1400px] mx-auto px-4 relative" style={{ zIndex: 10 }}>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-transparent.png"
                alt="ValidNet Logo"
                width={32}
                height={32}
                className="w-auto h-8"
              />
              <h2 className="text-2xl font-[Formula]">ValidNet</h2>
            </div>
            <p className="text-gray-400 font-[Neue] max-w-md">
              A decentralized solution for AI validation, built on transparency and community participation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-[Formula] mb-4">Links</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#2563eb] transition-colors font-[Neue]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2a2a2a] mt-12 pt-8 text-gray-500 font-[Neue] text-sm">
          <p>© 2023 ValidNet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
'use client';

const Footer = () => {
  const links = [
    { name: 'About', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Run a Node', href: '#' },
    { name: 'Developers', href: '#' },
    { name: 'GitHub', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Discord', href: '#' },
  ];

  return (
    <footer className="w-full bg-[#111111] text-white py-16">
      <div className="w-full max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-[Formula] mb-4">ValidNet</h2>
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
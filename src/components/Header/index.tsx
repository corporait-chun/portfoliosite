'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#about" className="text-xl font-bold text-blue-600 dark:text-blue-300" onClick={(e) => handleClick(e, '#about')}>
            Chun
          </a>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex gap-4 items-center">
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleClick(e, href)}
                className={`text-sm cursor-pointer ${
                  pathname === href ? 'text-blue-600 underline' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* モバイルメニューボタン */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              {navItems.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleClick(e, href)}
                  className={`text-sm cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    pathname === href ? 'text-blue-600 font-medium' : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 
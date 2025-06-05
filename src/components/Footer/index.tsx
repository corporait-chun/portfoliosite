'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 会社情報 */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold mb-4">会社情報</h3>
            <p className="text-sm">
              chun<br />
              <br />
              埼玉県さいたま市<br />
            </p>
          </div>

          {/* クイックリンク */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">クイックリンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  利用規約
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Chun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
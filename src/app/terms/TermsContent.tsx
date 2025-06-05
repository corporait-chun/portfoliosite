'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsContent() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Link
            href="/"
            className="inline-block mb-8 text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← ホームに戻る
          </Link>

          <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            利用規約
          </h1>

          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. はじめに</h2>
              <p className="text-gray-600 dark:text-gray-300">
                本規約は、当サイトの利用条件を定めるものです。
                当サイトをご利用いただく際は、本規約に同意いただいたものとみなします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. 禁止事項</h2>
              <p className="text-gray-600 dark:text-gray-300">
                当サイトのご利用に際し、以下の行為を禁止します：
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-600 dark:text-gray-300">
                <li>法令または公序良俗に違反する行為</li>
                <li>当サイトの運営を妨害する行為</li>
                <li>他のユーザーに迷惑をかける行為</li>
                <li>当サイトのコンテンツを無断で複製・改変する行為</li>
                <li>その他、当サイトが不適切と判断する行為</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. 免責事項</h2>
              <p className="text-gray-600 dark:text-gray-300">
                当サイトは、以下の事項について一切の責任を負いません：
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-600 dark:text-gray-300">
                <li>当サイトの利用により生じた損害</li>
                <li>当サイトのコンテンツの正確性、完全性、有用性</li>
                <li>当サイトの利用により得られる情報の適切性</li>
                <li>当サイトの利用に関連して発生したトラブル</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. 知的財産権</h2>
              <p className="text-gray-600 dark:text-gray-300">
                当サイトのコンテンツに関する知的財産権は、当サイトまたは正当な権利者に帰属します。
                無断での複製・改変・転載等は禁止します。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. リンクについて</h2>
              <p className="text-gray-600 dark:text-gray-300">
                当サイトへのリンクは、原則として自由です。
                ただし、以下の場合はリンクを禁止します：
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-600 dark:text-gray-300">
                <li>当サイトのイメージを損なうリンク</li>
                <li>違法なコンテンツを含むサイトからのリンク</li>
                <li>その他、当サイトが不適切と判断するリンク</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. 規約の変更</h2>
              <p className="text-gray-600 dark:text-gray-300">
                当サイトは、必要に応じて本規約を変更することがあります。
                重要な変更がある場合は、サイト上でお知らせいたします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. 準拠法</h2>
              <p className="text-gray-600 dark:text-gray-300">
                本規約の解釈にあたっては、日本法を準拠法とします。
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
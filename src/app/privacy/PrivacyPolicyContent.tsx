'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPolicyContent() {
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
            プライバシーポリシー
          </h1>

          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. 個人情報の収集について</h2>
              <p className="text-gray-600 dark:text-gray-300">
                当サイトでは、お問い合わせやサービス利用の際に、お名前、メールアドレスなどの個人情報をご提供いただく場合があります。
                これらの情報は、お問い合わせへの回答やサービスの提供のために必要な範囲でのみ利用させていただきます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. 個人情報の利用目的</h2>
              <p className="text-gray-600 dark:text-gray-300">
                収集した個人情報は、以下の目的で利用いたします：
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-600 dark:text-gray-300">
                <li>お問い合わせへの回答</li>
                <li>サービスの提供・運営</li>
                <li>サービスの改善・開発</li>
                <li>重要なお知らせの通知</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. 個人情報の管理</h2>
              <p className="text-gray-600 dark:text-gray-300">
                当サイトでは、個人情報の漏洩、滅失、毀損を防止するため、適切なセキュリティ対策を実施しています。
                また、個人情報の取り扱いについては、定期的な見直しと改善を行っています。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. 個人情報の第三者提供</h2>
              <p className="text-gray-600 dark:text-gray-300">
                当サイトでは、以下の場合を除き、個人情報を第三者に提供することはありません：
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-600 dark:text-gray-300">
                <li>ご本人の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. アクセス解析ツールについて</h2>
              <p className="text-gray-600 dark:text-gray-300">
                当サイトでは、Googleアナリティクスを使用してアクセス解析を行っています。
                このツールはCookieを使用しており、個人を特定できる情報は含まれません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. プライバシーポリシーの変更</h2>
              <p className="text-gray-600 dark:text-gray-300">
                当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。
                重要な変更がある場合は、サイト上でお知らせいたします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. お問い合わせ</h2>
              <p className="text-gray-600 dark:text-gray-300">
                本プライバシーポリシーに関するお問い合わせは、お問い合わせフォームよりご連絡ください。
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
'use client';

import { ArrowRightIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import AdSense from '@/components/AdSense';

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <BookOpenIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Blog
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            開発の学びや経験を記録するブログを運営しています。
            <br />
            Web制作の初心者目線での解説や、実際に詰まったエラーの解決方法などを発信しています。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* ブログ記事のプレビューカード */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-slate-700">
            <div className="flex items-center mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-500 dark:text-gray-400">最新記事</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              初心者でもできる！DNS設定の手順
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
              お名前.comで取得したドメインをVercelに接続する手順を、初心者目線で解説します。DNS設定の基本から実際の設定方法まで...
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 dark:text-gray-400">2025/09/14</span>
              <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">
                Webサイト
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              このブログについて
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
              副業でWeb制作を学んでいる初心者の私が、学んだことを整理し、記録し、共有するための場所です...
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 dark:text-gray-400">2025/06/28</span>
              <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-2 py-1 rounded">
                テクノロジー
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-slate-700 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              今後の予定
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              • Next.jsの学習記録<br />
              • microCMSの活用方法<br />
              • エラー解決の実例<br />
              • 便利ツールの紹介
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 dark:text-gray-400">随時更新</span>
              <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-1 rounded">
                予定
              </span>
            </div>
          </div>
        </div>

        {/* AdSense広告ユニット */}
        <div className="flex justify-center mb-8">
          <AdSense 
            adSlot="f08c47fec0942fa0"
            className="max-w-md w-full"
          />
        </div>

        <div className="text-center">
          <a
            href="https://blog.corporatechun.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <BookOpenIcon className="w-5 h-5 mr-2" />
            ブログを読む
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            新しいタブでブログサイトが開きます
          </p>
        </div>
      </div>
    </section>
  );
}

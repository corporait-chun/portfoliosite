import { ArrowRightIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';
import AdSense from '@/components/AdSense';
import { BlogData } from '@/types/blog';
import { formatDate, getCategoryColor } from '@/lib/blog';

interface BlogProps {
  blogData: BlogData;
}

export default function Blog({ blogData }: BlogProps) {
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
          {blogData.posts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-slate-700"
            >
              {post.isLatest && (
                <div className="flex items-center mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">最新記事</span>
                </div>
              )}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {formatDate(post.publishedAt)}
                </span>
                <span className={`text-xs px-2 py-1 rounded ${getCategoryColor(post.category)}`}>
                  {post.category}
                </span>
              </div>
            </div>
          ))}

          {/* 今後の予定カード */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-slate-700 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              今後の予定
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {blogData.upcomingPosts.map((item, index) => (
                <span key={index}>
                  • {item}
                  {index < blogData.upcomingPosts.length - 1 && <br />}
                </span>
              ))}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 dark:text-gray-400">随時更新</span>
              <span className={`text-xs px-2 py-1 rounded ${getCategoryColor('予定')}`}>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
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
          </div>
          
          {/* SNSリンク */}
          <div className="flex justify-center gap-4 mb-6">
            <a
              href="https://x.com/corporatechun"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-black hover:bg-gray-800 text-white rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
              aria-label="Xでフォロー"
            >
              <XMarkIcon className="w-6 h-6" />
            </a>
            
            <a
              href="https://www.instagram.com/webcreaterchun?igsh=c2hnMG5oMmRhbm0y&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
              aria-label="Instagramでフォロー"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400">
            新しいタブでブログサイトとSNSアカウントが開きます
          </p>
        </div>
      </div>
    </section>
  );
}

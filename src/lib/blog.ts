import { BlogData, BlogPost } from '@/types/blog';

// 実際のブログサイトから記事を取得する関数
// 今回はサンプルデータを使用しますが、実際のRSSフィードやAPIから取得できます
export async function getBlogPosts(): Promise<BlogData> {
  try {
    // 実際の実装では、ここでRSSフィードやAPIからデータを取得
    // 例: const response = await fetch('https://blog.corporatechun.com/rss.xml');
    
    // 現在はサンプルデータを返す
    const posts: BlogPost[] = [
      {
        id: '1',
        title: '初心者でもできる！DNS設定の手順',
        excerpt: 'お名前.comで取得したドメインをVercelに接続する手順を、初心者目線で解説します。DNS設定の基本から実際の設定方法まで...',
        publishedAt: '2025-09-14',
        category: 'Webサイト',
        url: 'https://blog.corporatechun.com/posts/dns-setting-guide',
        isLatest: true
      },
      {
        id: '2',
        title: 'このブログについて',
        excerpt: '副業でWeb制作を学んでいる初心者の私が、学んだことを整理し、記録し、共有するための場所です...',
        publishedAt: '2025-06-28',
        category: 'テクノロジー',
        url: 'https://blog.corporatechun.com/posts/about-this-blog'
      }
    ];

    const upcomingPosts = [
      'Next.jsの学習記録',
      'microCMSの活用方法',
      'エラー解決の実例',
      '便利ツールの紹介'
    ];

    return {
      posts,
      upcomingPosts
    };
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    
    // エラー時はデフォルトデータを返す
    return {
      posts: [
        {
          id: '1',
          title: '初心者でもできる！DNS設定の手順',
          excerpt: 'お名前.comで取得したドメインをVercelに接続する手順を、初心者目線で解説します。DNS設定の基本から実際の設定方法まで...',
          publishedAt: '2025-09-14',
          category: 'Webサイト',
          url: 'https://blog.corporatechun.com/posts/dns-setting-guide',
          isLatest: true
        }
      ],
      upcomingPosts: [
        'Next.jsの学習記録',
        'microCMSの活用方法',
        'エラー解決の実例',
        '便利ツールの紹介'
      ]
    };
  }
}

// 日付をフォーマットする関数
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).replace(/\//g, '/');
}

// カテゴリーの色を取得する関数
export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    'Webサイト': 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    'テクノロジー': 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    '予定': 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
  };
  
  return colors[category] || 'bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400';
}

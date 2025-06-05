import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chun Portfolio | フルスタックエンジニア',
  description: 'フルスタックエンジニアのポートフォリオサイト。React、Next.js、TypeScript、Node.jsなどの技術スタックで、モダンなWebアプリケーションを開発しています。',
  metadataBase: new URL('https://corporaitechun.com'),
  openGraph: {
    title: 'Chun Portfolio | フルスタックエンジニア',
    description: 'フルスタックエンジニアのポートフォリオサイト。React、Next.js、TypeScript、Node.jsなどの技術スタックで、モダンなWebアプリケーションを開発しています。',
    url: 'https://corporaitechun.com',
    siteName: 'Chun Portfolio',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/images/ogp.jpg',
        width: 1200,
        height: 630,
        alt: 'Chun Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chun Portfolio | フルスタックエンジニア',
    description: 'フルスタックエンジニアのポートフォリオサイト。React、Next.js、TypeScript、Node.jsなどの技術スタックで、モダンなWebアプリケーションを開発しています。',
    images: ['/images/ogp.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
  alternates: {
    canonical: 'https://corporaitechun.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 
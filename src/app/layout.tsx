import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Webクリエイターのポートフォリオサイト',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <meta name="google-site-verification" content="eESp3C7wsO_fyWmtx0kbdtAZ1nRZtc3NrzOveAYT8EM" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen w-full flex-col overflow-y-auto">
            <div className="flex-1">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
} 
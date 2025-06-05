'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Waves } from '@/components/ui/waves-background';

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [text, setText] = useState('');
  const fullText = '創って魅せるWeb';
  const { theme } = useTheme();

  useEffect(() => {
    if (inView) setHasAnimated(true);
  }, [inView]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* 波アニメーション背景 */}
      <div className="absolute inset-0 z-0">
        <Waves
          lineColor={theme === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'}
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>
      {/* メインコンテンツ */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6"
        >
          つくって魅せるWeb
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        >
        　Webクリエイター
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#about"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            詳しく見る
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 
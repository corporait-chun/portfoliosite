'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const processes = [
  {
    title: '要件定義',
    description: 'クライアントのニーズを深く理解し、プロジェクトの目標と要件を明確に定義します。',
    icon: '🎯',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: '設計',
    description: 'ユーザー体験を最優先に、システムのアーキテクチャとUI/UXを設計します。',
    icon: '📐',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: '開発',
    description: '最新の技術を活用し、効率的で保守性の高いコードを実装します。',
    icon: '💻',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'テスト',
    description: '品質を確保するため、包括的なテストとデバッグを実施します。',
    icon: '🔍',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    title: 'デプロイ',
    description: 'スムーズなリリースと運用のための最適な環境を構築します。',
    icon: '🚀',
    color: 'from-red-500 to-red-600'
  }
];

const Process = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView) setHasAnimated(true);
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white"
          >
            制作プロセス
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            プロジェクトの成功に向けて、体系的なアプローチで開発を進めます
          </motion.p>

          <div className="relative">
            {/* 接続線 */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 transform -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processes.map((process, index) => (
                <motion.div
                  key={process.title}
                  variants={itemVariants}
                  className="relative h-full"
                >
                  <div className={`bg-gradient-to-br ${process.color} p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 h-full flex flex-col`}>
                    <div className="text-4xl mb-4">{process.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {process.title}
                    </h3>
                    <p className="text-white/90 text-sm flex-grow">
                      {process.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process; 
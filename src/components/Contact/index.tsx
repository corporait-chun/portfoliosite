'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView) setHasAnimated(true);
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      },
    },
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 relative">
      {/* 装飾的な要素 */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 opacity-50" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={hasAnimated ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          >
            お問い合わせ
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-center text-lg">
              お仕事のご依頼やご質問など、お気軽にお問い合わせください。
              できる限り早くご返信いたします。
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <ContactForm />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 text-center"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              その他の連絡方法
            </h3>
                         <div className="space-y-3 text-gray-600 dark:text-gray-400 mb-6">
               <p>
                 <strong>メール:</strong> info@corporatechun.com
               </p>
              <p>
                <strong>LinkedIn:</strong> 
                <a 
                  href="https://linkedin.com/in/your-profile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 ml-2"
                >
                  プロフィールを見る
                </a>
              </p>
              <p>
                <strong>GitHub:</strong> 
                <a 
                  href="https://github.com/your-username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 ml-2"
                >
                  リポジトリを見る
                </a>
              </p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                より詳細なお問い合わせは専用ページをご利用ください
              </p>
              <a
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm"
              >
                お問い合わせページへ
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 
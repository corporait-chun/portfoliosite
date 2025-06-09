'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const skills = [
  { 
    name: 'React', 
    icon: '/images/skills/react.svg',
    description: 'コンポーネントベースのUIライブラリ'
  },
  { 
    name: 'TypeScript', 
    icon: '/images/skills/typescript.svg',
    description: '型安全なJavaScriptのスーパーセット'
  },
  { 
    name: 'Next.js', 
    icon: '/images/skills/nextjs.svg',
    description: 'Reactベースのフルスタックフレームワーク'
  },
  { 
    name: 'Tailwind CSS', 
    icon: '/images/skills/tailwind.svg',
    description: 'ユーティリティファーストのCSSフレームワーク'
  },
  { 
    name: 'Node.js', 
    icon: '/images/skills/nodejs.svg',
    description: 'サーバーサイドJavaScriptランタイム'
  },
];

const About = () => {
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
    hidden: { opacity: 0, y: 30, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative">
      {/* 装飾的な要素 */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 opacity-50" />
      
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
            私について
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Webアプリケーションの開発を得意としています。
              最新の技術を活用し、ユーザー体験を重視した開発を心がけています。
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              常に新しい技術を学び、より良い解決策を提供することを目指しています。
            </p>
          </motion.div>
          <motion.ul
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center"
          >
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-lg py-4 px-2 shadow-sm hover:shadow-lg transition-shadow"
                data-tooltip-id={`skill-tooltip-${index}`}
                data-tooltip-content={skill.description}
              >
                <div className="h-16 mb-2 relative">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="font-semibold">{skill.name}</div>
                <Tooltip id={`skill-tooltip-${index}`} />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 
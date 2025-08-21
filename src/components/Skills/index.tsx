'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const skills = [
  {
    category: 'フロントエンド',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    icon: '🎨'
  },
  {
    category: 'バックエンド',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
    icon: '⚙️'
  },
  
];

const Skills = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative">
      {/* 装飾的な要素 */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 opacity-50" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white"
          >
            技術スタック
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            これまでに習得し、活用してきた技術をご紹介します
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                variants={itemVariants}
                className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                  {skill.category}
                </h3>
                <ul className="space-y-3 flex-1">
                  {skill.items.map((item) => (
                    <motion.li
                      key={item}
                      variants={itemVariants}
                      className="text-gray-600 dark:text-gray-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 
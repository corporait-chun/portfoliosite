'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Project } from '@/lib/microcms';

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={hasAnimated ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          >
            プロジェクト
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {Array.isArray(projects) && projects.length > 0 ? (
              projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={project.image.url}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.body}
                    </p>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.p
                variants={itemVariants}
                className="text-center text-gray-500 dark:text-gray-400 col-span-full"
              >
                プロジェクトが見つかりませんでした。
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 
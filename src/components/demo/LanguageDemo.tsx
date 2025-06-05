'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageDemo = () => {
  const [language, setLanguage] = useState('ja');

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
    >
      <h3 className="text-xl font-bold mb-4">多言語対応</h3>
      <div className="space-y-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLanguage(language === 'ja' ? 'en' : 'ja')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          {language === 'ja' ? 'Switch to English' : '日本語に切り替え'}
        </motion.button>
        <AnimatePresence mode="wait">
          <motion.p
            key={language}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-gray-600 dark:text-gray-300"
          >
            {language === 'ja'
              ? 'このサイトは日本語と英語に対応しています。'
              : 'This site supports both Japanese and English.'}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default LanguageDemo; 
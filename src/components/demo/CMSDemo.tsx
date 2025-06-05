'use client';

import { motion } from 'framer-motion';

const CMSDemo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
    >
      <h3 className="text-xl font-bold mb-4">microCMS連携</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        microCMSを使用して、コンテンツを動的に管理できます。
      </p>
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-4 bg-gray-50 dark:bg-gray-600 rounded-lg"
        >
          <h4 className="font-bold mb-2">ブログ記事</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            記事の作成、編集、削除が簡単にできます。
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="p-4 bg-gray-50 dark:bg-gray-600 rounded-lg"
        >
          <h4 className="font-bold mb-2">ポートフォリオ</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            プロジェクトの追加や更新が容易です。
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CMSDemo; 
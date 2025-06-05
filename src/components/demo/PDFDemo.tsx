'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PDFViewer } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';

interface PDFData {
  name: string;
  skills: string;
  experience: string;
}

const PDFDemo = () => {
  const [showPDF, setShowPDF] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [pdfData, setPdfData] = useState<PDFData>({
    name: '山田太郎',
    skills: 'React, Next.js, TypeScript',
    experience: '3年',
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleInputChange = (field: keyof PDFData, value: string) => {
    setPdfData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!isClient) {
    return (
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4">PDF出力</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          @react-pdf/rendererを使用して、PDFを動的に生成できます。
        </p>
        <div className="h-[500px] flex items-center justify-center">
          読み込み中...
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
    >
      <h3 className="text-xl font-bold mb-4">PDF出力</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        @react-pdf/rendererを使用して、PDFを動的に生成できます。
      </p>
      
      <div className="space-y-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            名前
          </label>
          <input
            type="text"
            value={pdfData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            スキル
          </label>
          <input
            type="text"
            value={pdfData.skills}
            onChange={(e) => handleInputChange('skills', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            経験年数
          </label>
          <input
            type="text"
            value={pdfData.experience}
            onChange={(e) => handleInputChange('experience', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
          />
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowPDF(!showPDF)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        {showPDF ? 'PDFを閉じる' : 'PDFを表示'}
      </motion.button>
      {showPDF && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 h-[500px] border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden"
        >
          <PDFViewer width="100%" height="100%" style={{ border: 'none' }}>
            <PDFDocument data={pdfData} />
          </PDFViewer>
        </motion.div>
      )}
    </motion.div>
  );
};

export default PDFDemo; 
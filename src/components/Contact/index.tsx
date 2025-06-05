'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = '名前を入力してください';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'メッセージを入力してください';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('submitting');

    // 仮の送信処理（2秒待機）
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
              お仕事のご依頼やご質問など、お気軽にお問い合わせください。
            </p>
            <div className="text-center">
              <a
                href="mailto:tank08161803@gmail.com"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                tank08161803@gmail.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 
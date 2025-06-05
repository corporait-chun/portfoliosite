'use client';

import { motion } from 'framer-motion';

const MapDemo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
    >
      <h3 className="text-xl font-bold mb-4">Google Maps</h3>
      <div className="aspect-video bg-gray-200 dark:bg-gray-600 rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.827853398542!2d139.76493611525877!3d35.68124053757899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1647874582071!5m2!1sja!2sjp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};

export default MapDemo; 
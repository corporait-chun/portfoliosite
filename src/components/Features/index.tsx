'use client';

import dynamic from 'next/dynamic';

const MapDemo = dynamic(() => import('../demo/MapDemo'), { ssr: false });
const CMSDemo = dynamic(() => import('../demo/CMSDemo'), { ssr: false });
const LanguageDemo = dynamic(() => import('../demo/LanguageDemo'), { ssr: false });
const PDFDemo = dynamic(() => import('../demo/PDFDemo'), { ssr: false });

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">機能デモ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MapDemo />
          <CMSDemo />
          <LanguageDemo />
          <PDFDemo />
        </div>
      </div>
    </section>
  );
};

export default Features; 
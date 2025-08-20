import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            お問い合わせ
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ご質問やお仕事のご相談など、お気軽にお問い合わせください。
            できる限り早くご返信いたします。
          </p>
        </div>
        
        <ContactForm />
        
        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              その他の連絡方法
            </h3>
                         <div className="space-y-3 text-gray-600 dark:text-gray-400">
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
          </div>
        </div>
      </div>
    </div>
  );
}

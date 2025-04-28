import React from 'react';
import { useRouter } from 'next/navigation';

interface Step5ContentProps {
  onPrev: () => void;
  onFinish: () => void;
}

const Step5Content: React.FC<Step5ContentProps> = ({ onPrev, onFinish }) => {
  const router = useRouter();

  const handleComplete = () => {
    onFinish();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="w-full max-w-md">
        {/* タイトル */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">すべてが整いました</h1>
          <p className="text-gray-600">新しいファッションの世界へようこそ</p>
        </div>

        {/* サービスのハイライト */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-xl font-bold text-center text-gray-900 mb-4">colosomで得られる体験</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-primary mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">パーソナライズされた提案</h3>
                <p className="text-sm text-gray-600">あなただけの好みを学習するAI</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-primary mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">最新のトレンド情報</h3>
                <p className="text-sm text-gray-600">業界のプロがリアルタイムで更新</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-primary mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">ワードローブの最適化</h3>
                <p className="text-sm text-gray-600">賢いショッピングと予算管理</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-primary mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">ファッションコミュニティ</h3>
                <p className="text-sm text-gray-600">同じ趣味を持つ人々とのつながり</p>
              </div>
            </div>
          </div>
        </div>

        {/* 操作ボタン */}
        <div className="flex space-x-4 pt-4">
          <button
            type="button"
            onClick={onPrev}
            className="w-1/2 flex items-center justify-center py-3 px-4 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            戻る
          </button>
          <button
            type="button"
            onClick={handleComplete}
            className="w-1/2 flex items-center justify-center py-3 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors shadow-md"
          >
            始める
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step5Content; 
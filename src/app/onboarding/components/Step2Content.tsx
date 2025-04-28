import React from 'react';

interface Step2ContentProps {
  onNext: () => void;
  onPrev: () => void;
}

const Step2Content: React.FC<Step2ContentProps> = ({ onNext, onPrev }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-pink-50 to-red-50">
      <div className="w-full max-w-md">
        {/* タイトル */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">ファッション体験を再発明</h1>
          <p className="text-gray-600">あなただけのパーソナルスタイリストがポケットの中に</p>
        </div>

        {/* メイン機能説明 */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-10">
          <div className="h-48 bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">AIパーソナライズ機能</h2>
            <p className="text-gray-600 mb-4">
              最先端のAIがあなたの好みや体型、ライフスタイルを学習し、完璧にマッチするスタイルを提案します。何千もの中からあなただけのコーディネートを。
            </p>
            <div className="flex space-x-2">
              <span className="px-3 py-1 bg-primary bg-opacity-10 text-primary text-xs rounded-full">スマート</span>
              <span className="px-3 py-1 bg-primary bg-opacity-10 text-primary text-xs rounded-full">効率的</span>
              <span className="px-3 py-1 bg-primary bg-opacity-10 text-primary text-xs rounded-full">時間節約</span>
            </div>
          </div>
        </div>

        {/* ユーザーの声 */}
        <div className="bg-white rounded-xl p-5 shadow-lg mb-8">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
            <div>
              <p className="font-medium text-gray-900">田中さん</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm italic">
            「このアプリを使い始めてから、毎朝の服選びのストレスがなくなりました。おすすめのコーディネートがいつも完璧です！」
          </p>
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
            onClick={onNext}
            className="w-1/2 flex items-center justify-center py-3 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors shadow-md"
          >
            次へ
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2Content; 
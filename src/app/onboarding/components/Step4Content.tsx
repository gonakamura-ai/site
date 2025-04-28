import React from 'react';

interface Step4ContentProps {
  onNext: () => void;
  onPrev: () => void;
}

const Step4Content: React.FC<Step4ContentProps> = ({ onNext, onPrev }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-gray-800">データで見える成長</h2>
          <p className="text-xl text-gray-600">あなたの努力が可視化される</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">進捗グラフ</h3>
            <p className="text-gray-600">日々の成長をグラフで確認</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">達成率分析</h3>
            <p className="text-gray-600">目標達成までの道のりを分析</p>
          </div>
        </div>

        <div className="flex justify-center mt-12 space-x-4">
          <button
            onClick={onPrev}
            className="px-6 py-3 bg-white/80 text-gray-700 rounded-full shadow-md hover:bg-white transition-colors duration-300"
          >
            戻る
          </button>
          <button
            onClick={onNext}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full shadow-md hover:opacity-90 transition-opacity duration-300"
          >
            次へ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4Content; 
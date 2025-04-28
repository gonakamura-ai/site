import React from 'react';

interface Step2ContentProps {
  onNext: () => void;
  onPrev: () => void;
}

const Step2Content: React.FC<Step2ContentProps> = ({ onNext, onPrev }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-gray-800">あなたの夢を叶える</h2>
          <p className="text-xl text-gray-600">colosomは、あなたの目標達成をサポートします</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">目標設定</h3>
            <p className="text-gray-600">明確な目標を設定し、達成までの道のりを可視化</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">進捗管理</h3>
            <p className="text-gray-600">日々の進捗を記録し、モチベーションを維持</p>
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
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-md hover:opacity-90 transition-opacity duration-300"
          >
            次へ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2Content; 
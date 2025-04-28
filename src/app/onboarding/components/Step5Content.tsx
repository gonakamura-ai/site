import React from 'react';

interface Step5ContentProps {
  onPrev: () => void;
  onFinish: () => void;
}

const Step5Content: React.FC<Step5ContentProps> = ({ onPrev, onFinish }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-gray-800">さあ、始めましょう</h2>
          <p className="text-xl text-gray-600">あなたの目標達成をサポートします</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">目標設定</h3>
            <p className="text-gray-600">最初の目標を設定しましょう</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">コミュニティ参加</h3>
            <p className="text-gray-600">仲間と一緒に成長しましょう</p>
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
            onClick={onFinish}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-md hover:opacity-90 transition-opacity duration-300"
          >
            始める
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step5Content; 
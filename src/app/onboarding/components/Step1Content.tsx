import React from 'react';

interface Step1ContentProps {
  onNext: () => void;
}

const Step1Content: React.FC<Step1ContentProps> = ({ onNext }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="w-full max-w-md">
        {/* ロゴ */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-12">
                <path d="M13 7.5a1 1 0 11-2 0 1 1 0 012 0zm2 3.5c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1zm-8-3.5a1 1 0 11-2 0 1 1 0 012 0zm-2 3.5c0-.55.45-1 1-1h3c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1z" />
                <path d="M12 5a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">colosom</h1>
          <p className="text-gray-600 mb-2">あなたのファッションライフをもっと楽しく</p>
        </div>

        {/* サービスの特徴 */}
        <div className="space-y-6 mb-10">
          <div className="bg-white rounded-xl p-5 shadow-md transform transition-all hover:scale-105">
            <div className="flex items-start">
              <div className="bg-primary bg-opacity-10 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">パーソナライズされたおすすめ</h3>
                <p className="text-gray-600 text-sm">あなたの好みを学習し、ぴったりのファッションアイテムを提案</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-md transform transition-all hover:scale-105">
            <div className="flex items-start">
              <div className="bg-primary bg-opacity-10 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">トレンド情報をいち早く</h3>
                <p className="text-gray-600 text-sm">最新のトレンドをリアルタイムでチェックできる情報配信</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-md transform transition-all hover:scale-105">
            <div className="flex items-start">
              <div className="bg-primary bg-opacity-10 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">コミュニティとつながる</h3>
                <p className="text-gray-600 text-sm">ファッション好きなユーザーとアイデアや情報を共有</p>
              </div>
            </div>
          </div>
        </div>

        {/* 開始ボタン */}
        <button 
          className="w-full flex items-center justify-center py-4 px-4 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors shadow-lg transform hover:scale-105 hover:shadow-xl"
          onClick={onNext}
        >
          <span className="mr-2">さっそく始める</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Step1Content; 
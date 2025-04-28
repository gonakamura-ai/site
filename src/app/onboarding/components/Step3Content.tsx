import React from 'react';

interface Step3ContentProps {
  onNext: () => void;
  onPrev: () => void;
}

const Step3Content: React.FC<Step3ContentProps> = ({ onNext, onPrev }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="w-full max-w-md">
        {/* タイトル */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">ワードローブを最適化</h1>
          <p className="text-gray-600">賢いショッピングで無駄な買い物とさよなら</p>
        </div>

        {/* 機能の利点 */}
        <div className="space-y-6 mb-10">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">予算管理アシスタント</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  スマートな予算設定と支出追跡で、ファッションへの出費を最適化。欲しいアイテムの価格変動も追跡し、最もお得なタイミングでお知らせします。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">カラーマッチング</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  どの服と合わせるべきか迷わない。革新的なカラーマッチングシステムで、あなたの服がどんな組み合わせでも最高に見えるようサポートします。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">サステナブルファッション</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  環境に優しいブランドやリサイクル素材の服を簡単に見つけられます。エシカルな選択肢で、スタイリッシュかつ地球にやさしいファッションを。
                </p>
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

export default Step3Content; 
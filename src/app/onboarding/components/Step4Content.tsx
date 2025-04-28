import React from 'react';

interface Step4ContentProps {
  onNext: () => void;
  onPrev: () => void;
}

const Step4Content: React.FC<Step4ContentProps> = ({ onNext, onPrev }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="w-full max-w-md">
        {/* タイトル */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">常に最新トレンド</h1>
          <p className="text-gray-600">業界のプロがキュレーションするトレンド情報</p>
        </div>

        {/* モバイル画面のプレビュー */}
        <div className="relative mx-auto mb-10 w-64 h-96 bg-white rounded-3xl shadow-xl overflow-hidden border-8 border-gray-800">
          <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 rounded-t-lg"></div>
          <div className="pt-8 h-full bg-gradient-to-b from-primary-dark to-primary overflow-hidden">
            <div className="px-4 py-2">
              <div className="flex justify-between items-center mb-4">
                <div className="text-white font-bold">トレンドフィード</div>
                <div className="bg-white bg-opacity-20 p-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="font-semibold text-sm text-gray-900 mb-1">今週のトレンドアイテム</div>
                  <div className="text-xs text-gray-500">オーバーサイズのニットカーディガンが今季大注目！</div>
                </div>
                
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="font-semibold text-sm text-gray-900 mb-1">カラートレンド 2023</div>
                  <div className="text-xs text-gray-500">ラベンダーとセージグリーンが今年のキーカラー</div>
                </div>
                
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="font-semibold text-sm text-gray-900 mb-1">ランウェイからストリートへ</div>
                  <div className="text-xs text-gray-500">パリコレクションで注目された最新スタイル</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gray-800 rounded-b-lg"></div>
        </div>

        {/* トレンド更新頻度の説明 */}
        <div className="bg-white rounded-xl p-5 shadow-lg mb-8">
          <h3 className="font-bold text-gray-900 mb-3 text-center">毎週更新のトレンド情報</h3>
          <div className="flex justify-around text-center mb-3">
            <div>
              <div className="text-primary font-bold text-xl">24</div>
              <div className="text-gray-500 text-xs">時間</div>
            </div>
            <div>
              <div className="text-primary font-bold text-xl">7</div>
              <div className="text-gray-500 text-xs">日間</div>
            </div>
            <div>
              <div className="text-primary font-bold text-xl">365</div>
              <div className="text-gray-500 text-xs">日間</div>
            </div>
          </div>
          <p className="text-gray-600 text-sm text-center">
            プロのファッションスタイリストがキュレーションする最新の情報をリアルタイムで。流行を先取りして、いつでも一歩先を行きましょう。
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

export default Step4Content; 
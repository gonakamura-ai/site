import React, { useState } from 'react';

interface Step3ContentProps {
  onNext: () => void;
  onPrev: () => void;
}

const Step3Content: React.FC<Step3ContentProps> = ({ onNext, onPrev }) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interests = [
    { id: 'casual', label: 'カジュアル' },
    { id: 'formal', label: 'フォーマル' },
    { id: 'minimalist', label: 'ミニマリスト' },
    { id: 'streetwear', label: 'ストリート' },
    { id: 'vintage', label: 'ヴィンテージ' },
    { id: 'feminine', label: '女性らしい' },
    { id: 'masculine', label: '男性らしい' },
    { id: 'sustainable', label: 'サステナブル' },
    { id: 'luxury', label: 'ラグジュアリー' },
    { id: 'athletic', label: 'アスレチック' },
    { id: 'bohemian', label: 'ボヘミアン' },
    { id: 'preppy', label: 'プレッピー' }
  ];

  const toggleInterest = (id: string) => {
    setSelectedInterests(prev => 
      prev.includes(id) 
        ? prev.filter(i => i !== id) 
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* プログレスバー */}
        <div className="mb-8">
          <div className="flex items-center">
            <div className="text-xs text-gray-500">3/5</div>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>

        {/* タイトル */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">あなたの好みを教えてください</h1>
          <p className="text-gray-600">興味のあるファッションスタイルを選択してください（複数可）</p>
        </div>

        {/* 興味タグ - Pinterestスタイル */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          {interests.map(interest => (
            <div
              key={interest.id}
              onClick={() => toggleInterest(interest.id)}
              className={`relative cursor-pointer overflow-hidden rounded-lg transition-all transform hover:scale-105 ${
                selectedInterests.includes(interest.id)
                  ? 'ring-2 ring-primary shadow-md'
                  : 'ring-1 ring-gray-200'
              }`}
            >
              <div className="aspect-w-1 aspect-h-1 bg-gray-50 flex items-center justify-center">
                <div className="p-4 flex items-center justify-center h-full w-full">
                  <span className={`text-sm font-medium ${
                    selectedInterests.includes(interest.id)
                      ? 'text-primary'
                      : 'text-gray-700'
                  }`}>
                    {interest.label}
                  </span>
                </div>
                {selectedInterests.includes(interest.id) && (
                  <div className="absolute top-2 right-2 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="w-3 h-3">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 操作ボタン */}
        <div className="flex space-x-4 pt-6">
          <button
            type="button"
            onClick={onPrev}
            className="w-1/2 flex items-center justify-center py-3 px-4 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            戻る
          </button>
          <button
            type="button"
            onClick={onNext}
            className="w-1/2 flex items-center justify-center py-3 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors shadow-md"
          >
            次へ進む
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3Content; 
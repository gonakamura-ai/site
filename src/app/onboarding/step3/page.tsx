'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function OnboardingStep3() {
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
          <div className="flex justify-between items-center">
            <div className="text-xs text-gray-500">ステップ 3/5</div>
            <div className="text-xs text-gray-500">好みのスタイル</div>
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

        {/* 興味タグ */}
        <div className="flex flex-wrap gap-3 mb-8">
          {interests.map(interest => (
            <button
              key={interest.id}
              onClick={() => toggleInterest(interest.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedInterests.includes(interest.id)
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {interest.label}
            </button>
          ))}
        </div>

        {/* 次へボタン */}
        <div className="pt-4">
          <button
            type="button"
            onClick={() => window.location.href = '/onboarding/step4'}
            className="w-full flex items-center justify-center py-3 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
            disabled={selectedInterests.length === 0}
          >
            次へ進む
          </button>
        </div>

        {/* 戻るリンク */}
        <div className="text-center mt-4">
          <Link href="/onboarding/step2" className="text-gray-500 hover:text-gray-700 text-sm">
            ← 戻る
          </Link>
        </div>
      </div>
    </div>
  );
} 
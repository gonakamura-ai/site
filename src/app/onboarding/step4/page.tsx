'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function OnboardingStep4() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const brands = [
    { id: 'nike', label: 'NIKE' },
    { id: 'adidas', label: 'adidas' },
    { id: 'uniqlo', label: 'UNIQLO' },
    { id: 'zara', label: 'ZARA' },
    { id: 'gu', label: 'GU' },
    { id: 'muji', label: '無印良品' },
    { id: 'hm', label: 'H&M' },
    { id: 'unitedarrows', label: 'UNITED ARROWS' },
    { id: 'beams', label: 'BEAMS' },
    { id: 'ships', label: 'SHIPS' },
    { id: 'tomorrowland', label: 'TOMORROWLAND' },
    { id: 'journalstandard', label: 'JOURNAL STANDARD' }
  ];

  const toggleBrand = (id: string) => {
    setSelectedBrands(prev => 
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
            <div className="text-xs text-gray-500">ステップ 4/5</div>
            <div className="text-xs text-gray-500">好みのブランド</div>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
          </div>
        </div>

        {/* タイトル */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">好きなブランドを選択</h1>
          <p className="text-gray-600">普段購入しているブランドを教えてください（複数可）</p>
        </div>

        {/* ブランドタグ */}
        <div className="flex flex-wrap gap-3 mb-8">
          {brands.map(brand => (
            <button
              key={brand.id}
              onClick={() => toggleBrand(brand.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedBrands.includes(brand.id)
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {brand.label}
            </button>
          ))}
        </div>

        {/* 次へボタン */}
        <div className="pt-4">
          <button
            type="button"
            onClick={() => window.location.href = '/onboarding/step5'}
            className="w-full flex items-center justify-center py-3 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            次へ進む
          </button>
        </div>

        {/* 戻るリンク */}
        <div className="text-center mt-4">
          <Link href="/onboarding/step3" className="text-gray-500 hover:text-gray-700 text-sm">
            ← 戻る
          </Link>
        </div>
      </div>
    </div>
  );
} 
import React, { useState } from 'react';

interface Step4ContentProps {
  onNext: () => void;
  onPrev: () => void;
}

const Step4Content: React.FC<Step4ContentProps> = ({ onNext, onPrev }) => {
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
          <div className="flex items-center">
            <div className="text-xs text-gray-500">4/5</div>
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

        {/* ブランドタグ - Pinterestスタイル */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          {brands.map(brand => (
            <div
              key={brand.id}
              onClick={() => toggleBrand(brand.id)}
              className={`relative cursor-pointer overflow-hidden rounded-lg transition-all transform hover:scale-105 ${
                selectedBrands.includes(brand.id)
                  ? 'ring-2 ring-primary shadow-md'
                  : 'ring-1 ring-gray-200'
              }`}
            >
              <div className="aspect-w-1 aspect-h-1 bg-gray-50 flex items-center justify-center">
                <div className="p-4 flex items-center justify-center h-full w-full">
                  <span className={`text-sm font-medium ${
                    selectedBrands.includes(brand.id)
                      ? 'text-primary'
                      : 'text-gray-700'
                  }`}>
                    {brand.label}
                  </span>
                </div>
                {selectedBrands.includes(brand.id) && (
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

export default Step4Content; 
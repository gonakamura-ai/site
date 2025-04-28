import React, { useState } from 'react';
import Link from 'next/link';

interface Step2ContentProps {
  onNext: () => void;
  onPrev: () => void;
}

const Step2Content: React.FC<Step2ContentProps> = ({ onNext, onPrev }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* プログレスバー */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div className="text-xs text-gray-500">ステップ 2/5</div>
            <div className="text-xs text-gray-500">プロフィール情報</div>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: '40%' }}></div>
          </div>
        </div>

        {/* タイトル */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">プロフィール情報を入力</h1>
          <p className="text-gray-600">あなたに合ったサービスを提供するための情報です</p>
        </div>

        {/* フォーム */}
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              お名前
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="例：山田 太郎"
            />
          </div>

          <div>
            <label htmlFor="nickname" className="block text-sm font-medium text-gray-700 mb-1">
              ニックネーム（アプリ内で表示されます）
            </label>
            <input
              type="text"
              id="nickname"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="例：Taro"
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
              性別
            </label>
            <select
              id="gender"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">選択してください</option>
              <option value="male">男性</option>
              <option value="female">女性</option>
              <option value="other">その他</option>
              <option value="no_answer">回答しない</option>
            </select>
          </div>

          <div>
            <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 mb-1">
              生年月日
            </label>
            <input
              type="date"
              id="birthdate"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* 操作ボタン */}
          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={onPrev}
              className="w-1/2 flex items-center justify-center py-3 px-4 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
            >
              戻る
            </button>
            <button
              type="button"
              onClick={onNext}
              className="w-1/2 flex items-center justify-center py-3 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
            >
              次へ進む
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step2Content; 
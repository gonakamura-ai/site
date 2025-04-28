'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function OnboardingStep5() {
  const [notifications, setNotifications] = useState({
    newArrival: true,
    sale: true,
    personalizedRecs: false,
    events: false
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* プログレスバー */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div className="text-xs text-gray-500">ステップ 5/5</div>
            <div className="text-xs text-gray-500">通知設定</div>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: '100%' }}></div>
          </div>
        </div>

        {/* タイトル */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">最後のステップ</h1>
          <p className="text-gray-600">お好みの通知設定をお選びください</p>
        </div>

        {/* 通知設定 */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between">
            <label htmlFor="newArrival" className="text-gray-700">新着商品のお知らせ</label>
            <div className="relative inline-block w-12 mr-2 align-middle select-none">
              <input 
                type="checkbox" 
                id="newArrival" 
                checked={notifications.newArrival}
                onChange={() => toggleNotification('newArrival')}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label 
                htmlFor="newArrival" 
                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${notifications.newArrival ? 'bg-primary' : 'bg-gray-300'}`}
              ></label>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="sale" className="text-gray-700">セール情報</label>
            <div className="relative inline-block w-12 mr-2 align-middle select-none">
              <input 
                type="checkbox" 
                id="sale" 
                checked={notifications.sale}
                onChange={() => toggleNotification('sale')}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label 
                htmlFor="sale" 
                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${notifications.sale ? 'bg-primary' : 'bg-gray-300'}`}
              ></label>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="personalizedRecs" className="text-gray-700">パーソナライズされたおすすめ</label>
            <div className="relative inline-block w-12 mr-2 align-middle select-none">
              <input 
                type="checkbox" 
                id="personalizedRecs" 
                checked={notifications.personalizedRecs}
                onChange={() => toggleNotification('personalizedRecs')}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label 
                htmlFor="personalizedRecs" 
                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${notifications.personalizedRecs ? 'bg-primary' : 'bg-gray-300'}`}
              ></label>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="events" className="text-gray-700">イベント情報</label>
            <div className="relative inline-block w-12 mr-2 align-middle select-none">
              <input 
                type="checkbox" 
                id="events" 
                checked={notifications.events}
                onChange={() => toggleNotification('events')}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label 
                htmlFor="events" 
                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${notifications.events ? 'bg-primary' : 'bg-gray-300'}`}
              ></label>
            </div>
          </div>
        </div>

        {/* 完了ボタン */}
        <div className="pt-4">
          <button
            type="button"
            onClick={() => window.location.href = '/'}
            className="w-full flex items-center justify-center py-3 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            設定完了
          </button>
        </div>

        {/* 戻るリンク */}
        <div className="text-center mt-4">
          <Link href="/onboarding/step4" className="text-gray-500 hover:text-gray-700 text-sm">
            ← 戻る
          </Link>
        </div>
      </div>
    </div>
  );
} 
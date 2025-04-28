import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Step5ContentProps {
  onPrev: () => void;
  onFinish: () => void;
}

const Step5Content: React.FC<Step5ContentProps> = ({ onPrev, onFinish }) => {
  const router = useRouter();
  const [notifications, setNotifications] = useState({
    newArrivals: true,
    sales: true,
    recommendations: false,
    events: false
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleComplete = () => {
    // 実際のアプリではここで通知設定を保存する
    onFinish();
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">通知設定</h1>
          <p className="text-gray-600">受け取りたい通知を選択してください</p>
        </div>

        {/* 通知設定 */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">新着商品</h3>
              <p className="text-sm text-gray-500">新しい商品が入荷したときに通知</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={notifications.newArrivals} 
                onChange={() => toggleNotification('newArrivals')} 
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">セール情報</h3>
              <p className="text-sm text-gray-500">セールやキャンペーンの通知</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={notifications.sales} 
                onChange={() => toggleNotification('sales')} 
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">パーソナライズドレコメンド</h3>
              <p className="text-sm text-gray-500">あなたにおすすめの商品の通知</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={notifications.recommendations} 
                onChange={() => toggleNotification('recommendations')} 
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">イベント</h3>
              <p className="text-sm text-gray-500">ポップアップやイベントの通知</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={notifications.events} 
                onChange={() => toggleNotification('events')} 
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
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
            onClick={handleComplete}
            className="w-1/2 flex items-center justify-center py-3 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            設定完了
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step5Content; 
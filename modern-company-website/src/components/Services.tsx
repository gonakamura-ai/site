'use client';

import { useState } from 'react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Webサイト開発',
      description: 'モバイルフレンドリーで高速な次世代Webサイトを構築。SEO対応、アクセシビリティに優れたデザイン。',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'モバイルアプリ開発',
      description: 'iOSおよびAndroid向けの高性能アプリケーション開発。直感的なUI/UXとスムーズな操作性を実現。',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'クラウドソリューション',
      description: 'スケーラブルで安全なクラウドインフラストラクチャの設計と実装。最適なパフォーマンスとコスト効率を提供。',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'AI・データ分析',
      description: 'ビッグデータ分析と機械学習アルゴリズムを活用したインテリジェントなビジネスソリューションを提供。',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  const [activeService, setActiveService] = useState(1);

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">サービス</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            ビジネスを成長させる<br />包括的なサービス
          </p>
          <p className="mt-5 text-xl text-gray-500">
            お客様のニーズに合わせた最適なソリューションで、ビジネスの課題解決と成長をサポートします。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`w-full text-left p-6 rounded-xl transition duration-200 ${
                  activeService === service.id
                    ? 'bg-white shadow-lg border-l-4 border-indigo-500'
                    : 'bg-transparent hover:bg-white hover:shadow-md'
                }`}
              >
                <h3 className={`text-xl font-bold ${activeService === service.id ? 'text-indigo-600' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`mt-2 ${activeService === service.id ? 'text-gray-600' : 'text-gray-500'}`}>
                  {service.description}
                </p>
              </button>
            ))}
          </div>
          
          <div className="lg:col-span-3 lg:pl-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
              <div className="h-64 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center p-8">
                <div className="text-white">
                  {services.find(s => s.id === activeService)?.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  {services.find(s => s.id === activeService)?.title}
                </h3>
                <p className="mt-4 text-gray-500 leading-relaxed">
                  私たちの{services.find(s => s.id === activeService)?.title}サービスは、最新の技術と業界のベストプラクティスを採用し、お客様のビジネス目標達成を支援します。専門知識を持ったチームが、プロジェクトの計画から実装、そして継続的なサポートまで、包括的なサービスを提供します。
                </p>
                <div className="mt-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    お問い合わせ
                    <svg className="ml-2 -mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
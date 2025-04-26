'use client';

import { useEffect, useState, useRef } from 'react';

type SolutionItem = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

type SolutionsData = {
  retail: SolutionItem[];
  supply: SolutionItem[];
  digital: SolutionItem[];
};

type ActiveTabType = 'retail' | 'supply' | 'digital';

export default function Solutions() {
  const [activeTab, setActiveTab] = useState<ActiveTabType>('retail');
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const solutions: SolutionsData = {
    retail: [
      {
        id: 1,
        title: "次世代POSシステム",
        description: "顧客の購買体験を向上させるクラウドベースのPOSソリューション。在庫管理、CRM、分析機能を統合。",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        id: 2,
        title: "顧客行動分析",
        description: "店舗内の顧客行動を追跡・分析し、レイアウト最適化や販売戦略の改善につなげるAIソリューション。",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )
      },
      {
        id: 3,
        title: "バーチャル試着",
        description: "ARテクノロジーを活用し、実店舗やオンラインで洋服の試着体験を提供する革新的なソリューション。",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
          </svg>
        )
      }
    ],
    supply: [
      {
        id: 1,
        title: "サプライチェーン管理",
        description: "原材料の調達から製造、配送まで全工程を可視化し、効率化するためのクラウドプラットフォーム。",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      {
        id: 2,
        title: "在庫最適化",
        description: "AIを活用した需要予測と在庫管理システムで、過剰在庫と品切れのリスクを最小化。",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
        )
      },
      {
        id: 3,
        title: "サステナビリティ追跡",
        description: "サプライチェーン全体の環境負荷を測定・分析し、持続可能なファッションビジネスをサポート。",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      }
    ],
    digital: [
      {
        id: 1,
        title: "Eコマースプラットフォーム",
        description: "ファッションブランド特化型のオンラインストアソリューション。3Dビューやバーチャル試着機能を搭載。",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        )
      },
      {
        id: 2,
        title: "オムニチャネル統合",
        description: "実店舗とオンラインの顧客体験を統合し、シームレスなショッピング体験を提供するプラットフォーム。",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        )
      },
      {
        id: 3,
        title: "デジタルマーケティング",
        description: "ファッション業界に特化したAI駆動型マーケティングツール。パーソナライズされた顧客体験を実現。",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
        )
      }
    ]
  };

  return (
    <section id="solutions" className="py-24 bg-accent" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-primary text-sm tracking-wider uppercase font-medium mb-2">SOLUTIONS</span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-secondary">アパレル業界特化型<br />デジタルソリューション</h2>
          <p className="max-w-2xl mx-auto text-text-light">
            ファッションビジネスの課題を解決し、成長を加速させる革新的なテクノロジーソリューションをご提供します。
          </p>
        </div>

        {/* タブメニュー */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border-b border-secondary/20">
            <button
              onClick={() => setActiveTab('retail')}
              className={`px-6 py-3 text-sm font-medium tracking-wide uppercase transition-colors ${activeTab === 'retail' ? 'text-primary border-b-2 border-primary -mb-px' : 'text-text-light hover:text-secondary'}`}
            >
              小売・店舗向け
            </button>
            <button
              onClick={() => setActiveTab('supply')}
              className={`px-6 py-3 text-sm font-medium tracking-wide uppercase transition-colors ${activeTab === 'supply' ? 'text-primary border-b-2 border-primary -mb-px' : 'text-text-light hover:text-secondary'}`}
            >
              サプライチェーン
            </button>
            <button
              onClick={() => setActiveTab('digital')}
              className={`px-6 py-3 text-sm font-medium tracking-wide uppercase transition-colors ${activeTab === 'digital' ? 'text-primary border-b-2 border-primary -mb-px' : 'text-text-light hover:text-secondary'}`}
            >
              デジタル
            </button>
          </div>
        </div>

        {/* ソリューション表示エリア */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions[activeTab].map((item, index) => (
            <div 
              key={item.id}
              className={`group bg-white rounded-lg shadow-sm p-6 transition-all duration-700 hover:shadow-md hover:-translate-y-1 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="text-primary mb-4">{item.icon}</div>
              <h3 className="text-xl font-serif text-secondary mb-3">{item.title}</h3>
              <p className="text-sm text-text-light mb-4">{item.description}</p>
              <a href="#cases" className="inline-flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                詳細を見る
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="#cases"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary text-sm font-medium tracking-wider uppercase text-secondary hover:bg-primary hover:text-white transition duration-300"
          >
            導入事例を見る
          </a>
        </div>
      </div>
    </section>
  );
} 
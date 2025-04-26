'use client';

import { useEffect, useState, useRef } from 'react';

type CaseStudyItem = {
  id: number;
  image: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
};

export default function Cases() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLElement>(null);

  const caseStudies: CaseStudyItem[] = [
    {
      id: 1,
      image: '/case-study-1.jpg',
      client: 'UNIQLO',
      industry: 'アパレル小売',
      title: 'AIを活用した需要予測による在庫最適化',
      summary: '機械学習アルゴリズムを用いて売上データと外部要因を分析し、商品の需要を高精度に予測。在庫の過剰と欠品を大幅に削減。'
    },
    {
      id: 2,
      image: '/case-study-2.jpg',
      client: 'ZOZOTOWN',
      industry: 'Eコマース',
      title: 'バーチャル試着機能の実装による返品率削減',
      summary: 'ARテクノロジーを活用したバーチャル試着システムの導入により、顧客満足度向上と返品率30%削減を実現。'
    },
    {
      id: 3,
      image: '/case-study-3.jpg',
      client: 'BEAMS',
      industry: 'セレクトショップ',
      title: 'オムニチャネル戦略によるデジタル変革',
      summary: 'オンラインとオフラインの購買体験を統合したプラットフォームにより、顧客エンゲージメントと売上の向上を達成。'
    },
    {
      id: 4,
      image: '/case-study-4.jpg',
      client: 'patagonia',
      industry: 'アウトドアアパレル',
      title: 'サステナビリティ追跡システムの構築',
      summary: 'ブロックチェーン技術を活用し、製品のライフサイクル全体の環境影響を可視化。ブランド価値向上に貢献。'
    }
  ];

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

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  return (
    <section id="cases" className="py-24 bg-secondary text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-tech text-sm tracking-wider uppercase font-medium mb-2">CASE STUDIES</span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-white">導入事例</h2>
          <p className="max-w-2xl mx-auto text-white/70">
            さまざまなファッション企業のデジタル変革を実現した実績をご紹介します。
          </p>
        </div>

        <div className="relative">
          {/* メインケーススタディ表示 */}
          <div className={`relative overflow-hidden bg-white/5 backdrop-blur-sm rounded-lg transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* 左側：画像 */}
              <div className="aspect-[4/3] md:aspect-auto relative bg-primary/10">
                <div className="w-full h-full flex items-center justify-center">
                  {/* 実際の画像が用意できるまでのプレースホルダー */}
                  <span className="text-white/50">Case Study Image {activeIndex + 1}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
              </div>
              
              {/* 右側：テキスト */}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-2 mb-6">
                  <span className="text-xs font-medium bg-tech/20 text-tech px-2 py-1 rounded">{caseStudies[activeIndex].industry}</span>
                  <span className="text-sm font-medium text-white/70">Client: {caseStudies[activeIndex].client}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif mb-4 text-white">{caseStudies[activeIndex].title}</h3>
                <p className="text-white/70 mb-6">{caseStudies[activeIndex].summary}</p>
                
                <a href="#contact" className="inline-flex items-center text-tech text-sm uppercase tracking-wider hover:text-white transition-colors">
                  詳細を見る
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ナビゲーションボタン */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center transform -translate-y-1/2 px-4">
            <button 
              onClick={prevSlide}
              className="bg-black/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-primary transition-colors duration-300"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="bg-black/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-primary transition-colors duration-300"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* サムネイルナビゲーション */}
        <div className={`grid grid-cols-4 gap-3 mt-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {caseStudies.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`relative overflow-hidden ${activeIndex === index ? 'ring-2 ring-tech' : 'opacity-70 hover:opacity-100'}`}
            >
              <div className="aspect-[4/3] w-full bg-primary/10 flex items-center justify-center text-xs text-white/50 relative">
                {index + 1}
                <div className="absolute bottom-0 w-full bg-black/50 py-1 px-2 text-[10px] text-left text-white truncate">
                  {item.client}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-tech bg-tech/10 text-sm font-medium tracking-wider uppercase text-white hover:bg-tech/20 transition duration-300"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
} 
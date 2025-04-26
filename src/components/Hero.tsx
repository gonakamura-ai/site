'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen flex items-center overflow-hidden bg-gradient-to-r from-primary to-tech-dark">
      {/* 背景デザイン要素 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>
        
        {/* テック感のある装飾 */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-tech/20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-primary/20 blur-3xl"></div>
        
        {/* コード風の要素 */}
        <div className="absolute top-1/4 left-10 text-white/5 text-xs md:text-sm font-mono">
          {`
            class FashionTech {
              constructor() {
                this.innovation = true;
                this.design = "elegant";
              }
              
              createSolution() {
                return this.innovation && this.design;
              }
            }
          `}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="md:flex md:items-center md:justify-between">
          <div className={`md:w-1/2 lg:w-3/5 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight">
              <span className="block mb-2">ファッション業界の</span>
              <span className="block text-tech font-bold">デジタル変革</span>
              <span className="block">をリードする</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl leading-relaxed">
              アパレル業界特化型のデジタルソリューションで、ブランドの成長と業界のイノベーションを加速します。
            </p>
            <div className="mt-8 flex space-x-4">
              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary bg-primary text-sm font-medium tracking-wider uppercase text-white hover:bg-primary-light transition duration-300"
              >
                ソリューション一覧
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-sm font-medium tracking-wider uppercase text-white hover:bg-white/10 transition duration-300"
              >
                お問い合わせ
              </a>
            </div>
          </div>
          
          <div className={`hidden md:block md:w-1/2 lg:w-2/5 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative mx-auto w-full">
              {/* デジタルデバイスを表示 */}
              <div className="relative z-20 p-4">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="h-6 bg-gray-100 flex items-center px-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="p-2 bg-gray-50">
                    <div className="aspect-[16/9] bg-tech/10 rounded flex items-center justify-center text-tech text-xs">
                      Fashion Tech Dashboard Preview
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 装飾的な要素 */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-white/20 rounded-lg -z-10"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-tech/30 rounded-lg rotate-3 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center">
          <span className="text-white/70 text-xs tracking-widest mb-2">SCROLL</span>
          <div className="w-px h-8 bg-white/30"></div>
        </div>
      </div>
    </div>
  );
} 
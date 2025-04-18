'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 to-violet-600 overflow-hidden">
      {/* 背景デザイン要素 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute inset-y-0 right-1/2 -translate-x-1/2 w-[200%] origin-top-right skew-x-[-30deg] bg-white bg-opacity-10 shadow-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="md:flex md:items-center md:space-x-12">
          <div className={`md:w-1/2 space-y-8 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              <span className="block">革新的なソリューションで</span>
              <span className="block text-indigo-200">未来をデザインする</span>
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl">
              最先端のテクノロジーと創造的なアイデアで、お客様のビジネスに新たな価値を創造します。
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition duration-150"
              >
                お問い合わせ
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-900 bg-opacity-20 hover:bg-opacity-30 transition duration-150"
              >
                サービスを見る
              </a>
            </div>
          </div>
          <div className={`mt-10 md:mt-0 md:w-1/2 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="aspect-w-5 aspect-h-4">
                <div className="w-full h-full bg-indigo-800 bg-opacity-30 rounded-2xl backdrop-blur-sm p-6 shadow-2xl">
                  {/* この部分は後で実際の画像やグラフィックに置き換えることができます */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-white text-opacity-80 text-center">
                      <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path
                          fill="white"
                          d="M7.41 11.59L6 13l4 4 8-8-1.41-1.41L10 14.17z"
                        />
                      </svg>
                      <p className="text-lg font-medium">イメージエリア</p>
                      <p className="text-sm">ここに実際のプロダクトや<br />サービスの画像が入ります</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
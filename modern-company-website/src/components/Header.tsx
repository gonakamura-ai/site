'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600">colosom</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link href="#features" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-600">
              特徴
            </Link>
            <Link href="#about" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-600">
              会社概要
            </Link>
            <Link href="#services" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-600">
              サービス
            </Link>
            <Link href="#contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-600">
              お問い合わせ
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">メニューを開く</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="#features" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
              特徴
            </Link>
            <Link href="#about" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
              会社概要
            </Link>
            <Link href="#services" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
              サービス
            </Link>
            <Link href="#contact" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
              お問い合わせ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 
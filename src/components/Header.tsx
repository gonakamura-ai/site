'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // スクロール検出
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // モバイルデバイス検出
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
      setIsMobile(isMobileDevice);
    };

    window.addEventListener('scroll', handleScroll);
    checkDevice(); // 初期ロード時にチェック

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile) {
      // スマホの場合はオンボーディングへ
      window.location.href = '/onboarding';
    } else {
      // PCの場合は従来通りwwfc.vercel.appへ
      window.open('https://wwfc.vercel.app/', '_blank');
    }
    e.preventDefault();
  };

  return (
    <header className={`fixed w-full transition-all duration-300 z-50 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold tracking-wider text-gray-900">colosom</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex md:space-x-8">
            <a 
              href="#" 
              onClick={handleDemoClick}
              className={`text-sm font-medium tracking-wide hover:text-primary transition-colors ${scrolled ? 'text-secondary' : 'text-white'}`}
            >
              DEMO
            </a>
            <Link 
              href="#solutions" 
              className={`text-sm font-medium tracking-wide hover:text-primary transition-colors ${scrolled ? 'text-secondary' : 'text-white'}`}
            >
              SOLUTIONS
            </Link>
            <Link 
              href="#about" 
              className={`text-sm font-medium tracking-wide hover:text-primary transition-colors ${scrolled ? 'text-secondary' : 'text-white'}`}
            >
              ABOUT
            </Link>
            <Link 
              href="#cases" 
              className={`text-sm font-medium tracking-wide hover:text-primary transition-colors ${scrolled ? 'text-secondary' : 'text-white'}`}
            >
              CASE STUDIES
            </Link>
            <Link 
              href="#contact" 
              className={`text-sm font-medium tracking-wide hover:text-primary transition-colors ${scrolled ? 'text-secondary' : 'text-white'}`}
            >
              CONTACT
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${scrolled ? 'text-secondary' : 'text-white'} hover:text-primary focus:outline-none`}
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
        <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-md shadow-md">
          <div className="pt-2 pb-3 space-y-1 px-4">
            <a
              href="#"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                handleDemoClick(e);
                setIsMenuOpen(false);
              }}
              className="block py-2 text-sm font-medium text-secondary hover:text-primary tracking-wide border-b border-gray-100"
            >
              DEMO
            </a>
            <Link 
              href="#solutions" 
              className="block py-2 text-sm font-medium text-secondary hover:text-primary tracking-wide border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              SOLUTIONS
            </Link>
            <Link 
              href="#about" 
              className="block py-2 text-sm font-medium text-secondary hover:text-primary tracking-wide border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link 
              href="#cases" 
              className="block py-2 text-sm font-medium text-secondary hover:text-primary tracking-wide border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              CASE STUDIES
            </Link>
            <Link 
              href="#contact" 
              className="block py-2 text-sm font-medium text-secondary hover:text-primary tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 
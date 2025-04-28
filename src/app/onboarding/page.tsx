'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard, EffectCoverflow } from 'swiper/modules';

// スタイルのインポート
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// 各ステップのコンポーネント
import Step1Content from './components/Step1Content';
import Step2Content from './components/Step2Content';
import Step3Content from './components/Step3Content';
import Step4Content from './components/Step4Content';
import Step5Content from './components/Step5Content';

export default function Onboarding() {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // モバイルデバイス検出
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
      setIsMobile(isMobileDevice);
    };

    checkDevice();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Swiper
        direction="horizontal"
        effect="coverflow"
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        keyboard={{
          enabled: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Mousewheel, Keyboard]}
        onSlideChange={(swiper) => setActiveStep(swiper.activeIndex)}
        className="h-screen"
      >
        <SwiperSlide>
          <Step1Content onNext={() => document.querySelector('.swiper-button-next')?.dispatchEvent(new Event('click'))} />
        </SwiperSlide>
        
        <SwiperSlide>
          <Step2Content 
            onNext={() => document.querySelector('.swiper-button-next')?.dispatchEvent(new Event('click'))} 
            onPrev={() => document.querySelector('.swiper-button-prev')?.dispatchEvent(new Event('click'))}
          />
        </SwiperSlide>
        
        <SwiperSlide>
          <Step3Content 
            onNext={() => document.querySelector('.swiper-button-next')?.dispatchEvent(new Event('click'))} 
            onPrev={() => document.querySelector('.swiper-button-prev')?.dispatchEvent(new Event('click'))}
          />
        </SwiperSlide>
        
        <SwiperSlide>
          <Step4Content 
            onNext={() => document.querySelector('.swiper-button-next')?.dispatchEvent(new Event('click'))} 
            onPrev={() => document.querySelector('.swiper-button-prev')?.dispatchEvent(new Event('click'))}
          />
        </SwiperSlide>
        
        <SwiperSlide>
          <Step5Content 
            onFinish={() => window.location.href = '/'} 
            onPrev={() => document.querySelector('.swiper-button-prev')?.dispatchEvent(new Event('click'))}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
} 
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import Step1Content from './components/Step1Content';
import Step2Content from './components/Step2Content';
import Step3Content from './components/Step3Content';
import Step4Content from './components/Step4Content';
import Step5Content from './components/Step5Content';

const OnboardingPage = () => {
  const router = useRouter();
  const [swiper, setSwiper] = useState<any>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleFinish = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Swiper
        modules={[Mousewheel]}
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setActiveStep(swiper.activeIndex)}
        allowTouchMove={true}
        speed={800}
        resistance={true}
        resistanceRatio={0.85}
        style={{ height: '100vh' }}
      >
        <SwiperSlide style={{ height: '100%' }}>
          <div className="h-full flex items-center justify-center">
            <Step1Content onNext={handleNext} />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: '100%' }}>
          <div className="h-full flex items-center justify-center">
            <Step2Content onNext={handleNext} onPrev={handlePrev} />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: '100%' }}>
          <div className="h-full flex items-center justify-center">
            <Step3Content onNext={handleNext} onPrev={handlePrev} />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: '100%' }}>
          <div className="h-full flex items-center justify-center">
            <Step4Content onNext={handleNext} onPrev={handlePrev} />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: '100%' }}>
          <div className="h-full flex items-center justify-center">
            <Step5Content onPrev={handlePrev} onFinish={handleFinish} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OnboardingPage; 
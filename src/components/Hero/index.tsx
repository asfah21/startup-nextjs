"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from "@/contexts/LanguageContext";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slideOverlays = [
  "bg-gradient-to-r from-black/60 via-black/30 to-transparent",
  "bg-gradient-to-r from-blue-900/60 via-blue-800/30 to-transparent",
  "bg-gradient-to-r from-green-900/60 via-green-800/30 to-transparent",
];

const slideImages = [
  "/images/mining/ore.webp",
  "/images/mining/dt.webp",
  "/images/mining/exca.webp",
];

const Hero = () => {
  const { t } = useTranslation();

  const heroSlides = [
    {
      id: 1,
      image: slideImages[0],
      title: t("hero.slide1.title"),
      description: t("hero.slide1.description"),
      overlayGradient: slideOverlays[0],
    },
    {
      id: 2,
      image: slideImages[1],
      title: t("hero.slide2.title"),
      description: t("hero.slide2.description"),
      overlayGradient: slideOverlays[1],
    },
    {
      id: 3,
      image: slideImages[2],
      title: t("hero.slide3.title"),
      description: t("hero.slide3.description"),
      overlayGradient: slideOverlays[2],
    },
  ];

  return (
    <>
      <section id="home" className="relative w-full h-[60vh] xs:h-[65vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden bg-black">
        
        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.custom-swiper-pagination',
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          loop={true}
          className="h-full w-full"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                  priority={true}
                  unoptimized={true}
                />
                {/* Overlay gradient per slide */}
                <div className={`absolute inset-0 ${slide.overlayGradient} z-10`} />
                
                {/* Content inside slide */}
                <div className="relative z-20 flex items-end h-full px-4 xs:px-6 sm:px-8 md:px-10 pb-12 xs:pb-16 sm:pb-20 md:pb-24 lg:pb-32">
                  <div className="pl-4 xs:pl-6 sm:pl-8 md:pl-18 flex flex-col items-start gap-3">
                    <div className="mb-4 max-w-[90%] sm:max-w-[80%] lg:max-w-[700px]">
                      <h1 className="mb-2 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                        {slide.title}
                      </h1>

                      <div className="mb-4 bg-yellow-500 w-20 xs:w-30 h-1"></div>

                      <p className="text-white/90 mb-8 leading-relaxed text-sm xs:text-base sm:text-lg md:text-xl max-w-[600px] drop-shadow-md">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="hidden md:block">
          <button className="swiper-button-prev-custom absolute left-6 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 group border border-white/20">
            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-button-next-custom absolute right-6 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 group border border-white/20">
            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Custom Pagination Container */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="custom-swiper-pagination flex gap-2"></div>
        </div>

      </section>

      {/* Custom CSS untuk Swiper */}
      <style jsx global>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          opacity: 1;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background-color: #fff;
          width: 32px;
          border-radius: 6px;
        }
        .swiper-button-disabled {
          opacity: 0.1 !important;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
};

export default Hero;

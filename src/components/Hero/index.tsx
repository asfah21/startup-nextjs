import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
    <section id="home" className="relative w-full h-[60vh] xs:h-[65vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>

        {/* CONTENT */}
        <div className="relative z-10 flex items-end h-full px-4 xs:px-6 sm:px-8 md:px-10 pb-4 xs:pb-6 sm:pb-8 md:pb-12">
          
          <div className="pl-4 xs:pl-6 sm:pl-8 md:pl-18 flex flex-col items-start gap-3 xs:gap-4 sm:gap-4">
            
            {/* GARIS KUNING */}
            

            {/* TEXT */}
            <div className="max-w-[90%] xs:max-w-[85%] sm:max-w-[80%]">
              <h1 className="mb-2 xs:mb-3 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Empowering a Sustainable Future
              </h1>

              <div className="mb-3 bg-yellow-500 w-40 xs:w-50 h-1 xs:h-1 sm:h-1 md:h-1"></div>

              <p className="text-white/90 leading-relaxed text-xs xs:text-sm sm:text-base md:text-lg max-w-full xs:max-w-[95%] sm:max-w-[90%] md:max-w-[700px]">
                Committed to building solutions that support long-term environmental and social progress.
              </p>
            </div>

          </div>

        </div>
        {/* Background Image Container */}
        <div className="absolute inset-0 z-[-1]">
          <div className="relative h-full w-full">
            <Image
              src="/images/hero/home.png"
              alt="Hero Shape"
              fill
              className="object-cover object-right md:object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1920px"
              priority
              quality={85}
            />
            {/* Overlay untuk meningkatkan keterbacaan teks di mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent md:from-black/40 md:via-black/20 md:to-transparent" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

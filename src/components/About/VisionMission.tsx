"use client";
import { useTranslation } from "@/contexts/LanguageContext";
import Image from "next/image";

const VisionMission = () => {
  const { t } = useTranslation();
  const missionList = t("about.mission_list");

  const Chevron = ({ color }: { color: string }) => (
    <div className="absolute -left-2 top-6 z-10">
      <div className="flex flex-col space-y-0">
        <div 
          className="h-10 w-6" 
          style={{ 
            backgroundColor: color,
            clipPath: "polygon(0 0, 100% 50%, 0 100%, 40% 50%)" 
          }}
        />
        <div 
          className="h-10 w-6 opacity-70" 
          style={{ 
            backgroundColor: color,
            clipPath: "polygon(0 0, 100% 50%, 0 100%, 40% 50%)" 
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="VisionMission" className="relative overflow-hidden py-20 lg:py-32">
      {/* Section Background with Professional Pattern and Gradient */}
      <div className="absolute inset-0 -z-10 bg-gray-light dark:bg-bg-color-dark" />
      <div 
        className="absolute inset-0 -z-10 opacity-[0.4] dark:opacity-[0.2]" 
        style={{ 
          backgroundImage: `
            radial-gradient(#4a6cf7 0.5px, transparent 0.5px), 
            linear-gradient(90deg, rgba(74, 108, 247, 0.05) 1px, transparent 1px), 
            linear-gradient(0deg, rgba(74, 108, 247, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px, 40px 40px, 40px 40px',
          backgroundPosition: '10px 10px, 0 0, 0 0'
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-bg-color-dark/50 dark:to-bg-color-dark" />

      <div className="container relative z-20">
        <div className="-mx-4 flex flex-wrap justify-center items-stretch">
          {/* Vision Card */}
          <div className="w-full px-4 mb-8 md:mb-0 md:w-1/2 lg:w-5/12 xl:w-4/12 flex">
            <div className="relative flex w-full flex-col overflow-hidden rounded-[2rem] p-10 text-white shadow-2xl">
              {/* Background Layers */}
              <div className="absolute inset-0 -z-20 bg-[#e31e24]" />
              <div className="absolute inset-0 -z-10">
                <Image
                  src="/images/about/vision.avif"
                  alt="vision background"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover opacity-20"
                />
              </div>
              
              <Chevron color="#b3151a" />
              
              <div className="mb-10">
                <h2 className="text-5xl font-black">
                  {t("about.vision_title")}
                </h2>
              </div>
              
              <div className="flex-grow">
                <p className="text-lg font-base leading-relaxed text-justify">
                  {t("about.vision_description")}
                </p>
              </div>

              <div className="mt-auto flex items-center space-x-2 border-t border-white/20 pt-10">
                <span className="text-sm font-bold tracking-widest uppercase opacity-80">
                  VISI AIM GROUP
                </span>
                <div className="h-[2px] w-12 bg-white/40" />
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="w-full px-4 md:w-1/2 lg:w-6/12 xl:w-5/12 flex">
            <div className="relative flex w-full flex-col overflow-hidden rounded-[2rem] p-10 text-white shadow-2xl">
              {/* Background Layers */}
              <div className="absolute inset-0 -z-20 bg-[#199353]" />
              <div className="absolute inset-0 -z-10">
                <Image
                  src="/images/about/mision.webp"
                  alt="mission background"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover opacity-20"
                />
              </div>
              
              <Chevron color="#077239ff" />
              
              <div className="mb-8">
                <h2 className="text-5xl font-black">
                  {t("about.mission_title")}
                </h2>
              </div>

              <div className="flex-grow mb-4 space-y-4">
                {Array.isArray(missionList) &&
                  missionList.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 mb-2">
                      <span className="text-lg font-bold">{index + 1}.</span>
                      <p className="text-lg font-base leading-tight text-justify">
                        {item}
                      </p>
                    </div>
                  ))}
              </div>

              <div className="mt-auto flex items-center justify-end space-x-2 border-t border-white/20 pt-10">
                <div className="h-[2px] w-12 bg-white/40" />
                <span className="text-sm font-bold tracking-widest uppercase opacity-80">
                  MISI AIM GROUP
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;

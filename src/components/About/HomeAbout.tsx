"use client";
import Image from "next/image";
import { useTranslation } from "@/contexts/LanguageContext";

const HomeAbout = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-4/3 max-w-[550px] lg:m-0"
            >
              <Image
                src="/images/mining/ore-ni.webp"
                alt="About Anoa Indonesia Mekongga"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-3xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 z-10 hidden rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-dark lg:block">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xl font-bold text-black dark:text-white uppercase tracking-tighter">Reliable</span>
                    <span className="text-xs text-body-color uppercase tracking-widest">Performance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[550px] lg:ml-auto">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px] leading-tight">
                  {t("home_about.title")}
                </h2>
                <div className="space-y-6">
                  <p className="text-lg font-medium leading-relaxed text-body-color dark:text-body-color-dark text-justify">
                    {t("home_about.description")}
                  </p>
                  
                  {/* <div className="grid gap-6 sm:grid-cols-2 pt-2">
                    <div className="group relative rounded-2xl bg-white p-6 shadow-lg border border-gray-100 dark:bg-gray-dark dark:border-white/5 transition-all hover:-translate-y-1">
                      <h4 className="mb-2 text-xl font-bold text-black dark:text-white">{t("home_about.entity1")}</h4>
                      <p className="text-sm text-body-color">{t("home_about.entity1_desc")}</p>
                    </div>
                    <div className="group relative rounded-2xl bg-white p-6 shadow-lg border border-gray-100 dark:bg-gray-dark dark:border-white/5 transition-all hover:-translate-y-1">
                      <h4 className="mb-2 text-xl font-bold text-black dark:text-white">{t("home_about.entity2")}</h4>
                      <p className="text-sm text-body-color">{t("home_about.entity2_desc")}</p>
                    </div>
                  </div> */}

                  <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark text-justify italic">
                    {t("home_about.subtext")}
                  </p>

                  <div className="pt-2">
                    <div className="inline-flex items-center space-x-3 rounded-full bg-primary/10 px-6 py-2 text-primary border border-primary/20">
                      <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-widest">
                        {t("home_about.tagline")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;

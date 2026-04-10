"use client";
import { useTranslation } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Governance = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  const principles = [
    {
      id: 1,
      title: t("cg.principle1_title"),
      description: t("cg.principle1_description"),
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: t("cg.principle2_title"),
      description: t("cg.principle2_description"),
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: t("cg.principle3_title"),
      description: t("cg.principle3_description"),
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15L15 12L12 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 4,
      title: t("cg.principle4_title"),
      description: t("cg.principle4_description"),
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 -z-10 h-full w-full opacity-[0.03] dark:opacity-[0.05]">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container">
          {/* Header Section */}
          <div className="mx-auto max-w-[800px] text-center mb-20">
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-3xl lg:text-5xl">
              {t("cg.section_title")}
            </h2>
            <p className="text-lg font-medium leading-relaxed text-body-color dark:text-body-color-dark">
              {t("cg.section_description")}
            </p>
          </div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {principles.map((principle) => (
              <div 
                key={principle.id}
                className="group relative overflow-hidden rounded-[2rem] bg-white p-10 shadow-one transition-all duration-300 hover:shadow-two dark:bg-gray-dark border border-gray-100 dark:border-white/5"
              >
                <div className="absolute top-0 right-0 -mr-10 -mt-10 h-40 w-40 rounded-full bg-primary/5 transition-all duration-500 group-hover:scale-150"></div>
                
                <div className="relative z-10">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    {principle.icon}
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                    {principle.title}
                  </h3>
                  <p className="text-lg font-medium leading-relaxed text-body-color dark:text-body-color-dark text-justify">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Compliance & Ethics Section */}
          <div className="relative overflow-hidden rounded-[3rem] bg-black p-10 md:p-16 text-center text-white shadow-2xl">
            {/* Background pattern */}
            {/* <div className="absolute inset-0 opacity-10" 
              style={{ 
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }}
            /> */}
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>

            <div className="relative z-10 mx-auto max-w-[750px]">
              <h3 className="mb-6 text-3xl font-black md:text-4xl uppercase tracking-tight">
                {t("cg.compliance_title")}
              </h3>
              <div className="mx-auto mb-8 h-1 w-20 bg-primary"></div>
              <p className="text-lg font-medium leading-relaxed text-white/80">
                {t("cg.compliance_description")}
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Governance;

"use client";
import Image from "next/image";
import { useTranslation } from "@/contexts/LanguageContext";

const OrganizationStructure = () => {
  const { t } = useTranslation();

  return (
    <section id="OrganizationStructure" className="bg-white py-16 md:py-20 lg:py-28 dark:bg-bg-color-dark">
      <div className="container">
        <div className="mx-auto max-w-[800px] text-center mb-16 md:mb-24">
          <h2 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-5xl">
            {t("org.title")}
          </h2>
          {/* <div className="mx-auto h-1.5 w-20 bg-primary rounded-full mb-8"></div> */}
          <p className="text-lg font-medium leading-relaxed text-body-color dark:text-body-color-dark">
            {t("org.description")}
          </p>
        </div>

        <div className="mx-auto max-w-[1000px]">
          <div className="relative overflow-hidden rounded-3xl bg-white p-4 shadow-two dark:bg-dark border border-gray-100 dark:border-white/5">
            <Image
              src="/images/about/so.webp"
              alt="AIM Group Organization Structure"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationStructure;

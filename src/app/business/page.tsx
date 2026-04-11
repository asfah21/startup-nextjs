"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import HomeServices from "@/components/Home/HomeServices";
import { useTranslation } from "@/contexts/LanguageContext";

const BusinessPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Breadcrumb
        pageNameKey="business.breadcrumb_title"
        descriptionKey="business.breadcrumb_description"
        image="/images/mining/dt.webp"
        priority={true}
      />
      <HomeServices/>
      {/* <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center mb-12">
                <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl dark:text-white">
                  {t("business.section_title")}
                </h2>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg">
                  {t("business.section_description")}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            <div className="rounded-sm bg-white p-8 shadow-two dark:bg-dark duration-300 hover:shadow-one">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">{t("business.domain1_title")}</h3>
              <p className="text-base font-medium text-body-color">{t("business.domain1_description")}</p>
            </div>
            <div className="rounded-sm bg-white p-8 shadow-two dark:bg-dark duration-300 hover:shadow-one">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">{t("business.domain2_title")}</h3>
              <p className="text-base font-medium text-body-color">{t("business.domain2_description")}</p>
            </div>
            <div className="rounded-sm bg-white p-8 shadow-two dark:bg-dark duration-300 hover:shadow-one">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">{t("business.domain3_title")}</h3>
              <p className="text-base font-medium text-body-color">{t("business.domain3_description")}</p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default BusinessPage;

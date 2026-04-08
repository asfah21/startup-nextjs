"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useTranslation } from "@/contexts/LanguageContext";

const CorporateGovernancePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Breadcrumb
        pageNameKey="cg.breadcrumb_title"
        descriptionKey="cg.breadcrumb_description"
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl dark:text-white">
              {t("cg.section_title")}
            </h2>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg">
              {t("cg.section_description")}
            </p>
          </div>

          <div className="bg-white dark:bg-dark p-8 md:p-12 shadow-three rounded-xs mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">{t("cg.principle1_title")}</h3>
                <p className="text-base font-medium text-body-color">{t("cg.principle1_description")}</p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">{t("cg.principle2_title")}</h3>
                <p className="text-base font-medium text-body-color">{t("cg.principle2_description")}</p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">{t("cg.principle3_title")}</h3>
                <p className="text-base font-medium text-body-color">{t("cg.principle3_description")}</p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">{t("cg.principle4_title")}</h3>
                <p className="text-base font-medium text-body-color">{t("cg.principle4_description")}</p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-8 md:p-12 rounded-sm text-center">
            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">{t("cg.code_title")}</h3>
            <p className="mb-8 text-base font-medium text-body-color max-w-[700px] mx-auto">
              {t("cg.code_description")}
            </p>
            <button className="bg-black text-white dark:bg-white dark:text-black py-4 px-8 rounded-xs font-semibold hover:bg-black/80 dark:hover:bg-white/80 duration-300">
              {t("cg.code_cta")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CorporateGovernancePage;

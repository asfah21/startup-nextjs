"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useTranslation } from "@/contexts/LanguageContext";

const CareerPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Breadcrumb
        pageNameKey="career.breadcrumb_title"
        descriptionKey="career.breadcrumb_description"
        image="/images/career/career-1.avif"
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl dark:text-white">
              {t("career.section_title")}
            </h2>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg">
              {t("career.section_description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-20">
            <div className="p-8 bg-primary/5 rounded-sm">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">{t("career.benefit1_title")}</h3>
              <p className="text-base font-medium text-body-color">{t("career.benefit1_description")}</p>
            </div>
            <div className="p-8 bg-primary/5 rounded-sm">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">{t("career.benefit2_title")}</h3>
              <p className="text-base font-medium text-body-color">{t("career.benefit2_description")}</p>
            </div>
            <div className="p-8 bg-primary/5 rounded-sm">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">{t("career.benefit3_title")}</h3>
              <p className="text-base font-medium text-body-color">{t("career.benefit3_description")}</p>
            </div>
          </div>

          {/* Pamphlet Section */}
          <div className="mb-20">
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
              <div className="w-full max-w-[700px] shadow-two dark:shadow-none hover:shadow-primary/20 transition-all duration-300 rounded-xl overflow-hidden border border-stroke dark:border-strokedark bg-white dark:bg-gray-dark">
                <img
                  src="/images/career/pamflet-1.webp"
                  alt="Hiring Pamphlet"
                  className="w-full h-auto"
                />
              </div>
              {/* Note: User can add another div with max-w-[700px] here for 2nd column if needed */}
            </div>
          </div>

          <div className="bg-white dark:bg-dark p-8 md:p-12 shadow-three rounded-xs text-center">
            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">{t("career.openings_title")}</h3>
            {/* <p className="mb-8 text-base font-medium text-body-color">{t("career.openings_description")}</p> */}
            <a
              href="mailto:recruitment@aimgroup.id"
              className="bg-primary text-white py-4 px-8 rounded-xl font-semibold hover:bg-primary/90 duration-300 inline-block"
            >
              {t("career.send_cv")}
            </a>
            <p className="mt-4 text-base font-medium text-body-color">
              {t("career.email_instruction")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerPage;

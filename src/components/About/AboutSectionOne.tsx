"use client";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useTranslation } from "@/contexts/LanguageContext";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const { t } = useTranslation();
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className=" border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title={t("about.title")}
                paragraph={t("about.paragraph")}
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text={t("about.operational_excellence")} />
                    <List text={t("about.safety_commitment")} />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text={t("about.strong_governance")} />
                    <List text={t("about.sustainable_growth")} />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-25/17 max-w-[700px] lg:mr-0">
                <Image
                  src="/images/about/about-2.avif"
                  alt="about-image"
                  fill
                  sizes="(max-width: 960px) 70vw, 400px"
                  className="rounded-xl mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                {/* <Image
                  src="/images/about/about-1.avif"
                  alt="about-image"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;

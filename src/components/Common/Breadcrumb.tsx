"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";

const Breadcrumb = ({
  pageName,
  description,
  image,
  pageNameKey,
  descriptionKey,
  priority = false,
}: {
  pageName?: string;
  description?: string;
  image?: string;
  pageNameKey?: string;
  descriptionKey?: string;
  priority?: boolean;
}) => {
  const { t } = useTranslation();

  const displayPageName = pageNameKey ? t(pageNameKey) : pageName;
  const displayDescription = descriptionKey ? t(descriptionKey) : description;

  return (
    <>
      <section className="relative z-10 overflow-hidden bg-gray-light pt-[110px] pb-6 dark:bg-gray-dark md:pt-[130px] md:pb-12 lg:pt-[150px]">
        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
                <h1 className={`mb-3 text-xl font-extrabold sm:text-2xl md:text-3xl md:mb-5 ${image ? 'text-white' : 'text-black dark:text-white'}`}>
                  {displayPageName}
                </h1>
                <div className="bg-yellow-500 w-20 h-[2px] mb-3 md:w-30 md:h-1"></div>
                <p className={`text-sm font-medium leading-relaxed sm:text-base ${image ? 'text-white' : 'text-body-color'}`}>
                  {displayDescription}
                </p>
              </div>
            </div>
            <div className="hidden w-full px-4 md:block md:w-4/12 lg:w-5/12">
              <div className="text-end">
                <ul className="flex items-center md:justify-end">
                  <li className="flex items-center bg-white px-3 rounded-l-lg">
                    <Link
                      href="/"
                      className="pr-1 text-base font-medium text-body-color hover:text-primary"
                    >
                      {t("breadcrumb.home")}
                    </Link>
                    <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span>
                  </li>
                  <li className="text-base font-medium text-primary bg-white px-3 rounded-r-lg ">
                    {displayPageName}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {image && (
          <div className="absolute top-0 left-0 -z-10 h-full w-full">
            <Image
              src={image}
              alt="Background"
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority={priority}
            />
            <div className="absolute top-0 left-0 h-full w-full bg-black/50"></div>
          </div>
        )}
      </section>
    </>
  );
};

export default Breadcrumb;

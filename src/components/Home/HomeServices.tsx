"use client";
import SectionTitle from "../Common/SectionTitle";
import { useTranslation } from "@/contexts/LanguageContext";
import Image from "next/image";

const HomeServices = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      title: t("services.contractor_title"),
      description: t("services.contractor_desc"),
      image: "/images/mining/gc.webp",
      scopeLabel: t("services.scope_label"),
      scope: t("services.contractor_scope") as string[],
    },
    {
      id: 2,
      title: t("services.mining_title"),
      description: t("services.mining_desc"),
      image: "/images/mining/mining.webp",
      scopeLabel: t("services.scope_label"),
      scope: t("services.mining_scope") as string[],
    },
    {
      id: 3,
      title: t("services.rental_title"),
      description: t("services.rental_desc"),
      image: "/images/mining/eb.webp",
      scopeLabel: t("services.scope_label"),
      scope: t("services.rental_scope") as string[],
    },
  ];

  return (
    <section id="services" className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title={t("services.title")}
          paragraph={t("services.description")}
          center
          width="85%"
          mb="80px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
            >
              <div className="relative h-[240px] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <p className="mb-6 text-base text-justify font-medium leading-relaxed text-body-color dark:text-body-color-dark">
                  {service.description}
                </p>
                <div className="border-t border-gray-100 pt-6 dark:border-white/10">
                  <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">
                    {service.scopeLabel} :
                  </h4>
                  <ul className="space-y-3">
                    {Array.isArray(service.scope) && service.scope.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-body-color dark:text-body-color-dark">
                        <span className="mr-3 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;

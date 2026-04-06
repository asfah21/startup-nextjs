import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Governance | PT AIM",
  description: "Learn more about our governance, values, and leadership principles at PT AIM.",
};

const CorporateGovernancePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Corporate Governance"
        description="At PT AIM, we prioritize integrity, accountability, and transparency in all our business dealings and leadership actions."
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl dark:text-white">
              Our Governance Principles
            </h2>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg">
              We ensure sustainable growth and value for all stakeholders through robust corporate governance practices.
            </p>
          </div>

          <div className="bg-white dark:bg-dark p-8 md:p-12 shadow-three rounded-xs mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Accountability</h3>
                  <p className="text-base font-medium text-body-color">
                    We take full responsibility for our actions and decisions, ensuring alignment with stakeholder interests.
                  </p>
               </div>
               <div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Transparency</h3>
                  <p className="text-base font-medium text-body-color">
                    Open communication with our stakeholders, providing clear and accurate information about our performance.
                  </p>
               </div>
               <div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Integrity</h3>
                  <p className="text-base font-medium text-body-color">
                    Upholding the highest ethical standards in every transaction and interaction.
                  </p>
               </div>
               <div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Sustainability</h3>
                  <p className="text-base font-medium text-body-color">
                    Governance focused on long-term value creation and social responsibility.
                  </p>
               </div>
            </div>
          </div>

          <div className="bg-primary/5 p-8 md:p-12 rounded-sm text-center">
            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Code of Conduct</h3>
            <p className="mb-8 text-base font-medium text-body-color max-w-[700px] mx-auto">
              Our code of conduct provides guidance for ethical behavior and helps maintain our reputation for integrity.
            </p>
            <button className="bg-black text-white dark:bg-white dark:text-black py-4 px-8 rounded-xs font-semibold hover:bg-black/80 dark:hover:bg-white/80 duration-300">
               Read Code of Conduct PDF
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CorporateGovernancePage;

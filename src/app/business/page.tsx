import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Page | PT AIM",
  description: "Learn more about our business operations.",
};

const BusinessPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Business"
        description="At PT AIM, we are committed to delivering innovative and sustainable business solutions across various sectors."
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center mb-12">
                <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl dark:text-white">
                  Our Business Domains
                </h2>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg">
                  We specialize in providing end-to-end solutions that empower foundations and businesses to reach their maximum potential.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {/* Domain Item 1 */}
            <div className="rounded-sm bg-white p-8 shadow-two dark:bg-dark duration-300 hover:shadow-one">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Infrastructure</h3>
              <p className="text-base font-medium text-body-color">
                Building the backbone of modern society with reliable and sustainable infrastructure projects.
              </p>
            </div>
            {/* Domain Item 2 */}
            <div className="rounded-sm bg-white p-8 shadow-two dark:bg-dark duration-300 hover:shadow-one">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Technology Services</h3>
              <p className="text-base font-medium text-body-color">
                Leveraging cutting-edge AI and data analytics to solve complex operational challenges.
              </p>
            </div>
            {/* Domain Item 3 */}
            <div className="rounded-sm bg-white p-8 shadow-two dark:bg-dark duration-300 hover:shadow-one">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Consulting</h3>
              <p className="text-base font-medium text-body-color">
                Providing expert strategic advice to help businesses navigate the ever-changing market landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessPage;

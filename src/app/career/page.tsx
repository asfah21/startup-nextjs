import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers Page | Join PT AIM",
  description: "Explore career opportunities and join our innovative team.",
};

const CareerPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Careers"
        description="Join a team that values innovation, integrity, and sustainable growth. Be a part of the PT AIM legacy."
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl dark:text-white">
              Why Work With Us?
            </h2>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg">
              We empower our employees to grow and innovate, providing a supportive environment where ideas can flourish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-20">
            {/* Benefit Item 1 */}
            <div className="p-8 bg-primary/5 rounded-sm">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Innovation First</h3>
              <p className="text-base font-medium text-body-color">
                Work on cutting-edge projects that push the boundaries of what is possible.
              </p>
            </div>
            {/* Benefit Item 2 */}
            <div className="p-8 bg-primary/5 rounded-sm">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Career Growth</h3>
              <p className="text-base font-medium text-body-color">
                We invest in our people through continuous learning and development programs.
              </p>
            </div>
            {/* Benefit Item 3 */}
            <div className="p-8 bg-primary/5 rounded-sm">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Inclusive Culture</h3>
              <p className="text-base font-medium text-body-color">
                Join a diverse team that values unique perspectives and collaborative spirit.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-dark p-8 md:p-12 shadow-three rounded-xs text-center">
            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">Current Openings</h3>
            <p className="mb-8 text-base font-medium text-body-color">
              Currently, there are no open vacancies. Please check back later or send your CV to our talent database.
            </p>
            <button className="bg-primary text-white py-4 px-8 rounded-xs font-semibold hover:bg-primary/90 duration-300">
               Send Your CV
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerPage;

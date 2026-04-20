import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import VisionMission from "@/components/About/VisionMission";
import OrganizationStructure from "@/components/About/OrganizationStructure";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AIM Group",
  description: "Learn more about AIM Group - our vision, mission, and commitment to excellence.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageNameKey="about.breadcrumb_title"
        descriptionKey="about.breadcrumb_description"
        image="/images/about/about-0.avif"
        priority={true}
      />
      <AboutSectionOne />
      <VisionMission />
      <OrganizationStructure />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;

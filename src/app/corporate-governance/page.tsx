"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Governance from "@/components/CorporateGovernance/Governance";

const CorporateGovernancePage = () => { 

  return (
    <>
      <Breadcrumb
        pageNameKey="cg.breadcrumb_title"
        descriptionKey="cg.breadcrumb_description"
        image="/images/corporate/01.avif"
        priority={true}
      />

      <Governance />
      
      
    </>
  );
};

export default CorporateGovernancePage;

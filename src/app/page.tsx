import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import HomeAbout from "@/components/About/HomeAbout";
import HomeServices from "@/components/Home/HomeServices";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import CorporateGovernancePage from "./corporate-governance/page";

export const metadata: Metadata = {
  title: "AIM Group | Home",
  description: "This is Home for AIM Group",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <HomeAbout />
      <HomeServices />
      <CorporateGovernancePage/>
      {/* <Features />
      <Video />
      <Brands />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact /> */}
    </>
  );
}

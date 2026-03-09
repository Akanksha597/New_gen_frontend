import Image from "next/image";
import AboutBanner from "@/Compoents/Aboutus/Aboutusbanner";
import AboutSection from "@/Compoents/Home/Empoweringlearners";
import Prograssbar from "@/Compoents/Aboutus/Progressbar";
import ClientLogoSlider from "@/Compoents/Aboutus/Studentsworking";
import DevelopmentSection from "@/Compoents/DevelopmentSection/DevelopmentSection";
import Gallery from "@/Compoents/Aboutus/Gallery";
import Testimonials from "@/Compoents/Home/realsuccess";
import Freedemo from "@/Compoents/Home/Freedemo";
import JobPortalLoginPage from "@/Compoents/SynapraxisInti/JobPortalLoginPage";
export default function About() {
  return (
    <>
      <AboutBanner />
      <AboutSection />
      <Prograssbar />
      <Gallery />
      <Testimonials />
      <Freedemo />
      {/* <DevelopmentSection /> */}
      <ClientLogoSlider />
      {/* <JobPortalLoginPage /> */}
    </>
  );
}

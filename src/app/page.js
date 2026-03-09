import Image from "next/image";
import styles from "./page.module.css";

import AnimalSlider from "@/Compoents/Home/Homebanner";
import EngagingContentImage from "@/Compoents/Home/homeabout";
// import AnimatedCourses from "@/Compoents/Home/Featuredcourses";
import Featuredcourses from "@/Compoents/Home/Featuredcourses";
import Corporate from "@/Compoents/Home/Corporate";
import Whychooseus from "@/Compoents/Home/Newgroup";
import Testimonials from "@/Compoents/Home/realsuccess";
import Freedemo from "@/Compoents/Home/Freedemo";
import AboutSection from "@/Compoents/Home/Empoweringlearners";
import UpcomingBatches from "@/Compoents/Upcomeningbatch/Upconeing";
import OurServices from "@/Compoents/casestudies";
import JobPortalLoginPage from "@/Compoents/SynapraxisInti/JobPortalLoginPage";


export default function Home() {
  return (
    <>
      <AnimalSlider />
      {/* <BookSlider /> */}
      <EngagingContentImage />
      <Featuredcourses />
      <Whychooseus />
      <Corporate />
      <AboutSection />
      <UpcomingBatches />
      <OurServices />
      {/* <Empoweringlearners /> */}
      <Testimonials />
      <Freedemo />
      {/* <JobPortalLoginPage /> */}
    </>
  );
}

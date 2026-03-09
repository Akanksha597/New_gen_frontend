import Coreapplication from "@/Compoents/DevelopmentSection/Coreapplication";
import DevelopmentSection from "@/Compoents/DevelopmentSection/DevelopmentSection";
import DevelopmentBanner from "@/Compoents/DevelopmentSection/Developmentbanner";
import TechLogos from "@/Compoents/DevelopmentSection/Technology";
import ClientLogoSlider from "@/Compoents/Aboutus/Studentsworking";
import Services from "@/Compoents/DevelopmentSection/Developmentservices";
import JobPortalLoginPage from "@/Compoents/SynapraxisInti/JobPortalLoginPage";
export default function Development() {
  return (
   <>
   <DevelopmentBanner />
   <DevelopmentSection/>
   <Coreapplication />
   <TechLogos />
   <Services />
   <ClientLogoSlider />
   <JobPortalLoginPage />
   

   </>
  );
}

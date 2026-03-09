import React, { Suspense } from "react";
import EnrollmentForm from "@/Compoents/AdmissionForm/AdmissionForm";
import AboutBanner from "@/Compoents/Aboutus/Aboutusbanner";

export default function Admission() {
  return (
    <div>
      
      <AboutBanner />
       <Suspense fallback={<div>Loading...</div>}>
      <EnrollmentForm/>
      </Suspense>
    </div>
  );
}
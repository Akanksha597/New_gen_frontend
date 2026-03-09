"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import Banner from "../Banner";
import WhatYoullLearn from "../WhatYoullLearn";
import CoursesDesign from "../coursesDesign";
import Testimonials from "@/Compoents/Home/realsuccess";
import Freedemo from "@/Compoents/Home/Freedemo";
import CertificatePromo from "@/Compoents/Certificated";
import OurServices from "@/Compoents/casestudies";

// const API_URL = "http://localhost:5016/api/v1/courses";

const CourseDetailsPage = () => {
  const params = useParams();
  const courseId = params.id;
  const router = useRouter();

  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/courses/${courseId}`);
        setCourse(res.data.data);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };
    fetchCourse();
  }, [courseId]);

  if (!course)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          fontSize: "18px",
          color: "#555",
        }}
      >
        Loading...
      </div>
    );

  const handleEnroll = () => {
    router.push(
      `/AdmissionForm?batchId=${course._id}&courseName=${encodeURIComponent(
        course.courseName
      )}&fee=${course.fee}`
    );
  };

  return (
    <>
      <Banner />
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          padding: "40px 20px",
          background: "linear-gradient(180deg, #f3f8fb 0%, #eef6fb 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            background: "rgba(255,255,255,0.3)",
            backdropFilter: "blur(15px)",
            borderRadius: "16px",
            boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            style={{
              alignSelf: "flex-start",
              padding: "8px 18px",
              background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            ← Back
          </button>

          {/* Course Title */}
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#222",
              textAlign: "center",
            }}
          >
            {course.courseName}
          </h1>

          {/* Image + Details Flex Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "30px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {/* Course Image */}
            <div style={{ flex: "1 1 400px", maxWidth: "500px", position: "relative", height: "300px" }}>
              <Image
                src={
                  course.images?.[0]?.url ||
                  "https://via.placeholder.com/500x300?text=No+Image"
                }
                alt={course.title || "Course image"}
                fill
                style={{ objectFit: "cover", borderRadius: "12px" }}
                priority
              />

            </div>

            {/* Course Details */}
            <div
              style={{
                flex: "1 1 400px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "16px",
                color: "#333",
              }}
            >
              <p>
                <strong>Description:</strong> {course.description}
              </p>
              <p>
                <strong>Duration:</strong> {course.duration}
              </p>
              <p>
                <strong>Fee:</strong> ₹{course.fee}
              </p>
              <p>
                <strong>Category:</strong> {course.category}
              </p>
              <p>
                <strong>Contact:</strong> {course.contactNumber}
              </p>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  flexWrap: "wrap",
                  marginTop: "10px",
                }}
              >
                {course.isUpcomingBatch && (
                  <button
                    onClick={handleEnroll}
                    style={{
                      padding: "12px 25px",
                      background: "linear-gradient(90deg, #000000ff, #b60707ff)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "10px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      fontSize: "16px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    Enroll Now
                  </button>
                )}

                {course.syllabus?.url && (
                  <a
                    href={course.syllabus.url}
                    download
                    style={{
                      padding: "12px 25px",
                      background: "transparent",
                      border: "2px solid #101a1bff",
                      color: "#dc3636ff",
                      borderRadius: "10px",
                      fontWeight: "bold",
                      fontSize: "16px",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#071011ff";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#dc3636ff";
                    }}
                  >
                    Download Syllabus
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatYoullLearn />
      {/* <CoursesDesign /> */}
      <CertificatePromo />
      <OurServices />
      <Testimonials />
      <Freedemo />
    </>
  );
};

export default CourseDetailsPage;

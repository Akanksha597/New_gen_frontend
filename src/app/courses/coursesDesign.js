// app/courses/page.jsx
"use client";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CoursesDesign() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const courses = {
    dotnet: ["C# 6.0","ASP.NET Web Forms","ASP.NET MVC 5.2","Web Services & WCF","WPF & Silverlight","LINQ","Entity Framework","ASP.NET Live Project","Design Pattern",".NET Developer"],
    cpp: ["C Language","C++ OOPS","Advanced C++"],
    web: ["HTML5","CSS3","JavaScript","ReactJS","NextJS"],
    digital: ["SEO","Google Ads","Social Media Marketing"],
    new: ["AI/ML Basics","Data Science","Blockchain"],
    app: ["Android Development","iOS Development","Flutter"],
    sharepoint: ["SharePoint Basics","Advanced SharePoint"],
    testing: ["Selenium","JUnit","Manual Testing"],
    cloud: ["AWS","Azure","Google Cloud"],
    salesforce: ["Admin Basics","Apex","LWC"],
    python: ["Core Python","Django","Flask"],
    java: ["Core Java","Spring Boot","Hibernate"]
  };

  const getCategoryName = (key) => {
    const names = {
      dotnet: ".NET",
      cpp: "C & C++",
      web: "Web Technologies",
      digital: "Digital Marketing",
      new: "New Courses",
      app: "App Development",
      sharepoint: "SharePoint",
      testing: "Testing Tools",
      cloud: "Cloud Computing",
      salesforce: "Salesforce",
      python: "Python",
      java: "Java"
    };
    return names[key] || key;
  };

  return (
    <div className="container py-5" style={{ minHeight: "100vh" }}>
      {/* Hero */}
      <div className="text-center mb-5">
        <h2 className="fw-bold display-5" style={{ color: "#0d1b3a" }}>Your Journey Begins Here</h2>
        <p className="text-secondary fs-5">Explore more, learn more, achieve more!</p>
      </div>

      {/* Courses Grid */}
      <div className="row g-4">
        {Object.keys(courses).map((key) => {
          const isExpanded = expandedCategory === key;
          return (
            <div className="col-md-6 col-lg-4" key={key}>
              <div
                className={`card h-100 border-0 shadow-lg position-relative overflow-hidden`}
                style={{
                  borderRadius: "20px",
                  background: "linear-gradient(145deg, #667eea, #764ba2)",
                  color: "#fff",
                  cursor: "pointer",
                  transform: isExpanded ? "scale(1.05)" : "scale(1)",
                  transition: "all 0.4s ease",
                }}
                onClick={() => setExpandedCategory(isExpanded ? null : key)}
              >
                {/* Animated overlay gradient */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(120deg, rgba(255,255,255,0.1), rgba(0,0,0,0))",
                    pointerEvents: "none",
                    transform: "translateY(-100%)",
                    transition: "transform 0.5s ease",
                    zIndex: 1,
                  }}
                  className={isExpanded ? "overlay-active" : ""}
                ></div>

                <div className="card-body d-flex flex-column justify-content-between position-relative" style={{ zIndex: 2 }}>
                  <div>
                    <h5 className="card-title fw-bold mb-2">{getCategoryName(key)}</h5>
                    <p className="small mb-3">{courses[key].length} Courses Available</p>
                    <ul className="list-unstyled mb-0">
                      {courses[key].slice(0, isExpanded ? courses[key].length : 3).map((course, i) => (
                        <li key={i} className="mb-1" style={{ transition: "all 0.3s", opacity: isExpanded ? 1 : 0.9, transform: isExpanded ? "translateX(0)" : "translateX(-10px)" }}>
                          ✔ {course}
                        </li>
                      ))}
                      {!isExpanded && courses[key].length > 3 && (
                        <li className="text-info mt-1 fw-semibold">+ {courses[key].length - 3} more...</li>
                      )}
                    </ul>
                  </div>

                  <div className="mt-3 text-end">
                    <span style={{ fontWeight: "600", color: "#ffeaa7", transition: "all 0.3s" }}>
                      {isExpanded ? "Show Less ▲" : "Read More ▼"}
                    </span>
                  </div>
                </div>

                {/* Hover floating effect */}
                <style jsx>{`
                  .card:hover {
                    transform: scale(1.08) translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                  }
                `}</style>
              </div>
            </div>
          );
        })}
      </div>

      {/* Explore Courses Button */}
      <div className="text-center mt-5">
        <button
          className="btn px-5 py-2 fw-bold rounded-pill shadow"
          style={{
            background: "linear-gradient(90deg, #ff416c, #ff4b2b)",
            border: "none",
            color: "#fff",
            fontSize: "1.1rem",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => { e.target.style.transform = "scale(1.05)"; e.target.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)"; }}
          onMouseLeave={(e) => { e.target.style.transform = "scale(1)"; e.target.style.boxShadow = "none"; }}
        >
          Explore Courses →
        </button>
      </div>
    </div>
  );
}

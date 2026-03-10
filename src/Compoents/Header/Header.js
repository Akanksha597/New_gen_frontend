"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../../app/Styles/Header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCode, FaDatabase, FaCloud, FaCogs, FaFire } from "react-icons/fa";
import ThemeToggle from "../toggleTheme ";
import Image from "next/image";
// const API_URL = "http://localhost:5016/api/v1/courses";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [courses, setCourses] = useState([]);

  const toggleNavbar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/courses`);
        const data = await res.json();
        setCourses(data?.data || []);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  // Handle "All Courses" click → navigate + toggle dropdown
  const handleCoursesClick = () => {
    router.push("/CoursesPage");
    setShowCourses(!showCourses);
    setIsOpen(false);
  };

  // Close dropdown on any link click
  const handleLinkClick = () => {
    setShowCourses(false);
    setIsOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg shadow-sm ${styles.stickyHeader}`}>
      <div className="container">
        {/* Logo */}
        <a
          className="navbar-brand"
          onClick={() => router.push("/")}
          style={{ cursor: "pointer" }}
        >
       <Image
  src="/Assests/logo/NEWGEN-Softech-Logo.png"
  alt="Newgen Logo"
  width={150}
  height={50}
  style={{ objectFit: "contain" }}
/>
        </a>

        {/* Toggle button */}
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className={styles.toggleButton}>{isOpen ? "×" : "☰"}</span>
        </button>

        {/* Nav items */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className={`navbar-nav ms-auto ${styles.navItems}`}>
            {/* All Courses with dropdown */}
            <li className={`nav-item ${styles.navItem}`}>
              <span
                className={`${styles.navLink} ${pathname === "/CoursesPage" ? styles.activeLink : ""}`}
                onClick={handleCoursesClick}
                style={{ cursor: "pointer" }}
              >
                All Courses <span style={{ fontSize: "0.6rem" }}>▼</span>
              </span>

              {/* Mega Menu */}
              {showCourses && (
                <div className={styles.megaMenu}>
                  <div className="container">
                    <div className="row">
                      {["development", "database", "cloud"].map((cat) => (
                        <div key={cat} className="col-lg-3 col-md-6 mb-4">
                          <h6>
                            {cat === "development" && <FaCode />} 
                            {cat === "database" && <FaDatabase />} 
                            {cat === "cloud" && <FaCloud />}{" "}
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                          </h6>
                          <ul className={styles.megaList}>
                            {courses
                              .filter((c) => c.category?.toLowerCase() === cat)
                              .map((course) => (
                                <li key={course._id}>
                                  <Link
                                    href={`/courses/${course._id}`}
                                    className={styles.courseLink}
                                    onClick={handleLinkClick}
                                  >
                                    {course.courseName}{" "}
                                    {course.isTrending && <FaFire style={{ color: "red" }} />}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      ))}

                      {/* SAP + Testing side by side */}
                      <div className="col-lg-3 col-md-6 mb-4">
                        <div className="row">
                          {["sap", "testing"].map((cat, idx) => (
                            <div key={cat} className={`col-6`}>
                              <h6>
                                <FaCogs /> {cat.charAt(0).toUpperCase() + cat.slice(1)}
                              </h6>
                              <ul className={styles.megaList}>
                                {courses
                                  .filter((c) => c.category?.toLowerCase() === cat)
                                  .map((course) => (
                                    <li key={course._id}>
                                      <Link
                                        href={`/courses/${course._id}`}
                                        className={styles.courseLink}
                                        onClick={handleLinkClick}
                                      >
                                        {course.courseName}{" "}
                                        {course.isTrending && <FaFire style={{ color: "red" }} />}
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Other static pages */}
            {[
              { href: "/AboutUs", label: "About Us" },
              { href: "/UpcomingBatches", label: "UpComing Batches" },
              // { href: "/Development", label: "Development" },
              // { href: "/TechnicalSupport", label: "Technical Support" },
              { href: "/hiring", label: "Job openings" },
              { href: "/ContactUs", label: "Contact Us" },
              { href: "/Login", label: "Login Here" },
            ].map(({ href, label }) => (
              <li key={href} className={`nav-item ${styles.navItem}`}>
                <Link
                  href={href}
                  className={`${styles.navLink} ${pathname === href ? styles.activeLink : ""}`}
                  onClick={handleLinkClick}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme toggle (desktop) */}
         
        </div>
      </div>
    </nav>
  );
};

export default Header;

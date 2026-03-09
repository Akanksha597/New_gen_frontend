"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import styles from "../../app/Styles/coursespage.module.css";
import Link from "next/link";
import Image from "next/image";

// const API_URL = "http://localhost:5016/api/v1/courses";

const FIXED_CATEGORIES = ["All", "Development", "Database", "Cloud", "SAP", "Other"];

// ✅ Course Card Component
const CourseCard = ({ course }) => {
  const imageUrl =
    course.images?.length > 0
      ? course.images[0].url
      : "https://via.placeholder.com/400x200?text=No+Image";

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className={`${styles.card3d} ${styles.glassCard}`}>
        {/* Image */}
        <div className={styles.cardMedia}>
          <Image
            src={imageUrl}
            alt={course.courseName}
            fill
            style={{ objectFit: "cover", borderRadius: "8px" }}
            priority
          />
        </div>

        {/* Body */}
        <div className={styles.cardBody}>
          <h5 className={styles.cardTitle}>{course.courseName}</h5>
          <p className={styles.cardDesc}>{course.description}</p>
          <div className={styles.metaRow}>
            <span>
              <strong>Duration:</strong> {course.duration}
            </span>
            <span>
              <strong>Fee:</strong> ₹{course.fee}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className={styles.cardFooter}>
          {course.syllabus?.url ? (
            <a
              href={course.syllabus.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.syllabusBtn}
            >
              View Syllabus
            </a>
          ) : (
            <button disabled className={styles.disabledBtn}>
              No Syllabus
            </button>
          )}

          <Link href={`/courses/${course._id}`} className={styles.exploreBtn}>
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};

// ✅ Main Courses Page
const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/courses`);
        const apiData = res.data.data;
        const allCourses = Array.isArray(apiData)
          ? apiData
          : apiData
          ? [apiData]
          : [];
        setCourses(allCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <Container className="py-5">
      {/* Hero Section */}
      <div className={styles.hero}>
        <h2 className={styles.heroTitle}>
          Explore the variety of Professional Journey below...
        </h2>
      </div>

      {/* Category Tabs */}
      <div className={styles.tabsWrap}>
        {FIXED_CATEGORIES.map((cat, idx) => (
          <button
            key={idx}
            className={`${styles.tabPill} ${
              activeCategory === cat ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="row mt-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No courses found in this category.</p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default CoursesPage;

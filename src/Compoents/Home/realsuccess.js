"use client";

import React, { useState, useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../app/Styles/Testimonials.module.css";

const reviews = [
  {
    name: "John Doe",
    image: "/Assets/Testimonials/student1.jpg",
    text: "Replenish him third creature and meat blessed void a fruit gathered you’re. Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    name: "Jane Smith",
    image: "/Assets/Testimonials/student2.jpg",
    text: "Lorem Ipsum has roots in a piece of classical Latin literature from 45 BC, making it more than 2000 years old and still relevant today.",
  },
  {
    name: "Michael Johnson",
    image: "/Assets/Testimonials/student3.jpg",
    text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: "Emily Davis",
    image: "/Assets/Testimonials/student4.jpg",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical literature.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change testimonial every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.testimonialsSection}>
      <Container className="text-center py-5 position-relative">
        <h2 className="">Words from Those We’ve Empowered</h2>
        <h5 className="mb-5">Real success stories from students powered by our expert IT training. See how we transform teams! </h5>

        {/* Center Testimonial with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className={styles.centerTestimonial}
          >
            {/* <Image
              src={reviews[currentIndex].image}
              roundedCircle
              width={100}
              height={100}
              alt={reviews[currentIndex].name}
              className="mb-3 shadow"
            /> */}
            <p
              className="mt-3 mx-auto"
              style={{ maxWidth: "600px", fontStyle: "italic" }}
            >
              {reviews[currentIndex].text}
            </p>
            <h5 className="mt-2 fw-bold">{reviews[currentIndex].name}</h5>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className={styles.dotsContainer}>
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                currentIndex === index ? styles.activeDot : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>

        {/* Floating side images (static, not from JSON) */}
        <Image
          src="/Assests/Testimonials/logo.png"
          roundedCircle
          width={60}
          height={60}
          alt="Floating 1"
          className={`${styles.floatingImage} ${styles.img1}`}
        />

             
        <Image
        src="/Assests/Testimonials/logo.png"
          roundedCircle
          width={60}
          height={60}
          alt="Floating 2"
          className={`${styles.floatingImage} ${styles.img2}`}
        />
        <Image
         src="/Assests/Testimonials/logo.png"
          roundedCircle
          width={60}
          height={60}
          alt="Floating 3"
          className={`${styles.floatingImage} ${styles.img3}`}
        />
        <Image
         src="/Assests/Testimonials/logo.png"
          roundedCircle
          width={60}
          height={60}
          alt="Floating 4"
          className={`${styles.floatingImage} ${styles.img4}`}
        />

        
      </Container>
    </section>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../app/Styles/Gallery.module.css";

const images = [

  "/Assests/Ourgallery/2024-09-12.webp",
  "/Assests/Ourgallery/newgen-softech-aundh-pune-software-testing-institutes-2ssie65r4d.avif",
  "/Assests/Ourgallery/newgen-softech-aundh-pune-software-testing-institutes-zo9bhbk2bf.avif",
  "/Assests/Ourgallery/newgen-softech-aundh-pune-software-testing-institutes-guqastq2jm.avif",

];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`${styles.gallerySection} py-5`}>
      <Container>
        <h2 className="text-center fw-bold mb-4">Our Gallery</h2>

        {/* Main Image */}
        <Row className="justify-content-center">
          <Col md={10} xs={12} className="text-center">
            <div className={styles.mainImage}>
              <Image
                src={images[activeIndex]}
                alt={`Main ${activeIndex}`}
                width={900}
                height={500}
                className="img-fluid rounded-4 shadow"
              />
            </div>
          </Col>
        </Row>

        {/* Thumbnails */}
        <Row className="mt-4 justify-content-center">
          <Col md={10}>
            <div className={`${styles.thumbnails} d-flex flex-wrap justify-content-center gap-3`}>
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`${styles.thumbWrapper} ${
                    index === activeIndex ? styles.activeThumb : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <Image
                    src={src}
                    alt={`Thumb ${index}`}
                    width={140}
                    height={90}
                    className="img-fluid rounded-3 shadow"
                  />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;

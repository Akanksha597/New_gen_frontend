"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGlobe, FaMobileAlt } from "react-icons/fa";

export default function Services() {
  return (
    <Container fluid className="py-5 bg-light">
      {/* Section 1 - Left Image | Right Content */}
      <Row className="align-items-center mb-5">
        <Col md={6} className="mb-4 mb-md-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
               src="/Assests/uiix.jpg"
              alt="Web Design & Development"
              width={600}
              height={400}
              className="img-fluid rounded-4 shadow"
            />
          </motion.div>
        </Col>
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="p-3"
          >
            <div className="d-flex align-items-center mb-3">
              <FaGlobe size={32} className="text-primary me-2" />
              <h2 className="fw-bold mb-0">Development Services</h2>
            </div>
            <h4 className="text-secondary mb-3">Web Design & Development</h4>
            <p className="text-muted fs-5">
              In today’s digital age, a well-crafted website is not just an
              online presence—it’s a powerful tool for business growth, brand
              visibility, and customer engagement.
            </p>
            <p className="text-muted fs-5">
              With over <strong>18 years</strong> of experience and{" "}
              <strong>1,000+ successful projects</strong>, we create
              high-performance websites and tailored solutions that help
              businesses leverage cutting-edge technology for growth.
            </p>
          </motion.div>
        </Col>
      </Row>

      {/* Section 2 - Left Content | Right Image */}
      <Row className="align-items-center flex-md-row-reverse">
        <Col md={4} className="mb-4 mb-md-0">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
              src="/Assests/mobileapplication.jpg"
              alt="Mobile Application Development"
              width={600}
              height={100}
              className="img-fluid rounded-4 shadow"
            />
          </motion.div>
        </Col>
        <Col md={8}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="p-3"
          >
            <div className="d-flex align-items-center mb-3">
              <FaMobileAlt size={32} className="text-success me-2" />
              <h2 className="fw-bold mb-0">Mobile Application Development</h2>
            </div>
            <p className="text-muted fs-5">
              Smartphones have transformed how businesses engage with customers.
              Newgen Softtech has been at the forefront of mobile technology,
              developing high-performance mobile applications that enhance user
              experience and drive growth.
            </p>
            <p className="text-muted fs-5">
              Our expert developers build <strong>feature-rich</strong>,
              scalable, and intuitive apps for both <strong>Android</strong> and{" "}
              <strong>iOS</strong>, ensuring seamless digital experiences that
              increase customer engagement and ROI.
            </p>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

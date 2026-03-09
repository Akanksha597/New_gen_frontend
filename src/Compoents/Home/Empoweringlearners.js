"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaLaptopCode, FaLightbulb, FaUsers } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const cards = [
  {
    title: "Industry-Ready Training",
    description:
      "Transforming individuals into industry-ready professionals through cutting-edge technology training and development.",
    icon: <FaLaptopCode size={50} color="white" />,
    gradient: "linear-gradient(135deg, #060607ff, #a31d28)",
  },
  {
    title: "Innovative Learning",
    description:
      "Blending emerging web and mobile technologies with proven teaching methodologies for a transformative online education experience.",
    icon: <FaLightbulb size={50} color="white" />,
    gradient: "linear-gradient(135deg, #060607ff, #a31d28)",
  },
  {
    title: "Community Engagement",
    description:
      "Inspiring learners, engaging educators, and connecting with communities through insightful content and interactive learning sessions.",
    icon: <FaUsers size={50} color="white" />,
    gradient: "linear-gradient(135deg, #060607ff, #a31d28)",
  },
];

const AboutSection = () => {
  return (
    <section style={{ padding: "50px 0" }}>
      <Container>
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Know About Us</h2>
          <p className="mx-auto text-md-center text-start" style={{ maxWidth: "800px" }}>
            Innovate, Learn, and Lead with Technology Excellence. Empowering
            learners through transformative education, cutting-edge technology
            training, and immersive development experiences to become
            future-ready professionals and leaders in the ever-evolving digital
            landscape.
          </p>
        </div>

        {/* Cards */}
        <Row className="g-4">
          {cards.map((card, index) => (
            <Col md={4} key={index} className="d-flex">
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "20px",
                  padding: "40px 20px",
                  minHeight: "100%", // ensures all cards stretch
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
                  transition: "all 0.3s ease-in-out",
                  width: "100%",
                }}
              >
                {/* Animated Icon */}
                <motion.div
                  style={{
                    background: card.gradient,
                    borderRadius: "50%",
                    padding: "20px",
                    marginBottom: "20px",
                    display: "inline-block",
                    boxShadow: `0 10px 30px ${card.gradient.replace(
                      /linear-gradient.*\((.*)\)/,
                      "$1"
                    )}66`,
                  }}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  whileHover={{ scale: 1.2 }}
                >
                  {card.icon}
                </motion.div>

                {/* Card Content */}
                <h4 className="fw-bold text-center mb-3">{card.title}</h4>
                <p className="text-center">{card.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;

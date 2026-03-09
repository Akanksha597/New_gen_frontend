"use client";
import React from "react";
import { Container } from "react-bootstrap";

const AboutBanner = () => {
  return (
    <Container
      fluid
      className="px-0 d-flex align-items-center mt-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/Assests/Aboutbanner/programming-background-collage.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "clamp(200px, 50vw, 500px)",
        marginBottom: "20px"
      }}
    >
      {/* You can add content here */}
    </Container>
  );
};

export default AboutBanner;

"use client";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles   from "../../app/Styles/Freedemo.module.css"

export default function Coreapplication() {
  return (
    <Container className="py-5">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/Assests/development2.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "80px 20px",
          borderRadius: "15px",
          backgroundColor: "#28235c",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
          color: "white",
        }}
      >
        <Row className="justify-content-center text-center">
          <Col lg={8} md={10}>
            <h2 className="fw-bold mb-3">
             Core Application Development

            </h2>
            <p className="mb-4 text-start text-lg-center">
             At Newgen Softtech, we are a globally recognized team of software engineers, delivering custom software solutions that drive innovation and business success. Since 1997, we have developed numerous enterprise applications, CMS platforms, process automation tools, and databases—adapting to the latest technologies to offer scalable and future-ready solutions. We prioritize customized software engineering that aligns with your business goals, industry trends, and evolving technology to ensure a competitive edge.
            </p>
            <Button href="/ContactUs" className={styles.buttonCustom}>
            Get Access Now →
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

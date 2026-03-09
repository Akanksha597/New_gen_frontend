"use client";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles   from "../../app/Styles/Freedemo.module.css"

export default function Freedemo() {
  return (
    <Container className="py-5">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url("/Assests/Newbanner.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "100px 20px",
          borderRadius: "15px",
          backgroundColor: "#28235c",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
          color: "white",
        }}
      >
        <Row className="justify-content-end text-center">
          <Col lg={8} md={10}>
            <h2 className="fw-bold mb-3">
            Get A Free Demo Session

            </h2>
            <p className="mb-4 text-start text-lg-center">
             Discover what it’s like to be part of Newgen—real experiences from those who’ve been there
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

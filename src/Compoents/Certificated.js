"use client";

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import certificateImg from "../../public/Assests/Languageicon/single-course-06.webp";

const CertificatePromo = () => {
  const [hired, setHired] = useState(0);
  const [enrolled, setEnrolled] = useState(0);

  useEffect(() => {
    let hiredTarget = 3000;
    let enrolledTarget = 10000;

    const interval = setInterval(() => {
      setHired((prev) => (prev < hiredTarget ? prev + 50 : hiredTarget));
      setEnrolled((prev) => (prev < enrolledTarget ? prev + 100 : enrolledTarget));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="certificate-section py-5 position-relative overflow-hidden">
      <Container className="position-relative z-2">
        <div className="certificate-card p-4 rounded-4 shadow-lg">
          <Row className="align-items-center g-4 flex-column flex-md-row">
            {/* Image */}
            <Col xs={12} md={6} className="text-center mb-3 mb-md-0">
            <div className="img-wrapper rounded-4 overflow-hidden">
  <Image
    src={certificateImg}
    alt="Certificate"
    style={{ width: "100%", height: "auto", objectFit: "contain" }}
  />
</div>

            </Col>

            {/* Content */}
            <Col xs={12} md={6} className="text-center text-md-start">
              <h2 className="fw-bold mb-3 text-white">Get Certified and Boost Your Career!</h2>
              <p className="mb-4 text-white-50">
                Enroll in our courses and earn industry-recognized certificates to boost your skills and career!
              </p>

              {/* Stats */}
              <div className="d-flex flex-column flex-sm-row flex-wrap gap-4 mb-4 justify-content-center justify-content-md-start">
                <div className="d-flex align-items-center gap-2">
                  <span className="fs-4 text-white">🎯</span>
                  <div>
                    <h6 className="mb-0 fw-bold text-white">{hired.toLocaleString()}+</h6>
                    <small className="text-white">Got Hired</small>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <span className="fs-4 text-white">📈</span>
                  <div>
                    <h6 className="mb-0 fw-bold text-white">{enrolled.toLocaleString()}+</h6>
                    <small className="text-white">Enrolled</small>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <span className="fs-4 text-white">📚</span>
                  <div>
                    <h6 className="mb-0 fw-bold text-white">Industry Relevant</h6>
                    <small className="text-white">Curriculum</small>
                  </div>
                </div>
              </div>

              <Button className="enroll-btn fw-bold px-4 py-2 shadow-lg">
                Enroll Now
              </Button>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Background Shapes */}
      <div className="bg-shape bg-shape1"></div>
      <div className="bg-shape bg-shape2"></div>

      {/* Styles */}
      <style jsx>{`
        .certificate-section {
          background: linear-gradient(135deg, #1f2c56 0%, #2a3a78 100%);
          position: relative;
        }

        .certificate-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          border: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .certificate-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        }

        .certificate-img {
          max-width: 100%;
          height: auto;
          transition: transform 0.5s ease;
          animation: float 4s ease-in-out infinite;
        }

        .certificate-img:hover {
          transform: scale(1.1) rotate(-2deg);
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .enroll-btn {
          background: linear-gradient(45deg, #ffb347, #ffcc33);
          border: none;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .enroll-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(255, 204, 51, 0.6);
        }

        .bg-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.15;
          animation: float-shape 8s ease-in-out infinite alternate;
        }

        .bg-shape1 {
          width: 300px;
          height: 300px;
          top: -50px;
          left: -50px;
          background: #ffb347;
        }

        .bg-shape2 {
          width: 200px;
          height: 200px;
          bottom: -40px;
          right: -40px;
          background: #33ccff;
        }

        @keyframes float-shape {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(15deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
      `}</style>
    </section>
  );
};

export default CertificatePromo;

"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Link from "next/link";

const EngagingContentImage = () => {
  return (
    <section className="about-section ">
      <Container>
        <Row className="align-items-center g-md-5 g-0">
          {/* Left - Glass Content */}

            <Col lg={6}>
            <h4 className="fw-bold mb-3 text-center d-block d-lg-none">
  <span>Your Gateway To Knowledge, Anytime, Anywhere!</span>
</h4>

            <div className="single-image">
              
              <Image
                src="/Assests/Homecourses/Laptop[1].png"
                alt="Main"
                fill
                priority
                className="rounded-4"
              
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="glass-box p-md-5 rounded-4">
           <h3 className="fw-bold mb-3 d-none d-md-block">
  <span>Your Gateway To Knowledge, Anytime, Anywhere!</span>
</h3>


              <p className="mb-4">
               Learn the skills you need to stay ahead in a fast-changing world. Our platform provides comprehensive courses that cater to learners at all levels, helping you achieve success.

Explore hands-on projects designed to build real-world expertise.
Gain guidance from industry experts who mentor you every step of the way.
Join a community of learners and grow together, achieving your goals faster.
              </p>

              <div className="d-flex gap-3">
                <Link href="/AboutUs">
                  <button className="btn-modern-gradient px-4">About Us</button>
                </Link>
              </div>
            </div>
          </Col>

          {/* Right - Single Full Image */}
        
        </Row>
      </Container>

      <style jsx>{`
        /* Glass card */
        .glass-box {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: #333;
        }

        /* Animated Gradient Title */
        .title span {
          display: inline-block;
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          background: linear-gradient(
            90deg,
            #ff6ec7,
            #7366ff,
            #00c6ff,
            #ff6ec7
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientFlow 7s ease infinite;
        }

        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Gradient Button */
        .btn-modern-gradient {
          background:linear-gradient(90deg, #060607ff, #a31d28) !important;
          color: #fff;
          border: none;
          border-radius: 50px;
          box-shadow: 0 6px 20px rgba(0, 114, 255, 0.25);
          transition: transform 0.3s ease, background 0.3s ease;
          height: 40px !important;
        }

        /* Single Image */
        .single-image {
          position: relative;
          width: 100%;
          min-height: 400px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .title span {
            font-size: 2rem;
          }
          .single-image {
            min-height: 250px;
          }
        }
      `}</style>
    </section>
  );
};

export default EngagingContentImage;

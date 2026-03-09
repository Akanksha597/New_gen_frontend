"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Link from "next/link";

const Corporate = () => {
  return (
    <section className="about-section mt-5">
      <Container>
        <Row className="align-items-center g-md-5 g-0">
          {/* Left - 2 Images with floating animation */}

          {/* Right - Glass Content */}
          <Col lg={6}>
            <div className="glass-box p-md-5 rounded-4">
              <h3 className="fw-bold mb-3">
                <span>Corporate Training Program</span>
              </h3>

              <p className="">Enhance Your Employees IT Skills</p>
              <ul className="mb-4 list-disc list-inside text-gray-700">
                <li>
                  Providing IT-related corporate training for the past two
                  years, focusing on top corporate companies across India.
                </li>
                <li>
                  Training available in Pune and Bangalore with a strong
                  emphasis on clearing doubts and enhancing technical expertise.
                </li>
              </ul>

              <div className="d-flex gap-3 mb-5">
                <Link href="/ContactUs" className='btn-modern-gradient px-4'>
                <button className="btn btn-modern-gradient px-4">
            Explore More
          </button>
          </Link>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="image-grid">
              <div className="image-box big rounded-4 shadow-lg">
                <Image
                  src="/Assests/Corporatetranning/corporatrimage1.jpg"
                  alt="Main"
                  fill
                  priority
                  className="rounded-4 shadow-lg"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="image-box small rounded-4 shadow-lg">
                <Image
                  src="/Assests/Corporatetranning/corporateimage2.jpg"
                  alt="Side"
                  fill
                  className="rounded-4 shadow-lg"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        /* Image layout with floating effect */
        .image-grid {
          display: grid;
          grid-template-columns: 1fr 0.7fr;
          gap: 1rem;
          align-items: end;
        }
        .image-box {
          overflow: hidden;
          position: relative; /* required for next/image fill */
          animation: float 6s ease-in-out infinite;
          min-height: 250px; /* ensures images have height */
        }
        .big {
          animation-delay: 0s;
          min-height: 350px;
        }
        .small {
          animation-delay: 3s;
          min-height: 200px;
        }
        .image-box :global(img) {
          transition: transform 0.5s ease;
        }
        .image-box:hover :global(img) {
          transform: scale(1.08);
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

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
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Gradient Button */
        .btn-modern-gradient {
          background: linear-gradient(90deg, #060607ff, #a31d28) !important;
          color: #fff;
          border: none;
          border-radius: 50px;
          box-shadow: 0 6px 20px rgba(0, 114, 255, 0.25);
          transition: transform 0.3s ease, background 0.3s ease;
          height: 40px !important;
        }
        .btn-modern-gradient:hover {
          transform: translateY(-3px);
          background: linear-gradient(90deg, #00c6ff, #7366ff, #ff6ec7);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .image-grid {
            grid-template-columns: 1fr;
          }
          .small {
            display: none;
          }
          .big {
            min-height: 250px;
          }
          .title span {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Corporate;

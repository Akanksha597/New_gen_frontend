"use client";

import { Accordion, Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import SupportImg from "../../../public/Assests/Technical support/support.png";

export default function SupportSection() {
  return (
    <section className="support-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h6 className="text-gradient fw-bold mb-2">TECHNICAL SUPPORT</h6>
          <h2 className="fw-bold">
            <span className="text-primary">We Support</span> Personalized Solutions for Your Needs
          </h2>
        </div>

        <Row className="align-items-center g-4 flex-column-reverse flex-md-row">
          <Col md={6} className="text-center text-md-start">
            <div className="image-wrapper mb-4 mb-md-0">
              <Image
                src={SupportImg}
                alt="Technical Support"
                className="support-image"
                priority
              />
            </div>
          </Col>

          <Col md={6}>
            <Accordion defaultActiveKey="0" flush className="accordion-modern">
              {[
                {
                  title: "MS.NET Development",
                  desc: "Expertise in C#, VB.NET, ASP.NET Web Forms, ASP.NET MVC, WCF, WPF, and Cloud Hosting solutions."
                },
                {
                  title: "Java Application Development",
                  desc: "Custom Java solutions for enterprise and web applications."
                },
                {
                  title: "Mobile Application Development",
                  desc: "Build scalable mobile apps for Android and iOS with modern frameworks."
                },
                {
                  title: "Web Development",
                  desc: "Full-stack web development with modern technologies and responsive design."
                },
                {
                  title: "Database Technologies",
                  desc: "Expertise in SQL, NoSQL, and cloud-based database solutions."
                }
              ].map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{item.title}</Accordion.Header>
                  <Accordion.Body>{item.desc}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .support-section {
          background: linear-gradient(135deg, #f3f6fd 0%, #e9f0ff 100%);
        }

        .text-gradient {
          background: linear-gradient(90deg, #6a11cb, #2575fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 14px;
          letter-spacing: 1px;
        }

        h2 {
          font-weight: 800;
          line-height: 1.3;
          font-size: 2rem;
        }

        @media (max-width: 767px) {
          h2 {
            font-size: 1.6rem;
          }
        }

        .image-wrapper {
          display: inline-block;
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }

       
        .support-image {
          border-radius: 20px;
          max-width: 100%;
          height: auto;
        }

        .accordion-modern .accordion-item {
          border: none;
          border-radius: 12px;
          margin-bottom: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s;
        }

        .accordion-modern .accordion-item:hover {
          transform: translateY(-3px);
        }

        .accordion-modern .accordion-button {
          font-weight: 600;
          background: #ffffff;
          border-radius: 12px;
          color: #333;
          box-shadow: none;
        }

        .accordion-modern .accordion-button:not(.collapsed) {
          background: #6a11cb;
          color: white;
        }

        .accordion-modern .accordion-body {
          background: #f9faff;
          color: #555;
        }

        @media (max-width: 575px) {
          .accordion-modern .accordion-button {
            font-size: 0.95rem;
            padding: 0.75rem 1rem;
          }

          .accordion-modern .accordion-body {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}

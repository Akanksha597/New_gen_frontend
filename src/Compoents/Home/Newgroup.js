"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "bootstrap/dist/css/bootstrap.min.css";

const timelineData = [
  {
    value: 1000,
    suffix: " hr+",
    icon: "bi bi-bar-chart-line-fill",
    colors: {
      card: "linear-gradient(90deg, #060607ff, #a31d28)",
      icon: "#060607ff",
      bullet: "#ffffffff",
    },
    points: ["Expert-Led Courses: Covering diverse topics to enhance your skills." ,"Hands-On Projects: Apply your learning through practical exercises and real-world scenarios." ,"Flexible Learning: Access courses anytime, anywhere to learn at your own pace." ,"Career Advancement Support: Gain certifications and guidance to boost your professional growth."],
  },
  {
    value: 10000,
    suffix: "+",
    icon: "bi bi-globe2",
    colors: {
      card: "linear-gradient(90deg, #060607ff, #a31d28)",
      icon: "#a31d28",
      bullet: "#ffffffff",
    },
    points: ["Happy Learners: Transforming lives through education." , "Skilled Professionals: Empowering individuals to excel in their careers." ,"Innovative Minds: Fostering creativity and critical thinking." ,"Lifelong Growth: Encouraging continuous learning and personal development."],
  },
  {
    value: 95,
    suffix: "%+",
    icon: "bi bi-trophy-fill",
    colors: {
       card: "linear-gradient(90deg, #060607ff, #a31d28)",
     icon: "#060607ff",
      bullet: "#ffffffff",
    },
    points: ["Success Rate: Learners achieving their goals with our courses." ,"Over 95% of learners report improved technical skills within weeks." , "80% of participants successfully apply their learning in real projects.", "High learner satisfaction with personalized doubt-clearing sessions."],
  },
  {
    value: 4.9,
    suffix: "+",
    decimals: 1,
    icon: "bi bi-star-fill",
    colors: {
     card: "linear-gradient(90deg, #060607ff, #a31d28)",
      icon: "#a31d28",
      bullet: "#ffffffff",
    },
    points: ["Learner Rating: Trusted by thousands for quality education." , "Consistently rated 4.8/5 by our learners for course quality and delivery." , "Positive feedback for interactive sessions and hands-on learning."  , "High repeat enrollment rate due to satisfaction and trust in our training programs."],
  },
];

export default function Whychooseus() {
  return (
    <section className="" style={{ background: "#f7f9fc" }}>
      <Container>
        {/* Heading */}
        <h2 className="text-center mb-3 fw-bold">
         
          Our{" "}
         
            Why Choose Us ?
        
        
        </h2>
        <p className="text-center mb-5 text-muted fs-5">
          Creating A Community Of Life Long Learners.
        </p>

        <div className="position-relative">
          {/* Vertical Line */}
          <div
            className="position-absolute top-0 bottom-0 start-50 translate-middle-x d-none d-md-block"
            style={{ width: "3px", backgroundColor: "#ddd", zIndex: 0 }}
          ></div>

          {timelineData.map((item, index) => (
            <Row key={index} className="mb-5 mb-md-0 position-relative align-items-center">
              {/* --- Small Screen Layout (Icon + Counter on top, card below) --- */}
              <Col xs={12} className="d-flex flex-column align-items-center d-md-none mb-4">
                {/* Icon */}
                <motion.div
                  className="d-flex align-items-center justify-content-center mb-3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  style={{
                    width: "85px",
                    height: "85px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    border: `3px solid ${item.colors.icon}`,
                    zIndex: 2,
                    boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
                  }}
                >
                  <i className={`${item.icon}`} style={{ fontSize: "30px", color: item.colors.icon }}></i>
                </motion.div>

                {/* Counter */}
                <div className="fw-bold" style={{ fontSize: "22px", color: item.colors.icon }}>
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2}
                    decimals={item.decimals || 0}
                    suffix={item.suffix}
                  />
                </div>
              </Col>

              <Col xs={12} className="d-flex justify-content-center d-md-none">
                <motion.div
                  className="p-4 rounded shadow card-glass"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  style={{
                    background: item.colors.card,
                    color: "#fff",
                    maxWidth: "420px",
                    borderRadius: "20px",
                  }}
                >
                  <ul className="mb-0">
                    {item.points.map((point, i) => (
                      <li key={i} className="mb-2 d-flex align-items-start fs-6">
                        <span
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            backgroundColor: item.colors.bullet,
                            marginRight: "10px",
                            marginTop: "6px",
                            flexShrink: 0,
                          }}
                        ></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Col>

              {/* --- Large Screen Layout --- */}
              <Col xs={12} md={5} className={`d-none d-md-flex ${index % 2 === 0 ? "justify-content-md-end" : "justify-content-md-start"}`}>
                {index % 2 === 0 && (
                  <motion.div
                    className="p-4 rounded shadow card-glass"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                      background: item.colors.card,
                      color: "#fff",
                      maxWidth: "420px",
                      borderRadius: "20px",
                    }}
                  >
                    <ul className="mb-0">
                      {item.points.map((point, i) => (
                        <li key={i} className="mb-2 d-flex align-items-start fs-6">
                          <span
                            style={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              backgroundColor: item.colors.bullet,
                              marginRight: "10px",
                              marginTop: "6px",
                              flexShrink: 0,
                            }}
                          ></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </Col>

              {/* Icon + Counter on large screens */}
              <Col xs={12} md={2} className="d-none d-md-flex flex-column align-items-center text-center">
                <motion.div
                  className="d-flex align-items-center justify-content-center mb-3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  style={{
                    width: "85px",
                    height: "85px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    border: `3px solid ${item.colors.icon}`,
                    zIndex: 2,
                    boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
                  }}
                >
                  <i className={`${item.icon}`} style={{ fontSize: "30px", color: item.colors.icon }}></i>
                </motion.div>
                <div className="fw-bold" style={{ fontSize: "22px", color: item.colors.icon }}>
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2}
                    decimals={item.decimals || 0}
                    suffix={item.suffix}
                  />
                </div>
              </Col>

              <Col xs={12} md={5} className={`d-none d-md-flex ${index % 2 === 0 ? "justify-content-md-start" : "justify-content-md-end"}`}>
                {index % 2 !== 0 && (
                  <motion.div
                    className="p-4 rounded shadow card-glass"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                      background: item.colors.card,
                      color: "#fff",
                      maxWidth: "420px",
                      borderRadius: "20px",
                    }}
                  >
                    <ul className="mb-0">
                      {item.points.map((point, i) => (
                        <li key={i} className="mb-2 d-flex align-items-start fs-6">
                          <span
                            style={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              backgroundColor: item.colors.bullet,
                              marginRight: "10px",
                              marginTop: "6px",
                              flexShrink: 0,
                            }}
                          ></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </Col>
            </Row>
          ))}
        </div>
      </Container>

      <style jsx>{`
        .card-glass {
          transition: all 0.3s ease;
        }
        .card-glass:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
}

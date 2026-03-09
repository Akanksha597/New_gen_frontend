"use client";

import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaMicrosoft, FaJava, FaPython, FaReact , FaDatabase, FaFileInvoiceDollar, FaProjectDiagram , FaChartLine, FaBrain, FaRobot , FaAws , FaDocker } from "react-icons/fa";

const Featuredcourses = () => {
  const servicesData = [
    {
title: "Cloud Computing Courses",
  image: "/Assests/Homecourses/aws developer.png", // replace with your image
  description:
    "Become a cloud computing expert with hands-on training in AWS, Azure, and DevOps. Learn to design, deploy, and manage cloud infrastructure, automate workflows, and ensure scalable, secure, and highly available solutions.",
  points: [
    {
      icon: <FaAws color="#FF9900" />,
      text: "AWS: Learn Amazon Web Services cloud architecture, deployment, EC2, S3, Lambda, and cloud solutions.",
    },
    {
      icon: <FaDocker color="#0db7ed" />,
      text: "DevOps: Master CI/CD pipelines, automation tools, containerization, monitoring, and infrastructure as code.",
    },
    {
      icon: <FaMicrosoft color="#0078D7" />,
      text: "Azure: Understand Microsoft Azure services, virtual machines, app services, databases, and cloud integration.",
    },
  ],
  link: "/CoursesPage",
},
   {
 title: "Database & Data Courses",
  image: "/Assests/Homecourses/sql develop.png", // replace with your image
  description:
    "Master the world of data with comprehensive courses in databases, analytics, engineering, and AI. Gain hands-on experience with real-world datasets, tools, and frameworks to become a skilled data professional.",
  points: [
    {
      icon: <FaDatabase color="#1E90FF" />,
      text: "PL/SQL: Learn advanced SQL queries, procedures, triggers, and database management skills.",
    },
    {
      icon: <FaChartLine color="#28A745" />,
      text: "Data Analytics: Analyze, visualize, and interpret data to drive business decisions.",
    },
    {
      icon: <FaProjectDiagram color="#FFA500" />,
      text: "Data Engineering: Build data pipelines, manage ETL processes, and work with large-scale data architectures.",
    },
    // {
    //   icon: <FaBrain color="#6f42c1" />,
    //   text: "Data Science: Apply statistical modeling, machine learning, and predictive analytics to solve complex problems.",
    // },
    // {
    //   icon: <FaRobot color="#FF4500" />,
    //   text: "AI Developer: Learn artificial intelligence, deep learning, and neural networks to build intelligent applications.",
    // },
  ],
  link: "/data-courses",
},

{
    title: "SAP Courses",
  image: "/Assests/Homecourses/saas-concept-collage.jpg", // replace with your SAP image
  description:
    "Master SAP modules with practical, industry-focused training. Gain expertise in material management, financial accounting, production planning, and more. Learn how to implement SAP solutions to optimize business processes and drive efficiency.",
  points: [
    {
      icon: <FaDatabase color="#1E90FF" />,
      text: "SAP MM (Materials Management): Manage procurement, inventory, and warehouse operations efficiently.",
    },
    {
      icon: <FaFileInvoiceDollar color="#28A745" />,
      text: "SAP FICO (Finance & Controlling): Handle financial accounting, controlling, and reporting with real-world examples.",
    },
    {
      icon: <FaProjectDiagram color="#FFA500" />,
      text: "SAP PP (Production Planning): Optimize production processes, planning, and scheduling in manufacturing environments.",
    },
  ],
  link: "/sap-courses",
},


   
 
    {
      title: "Development",
      image: "/Assests/Homecourses/dotnet.png",
      description:
        "Master Full Stack Development with industry-relevant skills and hands-on projects. Gain expertise in frontend, backend, databases, APIs, and cloud deployment using popular stacks like .NET, Java, Python, and MERN.",
      points: [
        {
          icon: <FaMicrosoft color="#5A9BD5" />,
          text: ".NET Full Stack: Build enterprise-grade applications with ASP.NET Core, C#, SQL Server, and Angular/React.",
        },
        {
          icon: <FaJava color="#f05123" />,
          text: "Java Full Stack: Learn Java, Spring Boot, Hibernate, MySQL, and frontend frameworks like Angular/React.",
        },
        {
          icon: <FaPython color="#FFD43B" />,
          text: "Python Full Stack: Develop scalable apps with Django/Flask, PostgreSQL/MongoDB, and modern frontend tools.",
        },
        // {
        //   icon: <FaReact color="#61DBFB" />,
        //   text: "MERN Stack: Gain expertise in MongoDB, Express.js, React.js, and Node.js for dynamic web solutions.",
        // },
      ],
      link: "/development-courses",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section style={{ padding: "60px 0" }}>
      <Container>
        <h2 className="fw-bold text-center">Featured Courses</h2>
        <h5 className="text-start text-lg-center mb-4">Enhance Your Skills with Expert-Led Learning.</h5>

        {/* Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {servicesData.map((service, i) => (
            <Button
              key={i}
              onClick={() => setActive(i)}
              style={{
                minWidth: "120px",
                flex: "1 1 auto",
                background: active === i ? "linear-gradient(90deg, #060607ff, #a31d28)" : "#fff",
                color: active === i ? "#fff" : "#28235c",
                border: "2px solid #28235c",
                borderRadius: "25px",
                padding: "8px 20px",
                fontWeight: "600",
              }}
            >
              {service.title}
            </Button>
          ))}
        </div>

        {/* Animated Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="d-flex flex-column flex-md-row mt-4 gap-4"
          >
            <div style={{ flex: 1 }}>
              <Image
                src={servicesData[active].image}
                alt={servicesData[active].title}
                width={600}
                height={350}
                style={{ width: "100%", borderRadius: "12px", objectFit: "cover" }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <h4 className="fw-bold">{servicesData[active].title}</h4>
              <p>{servicesData[active].description}</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {servicesData[active].points.map((p, i) => (
                  <li
                    key={i}
                    className="d-flex align-items-center gap-3 mb-3"
                    style={{
                      padding: "10px",
                      borderRadius: "10px",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                      transition: "transform 0.3s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        background: "#f5f5f5",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        flexShrink: 0,
                      }}
                    >
                      {p.icon}
                    </div>
                    <span>{p.text || p}</span>
                  </li>
                ))}
              </ul>
              <div className="d-flex" style={{ justifyContent: "end" }}>
                <Button
                  href={servicesData[active].link}
                  style={{
                    background: "linear-gradient(90deg, #060607ff, #a31d28)",
                    border: "none",
                    borderRadius: "6px",
                    padding: "8px 20px",
                  }}
                >
                  Read More
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};

export default Featuredcourses;

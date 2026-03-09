// // "use client";
// // import React from "react";
// // import { Container, Row, Col, Card } from "react-bootstrap";
// // import { Doughnut } from "react-chartjs-2";
// // import {
// //   Chart as ChartJS,
// //   ArcElement,
// //   Tooltip,
// //   Legend,
// // } from "chart.js";
// // import "bootstrap/dist/css/bootstrap.min.css";

// // ChartJS.register(ArcElement, Tooltip, Legend);

// // const Prograssbar = () => {
// //   const stats = [
// //     { title: "On Track for Excellence", value: 99, color: "#4CAF50" },
// //     { title: "Practical Guidance", value: 99, color: "#2196F3" },
// //     { title: "Placements", value: 100, color: "#FFC107" },
// //     { title: "Certification Support", value: 99, color: "#F44336" },
// //     { title: "Instructor Effectiveness", value: 100, color: "#9C27B0" },
// //   ];

// //   return (
// //     <Container className="my-5">
// //       <h2 className="text-center mb-5">Our Key Metrics</h2>
// //       <Row className="g-4 justify-content-center">
// //         {stats.map((stat, idx) => {
// //           const data = {
// //             labels: [stat.title, ""],
// //             datasets: [
// //               {
// //                 label: stat.title,
// //                 data: [stat.value, 100 - stat.value],
// //                 backgroundColor: [stat.color, "#e0e0e0"],
// //                 borderWidth: 1,
// //               },
// //             ],
// //           };

// //           const options = {
// //             cutout: "70%",
// //             responsive: true,
// //             plugins: {
// //               legend: { display: false },
// //               tooltip: { enabled: true },
// //             },
// //             animation: {
// //               animateRotate: true,
// //               animateScale: true,
// //             },
// //           };

// //           return (
// //             <Col key={idx} xs={12} sm={6} md={4} lg={3}>
// //               <Card className="text-center shadow p-3 rounded">
// //                 <Card.Body>
// //                   <Doughnut data={data} options={options} />
// //                   <h5 className="mt-3">{stat.title}</h5>
// //                   <h3>{stat.value}%</h3>
// //                 </Card.Body>
// //               </Card>
// //             </Col>
// //           );
// //         })}
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default Prograssbar;



// "use client";
// import React from "react";
// import { Container } from "react-bootstrap";
// import CountUp from "react-countup";
// import { FaChalkboardTeacher, FaGraduationCap, FaCertificate, FaUsers } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";

// const stats = [
//   { title: "Practical Guidance", value: 99, icon: <FaChalkboardTeacher />, color: "#FF6B6B" },
//   { title: "Placements", value: 100, icon: <FaGraduationCap />, color: "#4ECDC4" },
//   { title: "Certification Support", value: 99, icon: <FaCertificate />, color: "#556270" },
//   { title: "Instructor Effectiveness", value: 100, icon: <FaUsers />, color: "#C7F464" },
// ];

// const Prograssbar = () => {
//   return (
//     <Container fluid className="py-5" style={{ background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)" }}>
//       <h2 className="text-center mb-5" style={{ fontWeight: "700", fontSize: "2.5rem", color: "#333" }}>
//         Our Key Metrics
//       </h2>
//       <div className="stats-container">
//         {stats.map((stat, idx) => (
//           <div
//             key={idx}
//             className="stat-block"
//             style={{
//               '--bg-color': stat.color,
//             }}
//           >
//             <div className="icon">{stat.icon}</div>
//             <div className="number">
//               <CountUp end={stat.value} duration={2} suffix="%" />
//             </div>
//             <div className="title">{stat.title}</div>
//           </div>
//         ))}
//       </div>
//       <style jsx>{`
//         .stats-container {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//           gap: 2rem;
//         }

//         .stat-block {
//           background: var(--bg-color);
//           color: #fff;
//           width: 200px;
//           height: 220px;
//           border-radius: 25px;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           position: relative;
//           overflow: hidden;
//           box-shadow: 0 10px 30px rgba(0,0,0,0.2);
//           transition: transform 0.4s, box-shadow 0.4s;
//         }

//         .stat-block::before {
//           content: '';
//           position: absolute;
//           width: 200%;
//           height: 200%;
//           background: rgba(255,255,255,0.15);
//           top: -50%;
//           left: -50%;
//           transform: rotate(45deg);
//           animation: rotateAnim 6s linear infinite;
//         }

//         @keyframes rotateAnim {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }

//         .stat-block:hover {
//           transform: translateY(-15px) scale(1.05);
//           box-shadow: 0 20px 40px rgba(0,0,0,0.3);
//         }

//         .icon {
//           font-size: 3rem;
//           margin-bottom: 1rem;
//         }

//         .number {
//           font-size: 2rem;
//           font-weight: 700;
//         }

//         .title {
//           font-size: 1rem;
//           font-weight: 500;
//           margin-top: 0.5rem;
//           text-align: center;
//         }

//         @media (max-width: 768px) {
//           .stat-block {
//             width: 150px;
//             height: 180px;
//           }
//           .icon { font-size: 2.5rem; }
//           .number { font-size: 1.7rem; }
//         }
//       `}</style>
//     </Container>
//   );
// };

// export default Prograssbar;

// "use client";

// import React from "react";
// import { Container } from "react-bootstrap";
// import { motion } from "framer-motion";
// import "bootstrap/dist/css/bootstrap.min.css";

// const features = [
//   { title: "Progress That Powers Success", icon: "📈" },
//   { title: "On Track for Excellence", icon: "⭐" },
//   { title: "Practical Guidance", icon: "🎯" },
//   { title: "99% Placements", icon: "💼" },
// ];

// export default function Prograssbar() {
//   return (
//     <Container fluid className="bg-dark text-white py-5 d-flex justify-content-center">
//       <div
//         className="position-relative d-flex justify-content-center align-items-center"
//         style={{ width: "600px", height: "600px" }}
//       >
//         {/* Circle Border */}
//         <div
//           className="rounded-circle position-absolute"
//           style={{
//             width: "100%",
//             height: "100%",
//             border: "2px solid rgba(255,255,255,0.2)",
//           }}
//         ></div>

//         {/* Center Logo */}
//         <div className="text-center">
//           <h2 className="fw-bold text-success">WINGZ</h2>
//           <p className="small">Your Dedicated Learning Portal</p>
//         </div>

//         {/* Features placed around */}
//         {features.map((f, i) => {
//           const angle = (i / features.length) * (2 * Math.PI); // even placement
//           const radius = 260;
//           const x = radius * Math.cos(angle);
//           const y = radius * Math.sin(angle);

//           return (
//             <motion.div
//               key={i}
//               className="position-absolute text-center"
//               style={{
//                 top: `calc(50% + ${y}px)`,
//                 left: `calc(50% + ${x}px)`,
//                 transform: "translate(-50%, -50%)",
//                 width: "160px",
//               }}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.2 }}
//             >
//               <div
//                 className="rounded-circle mx-auto mb-2 d-flex justify-content-center align-items-center"
//                 style={{
//                   width: "70px",
//                   height: "70px",
//                   border: "2px solid #9be15d",
//                   fontSize: "28px",
//                 }}
//               >
//                 {f.icon}
//               </div>
//               <p className="small">{f.title}</p>
//             </motion.div>
//           );
//         })}
//       </div>
//     </Container>
//   );
// }



"use client";

import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const features = [
  {
    title: "Progress That Powers Success",
    icon: "📘",
    style: {
      left: "17%",
      top: "-5.56922%",
      transform: "none",
      flexDirection: "row-reverse",
      textAlign: "right",
    },
  },

    {
    title: "100% Certification Support",
    icon: "✅",
    style: {
      left: "-21%",
      top: "27.43078%",
      transform: "none",
      flexDirection: "row-reverse",
      textAlign: "right",
    },
  },
  {
    title: "On Track for Excellence",
    icon: "📊",
    style: {
      left: "-31%",
      top: "79%",
      transform: "none",
      flexDirection: "row-reverse",
      textAlign: "right",
    },
  },
  {
    title: "Practical Guidance",
    icon: "🎯",
    style: {
      left: "79%",
      top: "16.43078%",
      transform: "none",
      flexDirection: "row",
      textAlign: "left",
    },
  },
  {
    title: "99% Placements",
    icon: "💼",
    style: {
      left: "94%",
      top: "74%",
      transform: "none",
      flexDirection: "row",
      textAlign: "left",
    },
  },

  
];

export default function Prograssbar() {
  return (
    <>
    <h2 className="mb-4 text-center">On Track for Excellence</h2>
    <Container fluid className="bg-dark text-white d-flex justify-content-center">
        
      <div
        className="position-relative w-100 d-none d-lg-block"
        style={{ maxWidth: "600px", aspectRatio: "2 / 1", marginTop: "40px" }}
      >
        
        {/* Grey Arc */}
        <svg
          viewBox="0 0 100 50"
          preserveAspectRatio="xMidYMid meet"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <path
            d="M2,48 A48,48 0 0,1 98,48"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1.5"
            fill="transparent"
          />
        </svg>

        {/* Center Logo */}
        <div
          className="position-absolute text-center"
          style={{
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
        <h2 className="fw-bold text-danger fs-2">NEWGEN SOFTECH</h2>

          <p className="small">Your Personal Learning Hub !</p>
        </div>

        {/* Features (large screen) */}
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="feature-item position-absolute d-flex align-items-center"
            style={{
              width: "40%",
              maxWidth: "220px",
              gap: "0.75rem",
              opacity: 1,
              ...f.style,
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3, duration: 0.8 }}
          >
            <div className="feature-icon">{f.icon}</div>
            <p className="mb-0 small">{f.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile fallback stacked view */}
      <div className="d-lg-none mt-5 w-100 text-center mb-4">
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {features.map((f, i) => (
            <motion.div
              key={`mobile-${i}`}
              className="d-flex flex-column align-items-center bg-dark-subtle rounded p-3"
              style={{ minWidth: "120px", flex: "1 1 45%" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon mb-2">{f.icon}</div>
              <p className="small text-dark">{f.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .feature-icon {
          width: 3rem;
          height: 3rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          flex-shrink: 0;
        }

        /* Hide arc layout on mobile */
 
}

      `}</style>
    </Container>
    </>
  );
}

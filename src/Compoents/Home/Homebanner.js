// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const AnimatedBanner = () => {
//   const canvasRef = useRef(null);
//   const [windowWidth, setWindowWidth] = useState(1200);
//   const [banners, setBanners] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ✅ Fetch banners from your API
//   useEffect(() => {
//     const fetchBanners = async () => {
//       try {
//         const response = await fetch("http://localhost:5016/api/v1/banners");
//         if (!response.ok) throw new Error("Failed to load banners");
//         const result = await response.json();

//         // ✅ Extract nested banners correctly
//         const data = result?.data || [];
//         const extractedBanners = data.flatMap((item) =>
//           (item.banners || []).map((b) => ({
//             imageUrl: b.imageUrl,
//             // heroTitle: item.heroTitle || "Shaping Tomorrow",
//           }))
//         );

//         setBanners(extractedBanners);
//       } catch (error) {
//         console.error("Error fetching banners:", error);
//         setBanners([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBanners();
//   }, []);

//   // ✅ Responsive container style
//   const getResponsiveContainerStyle = () => {
//     let minHeight = "40vh";
//     if (windowWidth <= 576) minHeight = "45vh", minWidth = "63vh";
//     else if (windowWidth <= 768) minHeight = "25vh", minWidth = "63vh";
//     else if (windowWidth <= 992) minHeight = "30vh";
//     else if (windowWidth <= 1200) minHeight = "35vh";

//     return {
//       position: "relative",
//       minHeight,
//       backgroundSize: "100% 100%",
//       backgroundPosition: "center",
//       backgroundRepeat: "no-repeat",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       flexWrap: "wrap",
//       transition: "background 0.3s ease-in-out",
//       overflow: "hidden",
//     };
//   };

//   // ✅ Track screen width
//   useEffect(() => {
//     const updateWidth = () => setWindowWidth(window.innerWidth);
//     updateWidth();
//     window.addEventListener("resize", updateWidth);
//     return () => window.removeEventListener("resize", updateWidth);
//   }, []);

//   // ✅ Bubble animation
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     let particles = [];
//     let animationFrameId;

//     const resizeCanvas = () => {
//       canvas.width = canvas.parentElement.offsetWidth;
//       canvas.height = canvas.parentElement.offsetHeight;
//     };

//     class Bubble {
//       constructor() {
//         this.reset();
//       }

//       reset() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.radius = Math.random() * 4 + 1;
//         this.speedX = Math.random() * 1 - 0.5;
//         this.speedY = Math.random() * 1 - 0.5;
//         this.alpha = Math.random() * 0.3 + 0.1;
//       }

//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;
//         if (
//           this.x < -50 ||
//           this.x > canvas.width + 50 ||
//           this.y < -50 ||
//           this.y > canvas.height + 50
//         ) {
//           this.reset();
//         }
//       }

//       draw() {
//         ctx.save();
//         ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;
//         ctx.shadowBlur = 15;
//         ctx.shadowColor = `rgba(255,255,255,${this.alpha})`;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.restore();
//       }
//     }

//     const initBubbles = () => {
//       particles = [];
//       const count = Math.min(100, Math.floor((canvas.width * canvas.height) / 5000));
//       for (let i = 0; i < count; i++) {
//         particles.push(new Bubble());
//       }
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       particles.forEach((bubble) => {
//         bubble.update();
//         bubble.draw();
//       });
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     const handleResize = () => {
//       resizeCanvas();
//       initBubbles();
//     };

//     resizeCanvas();
//     initBubbles();
//     animate();

//     window.addEventListener("resize", handleResize);
//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   // ✅ Title style
//   const getResponsiveTitleStyle = () => {
//     let fontSize = "2.5rem";
//     if (windowWidth <= 576) fontSize = "0.8rem";
//     else if (windowWidth <= 768) fontSize = "1.6rem";
//     else if (windowWidth <= 992) fontSize = "2rem";

//     return {
//       fontSize,
//       fontWeight: 700,
//       lineHeight: 1.3,
//       color: "black",
//       textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
//       textAlign: "left",
//       maxWidth: "600px",
//     };
//   };

//   const containerHeight = windowWidth <= 768 ? "27vh" : "60vh";

//   // ✅ Loading state
//   if (loading) {
//     return (
//       <section
//         style={{
//           ...getResponsiveContainerStyle(),
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <p>Loading banners...</p>
//       </section>
//     );
//   }

//   return (
//     <section style={getResponsiveContainerStyle()}>
//       <Carousel
//         fade
//         interval={5000}
//         controls={true}
//         indicators={true}
//         style={{
//           position: "relative",
//           width: "100%",
//           height: "100%",
//           top: 0,
//           left: 0,
//           zIndex: 0,
//         }}
//       >
//         {banners.map((banner, index) => (
//           <Carousel.Item key={index}>
//             <div style={{ position: "relative", width: "100%", height: "100%" }}>
//               {/* ✅ Banner Image */}
//               <div style={{ position: "relative", width: "100%", height: containerHeight }}>
//                 <Image
//                   src={banner.imageUrl || "/Assets/Home/default-banner.png"}
//                   alt={banner.heroTitle || `Banner ${index + 1}`}
//                   fill
//                   style={{ objectFit: "cover" }}
//                   priority
//                 />
//               </div>

//               {/* ✅ Overlay Title */}
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "50%",
//                   left: windowWidth <= 768 ? "30%" : "10%",
//                   transform:
//                     windowWidth <= 768
//                       ? "translate(-50%, -50%)"
//                       : "translateY(-50%)",
//                   zIndex: 2,
//                 }}
//               >
//                 <h2 style={getResponsiveTitleStyle()}>
//                   {banner.heroTitle}
//                 </h2>
//               </div>
//             </div>
//           </Carousel.Item>
//         ))}
//       </Carousel>

//       {/* ✅ Canvas Bubbles Overlay */}
//       <canvas
//         ref={canvasRef}
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           zIndex: 3,
//           pointerEvents: "none",
//         }}
//       />
//     </section>
//   );
// };

// export default AnimatedBanner;



"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AnimatedBanner = () => {
  const canvasRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(1200);
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch banners from API
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/banners`);
        if (!response.ok) throw new Error("Failed to load banners");
        const result = await response.json();

        // ✅ Extract nested banners correctly
        const data = result?.data || [];
        const extractedBanners = data.flatMap((item) =>
          (item.banners || []).map((b) => ({
            imageUrl: b.imageUrl,
            heroTitle: item.heroTitle || "Shaping Tomorrow", // ✅ restored
          }))
        );

        setBanners(extractedBanners);
      } catch (error) {
        console.error("Error fetching banners:", error);
        setBanners([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  // ✅ Responsive container style
  // const getResponsiveContainerStyle = () => {
  //   let minHeight = "40vh";
  //   let minWidth = "100%";

  //   if (windowWidth <= 576) {
  //     minHeight = "45vh";
  //     minWidth = "63vh";
  //   } else if (windowWidth <= 768) {
  //     minHeight = "25vh";
  //     minWidth = "63vh";
  //   } else if (windowWidth <= 992) {
  //     minHeight = "30vh";
  //   } else if (windowWidth <= 1200) {
  //     minHeight = "35vh";
  //   }
const getResponsiveContainerStyle = () => {
  let minHeight = "40vh";
  let minWidth = "100%";

  if (windowWidth <= 576) {
    minHeight = "45vh";
    minWidth = "63vh"; // keep your previous
  } else if (windowWidth <= 768) {
    // minHeight = "25vh";
    minHeight = "39vh"; // adjusted
    minWidth = "63vh"; // previous
  } else if (windowWidth <= 992) {
    minHeight = "30vh";
  } else if (windowWidth <= 1024) {
    minHeight = "33vh"; 
  } else if (windowWidth <= 1200) {
    minHeight = "35vh";
  }

  // ✅ Add extra rules for larger screens without changing previous breakpoints
  else if (windowWidth <= 1440) {
    minHeight = "50vh";
  } else if (windowWidth <= 1920) {
    minHeight = "31vh";
  } else if (windowWidth <= 2560) {
    minHeight = "63vh";
  }
    return {
      position: "relative",
      minHeight,
      minWidth,
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      transition: "background 0.3s ease-in-out",
      overflow: "hidden",
    };
  };

  // ✅ Track screen width
  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // ✅ Bubble animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    class Bubble {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 4 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.alpha = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (
          this.x < -50 ||
          this.x > canvas.width + 50 ||
          this.y < -50 ||
          this.y > canvas.height + 50
        ) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `rgba(255,255,255,${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const initBubbles = () => {
      particles = [];
      const count = Math.min(100, Math.floor((canvas.width * canvas.height) / 5000));
      for (let i = 0; i < count; i++) {
        particles.push(new Bubble());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((bubble) => {
        bubble.update();
        bubble.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      initBubbles();
    };

    resizeCanvas();
    initBubbles();
    animate();

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ✅ Title style
  const getResponsiveTitleStyle = () => {
    let fontSize = "2.5rem";
    if (windowWidth <= 576) fontSize = "0.8rem";
    else if (windowWidth <= 768) fontSize = "1.6rem";
    else if (windowWidth <= 992) fontSize = "2rem";

    return {
      fontSize,
      fontWeight: 700,
      lineHeight: 1.3,
      color: "black",
      textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
      textAlign: "left",
      maxWidth: "600px",
    };
  };

  const containerHeight = windowWidth <= 768 ? "27vh" : "80vh";

  // ✅ Loading state
  if (loading) {
    return (
      <section
        style={{
          ...getResponsiveContainerStyle(),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Loading banners...</p>
      </section>
    );
  }

  return (
    <section style={getResponsiveContainerStyle()}>
      <Carousel
        fade
        interval={5000}
        controls={true}
        indicators={true}
        style={{
          position: "relative",
          width: "100%",
          // height: "100%",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        {banners.map((banner, index) => (
          <Carousel.Item key={index}>
            <div style={{ position: "relative", width: "100%",
              // height: "100%"
              }}>
              {/* ✅ Banner Image */}
              <div style={{ position: "relative", width: "100%", height: containerHeight }}>
                <Image
                  src={banner.imageUrl || "/Assets/Home/default-banner.png"}
                  alt={banner.heroTitle || `Banner ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>

              {/* ✅ Overlay Title */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: windowWidth <= 768 ? "30%" : "10%",
                  transform:
                    windowWidth <= 768
                      ? "translate(-50%, -50%)"
                      : "translateY(-50%)",
                  zIndex: 2,
                }}
              >
                {/* <h2 style={getResponsiveTitleStyle()}>
                  {banner.heroTitle}
                </h2> */}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* ✅ Canvas Bubbles Overlay */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          // height: "100%",
          zIndex: 3,
          pointerEvents: "none",
        }}
      />
    </section>
  );
};

export default AnimatedBanner;

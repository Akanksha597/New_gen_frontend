"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Image from "next/image";

export default function VisionSection() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="vision-section py-5">
      <div className="container-fluid">
        <div className="row align-items-center mb-5">
          {/* LEFT: Leaf-shaped div with CSS border-radius */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div
              className="leaf-wrapper mx-lg-4 mx-3 flex justify-center"
              data-aos="fade-right"
            >
              <div className="leaf-shape overflow-hidden shadow-lg">
                <img
                  src="/vistion.jpg" // 👈 replace with your image
                  alt="Vision"
                  className="w-100 h-100 object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Text */}
          <div
            className="col-lg-6 col-md-12  px-lg-5 px-3"
            data-aos="fade-left"
          >
            <h2 className="vision-title">Vision</h2>
            <p className="vision-text">
              Our vision is to be a global leader in education and professional
              development, fostering a community of skilled and empowered
              professionals. We envision a future where learning is accessible,
              engaging, and transformative, enabling individuals to adapt to the
              ever-evolving demands of the global workforce. By nurturing talent
              and promoting innovation, we strive to create opportunities for
              success and make a positive impact on industries worldwide.
            </p>

            <div className="row mt-4 g-3">
              <div className="col-12 col-md-6">
                <div className="icon-box p-4 text-center h-100">
                  <i className="bi bi-bullseye fs-1 text-danger mb-3"></i>
                  <p className="mb-0">
                    Provide scopes to techies & non-techies alike.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="icon-box p-4 text-center h-100">
                  <i className="bi bi-person-gear fs-1 text-warning mb-3"></i>
                  <p className="mb-0">
                    Ensure an extremely personalized learning experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

         <div className="row align-items-center mt-4">
  {/* TEXT */}
  <div
    className="col-lg-6 col-md-12 px-lg-5 px-3 order-2 order-lg-1"
    data-aos="fade-left"
  >
    <h2 className="vision-title">Mission</h2>
    <p className="vision-text">
      Our vision is to be a global leader in education and professional
      development, fostering a community of skilled and empowered
      professionals. We envision a future where learning is accessible,
      engaging, and transformative, enabling individuals to adapt to the
      ever-evolving demands of the global workforce. By nurturing talent
      and promoting innovation, we strive to create opportunities for
      success and make a positive impact on industries worldwide.
    </p>

    <div className="row mt-4 g-3">
      <div className="col-12 col-md-6">
        <div className="icon-box p-4 text-center h-100">
          <i className="bi bi-bullseye fs-1 text-danger mb-3"></i>
          <p className="mb-0">
            Provide scopes to techies & non-techies alike.
          </p>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="icon-box p-4 text-center h-100">
          <i className="bi bi-person-gear fs-1 text-warning mb-3"></i>
          <p className="mb-0">
            Ensure an extremely personalized learning experience.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* IMAGE */}
  <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 order-1 order-lg-2">
    <div
      className="leaf-wrapper mx-lg-4 mx-3 d-flex justify-content-center"
      data-aos="fade-right"
    >
      <div className="leaf-shape overflow-hidden shadow-lg border border-4 border-warning">
        <img
          src="/misstion.png"
          alt="Mission"
          className="w-100 h-100 object-fit-cover"
        />
      </div>
    </div>
  </div>
</div>

      </div>

      {/* Styles */}
      <style jsx>{`
        .vision-section {
          
         
        }

        .leaf-wrapper {
          width: 95%;
          max-width: 700px;
        }

    
          .leaf-shape {
  width: 90%;
  aspect-ratio: 4 / 3;
  border-radius: 100% 0% 100% 0% / 43% 57% 43% 57%;
  overflow: hidden;
  border: 4px solid #ff7c1a; /* orange border */
  box-shadow: 0 12px 28px rgba(255, 120, 40, 0.6);
}

        }

        .vision-title {
          color: #ff7c1a;
          font-weight: 800;
          font-size: 2.5rem;
        }

        .vision-text {
          color: #000000ff;
          font-size: 1rem;
          line-height: 1.7;
        }

        .icon-box {
          background: rgba(10, 10, 10, 0.03);
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6);
          transition: transform 0.3s ease;
        }

        .icon-box:hover {
          transform: translateY(-8px);
        }
      `}</style>
    </section>
  );
}
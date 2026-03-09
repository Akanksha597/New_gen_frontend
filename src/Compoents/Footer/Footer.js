"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../public/Assests/logo/NEWGEN-Softech-Logo.png";
import { BiPhone } from "react-icons/bi";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope, FaMapMarkerAlt , 

} from "react-icons/fa";


const Footer = () => {
  return (
    <footer
      className="text-white pt-5"
      style={{
        background: "linear-gradient(70deg, #30191aff, #0f0c27ff)",
        color: "white",
      }}
    >
      <div className="container" style={{ maxWidth: "1200px" }}>
        {/* Main Row */}
        <div className="row justify-content-start justify-content-md-center text-start gap-0 gap-md-5">
          {/* Logo + About */}
          <div className="col-12 col-md-3 mb-4 d-flex flex-column align-items-start">
            <Image
              src={logo}
              alt="Company Logo"
              width={170}
              height={70}
            />
            <p className="mt-md-3 d-none d-md-block mb-3 footer-text">
             Boost your career and expand your horizons! Explore our wide range of courses designed for learners of all levels and start achieving your goals today
            </p>
         
          </div>

          {/* Sitemap */}
          <div className="col-12 col-md-3 ">
            <h5 className="mb-4 fw-bold text-white">IMPORTANT LINKS</h5>
            <ul className="list-unstyled footer-text">
              <li className="mb-2">
                <Link href="/" className="text-decoration-none text-white">
                 Home 
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-decoration-none text-white">
                  All Courses
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/"
                  className="text-decoration-none text-white"
                >
                Upcomeing Batches
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/EmployeeRegistartion"
                  className="text-decoration-none text-white"
                >
                 Development
                </Link>
              </li>

               <li className="mb-2">
                <Link
                  href="/EmployeeRegistartion"
                  className="text-decoration-none text-white"
                >
                 Technical Support
                </Link>
              </li>

             
              
             
            
            </ul>
          </div>





          

          {/* Contact Info */}
<div className="col-12 col-md-3 col-lg-4">
  <h5 className="mb-4 fw-bold text-uppercase">Contact Info</h5>
  <ul className="list-unstyled footer-text">
    {/* Email 1 */}
    <li className="mb-2 d-flex align-items-center flex-wrap gap-2">
      <FaEnvelope className="text-white flex-shrink-0" />
      <a
        href="mailto:Shree@shreequalityservices.com"
        className="text-white text-decoration-none hover-link"
      >
       enquiry@newgensoftech.com
      </a>
    </li>

    {/* Email 2 */}
    <li className="mb-2 d-flex align-items-center flex-wrap gap-2">
  <BiPhone className="text-white flex-shrink-0" />
  <a
    href="tel:+918888848588"
    className="text-white text-decoration-none hover-link"
  >
    +91 8888848588
  </a>
</li>


   
  </ul>
     <div className="d-none d-lg-flex gap-3 mb-3 ">
               <a href="" className="social-icon">
              <FaFacebookF />
            </a>
               <a href="" className="social-icon">
              <FaInstagram />
            </a>
              <a href="" className="social-icon">
                <FaLinkedinIn />
              </a>
              
            </div>
</div>
        </div>

        <hr className="bg-secondary" />

        {/* Social Icons - Visible only on Small Screens */}
        <div className="row d-md-none mb-3">
          <div className="col-12 d-flex gap-3">
            <a href="" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="" className="social-icon">
              <FaInstagram />
            </a>
             <a href="" className="social-icon">
                <FaLinkedinIn />
              </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-12 text-center mb-2">
            <p className="mb-0 footer-text">
             
              © 2025 Newgen Softech. All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      {/* Extra Styling */}
   <style jsx>{`
  .footer-text {
    font-size: 15px; /* ✅ Uniform font size */
    line-height: 1.6;
  }
  .hover-link:hover {
    color: #ffc107;
    transition: color 0.3s ease;
  }
  .social-icon {
    width: 36px;
    height: 36px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1.1rem;
    transition: all 0.3s ease;
  }
  .social-icon:hover {
    background-color: #ffc107;
    color: white;
  }

  /* Small screen adjustments */
  @media (max-width: 768px) {
    footer .container {
      margin-left: 10px;
    }
  }
`}</style>

    </footer>
  );
};

export default Footer;
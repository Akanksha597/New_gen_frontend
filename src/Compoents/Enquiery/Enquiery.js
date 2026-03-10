"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import styles from "../../app/Styles/Enquiery.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Dynamically import ToastContainer to avoid SSR issues
const ToastContainer = dynamic(() => import("react-toastify").then((mod) => mod.ToastContainer), {
  ssr: false,
});

export default function Enquiery() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    branch: "",
    course: "",
  });
  const [loading, setLoading] = useState(false);

  // handle input changes
  const handleChange = (e) => {
    if (e.target.name === "phone") {
      const value = e.target.value.replace(/\D/g, ""); // only digits
      setFormData({ ...formData, phone: value.slice(0, 10) }); // max 10 digits
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) return "Valid email is required";
    if (!formData.phone.trim() || formData.phone.length !== 10) return "Phone number must be 10 digits";
    if (!formData.country) return "Please select a country";
    if (!formData.branch) return "Please select a branch";
    if (!formData.course.trim()) return "Course name is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.course,
          message: `Interested in branch: ${formData.branch}, Country: ${formData.country}`,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        toast.success("Your enquiry has been submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          branch: "",
          course: "",
        });
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (err) {
      toast.error("Failed to connect. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${styles.heroSection} text-white`}>
      <div className="container py-5">
        <div className="row justify-content-center">
          {/* Left Content */}
          <div className="col-lg-6 text-center text-lg-start">
            <h3 className="fw-bold">EDUCATION FOR EVERYONE</h3>
            <p className="mt-3">Free course available — act fast!</p>

            <div className="d-none d-lg-block">
              <div className="d-flex flex-wrap gap-3 mt-4 justify-content-center justify-content-lg-start">
                <a href="https://wa.me/919890446612" className={`${styles.customBtn} btn`}>
                  <i className="bi bi-whatsapp"></i> +91 98904 46612
                </a>
                <a href="tel:02029993974" className={`${styles.customBtn} btn`}>
                  <i className="bi bi-telephone"></i> 020-29993974
                </a>
              </div>

              <div className="mt-3">
                <a href="mailto:enquiry@newgeninfotech.com" className={`${styles.customBtnRed} btn`}>
                  <i className="bi bi-envelope"></i>enquiry@newgeninfotech.com
                </a>
              </div>

              <div className="mt-3">
                <p className="mb-1 fw-bold">
                  <i className="bi bi-geo-alt-fill me-2 text-danger"></i> Head Office
                </p>
                <p className="mb-0">
                  Bremen Chowk, Office No 217, West Avenue,<br />
                  above Atithi Hotel, Aundh,<br />
                  Pune, Maharashtra 411027
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-5 position-relative mt-lg-0">
            <div className={styles.manWrapper}>
              <Image src="/Assests/Enquieryform/man.png" alt="man" width={150} height={250} className={styles.man} />
            </div>

            <div className={`${styles.contactBox} p-4 rounded shadow bg-white text-dark`}>
              <h4 className="fw-bold mb-3">Contact Us</h4>
              <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" className="form-control mb-3" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your E-mail" className="form-control mb-3" />
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Your Phone (10 digits)" className="form-control mb-3" maxLength={10} />
                <select name="country" value={formData.country} onChange={handleChange} className="form-select mb-3">
                  <option value="">Select your country</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
                <select name="branch" value={formData.branch} onChange={handleChange} className="form-select mb-3">
                  <option value="">Choose Branch</option>
                  <option>Pune</option>
                  <option>Mumbai</option>
                </select>
                <input type="text" name="course" value={formData.course} onChange={handleChange} placeholder="Enter Your Course Name" className="form-control mb-3" />
                <button type="submit" className="btn btn-danger w-100" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

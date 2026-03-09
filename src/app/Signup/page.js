"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Signup() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateForm = () => {
    const { name, email, mobileNumber, password, confirmPassword } = formData;

    if (!name || !email || !mobileNumber || !password || !confirmPassword) {
      toast.error("All fields are required");
      return false;
    }

    if (!/^\d{10}$/.test(mobileNumber)) {
      toast.error("Mobile number must be 10 digits");
      return false;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Signup failed");
        return;
      }

      toast.success("Signup successful 🎉");
      setFormData({
        name: "",
        email: "",
        mobileNumber: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      toast.error("Server error, try again");
    }
  };

  // ✅ Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="auth-bg">
        <div className="auth-container">

          {/* LEFT IMAGE */}
          <div className="auth-image d-none d-lg-flex">
            <Image
              src="/Assests/Loginsignup.png"
              alt="Signup"
              width={300}
              height={420}
              priority
            />
          </div>

          {/* RIGHT FORM */}
          <div className="auth-card">
            <h2>Create Account</h2>

            <form onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                name="email"
                placeholder="Enter Your E-mail"
                value={formData.email}
                onChange={handleChange}
              />

              <input
                name="mobileNumber"
                placeholder="Enter Your Phone"
                value={formData.mobileNumber}
                onChange={handleChange}
              />

              {/* PASSWORD */}
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {/* CONFIRM PASSWORD */}
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <button type="submit">Sign Up</button>
            </form>

            <p className="auth-text">
              Already signed up? <Link href="/Login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

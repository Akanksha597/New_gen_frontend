"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // ✅ Form Validation
  const validateForm = () => {
    if (!formData.email || !formData.password) {
      toast.error("Email and password are required");
      return false;
    }
    return true;
  };

  // ✅ Submit Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      console.log("LOGIN RESPONSE 👉", data);

      if (!res.ok) {
        toast.error(data?.message || "Login failed");
        setLoading(false);
        return;
      }

      // ✅ Backend returns ONLY token
      const { token } = data;

      if (!token) {
        toast.error("Invalid server response");
        setLoading(false);
        return;
      }

      // ✅ Save token
      localStorage.setItem("token", token);

      // Optional expiry (15 minutes)
      const tokenTime = Date.now() + 15 * 60 * 1000;
      localStorage.setItem("tokenTime", tokenTime.toString());

      toast.success("Login successful");

      setTimeout(() => {
        window.location.href =
          "https://jobs.newgensoftech.com/vulture-industries/master-dashboard";
      }, 1500);
    } catch (error) {
      console.error("LOGIN ERROR 👉", error);
      toast.error("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="auth-bg">
        <div className="auth-container">

          {/* LEFT IMAGE */}
          <div className="auth-image d-none d-lg-flex">
            <Image
              src="/Assests/Loginsignup.png"
              alt="Login"
              width={300}
              height={420}
              priority
            />
          </div>

          {/* RIGHT FORM */}
          <div className="auth-card">
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
              <input
                name="email"
                placeholder="Enter Your E-mail"
                value={formData.email}
                onChange={handleChange}
              />

              {/* PASSWORD FIELD */}
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Password"
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

              <button type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="auth-text">
              Don’t have an account? <Link href="/Signup">Signup</Link>
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

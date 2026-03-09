"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
// const API_URL = "http://localhost:5016/api/v1/jobs";

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/jobs`);
        const data = await res.json();
        if (data.success) {
          setJobs(data.data);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  if (jobs.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center py-5">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  // extract unique categories
  const categories = ["All", ...new Set(jobs.map((job) => job.category))];

  // filter jobs based on active tab
  const filteredJobs =
    activeCategory === "All"
      ? jobs
      : jobs.filter((job) => job.category === activeCategory);

  return (
    <section className="py-5 job-section">
      <div className="container">
        <h2 className="fw-bold mb-4 text-center">Latest Job Openings</h2>

        {/* Category Tabs */}
        <ul className="nav nav-pills justify-content-center mb-4">
          {categories.map((cat) => (
            <li className="nav-item" key={cat}>
              <button
                className={`nav-link ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>

        {/* Job Cards */}
        <div className="row g-4">
          {filteredJobs.map((job) => (
            <div className="col-md-6 col-lg-4" key={job._id}>
              <div className="card h-100 shadow-lg border-0 rounded-4 overflow-hidden job-card">
                <div className="job-img-wrap">
                 <img
    src={job.image || "/placeholder.png"} // fallback image if needed
    alt={job.title}
  
    style={{ objectFit: "cover", borderRadius: "8px" }}
  />
                </div>
                <div className="card-body p-4 d-flex flex-column">
                  {/* <span className="badge bg-primary mb-2">{job.category}</span> */}
                  <h5 className="fw-bold mb-2">{job.title}</h5>
                  <p className="text-muted flex-grow-1">{job.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <small className="text-secondary">
                      {new Date(job.createdAt).toLocaleDateString()}
                    </small>
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-gradient"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredJobs.length === 0 && (
            <p className="text-center text-muted py-4">
              No jobs available for this category.
            </p>
          )}
        </div>
      </div>

      <style jsx>{`
        .job-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #eef6ff 100%);
        }
        .job-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .job-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
        }
        .job-img-wrap {
          height: 180px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .job-img-wrap img {
          object-fit: cover;
          border-bottom: 1px solid #eee;
        }
        .btn-gradient {
          background: linear-gradient(90deg, #090708ff, #fc2574ff);
          color: white;
          font-weight: 500;
          padding: 8px 18px;
          border-radius: 30px;
          transition: 0.3s;
          border: none;
        }
        .btn-gradient:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }
        .nav-pills .nav-link {
          margin: 0 5px;
          border-radius: 30px;
          font-weight: 500;
          transition: 0.3s;
        }
        .nav-pills .nav-link.active {
          background: linear-gradient(90deg, #090708ff, #fc2574ff);
        }
      `}</style>
    </section>
  );
}

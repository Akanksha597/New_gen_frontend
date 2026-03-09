"use client";

import Image from "next/image";
import TechIcon from "../../../public/Assests/Technical support/process.png";
import RemoteIcon from "../../../public/Assests/Technical support/process.png";
import ClockIcon from "../../../public/Assests/Technical support/process.png";

export default function SupportProcessSection() {
  return (
    <section className="support-process position-relative overflow-hidden py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <span className="badge rounded-pill bg-pink mb-3 text-uppercase fw-bold">
              Support Process
            </span>

            <h2 className="fw-bold mb-3">
              Before we accept your support request, please share these details
            </h2>

            <p className="text-muted mb-4">
              Providing these details helps our engineers triage faster and choose the right engagement method (remote session, repo access or file transfer).
            </p>

            <div className="row g-4 align-items-start">
              <div className="col-md-4 d-flex align-items-start">
                <div className="icon-box bg-white shadow-sm rounded-3 d-flex align-items-center justify-content-center me-3">
                  <Image src={TechIcon} alt="Technologies" width={28} height={28} />
                </div>
                <div>
                  <h6 className="mb-1">Major technologies used</h6>
                  <small className="text-muted">e.g. AVD, VMware, MSIX, Kubernetes</small>
                </div>
              </div>

              <div className="col-md-4 d-flex align-items-start">
                <div className="icon-box bg-white shadow-sm rounded-3 d-flex align-items-center justify-content-center me-3">
                  <Image src={RemoteIcon} alt="Remote Access" width={28} height={28} />
                </div>
                <div>
                  <h6 className="mb-1">How will you provide access?</h6>
                  <small className="text-muted">Remote desktop, shared repo, or zipped code?</small>
                </div>
              </div>

              <div className="col-md-4 d-flex align-items-start">
                <div className="icon-box bg-white shadow-sm rounded-3 d-flex align-items-center justify-content-center me-3">
                  <Image src={ClockIcon} alt="Contact Hours" width={28} height={28} />
                </div>
                <div>
                  <h6 className="mb-1">Convenient contact hours</h6>
                  <small className="text-muted">Timezone & preferred time window</small>
                </div>
              </div>
            </div>

            {/* <ul className="list-unstyled mt-4 support-list">
              <li>• Additional technologies & versions</li>
              <li>• Do you prefer a remote session or file share?</li>
              <li>• Any security or network constraints we should know?</li>
            </ul> */}
{/* 
            <div className="accordion mt-3" id="supportAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Is sharing this information necessary?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#supportAccordion">
                  <div className="accordion-body">
                    Yes — this helps us scope the problem, estimate effort, and prepare the right engineer with the right tools.
                  </div>
                </div>
              </div>
            </div> */}

          </div>
        </div>

        {/* Floating shapes for subtle 3D effect */}
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
        <div className="floating-shape shape3"></div>
      </div>

      <style jsx>{`
        .support-process {
          background: linear-gradient(135deg, #fbfbff 0%, #f2f6ff 100%);
        }
        .badge.bg-pink {
          background: #ff7eb9;
          color: #fff;
        }
        .icon-box {
          width: 56px;
          height: 56px;
          transition: transform 0.4s ease;
        }
        .icon-box:hover {
          transform: translateY(-6px) rotate(5deg);
        }
        .support-list li {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }
        .accordion-button {
          font-weight: 600;
          border-radius: 8px;
        }
        /* Floating shapes */
        .floating-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.12;
          animation: float-shape 10s ease-in-out infinite alternate;
          z-index: 0;
        }
        .shape1 { width: 120px; height: 120px; background: #ff7eb9; top: 5%; left: -40px; }
        .shape2 { width: 90px; height: 90px; background: #6a11cb; top: 45%; right: -30px; }
        .shape3 { width: 100px; height: 100px; background: #feb47b; bottom: 8%; left: 30%; }
        @keyframes float-shape {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(15deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        @media (max-width: 767px) {
          .icon-box { width: 48px; height: 48px; }
        }
      `}</style>
    </section>
  );
}

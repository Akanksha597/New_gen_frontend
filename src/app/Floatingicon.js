"use client";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingIcons() {
  return (
    <div className="floating-icons">
      <a
        href="https://wa.me/+917303561471"
        target="_blank"
        rel="noopener noreferrer"
        className="icon whatsapp"
      >
        <FaWhatsapp size={28} />
      </a>
      <a href="tel:+919990764523" className="icon call">
        <FaPhoneAlt size={28} />
      </a>

      <style jsx>{`
        .floating-icons {
          position: fixed;
          bottom: 30px;
          right: 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          z-index: 9999;
        }

        .floating-icons .icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          background: #25d366; /* WhatsApp green */
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .floating-icons .icon.call {
          background: #ff4d4f; /* Red for Call */
        }

        .floating-icons .icon:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
        }

        @media (max-width: 576px) {
          .floating-icons {
            bottom: 15px;
            right: 15px;
          }

          .floating-icons .icon {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
    </div>
  );
}

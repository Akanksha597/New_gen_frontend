"use client";

import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import styles from "../../app/Styles/Working.module.css";

const clientLogos = [
 "/Assests/Studentwork/Avnet_Computer_Marketing-removebg-preview-e1738691669104.png",
  "/Assests/Studentwork/Cognizant_logo_PNG__5_-removebg-preview-1.png",
    "/Assests/Studentwork/contus_logo-removebg-preview.png",
      "/Assests/Studentwork/image-removebg-preview-1.png",
        "/Assests/Studentwork/image-removebg-preview.png",
          "/Assests/Studentwork/NTT-Data-Logo.svg.png",

];

const ClientLogoSlider = () => {
  return (
    <Container className="py-3">
      <h2 className="text-center fw-bold mb-4">Our Students are Working at</h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        speed={3000} // faster continuous scroll
        autoplay={{
          delay: 0, // no delay
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={styles.mySwiper}
        breakpoints={{
          0: { slidesPerView: 2 },
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          992: { slidesPerView: 5 },
        }}
        freeMode={true} // enables smooth continuous scroll

      >
        {clientLogos.map((logo, index) => (
          <SwiperSlide key={index} className={styles.slideWrapper}>
            <Image
              src={logo}
              alt={`Client ${index + 1}`}
              width={120}
              height={70}
              className={styles.logoImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ClientLogoSlider;

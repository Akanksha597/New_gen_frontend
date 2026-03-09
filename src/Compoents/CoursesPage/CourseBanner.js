"use client";

import React from "react";
import styles from "../../app/Styles/banner.module.css";
   import Link from "next/link";
const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>Upgrade Your Skills</h1>
          <p className={styles.subtitle}>
            Explore top courses in Web Development, Data Science, AI, Mobile Apps and more.
          </p>
          <div className={styles.btnGroup}>
            {/* <button className={styles.primaryBtn}>Explore Courses</button> */}
        

<Link href="/ContactUs" className={styles.secondaryBtn}>
  Contact Us
</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

// components/SkillsGrid.js
import Image from "next/image";
import styles from "../../app/Styles/Technolofy.module.css";

const categories = [
  {
    title: "Programming Languages",
    color: "yellow",
    items: [
      { name: ".NET", icon: "/Assests/Languageicon/net1.png" },
      { name: "ASP.NET", icon: "/Assests/Languageicon/Asp.net.png" },
      { name: "VB.NET", icon: "/Assests/Languageicon/VB.NET_Logo.svg.png" },
      { name: "Java", icon: "/Assests/Languageicon/java.png" },
      { name: "JSP", icon: "/Assests/Languageicon/jsp1.jpg" },
      { name: "J2EE", icon: "/Assests/Languageicon/j2ee-programming.png" },
      { name: "PHP", icon: "/Assests/Languageicon/php.png" },
      { name: "C", icon: "/Assests/Languageicon/c.png" },
      { name: "C++", icon: "/Assests/Languageicon/c++.png" },
      { name: "C#", icon: "/Assests/Languageicon/csharp.png" },
      { name: "PL/SQL", icon: "/Assests/Languageicon/pl.png" },
      { name: "XML", icon: "/Assests/Languageicon/xml.jpg" },
    ],
  },
  {
    title: "Databases",
    color: "cyan",
    items: [
      { name: "SQL", icon: "/Assests/Languageicon/sql.png" },
      { name: "MySQL", icon: "/Assests/Languageicon/Mysql.png" },
      { name: "Oracle", icon: "/Assests/Languageicon/oracal.png" },
      { name: "PostgreSQL", icon: "/Assests/Languageicon/download (1).jpg" },
      { name: "MongoDB", icon: "/Assests/Languageicon/Mongodb.png" },
    ],
  },
  {
    title: "Content Management Systems",
    color: "pink",
    items: [
      { name: "WordPress", icon: "/Assests/Languageicon/Wordpress.png" },
      { name: "Joomla", icon: "/Assests/Languageicon/Joomla.jpg" },
      { name: "Umbraco", icon: "/Assests/Languageicon/unbrone.png" },
      { name: "Drupal", icon: "/Assests/Languageicon/Drupal.png" },
    ],
  },


  {
    title: "Mobile Technology",
    color: "green",
    items: [
      { name: "Android", icon: "/Assests/Languageicon/Android.png" },
      { name: "iOS", icon: "/Assests/Languageicon/ios.jpg" },
      
    ],
  },
];

export default function SkillsGrid() {
  return (
    <section className={styles.skillsSection}>
      <h2 className="text-center mb-3">Technologies We Use</h2>
      <div className="container">
        {categories.map((cat, i) => (
          <div key={i} className="mb-5">
            <h3 className={`${styles.categoryTitle} ${styles[cat.color]}`}>
              {cat.title}
            </h3>
            <div className="row justify-content-center">
              {cat.items.map((item, index) => (
                <div
                  key={index}
                  className="col-lg-2 col-md-3 col-6 d-flex justify-content-center mb-4"
                >
                  <div
                    className={`${styles.logoCard} ${styles[cat.color]} animate__animated animate__fadeInUp`}
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="img-fluid"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

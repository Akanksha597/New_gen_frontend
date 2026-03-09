'use client';
import { useState } from 'react';
import styles from '../app/Styles/casestudies.module.css';

export const servicesData = [
  {
    id: 1,
    category: "DOTNET",
    title: "Microsoft .NET Development",
    description:
      "Master modern Microsoft technologies with hands-on experience in C#, ASP.NET MVC, WCF, Entity Framework, and design patterns. Gain real-world project exposure and become an industry-ready .NET developer.",
    topics: [
      "C# 6.0",
      "ASP.NET Web Forms",
      "ASP.NET MVC 5.2",
      "Web Services & WCF",
      "WPF & Silverlight",
      "LINQ",
      "Entity Framework",
      "ASP.NET Live Project",
      "Design Pattern",
      ".NET Developer",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1590608897129-79da98d15969?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "CPP",
    title: "C & C++ Programming",
    description:
      "Learn the fundamentals of programming through C and C++. Strengthen your OOP concepts and advanced coding techniques to prepare for software development and embedded systems roles.",
    topics: ["C Language", "C++ OOPS", "Advanced C++"],
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "WEB",
    title: "Full Stack Web Development",
    description:
      "Build modern, responsive, and scalable web applications using HTML5, CSS3, JavaScript, ReactJS, and Next.js. Focus on frontend development, UI/UX, and performance optimization.",
    topics: ["HTML5", "CSS3", "JavaScript", "ReactJS", "NextJS"],
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "DIGITAL MARKETING",
    title: "Digital Marketing Mastery",
    description:
      "Boost your marketing skills with a comprehensive understanding of SEO, Google Ads, and Social Media Marketing. Learn how to grow brand visibility and generate measurable results online.",
    topics: ["SEO", "Google Ads", "Social Media Marketing"],
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "EMERGING TECH",
    title: "AI, ML & Blockchain Fundamentals",
    description:
      "Explore the future of technology with foundational knowledge in Artificial Intelligence, Machine Learning, Data Science, and Blockchain. Ideal for beginners exploring next-gen tech.",
    topics: ["AI/ML Basics", "Data Science", "Blockchain"],
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "APP DEVELOPMENT",
    title: "Mobile App Development",
    description:
      "Learn to build cross-platform and native apps using Android, iOS, and Flutter. Gain expertise in modern app architecture, API integration, and UI development.",
    topics: ["Android Development", "iOS Development", "Flutter"],
    imageUrl:
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 7,
    category: "SHAREPOINT",
    title: "Microsoft SharePoint Development",
    description:
      "Understand SharePoint’s core and advanced functionalities, from setup to customization. Learn how to create collaborative business solutions with SharePoint.",
    topics: ["SharePoint Basics", "Advanced SharePoint"],
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 8,
    category: "TESTING",
    title: "Software Testing & QA",
    description:
      "Gain expertise in manual and automated testing. Learn Selenium, JUnit, and testing frameworks to ensure product quality and deliver bug-free software.",
    topics: ["Selenium", "JUnit", "Manual Testing"],
    imageUrl:
 "https://images.unsplash.com/photo-1590608897129-79da98d15969?q=80&w=2070&auto=format&fit=crop",  },
  {
    id: 9,
    category: "CLOUD",
    title: "Cloud Computing & Deployment",
    description:
      "Master cloud platforms like AWS, Azure, and Google Cloud. Learn to deploy scalable, secure applications and understand essential cloud architecture concepts.",
    topics: ["AWS", "Azure", "Google Cloud"],
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 10,
    category: "SALESFORCE",
    title: "Salesforce CRM Development",
    description:
      "Learn Salesforce administration, Apex programming, and Lightning Web Components (LWC). Build scalable CRM solutions that streamline enterprise workflows.",
    topics: ["Admin Basics", "Apex", "LWC"],
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 11,
    category: "PYTHON",
    title: "Python Development",
    description:
      "Master Python fundamentals and move into web development using Django and Flask. Gain practical exposure with real-world applications and backend development.",
    topics: ["Core Python", "Django", "Flask"],
    imageUrl:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 12,
    category: "JAVA",
    title: "Java Enterprise Development",
    description:
      "Learn Core Java, Spring Boot, and Hibernate to build scalable enterprise applications. Get hands-on experience with full-stack Java development.",
    topics: ["Core Java", "Spring Boot", "Hibernate"],
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop",
  },
];


const OurServices = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (id) => {
    // Toggle only for mobile
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      setActiveCard(activeCard === id ? null : id);
    }
  };

  return (
    <section className={styles.ourServices}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Case Studies</h1>
        <p className="text-center">
          Stories That Inspire: Explore How Our Solutions Drive Success
        </p>

        <div className={styles.servicesGrid}>
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`${styles.card} ${
                activeCard === service.id ? styles.active : ''
              }`}
              onClick={() => handleCardClick(service.id)}
            >
              <div className={styles.cardContent}>
                <div className={styles.imageContainer}>
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className={styles.serviceImage}
                  />
                </div>
                <div className={styles.initialText}>
                  <p className={styles.category}>{service.category}</p>
                  <h2 className={styles.titleInitial}>{service.title}</h2>
                </div>
                <div className={styles.textContainer}>
                  <p className={styles.category}>{service.category}</p>
                  <h3 className={styles.title}>{service.title}</h3>
                  <p className={styles.description}>{service.description}</p>
                  {/* <a href="/case-studies" className={styles.expandLink}>
                    Read More
                    <span className={styles.arrow}>&rarr;</span>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ View All Button */}
     
    </section>
  );
};

export default OurServices;

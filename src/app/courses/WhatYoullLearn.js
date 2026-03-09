import React from 'react';
import Image from 'next/image';

export default function WhatYoullLearn() {
  return (
    <section style={{ padding: '80px 20px', background: 'linear-gradient(180deg, #f0f4ff, #ffffff)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
        
        {/* Left image card */}
       <div style={{ flex: '1 1 450px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
  {/* Top Image */}
  <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }}>
    <div style={{ position: 'relative', width: '100%', paddingTop: '75%' }}>
      <Image
          src="/Assests/Course/learn2.png"
        alt="developer at laptop"
        layout="fill"
        objectFit="cover"
        style={{ borderRadius: '20px' }}
      />
    </div>
  </div>

  {/* Bottom Image */}
  <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }}>
    <div style={{ position: 'relative', width: '100%', paddingTop: '75%' }}>
      <Image
        src="/Assests/Course/learn2.png"
        alt="coding example"
        layout="fill"
        objectFit="cover"
        style={{ borderRadius: '20px' }}
      />
    </div>
  </div>
</div>

        {/* Right content */}
        <div style={{ flex: '1 1 500px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '20px', color: '#1a1a1a' }}>
            What you learn
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
            Build powerful and scalable full-stack applications with the MERN stack.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {skillsLeft.concat(skillsRight).map((skill, i) => (
              <div
                key={i}
                style={{
                  flex: '1 1 calc(50% - 10px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '15px',
                  padding: '10px 15px',
                  background: 'linear-gradient(135deg, #130e0fff 0%, #090a09ff 100%)',
                  borderRadius: '12px',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
                  color: 'white',
                  fontWeight: '500',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.08)';
                }}
              >
                <span style={{ fontWeight: '700', color: 'white' }}>✓</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>

          {/* Enroll button */}
          <div style={{ marginTop: '30px' }}>
            <a
              href="#enroll"
              style={{
                display: 'inline-block',
                padding: '14px 28px',
                background: 'linear-gradient(90deg, #1e1c1cff, #6a0606ff)',
                color: 'white',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '1rem',
                textDecoration: 'none',
                boxShadow: '0 8px 20px rgba(0,0,0,0.22)',
                transition: 'all 0.3s ease',
                border: '2px solid #000000ff',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
              }}
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Data for the lists
const skillsLeft = [
  'Master full-stack development using MongoDB, Express.js, React.js, and Node.js',
  'Build dynamic single-page applications (SPAs) with React',
  'Implement component-based architecture and reusable UI components',
  'Manage application state using React Hooks and Context API',
  'Design and develop RESTful APIs with Express.js and Node.js',
];

const skillsRight = [
  'Integrate MongoDB for efficient NoSQL data storage and retrieval',
  'Use Mongoose for data modeling, validation, and schema design',
  'Implement user authentication and authorization with JWT',
  'Handle file uploads, API calls, and asynchronous operations',
  'Deploy secure and scalable full-stack applications to production',
];

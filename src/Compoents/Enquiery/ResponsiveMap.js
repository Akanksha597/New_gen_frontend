"use client";

import React from "react";

const ResponsiveMap = () => {
  return (
    <div className="map-responsive mt-4 mb-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30257.841187543258!2d73.813528!3d18.56366!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfaaeaf91c9b%3A0x7e6f1768c1f3e1c5!2sNewgen%20Softech!5e0!3m2!1sen!2sus!4v1758619430996!5m2!1sen!2sus"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      
      ></iframe>
    </div>
  );
};

export default ResponsiveMap;
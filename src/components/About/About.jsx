import React, { useState, useEffect } from "react";
import './About.scss'
const About = () => {
    const [opacity, setOpacity] = useState(0);

  const handleScroll = () => {
    const aboutSection = document.getElementById("about-section");
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const sectionHeight = aboutSection.getBoundingClientRect().height;
    const windowHeight = window.innerHeight;

    // Calculate how much of the section is within the viewport
    if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
      // Calculate opacity based on scroll position
      const opacityValue = Math.min(1, Math.max(0, 1 - sectionTop / windowHeight));
      setOpacity(opacityValue);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return (
        <div className='about_me' style={{
            opacity: opacity,
            transition: "opacity 0s ease-in-out",
            height: "100vh", 
          }}               id="about-section"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#181818" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,197.3C672,235,768,277,864,288C960,299,1056,277,1152,229.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

            <div className="black-height" style={{height:'100vh',background:"#181818" }}>

            </div>
        </div>
    );
};

export default About;
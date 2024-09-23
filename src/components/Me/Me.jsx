import React, { useState, useEffect } from "react";
import './Me.scss'
const Me = () => {
    const [opacity, setOpacity] = useState(1); // Start with full opacity

    const handleScroll = () => {
      const textElement = document.getElementById("fading-text");
      const sectionHeight = textElement.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;
  
      // Get the amount of scroll distance from the top of the page
      const scrollPosition = window.scrollY;
      
      // Calculate the opacity based on the scroll position
      // Adjust this calculation to your liking
      const maxScroll = sectionHeight + windowHeight; // Max scroll based on section and window height
      const opacityValue = Math.max(0, Math.min(1, 1 - scrollPosition / (maxScroll / 2)));
  
      setOpacity(opacityValue);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);   return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return (
        <div className='me' data-aos="fade-up"  >
            <div className="my-container" data-aos="fade-up" data-aos-delay="1000" >
              <div  id="fading-text" style={{ opacity, transition: "opacity 0.3s ease-in-out" }}>
               <h1>Frontend Developer</h1>
               <p>Build next-generation websites like never before
               </p></div>
            </div>
        </div>
    );
};

export default Me;
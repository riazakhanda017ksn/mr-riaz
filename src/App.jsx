import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Myself from './components/Me/Me';
import About from './components/About/About';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1400, // Animation duration
      easing: 'ease-in-out', // Easing type
      once: true, // Only animate elements once
    });
  }, []);

  const scrollToNextSection = () => {
    const nextSectionElement = document.getElementById('nextSection');
    nextSectionElement.scrollIntoView({ behavior: 'smooth' });
};

  return (
    <>
  
      <div >

      <Navbar/>
      <Myself/>
      <About/>
     
       </div>
  
    </>
  );
};

export default App;
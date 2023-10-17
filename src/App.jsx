import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { Link } from 'react-scroll';
import About from './components/About/About';
import WhatIDo from './components/WhatIDo/WhatIDo';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GSAPAnimation from './components/GSAP_Animation/GSAP_Animation';
import Blog from './components/Blogs/Blog';
import Footer from './components/Footer/Footer';

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
      <Hero/>
      <About/>
      <WhatIDo/>  
      <GSAPAnimation/>
      <Blog/>
      <Footer/>
       </div>
  
    </>
  );
};

export default App;
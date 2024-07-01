import React from 'react';
import './Me.scss'
import Navbar from '../../components/Navbar/Navbar'
import videoOne from '../../assets/video/1.mp4'
const Myself = () => {
    return (
        
        <div className='my-self' >
         <div className="navigate">
         <Navbar/>
         </div>
        <video src={videoOne} muted loop autoPlay></video>
        <div className="overlay"></div>
        <div className="content">
            <div className="container">
           <h1>
                <span data-aos="fade-up" data-aos-delay="400">R</span>
                <span data-aos="fade-up" data-aos-delay="600">I</span>
                <span data-aos="fade-up" data-aos-delay="800">A</span>
                <span data-aos="fade-up" data-aos-delay="1000">Z</span>
                <span data-aos="fade-up" data-aos-delay="1200" style={{marginLeft:"40px"}}>A.</span>
            </h1>
            <h3  > <span data-aos="fade-up" data-aos-delay="1400">Web Design</span> <span data-aos="fade-up" data-aos-delay="1600">is</span> <span data-aos="fade-up" data-aos-delay="1800">my</span> <span data-aos="fade-up" data-aos-delay="2000">passion I</span> <span data-aos="fade-up" data-aos-delay="2400">turn ideas</span> <span data-aos="fade-up" data-aos-delay="2600">into reality</span></h3>
            <button data-aos="fade-right" data-aos-delay="2900">Explore My World</button>
            </div>
           </div>
           
         
        </div>
    );
};

export default Myself;
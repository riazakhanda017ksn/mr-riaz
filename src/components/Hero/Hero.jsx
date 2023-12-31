import React from 'react';
import './Hero.scss'
const Hero = () => {
    return (
        <div className='hero-section container'>
            <h1 data-aos="fade-up">Riaz</h1>
            <h1 className='seconde heading' data-aos="fade-up">Ahmed</h1>
            <div className='block'>
            <h1>Akhanda</h1>
            </div>
            <div className="flex-item" data-aos="fade-right">
            <p>Frontend Developer & <br /> Creative Web Designer</p>
            <div className="none">
            <h1>Akhanda</h1>
            </div>
            </div>

        </div>
    );
};

export default Hero;
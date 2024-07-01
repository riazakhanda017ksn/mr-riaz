// import React from 'react';
// import riaz from '../../assets/img/a.jpg'
// import files from '../../assets/files/Riaz_Resume.pdf'

// import './About.scss'
// const About = () => {
//     const handleDownload = () => {
//         const fileUrl = files;
//         const anchor = document.createElement('a');
//         anchor.href = fileUrl;
//         anchor.download = 'riaz_resume.pdf';
//         anchor.click();
//         anchor.remove();
//       };
//     return (
//         <div className='container my-5 pb-5' style={{overflow:"hidden"}}>
//              <div className="row">
//                 <div className="col-lg-6">
//                     <div className="about-img text-center" data-aos="fade-right">
//                     <img src={riaz} alt="" />
//                     </div>
//                 </div>
//                 <div className="col-lg-6">
//                     <div className="about-me" data-aos="fade-left">
//                         <h1>About Me</h1>
//                         <h2>Riaz Ahmed Akhanda</h2>
//                         <h3>Fronted Developer & Web Designer</h3>
//                         <p className='mt-4'>Hi there, I'm Riaz Ahmed. I work in the field of Web Development, and I am very passionate and dedicated to what I do.</p>
//                         <p >With 2 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success.I enjoy every step of the design process, from discussion and collaboration.</p>
//                         <a className='mt-5 d-inline' onClick={handleDownload}>
//                          Download CV
//                         </a>
//                     </div>
//                 </div>
//              </div>
//         </div>
//     );
// };

// export default About;

import React from 'react';
import img from '../../assets/img/23.png'
import arrow from '../../assets/img/scrolldown.svg'
import riaz from '../../assets/img/a.jpg'
import files from '../../assets/files/Riaz_Resume.pdf'
import './About.scss'
import { Link } from 'react-scroll';

const About = () => {
        const handleDownload = () => {
        const fileUrl = files;
        const anchor = document.createElement('a');
        anchor.href = fileUrl;
        anchor.download = 'riaz_resume.pdf';
        anchor.click();
        anchor.remove();
      };

      const scrollToNextSection = () => {
        const nextSectionElement = document.getElementById('nextSection');
        nextSectionElement.scrollIntoView({ behavior: 'smooth' });
    };

        
   
    return (
        <div className="container py-5 mb-5">
        <div className='digital-about'>
            <div className="img-and-img">
            <h1>
                <span data-aos="fade-up" data-aos-delay="400">About</span> <span data-aos="fade-up" data-aos-delay="400">Me</span></h1>
            <img data-aos="fade-up" data-aos-delay="600" src={img} alt="" />
            </div>
            <h1 className='py-3'>
                <span data-aos="fade-up" data-aos-delay="600">Fronted</span> <span data-aos="fade-up" data-aos-delay="800">Developer</span>
                 </h1>
        </div>
        <div className="row mt-3" data-aos="fade-up" data-aos-delay="1000">
            <div className="col-lg-2" id="hero">
            <Link to="nextSection" smooth={true} duration={500} onClick={scrollToNextSection}>
                <div className="arrow-icon text-center mt-5 pt-3 " style={{cursor:"pointer"}} >
                    <span>See More</span> <br />
                    <img className='mt-2' src={arrow} alt="" />
                </div>
                </Link>
            </div>
            <div className="col-lg-8">
                <div className="about-content">
                  <p>Hi there, I'm Riaz Ahmed. I work in the field of Web Development, and I am very passionate and dedicated to what I do.With 2 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success.I enjoy every step of the design process, from discussion and collaboration.</p>
                  <div className="image-div">
                  <img src={riaz} alt="" />
                  <div className="overly-img">
                
                  </div>
                  </div>
                  <div className="cv-download">
                <a onClick={handleDownload}>
                    Download CV
                    </a>
                </div>
                </div>
            </div>
           
        </div>
        </div>
    );
};

export default About;
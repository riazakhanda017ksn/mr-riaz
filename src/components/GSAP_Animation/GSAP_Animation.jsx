import React, { useEffect, useRef } from "react";
import gsap, { Power3, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./GSAP_Animation.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import {BiLinkExternal} from 'react-icons/bi';
import {BsGithub} from 'react-icons/bs'
import { Link } from "react-scroll";
import arrow from '../../assets/img/scrolldown.svg'

AOS.init();

const GSAPAnimation= () => {
  const scrollToNextSection = () => {
    const nextSectionElement = document.getElementById('nextSection@');
    nextSectionElement.scrollIntoView({ behavior: 'smooth' });
};

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });
      const animation = gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
      });
      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".rightblock",
        animation: animation,
        scrub: true,
      });
    });
    return () => ctx.revert();
  });

  gsap.registerPlugin(ScrollTrigger);
  let screen = useRef(null);
  let body = useRef(null);
  useEffect(() => {
    var tl = gsap.timeline();
    tl.to(screen, {
      duration: 1.2,
      width: "100%",
      ease: Power3.easeInOut,
    });
    tl.to(screen, {
      duration: 1,
      right: "100%",
      ease: Power3.easeInOut,
      delay: 0.3,
    });
    tl.set(screen, { right: "100%" });
    gsap
      .to(body, 0.3, {
        css: {
          opacity: "1",
          pointerEvents: "auto",
          ease: Power4.easeInOut,
        },
      })
      .delay(2);
    return () => {
      gsap.to(body, 1, {
        css: {
          opacity: "0",
          pointerEvents: "none",
        },
      });
    };
  });
  return (
    <div>
      <div className="intro">
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          Hello There !
        </h1>
        <p data-aos="fade-up" data-aos-duration="1200">
          Let's show my recent projects
        </p>
        <Link to="nextSection@" smooth={true} duration={700} onClick={scrollToNextSection}>
                <div className="arrow-icon text-center mt-5 pt-3 " style={{cursor:"pointer"}} >
                    <span>Scroll down</span> <br />
                    <img className='mt-2 little-arrow' src={arrow} alt="" />
                </div>
                </Link>
      </div>
      <div
        ref={(el) => (body = el)}
        className="Headd"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        id="nextSection@"
      >
        <div className="gallery product-smooth-scroll">
          <div className="Left">
            <div className="details"> 
             <h3>RSM E-COMMERCE</h3>
             <h4>The Application Basically Made For Seasonal Fashion Women Cloth</h4>
             <p>This application has professional design. Besides, it has products categories, products sorting, products comment, Multiple products buy and sell option, products searching, products rating, and it has also dynamic stripe payment system.The application Also has dynamic login system. A user can create his account with profile picture, also he can change his profile image, update his profile, if he wants he can change his password. Also, it has forgot password option.There are two dashboard option for user and admin. An account profile for the user, And also has for admin.In the user options, the user can do whatever is limited for the user. In the admin dashboard, Admin has full website control. Admin can change everything if he wants.</p>
             <h5> <span>TECHNOLOGIES USED</span> - Built the client-side & backend-side using HTML, CSS, ReactJS, React-Router, React Router, Bootstrap, MongoDB, Redux, express JS and deployed on Onrender.com</h5>
             <div className="projects-shows">
              <a href="https://fashion-ecommerce.onrender.com/" target="_blank" rel="noopener noreferrer">
                <BiLinkExternal/>
              </a>
              <a href="https://github.com/riazakhanda017ksn/fashion-mern-ecommerce" target="_blank" rel="noopener noreferrer">
              <BsGithub/>

              </a>
             </div>
            </div>

            <div className="details"> 
             <h3>SpaceBox</h3>
             <h4>The Application main focus is to make the study method fun and easy to learn about Space</h4>
             <p>My main focus is to make the study method fun and easy to learn. That's why i have created this web app.It is a webapp where children or any age children and adults can easily learn about space,science,technology.Our webapp carries lots of different topics to study and learn.I've done NASA's Open Science and Transform Ed.Using it a user can view James Webb Telescope, Juno Park, Solar Probe etc in 3d. Moreover, you can know more details on this subject. To make it easier to understand, I have added lots of animated videos.They can also learn and watch it with the help of videos.Not only this,to make the study process more fun and interesting,we have also added challenging quizzes and puzzle games to our webapp.Through this method they will show more efforts to know about this science,space and technology.This is not the end of my project,i have many more ideas to add to this project.</p>
             <h5> <span>TECHNOLOGIES USED</span> - Built the application using HTML, SCSS, ReactJS, React-Router, Framer motion,Three JS, NASA'S API </h5>
             <div className="projects-shows">
              <a href="http://spacebox-eight.vercel.app/" target="_blank" rel="noopener noreferrer">
                <BiLinkExternal/>
              </a>
              <a href="https://github.com/riazakhanda017ksn/spacebox" target="_blank" rel="noopener noreferrer">
              <BsGithub/>

              </a>
             </div>
            </div>
           
            <div className="details need-border-at-bottom">
            <h3>Metacom Solution</h3>
             <h4>The Application made for courses Agency</h4>
             <p>Metacom Solution is providing the Best IT Solutions and Training Courses.
             Digital Marketing, Graphics Design, Web Design & Development, Facebook Ads and SEO are our Main Courses.</p>
             <h5> <span>TECHNOLOGIES USED</span> - Built the application using HTML, SCSS, ReactJS, React-Router, Framer motion,Email js and their custom API </h5>
             <div className="projects-shows">
              <a href="https://metacomsolution.com/" target="_blank" rel="noopener noreferrer">
                <BiLinkExternal/>
              </a>
              <a href="https://github.com/riazakhanda017ksn/metacom-agency-web-app" target="_blank" rel="noopener noreferrer">
              <BsGithub/>

              </a>
             </div>
            </div>
          </div>
          <div className="rightblock">
            <div className="photos">
              <div className="photo">
                 <div className="project-one">

                 </div>
              </div>
              <div className="photo">
                <div className="project-two">

                </div>
              </div>
              <div className="photo">
               <div className="project-three">

               </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div className="show-more-project text-center">
                <a>
                    Show More Project
                    </a>
                </div>
      
    </div>
  );
};

export default GSAPAnimation;

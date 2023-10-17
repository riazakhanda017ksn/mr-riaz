import React from 'react';
import './WhatIDo.scss';
import ScrollCarousel from 'scroll-carousel-react';
import video1 from '../../assets/video/1.mp4';
import video2 from '../../assets/video/2.mp4';
import video3 from '../../assets/video/3.mp4';
import img1 from '../../assets/img/1.png';
import img2 from '../../assets/img/2.png';
import img3 from '../../assets/img/3.png';
const WhatIDo = () => {
   
    const items =[
    {
        id:"12313",
        name:'Frontend Development',
        post:"Since i work as a front-end developer, i have experience creating user-friendly web interfaces that enhance user experience and increase customer engagement.",
        video:video1,
        icon:img1,
    },
    {
        id:"12314",
        name:'Web Development',
        post:"I am very familiar with nodejs, expressjs, mongodb/mongoose. in this way, i can use mern to build full-stack applications.this service is something i am capable of providing",
        video:video2,
        icon:img2,
    },
    {
        id:"12315",
        name:'Web Design',
        post:"I am very familiar with nodejs, expressjs, mongodb/mongoose. in this way, i can use mern to build full-stack applications.this service is something i am capable of providing",
        video:video3,
        icon:img3,
    },

    ]
    return (
        <div className='what-i-do' id="nextSection">
            <>
                <h1>What I do</h1>
                <ScrollCarousel
        autoplay
        autoplaySpeed={1}
        speed={3}
        onReady={() => console.log('I am ready')}
      >
        {items.map((item) => (
          <div key={item.id} className='item'>
            <div className="video-section">
            <video src={item.video} muted loop autoPlay></video>
             <div className="overly">
            <img src={item.icon} alt="" />
              <h3>{item.name}</h3>
            <p>
              {item.post}
            </p>
            <a href="">Readmore</a>
          </div>
         </div>
        </div>
        ))}
      </ScrollCarousel>
            </>
        </div>
    );
};

export default WhatIDo;
import React from 'react';
import './Footer.scss'
const Footer = () => {
    const date = new Date()
   const year= date.getFullYear()
   console.log(year);
    return (
        <div className='footer'>
            <div className="container mt-2">
                <div className="row">
                <div className="col-lg-8">
                    <p>@ {year},DESIGN AND DEVELOP BY RIAZ</p>
                </div>
                <div className="col-lg-4">
                   <div className="footer-flex">
                   <a href="https://maps.app.goo.gl/eAK5sxjHHiLoSnQq7" target="_blank" rel="noopener noreferrer">MAP</a> 
                    <a href="https://www.facebook.com/riazahmed.akhondo/" target="_blank" rel="noopener noreferrer" className='border__right'>
ALL RIGHT ARE RESERVED</a>
                   </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
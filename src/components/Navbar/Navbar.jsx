import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openX = () => {
    setOpen(false);
  };
  const openY = () => {
    setOpen(true);
  };




  return (
    <div className="header">
    <div className="container">
    <div className="main-header">
    <div className="names">
      <img src='https://i.imgur.com/vBQcL7c.png' alt="" />
    </div>
    <div>
      <div >
        <div className="hamberger" onClick={openY } >
         <span></span>
         <span></span>
        </div>
      </div>
      <div className={open ? `Navbar` :"navbar" }>
        <div className="parents" onClick={openX}>
        <svg 
       style={{cursor:"pointer"}}
      xmlns="http://www.w3.org/2000/svg"
      width={'40' || '24'}
      height={"40" || '24'}
      viewBox="0 0 24 24"
      fill="none"
      stroke={'white' || 'currentColor'}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
        </div>

        <div className="link-items">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      </div></div>
      </div>
    </div></div>
  );
};

export default Navbar;
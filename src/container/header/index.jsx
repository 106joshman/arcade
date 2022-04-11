import { React, useState } from "react";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/logo.png";
import NavBar from "../../assets/navBurger.png";
import Navlist from "../navList";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="header w-full top-0 left-0 z-[100] fixed p-[32px]">
      <div className="flex justify-between items-center">
        <div className="logo-icon">
          <HashLink to="#home" className="">
            <img 
                src={Logo} 
                alt="Arcader Logo icon" 
                srcset="" 
            />
          </HashLink>
        </div>
        <div className="navBurger">
          <button 
            className="menuIcon cursor-pointer" 
            onClick={() => {setShowNav(!showNav)}}
          >
            <img 
                src={NavBar} 
                alt="" 
                srcset="" 
            />
          </button>
          {!showNav ? showNav : <Navlist onClose={() => setShowNav(false)} showNav={showNav}/>}
        </div>
        </div>
    </header>
  );
};

export default Header;

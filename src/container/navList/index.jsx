import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Navlist = (props) => {
  if (!props.showNav) {
    return null;
  }
  return (
    <nav
      className="Navlist fixed w-full bg-navbg bg-no-repeat bg-center transition-all left-0"
      onClick={props.onClose}
    >
      <div className="flex flex-col items-center gap-y-4" onClick={(e) => e.stopPropagation()}>
        <ul className=" no-underline flex flex-col text-center justify-center">
          <HashLink
            to="#home"
            className="text-gray-500 text-sm mb-2 font-semibold hover:text-white"
            onClick={props.onClose}
          >
            Home
          </HashLink>
          <HashLink
            to="#about"
            className="text-gray-500 text-sm mb-2 font-semibold hover:text-white"
            onClick={props.onClose}
          >
            About
          </HashLink>
          <HashLink
            to="#token"
            className="text-gray-500 text-sm mb-2 font-semibold hover:text-white"
            onClick={props.onClose}
          >
            Token
          </HashLink>
          <HashLink
            to="#arcader"
            className="text-gray-500 text-sm mb-2 font-semibold hover:text-white"
            onClick={props.onClose}
          >
            Arcader
          </HashLink>
          <HashLink
            to="#play-to-earn"
            className="text-gray-500 text-sm mb-2 font-semibold hover:text-white"
            onClick={props.onClose}
          >
            Play to earn
          </HashLink>
          <HashLink
            to="#team"
            className="text-gray-500 text-sm mb-2 font-semibold hover:text-white"
            onClick={props.onClose}
          >
            Team
          </HashLink>
          <HashLink
            to="#roadmap"
            className="text-gray-500 text-sm mb-2 font-semibold hover:text-white"
            onClick={props.onClose}
          >
            Roadmap
          </HashLink>
          <Link
            to="/whitepaper"
            className="text-gray-500 text-sm mb-2 font-semibold hover:text-white"
            onClick={props.onClose}
          >
            Whitepaper
          </Link>
        </ul>
        <div className="contact">
          <Link
            to="/whitepaper"
            className="text-gray-500 border-2 rounded-md text-sm mb-2 font-semibold hover:text-white"
            onClick={props.onClose}
          >
            Contact Us
          </Link>
          </div>
      </div>
    </nav>
  );
};

export default Navlist;

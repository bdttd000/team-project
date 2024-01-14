import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Header: React.FC = () => (
  <div className="w-screen bg-blue-500 text-white">
    <div className="flex flex-row justify-between items-center max-w-5xl m-auto px-4 h-16 ">
      <img className="w-14" src={Logo} alt="Logo"></img>
      <Link to="/home" className="text-4xl">
        SkillSage
      </Link>
      <Link to="/profile" className="text-4xl">
        {/* TO DO */}
        {/* importować avatar */}
        <img className="w-14" src={Logo} alt="Logo"></img>
      </Link>
    </div>
  </div>
);

export default Header;

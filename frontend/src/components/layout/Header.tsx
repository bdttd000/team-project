import React from "react";
import { Link, Navigate } from "react-router-dom";
import Logo from "../../assets/logo.png";



const clearLocalStorageOnClick = () => {
  
  localStorage.removeItem('access_token');
  window.location.reload();
 

};

const Header: React.FC = () => (
  <div className="w-screen bg-blue-500 text-white">
    <div className="flex flex-row justify-between items-center max-w-5xl m-auto px-4 h-16 ">
      <img className="w-14" src={Logo} alt="Logo"></img>
      <Link to="/home" className="text-4xl">
        SkillSage
      </Link>
      
      <div className="text-2xl cursor-pointer" id="myDiv" onClick={clearLocalStorageOnClick}>
      Wyloguj
</div>
      
    </div>
  </div>
);

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => (
  <div className="w-screen bg-blue-500 text-white">
    <ul className="flex flex-row justify-around items-center max-w-3xl m-auto px-4 h-12 ">
      <li>
        <Link to="/statute">Regulamin</Link>
      </li>
      <li>
        <Link to="/contact">Kontakt</Link>
      </li>
      <li>
        <Link to="/privacyPolicy">Polityka Prywatności</Link>
      </li>
    </ul>
  </div>
);

export default Footer;

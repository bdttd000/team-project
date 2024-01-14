import React from "react";
import { Link } from "react-router-dom";

const Media: React.FC<any> = ({ photo, shortDesc, longDesc }) => {
  return (
    <div className="media flex flex-col lg:flex-row">
      <div className="lg:w-1/4 h-60 lg:h-40 relative z-0">
        <img
          src={photo}
          alt="Background"
          className="absolute w-full h-full -z-10"
        />
        <Link to="/...">
          <div className="w-40 h-10 bg-slate-600 opacity-90 text-white rounded-3xl m-auto top-2/3 relative flex justify-center items-center">
            Sprawdź
          </div>
        </Link>
      </div>
      <div className="block lg:hidden lg:w-0 mt-2 text-justify">
        {shortDesc}
      </div>
      <div className="w-3/4 p-4 lg:flex items-center hidden">{longDesc}</div>
    </div>
  );
};

export default Media;

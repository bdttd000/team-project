import React from "react";
import { LayoutDefault } from "../../layouts";
import { statute } from "../../context";

const Statute: React.FC = () => {
  return (
    <LayoutDefault>
      <div className="max-w-5xl p-4 m-5 mx-auto bg-slate-200 rounded-lg">
        {statute}
      </div>
    </LayoutDefault>
  );
};

export default Statute;

import React from "react";
import { LayoutDefault } from "../../layouts";
import { contact } from "../../context";

const Contact: React.FC = () => {
  return (
    <LayoutDefault>
      <div className="max-w-5xl p-4 m-5 mx-auto bg-slate-200 rounded-lg">
        {contact}
      </div>
    </LayoutDefault>
  );
};

export default Contact;

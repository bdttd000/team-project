import React from "react";
import { LayoutDefault } from "../../layouts";
import { privacyPolicy } from "../../context";

const PrivacyPolicy: React.FC = () => {
  return (
    <LayoutDefault>
      <div className="max-w-5xl p-4 m-5 mx-auto bg-slate-200 rounded-lg">
        {privacyPolicy}
      </div>
    </LayoutDefault>
  );
};

export default PrivacyPolicy;

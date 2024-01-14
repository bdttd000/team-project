import React, { ReactNode } from "react";
import { Header, Footer } from "../../components/layout";

interface LayoutDefaultProps {
  children: ReactNode;
}

const LayoutDefault: React.FC<LayoutDefaultProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between overflow-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutDefault;

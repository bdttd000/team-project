import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { getAuthentication } from "../../hooks";

interface GuestRouteProps {
  children: ReactNode;
}

const GuestRoute: React.FC<GuestRouteProps> = ({ children }) => {
  const isAuthenticated = getAuthentication();
  return isAuthenticated ? <Navigate to="/home" /> : <>{children}</>;
};

export default GuestRoute;

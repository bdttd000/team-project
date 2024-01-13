import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { getAuthentication } from "../../hooks";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = getAuthentication();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;

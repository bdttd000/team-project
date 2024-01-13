import React, { ReactNode } from "react";
import { Navigate} from "react-router-dom";
import { getAuthentication } from "../../hooks";

interface GuestRouteProps {
  children: ReactNode;
}

const GuestRoute: React.FC<GuestRouteProps> = ({ children }) => {
  const isAuthenticated = getAuthentication();
  return isAuthenticated ? <Navigate to="/home" /> : <>{children}</>;
};

export default GuestRoute;

/*const GuestRoute: React.FC<GuestRouteProps> = ({ children }) => {
  const isAuthenticated = getAuthentication();
  const location = useLocation(); // import useLocation from react-router-dom

  // Allow access to the login page even if authenticated
  if (isAuthenticated && (location.pathname !== "/login" && location.pathname !== "/register")) {
    return <Navigate to="/home" />;
  }

  return <>{children}</>;
};

export default GuestRoute;
*/
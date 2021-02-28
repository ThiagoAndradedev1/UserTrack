import { useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

interface ProtectedRouteProps extends RouteProps {
  component: any;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ...rest }) => {
  const { authenticated } = useContext(AuthContext);
  if (!authenticated) {
    return <Redirect to="/login" />;
  } else {
    return <Route {...rest} />;
  }
};

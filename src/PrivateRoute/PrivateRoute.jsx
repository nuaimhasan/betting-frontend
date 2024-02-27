import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../components/UX/Spinner/Spinner";

const PrivateRoute = ({ children }) => {
  const { loggedUser } = useSelector((state) => state.user);
  const location = useLocation();
  const token = localStorage.getItem("betxfire_jwt");

  if (loggedUser === undefined && !token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (loggedUser !== undefined && token) {
    return children;
  }

  return <Spinner />;
};

export default PrivateRoute;

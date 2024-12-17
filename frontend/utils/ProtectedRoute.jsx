import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectToken } from "../src/features/auth/authSlice";

const ProtectedRoute = ({ children }) => {
  const token = useSelector(selectToken);

  return token ? children : <Navigate to="/Login" />; //incase user is already logged out, if token does not exist redirects to login page
};

export default ProtectedRoute;

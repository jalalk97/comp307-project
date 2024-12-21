import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";

import { userLoggedOut } from "../features/auth/authSlice";

const AuthButtons = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  const handleLogout = () => {
    dispatch(userLoggedOut());
    navigate("/");
  };

  return (
    <div style={styles.navRight}>
      {token ? (
        <>
          <Link to="/dashboard" style={styles.navButton}>
            Dashboard
          </Link>
          <button style={styles.navButton} onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login" style={styles.navButton}>
            Login
          </Link>
          <Link to="/register" style={styles.navButton}>
            Register
          </Link>
        </>
      )}
    </div>
  );
};

const styles = {
  navLeft: {
    display: "flex",
    gap: "20px",
    flexWrap: "nowrap",
    padding: "8px 1px",
  },
  navRight: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    padding: "8px 1px",
    marginRight: "20px"
  },
  navButton: {
    backgroundColor: "#ffffff",
    border: "1px solid #ffffff",
    color: "#990000",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
    textDecoration: "none",
  },
};

export default AuthButtons;

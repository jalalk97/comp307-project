import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  useLoginMutation,
  useRegisterMutation,
} from "./authApiSlice";
import { userLoggedIn } from "./authSlice";

const schema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z
      .string()
      .email("Invalid email")
      .refine(
        (email) =>
          email.endsWith("@mail.mcgill.ca") || email.endsWith("@mcgill.ca"),
        { message: "Email must end with @mail.mcgill.ca or @mcgill.ca" },
      ),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"], // Attach the error to the passwordConfirmation field
  });

const ErrorMessage = ({ message }) => {
  return (
    <p
      style={{
        fontSize: "14px",
        color: "#990000",
        margin: 0,
        padding: 0,
        textAlign: "left",
      }}
    >
      {message}
    </p>
  );
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userRegister, { isRegisterLoading }] = useRegisterMutation();
  const [login, { isLoginLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    const { name, email, password } = data;
    try {
      await userRegister({ name, email, password }).unwrap();
      const { token, user } = await login({ email, password }).unwrap();
      dispatch(userLoggedIn(token, user));
      navigate("/Dashboard");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <div style={styles.heroOverlay}></div>

        <img src="/logo.png" alt="Logo" style={styles.logo} />
      </div>

      <div style={styles.registerBox}>
        <h2 style={styles.title}>Register</h2>
        <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label style={styles.label} htmlFor="fullName"></label>
          {errors.name && <ErrorMessage message={errors.name.message} />}
          <input
            style={styles.input}
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            {...register("name")}
          />

          <label style={styles.label} htmlFor="email"></label>
          {errors.email && <ErrorMessage message={errors.email.message} />}
          <input
            style={styles.input}
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register("email")}
          />

          <label style={styles.label} htmlFor="password"></label>
          {errors.password && (
            <ErrorMessage message={errors.password.message} />
          )}
          <input
            style={styles.input}
            type="password"
            id="password"
            placeholder="Enter your password"
            {...register("password")}
          />

          <label style={styles.label} htmlFor="confirmPassword"></label>
          {errors.confirmPassword && (
            <ErrorMessage message={errors.confirmPassword.message} />
          )}
          <input
            style={styles.input}
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            {...register("confirmPassword")}
          />

          <button
            type="submit"
            style={styles.registerButton}
            disabled={isRegisterLoading || isLoginLoading}
          >
            REGISTER
          </button>
        </form>

        <p style={styles.loginRedirect}>
          Already have an account?{" "}
          <span style={styles.loginLink} onClick={() => navigate("/login")}>
            Login
          </span>
        </p>

        <button style={styles.backLink} onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    </div>
  );
};

// Styles
const styles = {
  page: {
    position: "relative",
    height: "100vh",
    width: "100%",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  hero: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url('https://grantme.com/wp-content/uploads/2021/09/mcgill.jpeg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: 1,
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent white overlay
    zIndex: 2,
  },
  logo: {
    position: "absolute",
    top: "20px",
    left: "20px",
    maxWidth: "100px",
    width: "10vw",
    height: "auto",
    zIndex: 3,
  },
  registerBox: {
    position: "relative",
    zIndex: 4,
    backgroundColor: "#918e8e",
    padding: "30px",
    borderRadius: "15px",
    maxWidth: "400px",
    width: "90%",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
  },
  title: {
    margin: "0 0 20px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#000000",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    textAlign: "left",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#000000",
  },
  input: {
    padding: "10px",
    border: "1px solid #ffffff",
    borderRadius: "5px",
    fontSize: "16px",
    outline: "none",
    width: "100%",
  },
  registerButton: {
    backgroundColor: "#990000",
    color: "#ffffff",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  loginRedirect: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#000000",
  },
  loginLink: {
    color: "#990000",
    cursor: "pointer",
    textDecoration: "underline",
  },
  backLink: {
    marginTop: "20px",
    backgroundColor: "transparent",
    color: "#990000",
    border: "none",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default RegisterPage;

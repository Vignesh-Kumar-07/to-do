import { useDispatch } from "react-redux";
import { loginUser } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import styles from "../styles/modules/modal.module.scss";
import Button from "../components/Button";
const style = {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const formContainer = {
  width: "40%",
};

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "password123") {
      dispatch(loginUser({ username }));
      localStorage.setItem("username", username);

      navigate("/dashboard");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div style={style}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: "",
          style: {
            fontSize: "16px",
          },
        }}
      />

      <form
        className={styles.form}
        onSubmit={handleSubmit}
        style={formContainer}
      >
        <h1 className={styles.formTitle}>Login</h1>
        <label htmlFor="username">
          Username
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div className={styles.buttonContainer}>
          <Button type="submit" variant="primary">
            Login
          </Button>
        </div>
        {/* <button type="submit">Login</button> */}
      </form>
    </div>
  );
}

export default Login;

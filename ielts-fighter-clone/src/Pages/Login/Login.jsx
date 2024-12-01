import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.scss";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const [loading, setLoading] = useState(false); // State for loading status

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    try {
      const res = await axios.post(
        `https://determined-freedom-production.up.railway.app/api/v1/nguoidung/login`,
        {
          tendangnhap: username,
          matkhau: password,
        }
      );

      if (
        !res.data.manguoidung ||
        !res.data.tennguoidung ||
        !res.data.tenloaichucvu
      ) {
        throw new Error("Invalid response from the server");
      }

      Cookies.set("isLoggedIn", true);
      Cookies.set("userId", res.data.manguoidung);
      Cookies.set("name", res.data.tennguoidung);
      Cookies.set("role", res.data.tenloaichucvu);
      navigate("/dashboard");
    } catch (err) {
      setErrorMessage("Sai tài khoản hoặc mật khẩu"); // Set error message
      console.log("Error logging in: ", err);
      setUsername(""); // Optionally clear the username
      setPassword(""); // Optionally clear the password
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className={classes.login}>
      <div className={classes.login_container}>
        <div className={classes.logo}></div>
        <h1>Đăng nhập</h1>
        <form onSubmit={handleLogin}>
          {" "}
          {/* Attach onSubmit here */}
          <div className={classes.input_container}>
            <label htmlFor="username">Tên đăng nhập</label>
            <input
              id="username"
              type="text"
              placeholder="Tên đăng nhập..."
              required
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Mật khẩu</label>
            <input
              id="password"
              type="password"
              placeholder="Mật khẩu..."
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && <p className={classes.error}>{errorMessage}</p>}{" "}
          {/* Display error message */}
          <button type="submit" disabled={loading}>
            {" "}
            {/* Disable button while loading */}
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

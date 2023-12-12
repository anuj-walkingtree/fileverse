import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  Link,
  Button,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { Google as GoogleIcon, Apple as AppleIcon } from "@mui/icons-material";
import "./LoginPage.css";
import ForgotPasswordPage from "./ForgotPassword";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";
import LoginIcon from "@mui/icons-material/Login";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";


const LoginPage = ({ onToggleComponent }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordLengthValid, setIsPasswordLengthValid] = useState(true);

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

const navigate = useNavigate();

  const loginPasswordHandler = (e) => {
    const value = e.target.value;

    setPassword(value);
    setIsPasswordEmpty(value.trim() === "");

    if (value.length >= 8) {
      setIsPasswordLengthValid(true);
    } else {
      setIsPasswordLengthValid(false);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailEmpty(value.trim() === "");

    const emailRegex = /^[a-zA-Z0-9.]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(value) || value === "") {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const handleLogin = () => {
    console.log("Login clicked");
    navigate("/dashboard");

  };

  const handleToggle = () => {
    onToggleComponent();
  };

  const handleToggleForgotPassword = () => {
    setShowForgotPassword((prevState) => !prevState);
  };

  return (
    <>
      <div className="login-body">
        {showForgotPassword ? (
          <ForgotPasswordPage onToggleLoginPage={handleToggleForgotPassword} />
        ) : (
          <div className="text-center">
            <div className="d-flex welcome-heading justify-content-center text-center">
              <h2 className="wel-back">Welcome Back</h2>
              <SignLanguageIcon
                style={{
                  color: "#FFC83D",
                  padding: "3px",
                  height: "5vh",
                  width: "auto",
                }}
              />
            </div>

            <p className="login-account">Login in your account</p>

            <TextField
              label="Email"
              variant="filled"
              fullWidth
              margin="normal"
              onChange={handleEmailChange}
              error={!isEmailValid || isEmailEmpty}
              placeholder="example.email@gmail.com"
              helperText={
                !isEmailValid
                  ? "Invalid email format"
                  : isEmailEmpty
                  ? "Email is required"
                  : ""
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton edge="start" aria-label="email icon">
                      <AlternateEmailRoundedIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Password"
              variant="filled"
              fullWidth
              margin="normal"
              type={isPasswordVisible ? "text" : "password"}
              onChange={loginPasswordHandler}
              error={isPasswordEmpty || !isPasswordLengthValid}
              helperText={
                isPasswordEmpty
                  ? "Password is required"
                  : !isPasswordLengthValid
                  ? "Minimum 8 characters required"
                  : ""
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton edge="start" aria-label="password icon">
                      <LockOutlined />
                    </IconButton>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      aria-label="toggle password visibility"
                      onClick={handleTogglePasswordVisibility}
                    >
                      {isPasswordVisible ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              placeholder="Enter atleast 8+ characters"
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "0 0 2vh 0",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                }
                label="Remember me"
              />
              <Link
                to="/forgot-password"
                color="primary"
                underline="always"
                onClick={handleToggleForgotPassword}
              >
                Forgot password?
              </Link>
            </div>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
              startIcon={<LoginIcon />}
              style={{ textTransform: "capitalize" }}
            >
              Login
            </Button>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "3vh 0",
                color: "primary",
              }}
            >
              or Login with
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="icons apple">
                <IconButton
                  edge="start"
                  aria-label="apple icon"
                  style={{
                    color: "#8f9298",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                >
                  <AppleIcon />
                </IconButton>
              </div>
              <div className="icons google">
                <IconButton
                  edge="start"
                  aria-label="google icon"
                  style={{
                    color: "#c1423e",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                  classes={{ root: "icons-rounded" }}
                >
                  <GoogleIcon />
                </IconButton>
              </div>
              <div className="icons facebook">
                <IconButton
                  edge="start"
                  aria-label="facebook icon"
                  style={{
                    color: "#4067ac",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                >
                  <FacebookRoundedIcon />
                </IconButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LoginPage;

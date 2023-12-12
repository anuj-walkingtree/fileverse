import React, { useState } from "react";
import {
  FormControl,
  TextField,
  FilledInput,
  InputAdornment,
  IconButton,
  Button,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import {
  Visibility,
  VisibilityOff,
  ArrowBack,
} from "@mui/icons-material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ResetPassword = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isConfirmPasswordEmpty, setIsConfirmPasswordEmpty] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordLengthValid, setIsPasswordLengthValid] = useState(true);
  const [doPasswordsMatch, setDoPasswordsMatch] = useState(true);
  const [password, setPassword] = useState('');

  const MIN_PASSWORD_LENGTH = 8;

  // Password and confirm password logic below

  const loginPasswordHandler = (e) => {
    const value = e.target.value;

    setNewPassword(value);
    setIsPasswordEmpty(value.trim() === "");

    if (value.length >= 8) {
      setIsPasswordLengthValid(true);
    } else {
      setIsPasswordLengthValid(false);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setIsConfirmPasswordEmpty(value.trim() === "");
    setConfirmPassword(value);
    setDoPasswordsMatch(newPassword === value);

    // Check password length
    if (value.length < MIN_PASSWORD_LENGTH) {
      setIsConfirmPasswordEmpty(false); // Reset this flag to avoid conflicting messages
    }
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleResetPassword = () => {
    // Validate empty fields
    setIsPasswordEmpty(newPassword.trim() === "");
    setIsConfirmPasswordEmpty(confirmPassword.trim() === "");
  
    // Validate password length
    setIsPasswordLengthValid(newPassword.length >= 8);
  
    // Validate password match
    setIsPasswordMatch(newPassword === confirmPassword);
  
    // Reset error state for the password field
    setIsPasswordEmpty(false);
  
    // If all validations pass, proceed with password reset logic
    if (!isPasswordEmpty && !isConfirmPasswordEmpty && isPasswordLengthValid && isPasswordMatch) {
      console.log("Reset Password clicked");
      // Redirect to the login page after resetting the password
      // navigate("/login");
    }
  };
  
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="reset-password-container">
        <h2 className="reset-password-heading">Reset Password</h2>
        {/* Password with visibility toggling */}
        <TextField
          label="Password"
          variant="filled"
          fullWidth
          margin="normal"
          type={isPasswordVisible ? 'text' : 'password'}
          onChange={loginPasswordHandler}
          error={isPasswordEmpty || !isPasswordLengthValid}
          helperText={
            isPasswordEmpty
              ? 'Password is required'
              : !isPasswordLengthValid
                ? 'Minimum 8 characters required'
                : ''
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
                  {isPasswordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          placeholder="Enter at least 8+ characters"
          sx={{
            height: "50px",
            "& .MuiFilledInput-underline:after": {
              borderBottom: "1px solid transparent",
            },
            "&.Mui-focused": { backgroundColor: "#e6f7ff" },
          }}
        />

        {/* Confirm Password with visibility toggling */}
        <TextField
          label="Confirm Password"
          variant="filled"
          fullWidth
          margin="normal"
          type={showConfirmPassword ? 'text' : 'password'}
          onChange={handleConfirmPasswordChange}
          error={isConfirmPasswordEmpty || !doPasswordsMatch}
          placeholder="Enter at least 8+ characters"
          helperText={
            isConfirmPasswordEmpty
              ? "Confirm Password is required"
              : !doPasswordsMatch
                ? "Passwords do not match"
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
                  onClick={handleClickShowConfirmPassword}
                >
                  {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            height: "60px",
            "& .MuiFilledInput-underline:after": {
              borderBottom: "1px solid transparent",
            },
            "&.Mui-focused": { backgroundColor: "#e6f7ff" },
          }}
        />

        <Button
          variant="contained"
          color="info"
          fullWidth
          onClick={handleResetPassword}
          startIcon={<RestartAltIcon />}
          className="btn btn-info"
          style={{
            marginTop: "30px",
            textTransform: "capitalize",
            color: "white",
          }}
        >
          Reset Password
        </Button>

        <Typography
          variant="body2"
          color="error"
          sx={{ marginTop: "15px", textAlign: "center" }}
        >
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log("Reset Done")}
          startIcon={<ArrowBack />}
          style={{ margin: "auto", textTransform: "capitalize" }}
          className="d-flex flex-row gap-1 mt-4"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default ResetPassword;

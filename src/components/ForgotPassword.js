import React, { useState } from "react";
import { TextField, InputAdornment, IconButton, Button } from "@mui/material";
import { MailOutline, Password, ArrowBack } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";
import VerificationModal from "./../components/modals/VerificationModal";
import ResetPassword from "./../components/ResetPassword";
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';

const ForgotPasswordPage = ({ onToggleLoginPage }) => {
  const [isVerificationModalOpen, setVerificationModalOpen] = useState(false);
  const [isResetPasswordVisible, setIsResetPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  
  const handleSendCode = () => {
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    if (isValid) {
      // Add logic to send a code for password reset
      console.log("Send Code clicked");
      setVerificationModalOpen(true); // Open the verification modal
    } else {
      setIsEmailValid(false);
    }
  };

  const handleCloseVerificationModal = () => {
    setVerificationModalOpen(false);
  };

  const handleVerify = () => {
    setIsResetPasswordVisible(true);
    setVerificationModalOpen(false);
  };


  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setIsEmailEmpty(value.trim() === "");

    const emailRegex = /^[a-zA-Z0-9.]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(value)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };


  return (
    <div className="forgot-password-body">
      <div className="text-center">
        {!isResetPasswordVisible ? (
          <>
            <h2 className="forgot-password" style={{ marginTop: "20vh" }}>
              Forgot Password
            </h2>
            <p className="enter-email-para m-3">
              Enter your email and we'll send you a code to reset your password
            </p>

            {/* Email field with validation */}
            <TextField
              label="Email"
              variant="filled"
              fullWidth
              margin="normal"
              value={email}
              onChange={handleEmailChange}
              error={!isEmailValid || isEmailEmpty}
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
              placeholder="example.email@gmail.com"
            />

            {/* Send code button with validation */}
            <Button
              variant="contained"
              color="info"
              fullWidth
              onClick={handleSendCode}
              startIcon={<Password />}
              style={{ marginTop: "25px" }}
            >
              Send Code
            </Button>

            {/* Back to login link */}
            <Button
              variant="contained"
              color="primary"
              onClick={() => onToggleLoginPage()}
              startIcon={<ArrowBack />}
              style={{ marginTop: "40px" }}
            >
              <span className="">
                <LoginIcon />
              </span>
              <span className="">Login</span>
            </Button>
          </>
        ) : (
          // Render Reset Password component
          <ResetPassword />
        )}

        {/* Verification Modal */}
        <VerificationModal
          open={isVerificationModalOpen}
          onClose={handleCloseVerificationModal}
          onVerify={handleVerify}
        />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

import React, { useState, useEffect } from "react";
import FileverseHubIcon from "./../assets/images/fileVerseHubIcon.png";
import { Button, Typography } from "@mui/material";
import "./ThoughtsPage.css";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

const ThoughtsPage = ({ onToggleLoginPage }) => {
  const [thought, setThought] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);

  const fetchRandomThought = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setThought(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching thought:", error);
    }
  };

  useEffect(() => {
    fetchRandomThought();
  }, []);

  const handleToggleMode = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <div className="">
      <div className="top-nav d-flex gap-2">
        <img
          src={FileverseHubIcon}
          className="mt-3"
          height={"30px"}
          alt="FileVerseHub Icon"
        />
        <Typography
          variant="h4"
          className="mt-2"
          style={{ fontWeight: "bold" }}
        >
          FileVerseHub
        </Typography>
      </div>
      <div className="top-container">
        <div className="thought-box">
          <div className="thought-content">
            {thought ? (
              <Typography>{thought}</Typography>
            ) : (
              <Typography>Loading thought...</Typography>
            )}
          </div>
          <div className="person-name">
            {author && <Typography>- {author}</Typography>}
          </div>
          <Typography className="button-heading">
            {isLoginMode ? "Been here before?" : "Don't have an account?"}
          </Typography>
          <Button
            variant="filled"
            class="btn btn-light mt-3 hover-effect"
            onClick={() => {
              onToggleLoginPage();
              handleToggleMode();
            }}
            className={`login-button ${
              isLoginMode ? "lowercase" : "lowercase"
            }`}
          >
            <div className="d-flex gap-2">
              {isLoginMode ? <LoginIcon /> : <PersonAddAltOutlinedIcon />}
              {isLoginMode ? "Login" : "SignUp"}
            </div>
          </Button>
          <Typography
            className="toggle-link"
            onClick={handleToggleMode}
          ></Typography>
        </div>
      </div>
    </div>
  );
};

export default ThoughtsPage;

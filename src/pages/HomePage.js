import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import UserReviewsSlider from "../components/reviews/UserReviews";
import UserReviewSlider from "../components/reviews/UserReview";
import Footer from "../components/Footer";
import FileverseHubIcon from "./../assets/images/fileVerseHubIcon.png";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
        navigate("/landing");
  };

  return (
    <>
      <div>
        <div className="main-container">
          <div className="sub-container-first">
            <img src={FileverseHubIcon} className="mt-2" />
            <h3 className="mt-3 font-weight-bold">FileVerseHub</h3>
          </div>
          <div className="sub-container-second">
            <p className="mt-4 text-primary">Login</p>
            <button
              type="submit"
              className="btn btn-primary mt-3"
              onClick={handleSignUpClick}
            >
              Sign Up <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
        <div className="text-center center-content">
          <h1 className="m-5 font-size-xxl fw-bolder">
            Welcome to FileVerseHub, Where together we redefine file sharing!
          </h1>
          <p className="font-size-lg">
            Access your uploaded file from anywhere, anytime. Say goodbye to the
            hassle of USB drives and emails.
          </p>
          <p className="font-size-md">
            Ready to experience the convenience of file sharing like never
            before? Sign up today and start sharing with ease!
          </p>
          <button type="submit" className="btn btn-primary">
            Get Started
          </button>
        </div>
        {/* bottom content */}
        <div className="bottom-container">
          <h2 className="user-review-heading text-center">
            Hear from our awesome users!
          </h2>
          <UserReviewsSlider />
          <UserReviewSlider/>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;

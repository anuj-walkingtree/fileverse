import React, { useState } from "react";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row mt-3 pt-5">
          <div className="col-md-6 col-lg-5 col-xl-4 mx-5 mb-4 pr-5">
            <h6 className="fw-bold mb-4 logo">
              <i className="bi bi-files"></i> FileVerseHub
            </h6>
            <p>
              Collaborate in real-time shared files. Edit, comment and
              brainstorm together effortlessly.
            </p>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mb-md-0 px-5">
            <h6 className="fw-bold mb-4" style={{ fontSize: "1.5rem" }}>
              Product
            </h6>
            <p>
              <a href="#!" className="text-reset text-decoration-none">
                Pricing
              </a>
            </p>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mb-md-0 mb-4 px-5">
            <h6 className="fw-bold mb-4" style={{ fontSize: "1.5rem" }}>
              Company
            </h6>
            <p className="mb-2">
              <a href="#!" className="text-reset text-decoration-none mb-0">
                About Us
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="text-reset text-decoration-none mb-0">
                Contact Us
              </a>
            </p>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 mx-auto mb-4 px-5">
            <h6 className="fw-bold mb-4" style={{ fontSize: "1.5rem" }}>
              Follow us
            </h6>
            <div className="d-flex">
              <a href="/" className="me-4 text-reset text-decoration-none">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="/" className="me-4 text-reset text-decoration-none">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="/" className="me-4 text-reset text-decoration-none">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="/" className="me-4 text-reset text-decoration-none">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>

            <p className="mt-2">
              <i className="fas fa-home"></i> Alaska, United States
            </p>
          </div>
        </div>
      <div className="horizontal-line"></div>


      <div className="footer-bottom m-0">
        <p className="copyright">©FileVerseHub, Inc.</p>
        <div className="option-select">
          <select
            id="language"
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="language-select"
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Marathi">Marathi</option>
            <option value="Bengali">Bengali</option>
            <option value="Assamese">Assamese</option>
            <option value="Sanskrit">Sanskrit</option>
          </select>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import {
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FilledInput,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Person,
  MailOutline,
  Business,
  Phone,
  Cake,
  Work,
  LockOutlined,
} from "@mui/icons-material";
import { Google as GoogleIcon, Apple as AppleIcon } from "@mui/icons-material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import "./CreateAccount.css";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import VerifyEmail from "./modals/VerifyEmail";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';


const CreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [organization, setOrganization] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [designation, setDesignation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFullNameEmpty, setIsFullNameEmpty] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isOrganizationEmpty, setIsOrganizationEmpty] = useState(false);
  const [isGenderEmpty, setIsGenderEmpty] = useState(false);
  const [isPhoneNumberEmpty, setIsPhoneNumberEmpty] = useState(false);
  const [isDateOfBirthEmpty, setIsDateOfBirthEmpty] = useState(false);
  const [isDesignationEmpty, setIsDesignationEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isConfirmPasswordEmpty, setIsConfirmPasswordEmpty] = useState(false);
  const [doPasswordsMatch, setDoPasswordsMatch] = useState(true);
  const [showVerifyEmailDialog, setShowVerifyEmailDialog] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordLengthValid, setIsPasswordLengthValid] = useState(true);
  const MIN_PASSWORD_LENGTH = 8;
  

  const handleFullNameChange = (event) => {
    const value = event.target.value;
    if (/^[A-Za-z\s]+$/.test(value) || value === "") {
      setFullName(value);
      setIsFullNameEmpty(value.trim() === "");
    }
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

  const handleOrganizationChange = (event) => {
    const value = event.target.value;
  
    // Validate organization name (only alphabets, spaces, and other valid characters)
    if (/^[A-Za-z\s\-.&,]+$/i.test(value) || value === "") {
      setOrganization(value);
      setIsOrganizationEmpty(value.trim() === "");
    }
  };

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    // Validate phone number (only numerics, length <= 10, and starts with 5, 6, 7, 8, or 9)
    if (/^[5-9]\d{0,9}$/.test(value) || value === "") {
      setPhoneNumber(value);
      setIsPhoneNumberEmpty(value.trim() === "");
    }
  };
  
  // dOB logic below
  const [maxDate, setMaxDate] = useState(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to the start of the day
    return today;
  });

  const handleDateOfBirthChange = (event) => {
    const selectedDate = event.target.value;
    // Add logic for handling date of birth change, if needed
    setDateOfBirth(selectedDate);
  };

  //designation validation
  const handleDesignationChange = (event) => {
    const value = event.target.value;

    // Validate designation (only alphabets and spaces)
    if (/^[A-Za-z\s]+$/.test(value) || value === "") {
      setDesignation(value);
      setIsDesignationEmpty(value.trim() === "");
    }
  };

  //Password and cnf password logic below

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
  
  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  
  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setIsConfirmPasswordEmpty(value.trim() === "");
    setConfirmPassword(value);
    setDoPasswordsMatch(password === value);
    // Check password length
    if (value.length < MIN_PASSWORD_LENGTH) {
      setIsConfirmPasswordEmpty(false); // Reset this flag to avoid conflicting messages
    }
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };



  const handleVerifyClick = () => {
    if (isEmailValid && email !== "") {
      setShowVerifyEmailDialog(true);
    }
  };

  const handleCloseVerifyEmailDialog = () => {
    setShowVerifyEmailDialog(false);
  };

  const handleSubmit = () => {
    // Set all empty error flags to true if the corresponding fields are empty
    setIsFullNameEmpty(fullName.trim() === "");
    setIsEmailEmpty(email.trim() === "");
    setIsOrganizationEmpty(organization.trim() === "");
    setIsGenderEmpty(gender === "");
    setIsPhoneNumberEmpty(phoneNumber.trim() === "");
    setIsDateOfBirthEmpty(dateOfBirth === "");
    setIsDesignationEmpty(designation.trim() === "");
    setIsPasswordEmpty(password.trim() === "");
    setIsConfirmPasswordEmpty(confirmPassword.trim() === "");
  
    const isValid =
      !isFullNameEmpty &&
      !isEmailEmpty &&
      !isOrganizationEmpty &&
      !isGenderEmpty &&
      !isPhoneNumberEmpty &&
      !isDateOfBirthEmpty &&
      !isDesignationEmpty &&
      !isPasswordEmpty &&
      !isConfirmPasswordEmpty &&
      doPasswordsMatch;
  
    if (isValid) {
      console.log("All fields are valid");
      console.log("Full Name:", fullName);
      console.log("Email:", email);
      console.log("Organization:", organization);
      console.log("Gender:", gender);
      console.log("Phone Number:", phoneNumber);
      console.log("Date of Birth:", dateOfBirth);
      console.log("Designation:", designation);
      // Add more fields as needed
  
      // Optionally, you can reset the form after submission
      setFullName("");
      setEmail("");
      setOrganization("");
      setGender("");
      setPhoneNumber("");
      setDateOfBirth("");
      setDesignation("");
      setPassword("");
      setConfirmPassword("");
      setDoPasswordsMatch(true);
    } else {
      console.log("Validation failed. Please check the fields.");
    }
  };
  
  


  return (
    <div className="body">
      <div className="text-center">
        <h4 className="main-heading mt-5">Create an Account</h4>
        <p className="signUp m-3">SignUp With</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="icons apple">
            <IconButton
              edge="start"
              aria-label="apple icon"
              style={{ color: "#8f9298", borderRadius: "50%", padding: "10px" }}
            >
              <AppleIcon />
            </IconButton>
          </div>

          <div className="icons google">
            <IconButton
              edge="start"
              aria-label="google icon"
              style={{ color: "#c1423e", borderRadius: "50%", padding: "10px" }}
              classes={{ root: "icons-rounded" }}
            >
              <GoogleIcon />
            </IconButton>
          </div>
          <div className="icons facebook">
            <IconButton
              edge="start"
              aria-label="facebook icon"
              style={{ color: "#4067ac", borderRadius: "50%", padding: "10px" }}
            >
              <FacebookRoundedIcon />
            </IconButton>
          </div>
        </div>
      </div>

      <p className="text-center signUp m-3">Or Create a new account</p>

      <form className="form-container">
        {/* Full Name with user icon */}
        <TextField
          label="Full Name"
          variant="filled"
          fullWidth
          margin="normal"
          value={fullName}
          onChange={handleFullNameChange}
          placeholder="Enter your name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton edge="start" aria-label="user icon">
                  <Person />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            height: "50px",
          }}
          error={isFullNameEmpty}
          helperText={isFullNameEmpty ? "Full Name is required" : ""}
        />

        {/* Email with mail icon */}
        <TextField
          label="Email"
          variant="filled"
          fullWidth
          margin="normal"
          value={email}
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
            endAdornment: isEmailValid && email !== "" && (
              <InputAdornment position="end">
                <Button
                  variant="text"
                  color="primary"
                  style={{ textTransform: "none" }}
                  onClick={handleVerifyClick}
                >
                  Verify
                </Button>
              </InputAdornment>
            ),
          }}
          sx={{
            height: "50px",
          }}
        />


        {/* Organisation with building icon */}
        <TextField
          label="Organisation"
          variant="filled"
          fullWidth
          margin="normal"
          value={organization}
          onChange={handleOrganizationChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton edge="start" aria-label="building icon">
                  <Business />
                </IconButton>
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            classes: {
              root: "label-root",
            },
          }}
          placeholder="Organisation name"
          sx={{
            height: "45px",
            // '&.Mui-focused': { backgroundColor: '#e6f7ff' },
          }}
          error={isOrganizationEmpty}
          helperText={isOrganizationEmpty ? "Organisation Name is required" : ""}
            />

        {/* Gender */}
        <FormControl
          component="fieldset"
          fullWidth
          className="custom-form-control"
          margin="normal"
        >
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup row aria-label="gender" name="gender">
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              value="others"
              control={<Radio />}
              label="Others"
            />
          </RadioGroup>
        </FormControl>

        {/* Phone Number with phone icon */}
        <TextField
          label="Phone Number"
          variant="filled"
          fullWidth
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="Enter your contact number (optional)"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton edge="start" aria-label="phone icon">
                  <Phone />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            height: "50px",
          }}
        />

        {/* Date of Birth with calendar icon */}
        <TextField
        label="DOB"
        variant="filled"
        fullWidth
        margin="normal"
        type="date"
        onChange={handleDateOfBirthChange}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton edge="start" aria-label="calendar icon">
                <CalendarTodayOutlinedIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          height: "50px",
        }}
        inputProps={{
          max: maxDate.toISOString().split("T")[0], // Convert max date to ISO format
        }}
      />

        {/* Designation with briefcase icon */}
        <TextField
          label="Designation"
          variant="filled"
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton edge="start" aria-label="briefcase icon">
                  <Work />
                </IconButton>
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            classes: {
              root: "label-root",
            },
          }}
          placeholder="Enter your designation"
          sx={{
            height: "50px",
            "& .MuiFilledInput-underline:after": {
              borderBottom: "1px solid transparent",
            },
            "&.Mui-focused": { backgroundColor: "#e6f7ff" },
          }}
          value={designation}
          onChange={handleDesignationChange}
          error={isDesignationEmpty}
          helperText={isDesignationEmpty ? "Designation is required" : ""}
     
        />

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
              placeholder="Enter atleast 8+ characters"
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
  placeholder="Enter atleast 8+ characters"
  error={
    isConfirmPasswordEmpty ||
    !doPasswordsMatch 
    }
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

        {/* Marital Status */}
        <FormControl component="fieldset" fullWidthmargin="normal">
          <FormLabel component="legend">Marital Status</FormLabel>
          <RadioGroup row aria-label="maritalStatus" name="maritalStatus">
            <FormControlLabel
              value="single"
              control={<Radio />}
              label="Single"
            />
            <FormControlLabel
              value="married"
              control={<Radio />}
              label="Married"
            />
            <FormControlLabel
              value="divorced"
              control={<Radio />}
              label="Divorced"
            />
          </RadioGroup>
        </FormControl>

        {/* Verification Dialog */}
        <Dialog
          open={showVerifyEmailDialog}
          onClose={handleCloseVerifyEmailDialog}
        >
          <DialogContent>
            <VerifyEmail onClose={handleCloseVerifyEmailDialog} />
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>

        {/* Submit Button */}
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ marginBottom: "20px" }}
        >
          <Button
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<PersonAddAltIcon />}
            style={{ textTransform: "capitalize" }}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
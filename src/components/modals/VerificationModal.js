import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, Typography } from '@mui/material';

const VerificationModal = ({ open, onClose, onVerify: onSuccess }) => {
  const [verificationCode, setVerificationCode] = useState(Array(6).fill(''));
  const [timeLeft, setTimeLeft] = useState(60);
  const [isCodeEmpty, setIsCodeEmpty] = useState(false);

  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      onClose();
    }

    return () => clearInterval(timer);
  }, [timeLeft, onClose]);

  const handleChange = (index, value) => {
    const updatedCode = [...verificationCode];
    updatedCode[index] = value;

    if (value && index < verificationCode.length - 1) {
      // Using refs to focus on the next input
      document.getElementById(`verification-input-${index + 1}`).focus();
    }

    setVerificationCode(updatedCode);
    setIsCodeEmpty(false); // Reset error state
  };

  const handleVerification = () => {
    if (verificationCode.some((code) => !code)) {
      // Check if any code field is empty
      setIsCodeEmpty(true);
    } else {
      console.log('Verify clicked with code:', verificationCode.join(''));
      if (typeof onSuccess === 'function') {
        onSuccess();
      }
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} className="verification-dialog">
      <DialogTitle className="text-center fw-bold" style={{ paddingTop: '30px' }}>
        Almost Done
      </DialogTitle>
      <DialogContent>
        <Typography style={{ fontSize: '14px' }}>
          Please type the code we sent to you in your email
        </Typography>
        <div style={{ display: 'flex', gap: '12px', margin: '4vh 0', justifyContent: 'center' }}>
          {verificationCode.map((value, index) => (
            <TextField
              key={index}
              variant="outlined"
              size="small"
              type="text"
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              inputProps={{ maxLength: 1 }}
              error={isCodeEmpty}
              helperText={isCodeEmpty ? 'OTP required' : ''}
              style={{ width: '2.4vw', height: '4.5vh', textAlign: 'center' }}
              id={`verification-input-${index}`}
            />
          ))}
        </div>
        <Button
          variant="contained"
          color="info"
          fullWidth
          onClick={handleVerification}
          style={{ marginTop: '10px', backgroundColor: '#9095A1', textTransform: 'capitalize' }}
        >
          Verify
        </Button>
        <Typography style={{ textAlign: 'center', marginTop: '16px', paddingBottom: '10px' }}>
          Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default VerificationModal;

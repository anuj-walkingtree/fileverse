import React, { useState, useEffect, useRef } from 'react';
import { Button, Dialog, Typography, DialogContent, DialogTitle, TextField } from '@mui/material';

const VerifyEmail = () => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(60);
  const [error, setError] = useState('');

  const inputRefs = useRef([]);

  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else {
      // onClose();
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleCodeChange = (index, value) => {
    if (/^\d$/.test(value) || value === '') {
      const updatedCode = [...verificationCode];
      updatedCode[index] = value;
      setVerificationCode(updatedCode);

      // Move to the next input box
      if (index < verificationCode.length - 1 && value !== '') {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleVerifyClick = () => {
    const isAnyFieldEmpty = verificationCode.some((value) => value === '');

    if (isAnyFieldEmpty) {
      setError('Please fill in all the input boxes.');
      return;
    }

    const enteredCode = verificationCode.join('');
    // Perform verification logic with enteredCode
    console.log('Verification Code:', enteredCode);

    // Clear error if all fields are filled
    if (!isAnyFieldEmpty && error) {
      setError('');
    }
  };

  return (
    <Dialog className="verification-dialog" open={true}>
      <DialogTitle className="text-center fw-bold" style={{ paddingTop: '30px', textAlign: 'center' }}>
        Verify Email
      </DialogTitle>
      <DialogContent>
        <Typography style={{ fontSize: '14px', textAlign:'center'  }}>Please type the code we sent to your email</Typography>
        <div style={{ display: 'flex', gap: '12px', margin: '4vh 0', justifyContent: 'center' }}>
          {verificationCode.map((value, index) => (
            <TextField
              key={index}
              variant="outlined"
              size="small"
              inputRef={(input) => (inputRefs.current[index] = input)}
              type="text"
              value={value}
              maxLength="1"
              onChange={(e) => handleCodeChange(index, e.target.value)}
              inputProps={{ maxLength: 1 }}
              style={{ width: '2.4vw', height: '4.5vh', textAlign: 'center' }}
              id={`verification-input-${index}`}
            />
          ))}
        </div>
        {error && (
          <Typography style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{error}</Typography>
        )}
        <Button
          onClick={handleVerifyClick}
          style={{ marginTop: '10px', backgroundColor: '#9095A1', color: '#fff', textTransform: 'capitalize', width: '100%' }}
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

export default VerifyEmail;

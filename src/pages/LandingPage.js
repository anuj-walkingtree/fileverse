import React, { useState, useEffect } from 'react';
import ThoughtsPage from '../components/ThoughtsPage';
import LoginPage from '../components/LoginPage';
import CreateAccount from '../components/CreateAccount';
import ForgotPasswordPage from './../components/ForgotPassword';
import ResetPassword from './../components/ResetPassword';
import './LandingPage.css';

const LandingPage = () => {
  const [activePage, setActivePage] = useState('login');

  useEffect(() => {
    // Retrieve the initial state from localStorage or use 'create-account' as default
    const initialActivePage = localStorage.getItem('activePage') || 'create-account';
    setActivePage(initialActivePage);
  }, []); // Run this effect only once when the component mounts

  const handleToggleComponent = () => {
    setActivePage((prev) => (prev === 'login' ? 'create-account' : 'login'));
  };

  // Save the activePage to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('activePage', activePage);
  }, [activePage]);

  // Ensure the correct component is rendered based on the active page
  let componentToRender;
  switch (activePage) {
    case 'create-account':
      componentToRender = <LoginPage onToggleComponent={handleToggleComponent} />;
      break;
    case 'login':
      componentToRender = <CreateAccount />;
      break;
    case 'forgot-password':
      componentToRender = <ForgotPasswordPage onToggleLoginPage={handleToggleComponent} />;
      break;
    case 'reset-password':
      componentToRender = <ResetPassword />;
      break;
    default:
      componentToRender = null;
  }

  return (
    <div className="main-container">
      <div className={`columns column-1 ${activePage === 'create-account' ? 'create-account-active' : 'login-active'}`}>
        <ThoughtsPage onToggleLoginPage={handleToggleComponent} />
      </div>
      <div className="column column-2">
        {componentToRender}
      </div>
    </div>
  );
};

export default LandingPage;

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FileverseHubIcon from "./../assets/images/fileVerseHubIcon.png";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dashboard from '../components/Dashboard';
import Files from '../components/Files';
import Download from '../components/Downloads';
import Upload from '../components/Uploads';

// Separate component for the dashboard content
const DashboardContent = ({ activeButton }) => {
  switch (activeButton) {
    case 0:
      return <Dashboard/>;
      case 1:
      return <Files/>;
      case 2:
      return <Download/>;
      case 3:
      return <Upload/>;
    // Add cases for other buttons if needed
    default:
      return null;
  }
};

const DashboardPage = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    console.log("activeButton",activeButton);
    setActiveButton(index);
  };

  const buttonData = [
    { text: 'Dashboard', icon: <DashboardOutlinedIcon /> },
    { text: 'Files', icon: <ContentCopyOutlinedIcon /> },
    { text: 'Download', icon: <SystemUpdateAltOutlinedIcon /> },
    { text: 'Upload', icon: <DriveFolderUploadOutlinedIcon /> },
  ];

  return (
    <>
      <AppBar position="static" color="inherit" style={{ position: 'relative' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" style={{ flexGrow: 1 }}>
            {/* Your Logo */}
          </Typography>
          <IconButton color="inherit">
            <ChatOutlinedIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsNoneOutlinedIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          display: 'flex', // Make it a flex container
          width: '100%', // Adjust the width as needed
          height: '100%',
        }}
      >
        {/* Side Navigation */}
        <div
          style={{
            width: '258px', // Adjust the width as needed
            backgroundColor: '#fff', // Set background color
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional: Add shadow
          }}
        >
          <List>
            <ListItem className='d-flex gap-2 p-0'>
              <img
                className='px-3'
                src={FileverseHubIcon}
                height={"40px"}
                alt="FileVerseHub Icon"
              />
              <div className='d-flex flex-column gap-0 pt-2' style={{ lineHeight: '1' }}>
                <Typography
                  variant="h6"
                  style={{ fontWeight: "bold" }}
                >
                  FileVerseHub
                </Typography>
                <p className='small'>Utility</p>
              </div>
            </ListItem>
            {buttonData.map((button, index) => (
              <ListItem key={button.text}>
                <Button
                  sx={{
                    color: activeButton === index ? 'white' : '#808080',
                    fontWeight: activeButton === index ? 'bold' : '500',
                    backgroundColor: activeButton === index ? '#31B4ED' : 'transparent',
                    width: '210px',
                    margin: 'auto',
                    textTransform: 'capitalize',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    borderRadius: '8px',
                    padding: '4px 0',
                    '&:hover': {
                      backgroundColor: '#1976D2',
                      color: 'white',
                      fontWeight: '550',
                    },
                  }}
                  onClick={() => handleButtonClick(index)}
                  startIcon={<span style={{ margin: '0 10px 0 20px' }}>{button.icon}</span>}
                >
                  {button.text}
                </Button>
              </ListItem>
            ))}
          </List>
        </div>

        {/* Dashboard Content */}
        <div style={{ flex: 1, padding: '12vh 0 0 4vh'}}>
          <DashboardContent activeButton={activeButton} />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;

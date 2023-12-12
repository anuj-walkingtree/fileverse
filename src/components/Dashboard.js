import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

// Sample image for CardMedia
import OverViewIcon from "./../assets/images/overviewIcon.png";
import container1 from './../assets/images/cardImages/Container1.png'
import container2 from './../assets/images/cardImages/Container2.png'
import container3 from './../assets/images/cardImages/Container3.png'
import container4 from './../assets/images/cardImages/Container4.png'
import container5 from './../assets/images/cardImages/Container5.png'
import container6 from './../assets/images/cardImages/Container6.png'
import container7 from './../assets/images/cardImages/Container7.png'
import container8 from './../assets/images/cardImages/Container8.png'
import recentUpandDownIcon from './../assets/images/recentUpandDownIcon.png'

const Dashboard = () => {
  // Array of card data
  const cardArray = [
    {
      id: 1,
      mainHeading: "Recent Uploads",
      subHeading1: 5,
      subHeading2: "+5 from yesterday",
      img:container1,
      backgroundColor:"#FFFAE1",
      borderColor:"#FFDF14",
    },
    {
      id: 2,
      mainHeading: "Uploading",
      subHeading1: 25,
      subHeading2: "+8 from yesterday",
      img:container2,
      backgroundColor:"#FFF0F7",
      borderColor:"#FF56A5",
    },
    {
      id: 3,
      mainHeading: "Total Uploads",
      subHeading1: 16,
      subHeading2: "+8 from yesterday",
      img:container3,
      backgroundColor:"#F8F0FF",
      borderColor:"#9F3EF9",
    },
    {
      id: 4,
      mainHeading: "Uploads Failed",
      subHeading1: 16,
      subHeading2: "+8 from yesterday",
      img:container4,
      backgroundColor:"#FFF7F0",
      borderColor:"#FF9941",
    },
    {
      id: 5,
      mainHeading: "Recent Downloads",
      subHeading1: 5,
      subHeading2: "+5 from yesterday",
      img:container5,
      backgroundColor:"#F1F8FD",
      borderColor:"#379AE6",
    },
    {
      id: 6,
      mainHeading: "Downloading",
      subHeading1: 25,
      subHeading2: "+8 from yesterday",
      img:container6,
      backgroundColor:"#FFF7F0",
      borderColor:"#FF9941",
    },
    {
      id: 7,
      mainHeading: "Total Downloads",
      subHeading1: 16,
      subHeading2: "+8 from yesterday",
      img:container7,
      backgroundColor:"#F7FCE3",
      borderColor:"#B7D61B",
    },
    {
      id: 8,
      mainHeading: "Downloads Failed",
      subHeading1: 16,
      subHeading2: "+8 from yesterday",
      img:container8,
      backgroundColor:"#F5C4C6",
      borderColor:"#DE3B40",
    },
    // Add more card data as needed
  ];

  return (
    <>
      <div className="d-flex gap-1 align-items-center">
        <img
          src={OverViewIcon}
          height={"22px"}
          alt="Overview Icon"
        />
        <h3 className="mt-1 bolder">Overview</h3>
      </div>

      {/* Generate Cards */}
      <div className="d-flex flex-wrap gap-4 mt-4">
        {cardArray.map((card) => (
          <Card
            key={card.id}
            sx={{
              width: 330, // Adjust the maxWidth as needed
              // marginTop: ,
              border: `1px solid ${card.borderColor}`,
              borderRadius:'12px', 
              backgroundColor:`${card.backgroundColor}`
            }}
          >
            <div className="d-flex justify-content-between">
              <Typography variant="h5" component="div" className="m-3">
                {card.mainHeading}
              </Typography>
              {/* Card Media (Icon) */}
              {/* <CardMedia
                component="img"
                // height="60"
                width="60"
                image={card.img}
                alt="Card Icon"
                className="m-2"
              /> */}
<img src={card.img} height={"100%"} width={"auto"} className="p-3" alt="card Image" />
              {/* Main Heading */}
            </div>

            {/* Card Content */}
            <CardContent>
              {/* Sub Headings */}
              <Typography variant="subtitle1" color="text.secondary">
                {card.subHeading1}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {card.subHeading2}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="d-flex ga-2 mt-5">
       <img src={recentUpandDownIcon} alt="Recent Uploads and Downloads Icon"/>
        <h4>Recent Uploads/Downloads</h4>
      </div>
    </>
  );
};

export default Dashboard;

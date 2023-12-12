import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const userReview = [
    {
      id: 11,
      name: 'User 11',
      rating: 4,
      comment: 'Great product! I loved using it. The features are excellent, and it made my work so much easier.',
      imageUrl: 'https://robohash.org/user11.png', // Replace with actual image URL
    },
    {
      id: 12,
      name: 'User 12',
      rating: 5,
      comment: 'Amazing experience, would highly recommend. The customer service was top-notch, and the product exceeded my expectations.',
      imageUrl: 'https://robohash.org/user12.png', // Replace with actual image URL
    },
    {
      id: 13,
      name: 'User 13',
      rating: 3,
      comment: 'Good, but could be better. Some features are lacking, and the interface is a bit confusing.',
      imageUrl: 'https://robohash.org/user13.png', // Replace with actual image URL
    },
    {
      id: 14,
      name: 'User 14',
      rating: 4.5,
      comment: 'Impressed with the quality. Will buy again! The design is sleek, and the performance is excellent.',
      imageUrl: 'https://robohash.org/user14.png', // Replace with actual image URL
    },
    {
      id: 15,
      name: 'User 15',
      rating: 4,
      comment: 'Decent product, met my expectations. It is a reliable solution for everyday tasks.',
      imageUrl: 'https://robohash.org/user15.png', // Replace with actual image URL
    },
    {
      id: 16,
      name: 'User 16',
      rating: 2,
      comment: 'Not satisfied. The product did not live up to the hype. I encountered several issues and found it difficult to use.',
      imageUrl: 'https://robohash.org/user16.png', // Replace with actual image URL
    },
    {
      id: 17,
      name: 'User 17',
      rating: 5,
      comment: 'Absolutely fantastic! 5 stars without a doubt. The product exceeded my expectations in every aspect.',
      imageUrl: 'https://robohash.org/user17.png', // Replace with actual image URL
    },
    {
      id: 18,
      name: 'User 18',
      rating: 3.5,
      comment: 'Average product. Nothing extraordinary. It gets the job done, but there is room for improvement.',
      imageUrl: 'https://robohash.org/user18.png', // Replace with actual image URL
    },
    {
      id: 19,
      name: 'User 19',
      rating: 4,
      comment: 'Satisfied with the purchase. Good value for money. The product offers a good balance of features and affordability.',
      imageUrl: 'https://robohash.org/user19.png', // Replace with actual image URL
    },
    {
      id: 20,
      name: 'User 20',
      rating: 4,
      comment: 'Nice design and functionality. Would recommend to others. The user interface is intuitive, and the product is reliable.',
      imageUrl: 'https://robohash.org/user20.png', // Replace with actual image URL
    },
  ];



const UserReviewCard = ({ name, rating, comment, imageUrl }) => {
    const generateStars = (rating) => {
        const totalStars = 5;
        const fullStars = Math.floor(rating);
        const emptyStars = totalStars - fullStars;
    
        const yellowStars = Array.from({ length: fullStars }, (_, index) => (
          <span key={index} style={{ color: 'orange' }}>&#9733;</span>
        ));
    
        const greyStars = Array.from({ length: emptyStars }, (_, index) => (
          <span key={fullStars + index} style={{ color: 'grey' }}>&#9733;</span>
        ));
    
        return [...yellowStars, ...greyStars];
      };

  return (
    <div style={{ border: '1px solid darkgrey', padding: '16px', margin: '7vh  2vh 2vh 2vh', borderRadius: '8px', maxWidth: '300px', maxHeight:'270px', minHeight:'270px',textAlign:'justify', backgroundColor:'#fff', }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <img src={imageUrl} alt={name} style={{ width: '50%', height: '50%', borderRadius: '50%', margin: '8px 0' }} />
      <div style={{ display: 'flex', alignItems: 'left', flexDirection: 'column', margin: '4vh auto auto auto' }}>
        <p style={{ fontSize: '12px' }}>{name}</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {generateStars(rating)}
        </div>
      </div>
    </div>
    <p>{comment}</p>
  </div>
  );
};

const userReviewSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    rtl: true, // Add this line to reverse the direction
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {userReview.map((review) => (
        <UserReviewCard key={review.id} {...review} />
      ))}
    </Slider>
  );
};

export default userReviewSlider;

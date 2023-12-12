import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const userReviews = [
  {
    id: 1,
    name: 'User 1',
    rating: 4,
    comment: 'Great product! I loved using it. The features are excellent, and it made my work so much easier.',
    imageUrl: 'https://robohash.org/user1.png', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'User 2',
    rating: 5,
    comment: 'Amazing experience, would highly recommend. The customer service was top-notch, and the product exceeded my expectations.',
    imageUrl: 'https://robohash.org/user2.png', // Replace with actual image URL
  },
  {
    id: 3,
    name: 'User 3',
    rating: 3,
    comment: 'Good, but could be better. Some features are lacking, and the interface is a bit confusing.',
    imageUrl: 'https://robohash.org/user3.png', // Replace with actual image URL
  },
  {
    id: 4,
    name: 'User 4',
    rating: 4.5,
    comment: 'Impressed with the quality. Will buy again! The design is sleek, and the performance is excellent.',
    imageUrl: 'https://robohash.org/user4.png', // Replace with actual image URL
  },
  {
    id: 5,
    name: 'User 5',
    rating: 4,
    comment: 'Decent product, met my expectations. It is a reliable solution for everyday tasks.',
    imageUrl: 'https://robohash.org/user5.png', // Replace with actual image URL
  },
  {
    id: 6,
    name: 'User 6',
    rating: 2,
    comment: 'Not satisfied. The product did not live up to the hype. I encountered several issues and found it difficult to use.',
    imageUrl: 'https://robohash.org/user6.png', // Replace with actual image URL
  },
  {
    id: 7,
    name: 'User 7',
    rating: 5,
    comment: 'Absolutely fantastic! 5 stars without a doubt. The product exceeded my expectations in every aspect.',
    imageUrl: 'https://robohash.org/user7.png', // Replace with actual image URL
  },
  {
    id: 8,
    name: 'User 8',
    rating: 3.5,
    comment: 'Average product. Nothing extraordinary. It gets the job done, but there is room for improvement.',
    imageUrl: 'https://robohash.org/user8.png', // Replace with actual image URL
  },
  {
    id: 9,
    name: 'User 9',
    rating: 4,
    comment: 'Satisfied with the purchase. Good value for money. The product offers a good balance of features and affordability.',
    imageUrl: 'https://robohash.org/user9.png', // Replace with actual image URL
  },
  {
    id: 10,
    name: 'User 10',
    rating: 4,
    comment: 'Nice design and functionality. Would recommend to others. The user interface is intuitive, and the product is reliable.',
    imageUrl: 'https://robohash.org/user10.png', // Replace with actual image URL
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

const UserReviewsSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
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
      {userReviews.map((review) => (
        <UserReviewCard key={review.id} {...review} />
      ))}
    </Slider>
  );
};

export default UserReviewsSlider;

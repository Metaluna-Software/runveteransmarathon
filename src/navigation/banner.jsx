import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
  const interval = 3000
  const controls = true

  return (
    <div className='banner-wrapper'>
      <Carousel controls={controls} interval={interval}>
        <Carousel.Item>
          <img className='d-block w-90' src='../images/homepage_0.jpg' alt='start'/>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-90' src='../images/homepage_1.jpg' alt='flag'/>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-90' src='../images/homepage_2.jpg' alt='downtown'/>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;

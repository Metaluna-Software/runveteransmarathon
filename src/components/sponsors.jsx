import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Sponsors = () => {
  const interval = 3000
  const controls = true

  return (
    <div className='thank-you-heading h2'><span>Thank you to our sponsors</span>
      <Carousel controls={controls} interval={interval}>
        <Carousel.Item>
          <img className='d-block w-90' src='../images/sponsors/parkview-health-logo-lg.svg' alt='Parkview'/>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-90' src='../images/sponsors/SDI_no-inc_RGB.gif' alt='sdi'/>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-90' src='../images/sponsors/gatorade.png' alt='gatorade'/>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-90' src='../images/sponsors/kroger.PNG' alt='kroger'/>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-90' src='../images/sponsors/culligan.PNG' alt='culligan'/>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Sponsors;

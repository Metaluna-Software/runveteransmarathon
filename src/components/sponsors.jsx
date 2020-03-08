import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Sponsors = () => {
  return (
    <div className='sponsors'><span>Thank you to our sponsors</span>
      <Carousel controls='true' interval='3000'>
        <Carousel.Item>
          <img className='d-block w-90' src='../images/sponsors/parkview-health-logo-lg.svg' alt='Parkview'/>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-90' src='../images/sponsors/SDI_no-inc_RGB.gif' alt='sdi'/>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Sponsors;

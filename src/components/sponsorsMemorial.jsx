import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const SponsorsMemorial = () => {
  const interval = 3000
  const controls = true

  return (
    <div className='thank-you-heading h2'><span>Thank you to our sponsors</span>
      <Carousel controls={controls} interval={interval}>
        <Carousel.Item>
          <img className='d-block w-90' src='../images/sponsors/logo_cricket-green.webp' alt='cricket wireless'/>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SponsorsMemorial;

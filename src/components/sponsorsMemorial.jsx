import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const SponsorsMemorial = () => {
  const interval = 2500;
  const controls = true;

  return (<div className="thank-you-heading h2"><span>Thank you to our sponsors</span>
    <Carousel controls={controls} interval={interval}>
      <Carousel.Item>
        <img className="d-block w-90" src="../images/sponsors/auto-credit-usa-logo.png" alt="Auto Credit USA"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-90' src='../images/sponsors/bigg.jpeg' alt='big_g'/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-90" src="../images/sponsors/culligan.PNG" alt="culligan"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-90' src='../images/sponsors/gatorade.png' alt='gatorade'/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-90" src="../images/sponsors/mooover.jpg" alt="Moo Over"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-90" src="../images/sponsors/running-around.png" alt="running around"/>
      </Carousel.Item>
    </Carousel>
  </div>);
};

export default SponsorsMemorial;

import React from 'react';
import PropTypes from 'prop-types';
import Heading from './heading';

const Banner = (props) => {
  const {
    message
  } = props;

  return (
    <div className='banner-wrapper'>
      <Heading message={message}/>
    </div>
  );
};

Banner.propTypes = {
  message: PropTypes.string.isRequired
};

export default Banner;

import React from 'react';
import PropTypes from 'prop-types';

const TinySection = (props) => {
  const {
    title,
    message
  } = props;
  return (
    <div className='section-wrapper'>
      <h2>{title}</h2>
      <div className='tiny-section-content'>
        <div>{message}</div>
      </div>
    </div>
  );
};

TinySection.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default TinySection;

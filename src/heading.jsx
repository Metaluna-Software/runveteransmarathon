import React from 'react';
import PropTypes from 'prop-types';

const Heading = (props) => {
  const {
    message
  } = props;

  return (
    <div className='heading-wrapper'>
      <span>{message}</span>
    </div>
  );
};

Heading.propTypes = {
  message: PropTypes.string.isRequired
};

export default Heading;

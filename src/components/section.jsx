import React from 'react';
import PropTypes from 'prop-types';
import ParseNewLines from './parseNewLines';

const Section = (props) => {
  const {
    message
  } = props;
  return (
    <div className='section-wrapper'>
      <ParseNewLines message={message}/>
    </div>
  );
};

Section.propTypes = {
  message: PropTypes.string
};
export default Section;

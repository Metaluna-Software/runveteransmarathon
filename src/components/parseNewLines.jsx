import React from 'react';
import PropTypes from 'prop-types';

const ParseNewLines = (props) => {
  const {
    message
  } = props;
  let text = '';
  if (message) {
    text = message.split('\n').map((item, i) => <p key={i}>{item}</p>);
  }
  return (text)
};

ParseNewLines.propTypes = {
  message: PropTypes.string
};

export default ParseNewLines

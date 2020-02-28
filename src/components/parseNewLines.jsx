import React from 'react';
import PropTypes from 'prop-types';

const ParseNewLines = (props) => {
  const {
    message
  } = props;
  let text = '';
  if (message) {
    text = message.map((item, i) => {
      if (item.search('jpg') >= 0) {
        return <p><img width='30%' src={item} key={i} alt="image"/></p>
      } else if (item.search('http') >= 0) {
        return <p><a href={item} target='_blank' referrerPolicy='no-referrer' key={i}>{item}</a></p>
      } else {
        return <p key={i}>{item}</p>
      }
    });
  }
  return (text);
};

ParseNewLines.propTypes = {
  message: PropTypes.array
};

export default ParseNewLines;

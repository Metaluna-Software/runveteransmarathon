import React from 'react';
import PropTypes from 'prop-types';

const ParseNewLines = (props) => {
  const {
    message
  } = props;
  let text = '';
  if (message) {
    text = message.map((item, i) => {
      if(item) {
        item.replace('http:', 'https:');
        if (item.search('jpg') >= 0 || item.search('jpeg') >= 0 || item.search('png') >= 0) {
          return <p key={i}><img width='30%' src={item} key={i} alt='image'/></p>;
        } else if (item.search('http') >= 0) {
          return <p key={i}><a href={item} target='_blank' rel='noopener noreferrer' key={i}>{item}</a></p>;
        } else if (item.search('strong') >= 0) {
          return <p className='font-weight-bold' key={i}>{item.replace('<strong>', '').replace('</strong>', '')}</p>;
        } else {
          return <p key={i}>{item}</p>;
        }
      }
    });
  }
  return (text);
};

ParseNewLines.propTypes = {
  message: PropTypes.array
};

export default ParseNewLines;

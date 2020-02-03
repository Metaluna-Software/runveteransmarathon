import React from 'react';
import PropTypes from 'prop-types';

const ParseNewLines = (props) => {
  const {
    links,
    message
  } = props;
  let text = '';
  let newtext = '';
  if (message) {
    text = message.split('\n').map((item, i) => <p key={i}>{item}</p>);
  }
  if (links.length > 0) {
    newtext = links.map((a, i) =>
        //{text.split(a)[0]}
        <a href={a[1]}>{a[1]}</a>
      //{text.split(a)[1]}
    )
  }
  return (text);
};

ParseNewLines.propTypes = {
  links: PropTypes.array,
  message: PropTypes.string
};

export default ParseNewLines;

import React from 'react';
import PropTypes from 'prop-types';
import Heading from './heading';
import TinySection from './tinySection';

const Section = (props) => {
  const {
    title,
    message,
    tinyMessages
  } = props;

  const tinySections = ({ tinyMessages }) => (
    <div>
      {tinyMessages.map(tinyMessage => (
        <TinySection title={tinyMessage.key} message={tinyMessage.value}/>
      ))}
    </div>
  );
  return (
    <div className='section-wrapper'>
      <Heading message={title}/>
      <div className='section-content'>
        <div>{message}</div>
        <div>{tinySections}</div>
      </div>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.array.isRequired,
  tinyMessages: PropTypes.array
};
export default Section;

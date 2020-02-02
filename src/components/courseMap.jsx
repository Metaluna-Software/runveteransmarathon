import React from 'react';
import PropTypes from 'prop-types';

const CourseMap = (props) => {
  const {
    name = ''
  } = props;
  return (
    <div>
      <h2>Course map</h2>
      <img src={name} alt='course map'/>
    </div>
  );
};

CourseMap.propTypes = {
  name: PropTypes.string
};

export default CourseMap;

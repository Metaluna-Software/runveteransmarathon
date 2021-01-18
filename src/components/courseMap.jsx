import React from 'react';
import PropTypes from 'prop-types';

const CourseMap = (props) => {
  const {
    enJson,
    course
  } = props;

  return (
    <div>
      <h2>Course map</h2>
      <iframe id="mapmyfitness_route"
              src={enJson.course[course]}
              height="660px" width="100%" frameBorder="0"/>
    </div>
  );
};

CourseMap.propTypes = {
  enJson: PropTypes.object,
  course: PropTypes.string
};

export default CourseMap;

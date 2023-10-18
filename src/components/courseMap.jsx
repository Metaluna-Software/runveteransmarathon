import React from 'react';
import PropTypes from 'prop-types';

const CourseMap = (props) => {
  const {
    enJson,
    course,
  } = props;

  return (
    <div>
      <h2>Course map</h2>
      <h4>If the map doesn't load, <a href={enJson.course[course+"_link"]} target="_blank">click here</a></h4>
      <iframe loading={"lazy"} id="mapmyfitness_route" src={enJson.course[course]} height="685px" width="100%"/>
    </div>
  );
};

CourseMap.propTypes = {
  enJson: PropTypes.object,
  course: PropTypes.string,
};

export default CourseMap;

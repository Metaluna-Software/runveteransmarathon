import React from 'react';
import Heading from '../../components/heading';
import CourseMap from '../../components/courseMap';
import PropTypes from 'prop-types';

const Memorial10kCourse = (props) => {
  const {
    enJson
  } = props;
  return (
    <div className={'section-wrapper'}>
      <Heading message={enJson.memorial10kTitle}/>
      <CourseMap enJson={enJson} course="memorial10k"/>
    </div>
  );
};

Memorial10kCourse.propTypes = {
  enJson: PropTypes.object,
  memorial10kTitle: PropTypes.string
};

export default Memorial10kCourse;

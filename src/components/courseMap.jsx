import React from 'react';

const CourseMap = () => {
  return (
    <div>
      <h2>Course map</h2>
      <iframe id="mapmyfitness_route"
              src="//snippets.mapmycdn.com/routes/view/embedded/3767468614?width=600&height=400&elevation=true&info=true&line_color=E6e60716&rgbhex=1607e6&distance_markers=0&unit_type=imperial&map_mode=HYBRID&last_updated=2020-12-10T08:35:33-05:00"
              height="660px" width="100%" frameBorder="0"/>
    </div>
  );
};

export default CourseMap;

import React from 'react';
import PropTypes from 'prop-types';

class ChooseRace extends React.Component {
  render() {
    return (
      <div className="section-wrapper">
        <br/>
        <div>
          <a href={'/veterans.html'}><img className="memorial-banner-img" src="../images/veterans2024.jpg"
                                          alt="veterans race"/></a>
        </div>
        <br/>
        <div>
          <a href={'/memorial.html'}><img className="memorial-banner-img" src="../images/memorial2024.jpg"
                                          alt="memorial race"/></a>
        </div>
      </div>
    );
  }
}

ChooseRace.propTypes = {
  enJson: PropTypes.object,
};

export default ChooseRace;

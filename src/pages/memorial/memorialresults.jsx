import React from 'react';
import Heading from '../../components/heading';
import PropTypes from 'prop-types';

class MemorialResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'section-wrapper'}>
        <Heading message={'Results'}/>
        <p>
          <a href='http://www.erunner.biz/results'>Results will be hosted on eRunner.biz</a>
        </p>
      </div>
    );
  }
}

MemorialResults.propTypes = {
  enJson: PropTypes.object
};

export default MemorialResults;

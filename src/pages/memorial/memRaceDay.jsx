import React from 'react';
import Section from '../../components/section';
import Heading from '../../components/heading';
import PropTypes from 'prop-types';
import Sponsors from '../../components/sponsors';

class MemorialRaceDay extends React.Component {
  render() {
    return (
      <div className={'section-wrapper'}>
        <Heading message={'Day of the Race'}/>
        <Section url={this.props.enJson.memRaceDayScheduleWP} title={'Information'}/>
        <Section url={this.props.enJson.memRaceDayAwardWP} title={'Awards'}/>
      </div>
    );
  }
}

MemorialRaceDay.propTypes = {
  enJson: PropTypes.object,
  memRaceDayScheduleWP: PropTypes.string,
  memRaceDayAwardWP: PropTypes.string,
};

export default MemorialRaceDay;

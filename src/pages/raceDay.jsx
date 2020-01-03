import React from 'react';
import Section from '../components/section';
import Heading from '../components/heading';

class RaceDay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'section-wrapper'}>
        <Heading message={'Day of the Race'}/>
        <Section url={this.props.enJson.raceDayScheduleWP} title={'Schedule of Events'}/>
        <Section url={this.props.enJson.raceDayParkingWP} title={'Parking'}/>
        <Section url={this.props.enJson.raceDayPostRaceWP} title={'Post Race'}/>
        <Section url={this.props.enJson.raceDayAwardWP} title={'Awards'}/>
        <Section url={this.props.enJson.raceDaySpectatorWP} title={'Spectators'}/>
      </div>
    );
  }
}

export default RaceDay;

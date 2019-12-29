import React from 'react';
import Section from '../components/section';
import Heading from '../components/heading';

const RaceDay = (props) => {
    const {
        enJson
    } = props;
    return (
      <div>
        <Heading id='schedule' message={enJson.raceDayScheduleHeader}/>
        <Section message={enJson.raceDayScheduleBody}/>
        <Heading message={enJson.raceDayParkingHeader}/>
        <Section message={enJson.raceDayParkingBody}/>
        <Heading message={enJson.raceDayPostRaceHeader}/>
        <Section message={enJson.raceDayPostRaceBody}/>
        <Heading id='awards' message={enJson.raceDayAwardHeader}/>
        <Section message={enJson.raceDayAwardBody}/>
        <Heading id='spectators' message={enJson.raceDaySpectatorHeader}/>
        <Section message={enJson.raceDaySpectatorBody}/>
      </div>
    );
};

export default RaceDay;

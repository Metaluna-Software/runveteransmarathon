import React from 'react';
import Section from '../components/section';
import Heading from '../components/heading';

const HalfMarathon = (props) => {
  const {
    enJson
  } = props;
    return (
      <div>
        <Heading message={enJson.halfMarathonTitle}/>
        <Section message={enJson.halfMarathonDetails}/>
      </div>
    );
};

export default HalfMarathon;

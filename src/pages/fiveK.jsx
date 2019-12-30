import React from 'react';
import Section from '../components/section';
import Heading from '../components/heading';

const FiveK = (props) => {
  const {
    enJson
  } = props;
    return (
      <div>
        <Heading message={enJson.fiveKTitle}/>
        <Section message={enJson.fiveKDetails}/>
      </div>
    );
};

export default FiveK;

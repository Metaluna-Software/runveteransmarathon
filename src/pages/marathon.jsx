import React from 'react';
import Section from '../components/section';
import Heading from '../components/heading';
import PriceTable from '../components/priceTable';

const Marathon = (props) => {
  const {
    enJson
  } = props;
    return (
      <div>
        <Heading message={enJson.marathonTitle}/>
        <Section message={enJson.marathonDetails}/>
        <PriceTable price={enJson.marathonPrice} title={enJson.marathonPriceTitle} />
      </div>
    );
};

export default Marathon;

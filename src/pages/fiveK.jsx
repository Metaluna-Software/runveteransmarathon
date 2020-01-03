import React from 'react';
import Section from '../components/section';
import Heading from '../components/heading';
import PriceTable from '../components/priceTable';
import CourseMap from '../components/courseMap';

const FiveK = (props) => {
  const {
    enJson
  } = props;
    return (
      <div className={'section-wrapper'}>
        <Heading message={enJson.fiveKTitle}/>
        <Section url={enJson.fiveKDetailsWP} enJson={enJson}/>
        <PriceTable url={enJson.priceWP} priceKey='5k_prices' columns={enJson.priceColumns} />
        <CourseMap name={'../images/USATF-Map-5k-VM17.png'}/>
        <Section url={enJson.fiveKSwagWP} enJson={enJson} title={'Swag'}/>
        <Section url={enJson.fiveKAwardsWP} enJson={enJson} title={'Awards'}/>
        <Section url={enJson.fiveKRecordsWP} enJson={enJson} title={'Records'}/>
      </div>
    );
};

export default FiveK;

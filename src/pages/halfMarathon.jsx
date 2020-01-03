import React from 'react';
import Section from '../components/section';
import Heading from '../components/heading';
import PriceTable from '../components/priceTable';
import ElevationMap from '../components/elevationMap';
import CourseMap from '../components/courseMap';

const HalfMarathon = (props) => {
  const {
    enJson
  } = props;
    return (
      <div className={'section-wrapper'}>
        <Heading message={enJson.halfMarathonTitle}/>
        <Section url={enJson.halfMarathonDetailsWP} enJson={enJson}/>
        <PriceTable url={enJson.priceWP} priceKey='half_marathon_prices' columns={enJson.priceColumns} />
        <CourseMap name={'../images/USATF-Map-Half-VM17.png'}/>
        <ElevationMap/>
        <Section url={enJson.halfmarathonSwagWP} enJson={enJson} title={'Swag'}/>
        <Section url={enJson.halfmarathonAwardsWP} enJson={enJson} title={'Awards'}/>
        <Section url={enJson.halfmarathonRecordsWP} enJson={enJson} title={'Records'}/>
      </div>
    );
};

export default HalfMarathon;

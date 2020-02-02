import React from 'react';
import Section from '../components/section';
import Heading from '../components/heading';
import PriceTable from '../components/priceTable';
import ElevationMap from '../components/elevationMap';
import CourseMap from '../components/courseMap';
import PropTypes from 'prop-types';

const Marathon = (props) => {
  const {
    enJson
  } = props;
  return (
    <div className={'section-wrapper'}>
      <Heading message={enJson.marathonTitle}/>
      <Section url={enJson.marathonDetailsWP} enJson={enJson}/>
      <PriceTable url={enJson.priceWP} priceKey='marathon_prices' columns={enJson.priceColumns}/>
      <CourseMap name={'../images/USATF-Map-Marathon-VM17.png'}/>
      <ElevationMap/>
      <Section url={enJson.marathonSwagWP} enJson={enJson} title={'Gear'}/>
      <Section url={enJson.marathonAwardsWP} enJson={enJson} title={'Awards'}/>
      <Section url={enJson.marathonRecordsWP} enJson={enJson} title={'Records'}/>
    </div>
  );
};

Marathon.propTypes = {
  enJson: PropTypes.object,
  marathonTitle: PropTypes.string,
  marathonDetailsWP: PropTypes.string,
  priceWP: PropTypes.string,
  priceColumns: PropTypes.array,
  marathonSwagWP: PropTypes.string,
  marathonAwardsWP: PropTypes.string,
  marathonRecordsWP: PropTypes.string
};

export default Marathon;

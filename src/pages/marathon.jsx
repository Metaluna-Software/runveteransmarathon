import React from 'react';
import Section from '../components/section';
import Heading from '../components/heading';
import PriceTable from '../components/priceTable';
import CourseMap from '../components/courseMap';
import PropTypes from 'prop-types';
import Sponsors from '../components/sponsors';

const Marathon = (props) => {
  const {
    enJson
  } = props;
  return (
    <div className={'section-wrapper'}>
      <Heading message={enJson.marathonTitle}/>
      <Section url={enJson.marathonDetailsWP} enJson={enJson}/>
      <PriceTable url={enJson.priceWP} priceKey='marathon_prices' columns={enJson.priceColumns}/>
      <CourseMap/>
      <Section url={enJson.marathonSwagWP} enJson={enJson} title={'Gear'}/>
      <Section url={enJson.marathonAwardsWP} enJson={enJson} title={'Awards'}/>
      <Section url={enJson.marathonRecordsWP} enJson={enJson} title={'Records'}/>
      <Sponsors/>
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

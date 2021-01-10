import React from 'react';
import Section from '../components/section';
import Heading from '../components/heading';
import PriceTable from '../components/priceTable';
import CourseMap from '../components/courseMap';
import PropTypes from 'prop-types';
import Sponsors from '../components/sponsors';

const HalfMarathon = (props) => {
  const {
    enJson
  } = props;
  return (
    <div className={'section-wrapper'}>
      <Heading message={enJson.halfMarathonTitle}/>
      <Section url={enJson.halfMarathonDetailsWP} enJson={enJson}/>
      <PriceTable url={enJson.priceWP} priceKey='half_marathon_prices' columns={enJson.priceColumns}/>
      <CourseMap/>
      <Section url={enJson.halfmarathonSwagWP} enJson={enJson} title={'Gear'}/>
      <Section url={enJson.halfmarathonAwardsWP} enJson={enJson} title={'Awards'}/>
      <Section url={enJson.halfmarathonRecordsWP} enJson={enJson} title={'Records'}/>
      <Sponsors/>
    </div>
  );
};

HalfMarathon.propTypes = {
  enJson: PropTypes.object,
  halfMarathonTitle: PropTypes.string,
  halfMarathonDetailsWP: PropTypes.string,
  priceWP: PropTypes.string,
  priceColumns: PropTypes.array,
  halfmarathonSwagWP: PropTypes.string,
  halfmarathonAwardsWP: PropTypes.string,
  halfmarathonRecordsWP: PropTypes.string
};

export default HalfMarathon;

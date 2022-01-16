import React from 'react';
import Section from '../../components/section';
import Heading from '../../components/heading';
import PriceTable from '../../components/priceTable';
import CourseMap from '../../components/courseMap';
import PropTypes from 'prop-types';
import Sponsors from '../../components/sponsors';

const FiveK = (props) => {
  const {
    enJson,
  } = props;
  return (
    <div className={'section-wrapper'}>
      <Heading message={enJson.fiveKTitle}/>
      <Section url={enJson.fiveKDetailsWP} enJson={enJson}/>
      <div>
        <h2>{'Race price'}</h2>
        <PriceTable url={enJson.priceWP} priceKey="5k_prices" columns={enJson.priceColumns}/>
      </div>
      <CourseMap enJson={enJson} course="fiveK"/>
      <Section url={enJson.fiveKSwagWP} enJson={enJson} title={'Gear'}/>
      <Section url={enJson.fiveKAwardsWP} enJson={enJson} title={'Awards'}/>
      <Section url={enJson.fiveKRecordsWP} enJson={enJson} title={'Records'}/>
      <Sponsors/>
    </div>
  );
};

FiveK.propTypes = {
  enJson: PropTypes.object,
  fiveKTitle: PropTypes.string,
  fiveKDetailsWP: PropTypes.string,
  priceWP: PropTypes.string,
  priceColumns: PropTypes.array,
  fiveKSwagWP: PropTypes.string,
  fiveKAwardsWP: PropTypes.string,
  fiveKRecordsWP: PropTypes.string,
};

export default FiveK;

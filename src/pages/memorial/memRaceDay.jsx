import React from 'react';
import Section from '../../components/section';
import Heading from '../../components/heading';
import PropTypes from 'prop-types';
import Sponsors from '../../components/sponsors';
import PriceTable from '../../components/priceTable';

class MemorialRaceDay extends React.Component {
  render() {
    return (
      <div className={'section-wrapper'}>
        <Heading message={'Race Information'}/>
        <Section url={this.props.enJson.memRaceDayScheduleWP} title={'Information'}/>
        <PriceTable url={this.props.enJson.priceWP} priceKey='memorial_10k_prices' columns={this.props.enJson.priceColumns}/>
        <Section url={this.props.enJson.memRaceDayAwardWP} title={'Awards'}/>
      </div>
    );
  }
}

MemorialRaceDay.propTypes = {
  enJson: PropTypes.object,
  memRaceDayScheduleWP: PropTypes.string,
  memRaceDayAwardWP: PropTypes.string,
};

export default MemorialRaceDay;

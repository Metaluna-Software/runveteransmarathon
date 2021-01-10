import React from 'react';
import Heading from '../components/heading';
import Section from '../components/section';
import PropTypes from 'prop-types';
import Sponsors from '../components/sponsors';

class Faq extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'section-wrapper'}>
        <Heading message={'FAQ'}/>
        <Section url={this.props.enJson.faqWP}/>
        <Sponsors/>
      </div>
    );
  }
}

Faq.propTypes = {
  enJson: PropTypes.object,
  faqWP: PropTypes.string
};

export default Faq;

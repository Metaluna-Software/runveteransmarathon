import React from 'react';
import Banner from '../navigation/banner';
import Section from '../components/section';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='section-wrapper'>
        <p className={'home-title-date'}>{this.props.enJson.marathonDate}</p>
        <h2 className={'home-title'}>Veterans Marathon and Heroes 5k</h2>
        <Banner/>
        <Section url={this.props.enJson.homeWelcomeWP}/>
      </div>
    )
  }
}

export default Home;

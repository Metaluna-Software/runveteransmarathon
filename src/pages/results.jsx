import React from 'react';
import Heading from '../components/heading';
import ERunnerResults from '../components/ERunnerResults';
import TimeToRunResults from '../components/TimeToRunResults';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'section-wrapper'}>
        <Heading message={'Results'}/>
        <ERunnerResults year={'2019'} enJson={this.props.enJson}/>
        <ERunnerResults year={'2018'} enJson={this.props.enJson}/>
        <TimeToRunResults year={'2017'} enJson={this.props.enJson}/>
      </div>
    );
  }
}

export default Results;

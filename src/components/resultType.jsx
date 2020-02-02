import React from 'react';
import PropTypes from 'prop-types';
import ERunnerResults from './ERunnerResults';
import TimeToRunResults from './TimeToRunResults';

class ResultType extends React.Component {
  render() {
    if (parseInt(this.props.year) >= 2018) {
      return (
        <ERunnerResults enJson={this.props.enJson} year={this.props.year}/>
      );
    }
    return (
      <div>
        <TimeToRunResults year={this.props.year}/>
      </div>
    );
  }
}

ResultType.propTypes = {
  year: PropTypes.string.isRequired
};

export default ResultType;

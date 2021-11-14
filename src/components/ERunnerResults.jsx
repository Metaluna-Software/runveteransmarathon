import React from 'react';
import PropTypes from 'prop-types';

class ERunnerResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overallMarathon: '',
      overallHalfMarathon: '',
      overallFiveK: '',
      ageGroupMarathon: '',
      ageGroupHalfMarathon: '',
      ageGroupFiveK: '',
      teamFiveK: ''
    };
  }

  componentDidMount() {
    this.update()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.year !== this.props.year) {
      this.update()
    }
  }

  update() {
    if (this.props.enJson && this.props.enJson.results) {
      this.setState({
        overallMarathon: this.props.enJson.results[this.props.year].overallMarathon,
        overallHalfMarathon: this.props.enJson.results[this.props.year].overallHalfMarathon,
        overallFiveK: this.props.enJson.results[this.props.year].overallFiveK,
        ageGroupMarathon: this.props.enJson.results[this.props.year].ageGroupMarathon,
        ageGroupHalfMarathon: this.props.enJson.results[this.props.year].ageGroupHalfMarathon,
        ageGroupFiveK: this.props.enJson.results[this.props.year].ageGroupFiveK,
        teamFiveK: this.props.enJson.results[this.props.year].teamFiveK
      });
    }
  }

  render() {
    return (
      <div>
        <p><a href={this.state.overallMarathon} target='_blank' rel='noopener noreferrer'>Marathon Overall</a></p>
        <p><a href={this.state.ageGroupMarathon} target='_blank' rel='noopener noreferrer'>Marathon Age Group</a></p>
        <p><a href={this.state.overallHalfMarathon} target='_blank' rel='noopener noreferrer'>Half Marathon Overall</a>
        </p>
        <p><a href={this.state.ageGroupHalfMarathon} target='_blank' rel='noopener noreferrer'>Half Marathon Age
          Group</a></p>
        <p><a href={this.state.overallFiveK} target='_blank' rel='noopener noreferrer'>5k Overall</a></p>
        <p><a href={this.state.ageGroupFiveK} target='_blank' rel='noopener noreferrer'>5k Age Group</a></p>
        <p><a href={this.state.teamFiveK} target='_blank' rel='noopener noreferrer'>5k Team</a></p>
      </div>
    );
  }
}

ERunnerResults.propTypes = {
  enJson: PropTypes.object,
  year: PropTypes.string,
  url: PropTypes.string
};

export default ERunnerResults;

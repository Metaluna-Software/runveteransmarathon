import React from 'react';

class ERunnerResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overallMarathon: '',
      overallHalfMarathon: '',
      overallFiveK: '',
      ageGroupMarathon: '',
      ageGroupHalfMarathon: '',
      ageGroupFiveK: ''
    }
  }

  componentDidMount() {
    if (this.props.enJson && this.props.enJson.results) {
      this.setState({
        overallMarathon: this.props.enJson.results[this.props.year].overallMarathon,
        overallHalfMarathon: this.props.enJson.results[this.props.year].overallHalfMarathon,
        overallFiveK: this.props.enJson.results[this.props.year].overallFiveK,
        ageGroupMarathon: this.props.enJson.results[this.props.year].ageGroupMarathon,
        ageGroupHalfMarathon: this.props.enJson.results[this.props.year].ageGroupHalfMarathon,
        ageGroupFiveK: this.props.enJson.results[this.props.year].ageGroupFiveK
      })
    }
  }

  render() {
    return (
      <div>
        <p><a href={this.state.overallMarathon} target='_blank'>Marathon Overall</a></p>
        <p><a href={this.state.ageGroupMarathon} target='_blank'>Marathon Age Group</a></p>
        <p><a href={this.state.overallHalfMarathon} target='_blank'>Half Marathon Overall</a></p>
        <p><a href={this.state.ageGroupHalfMarathon} target='_blank'>Half Marathon Age Group</a></p>
        <p><a href={this.state.overallFiveK} target='_blank'>5k Overall</a></p>
        <p><a href={this.state.ageGroupFiveK} target='_blank'>5k Age Group</a></p>
      </div>
    );
  }
}

export default ERunnerResults;

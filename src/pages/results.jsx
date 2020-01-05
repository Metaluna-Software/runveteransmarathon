import React from 'react';
import Heading from '../components/heading';
import Select from 'react-select'
import ResultType from '../components/resultType';

const yearOptions = [
  { value: '2019', label: '2019' },
  { value: '2018', label: '2018' },
  { value: '2017', label: '2017' },
  { value: '2016', label: '2016' },
  { value: '2015', label: '2015' },
  { value: '2014', label: '2014' },
  { value: '2013', label: '2013' },
  { value: '2012', label: '2012' },
  { value: '2011', label: '2011' },
  { value: '2010', label: '2010' },
  { value: '2009', label: '2009' },
];

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: '2019'
    };
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value.value });
  };

  render() {
    return (
      <div className={'section-wrapper'}>
        <Heading message={'Results'}/>
        <label>Select a year</label>
        <Select options={yearOptions} defaultValue={yearOptions[0]} onChange={e => this.handleChange('year', e)}/>
        <ResultType year={this.state.year}/>
      </div>
    );
  }
}

export default Results;

import React from 'react';
import Heading from '../../components/heading';
import Select from 'react-select';
import ResultType from '../../components/resultType';
import PropTypes from 'prop-types';
import Sponsors from '../../components/sponsors';

const yearOptions = [
  { value: '2023', label: '2023' },
  { value: '2022', label: '2022' },
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' },
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
      year: yearOptions[0].value
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
        <ResultType enJson={this.props.enJson} year={this.state.year}/>
        <Sponsors/>
      </div>
    );
  }
}

Results.propTypes = {
  enJson: PropTypes.object
};

export default Results;

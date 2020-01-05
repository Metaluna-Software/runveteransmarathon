import React from 'react';
import * as d3 from 'd3-fetch'
import Select from 'react-select'
import ResultTable from './resultTable';

const path = require('path');

const yearOptions = [
  { value: '2017', label: '2017' },
  { value: '2016', label: '2016' },
  { value: '2015', label: '2015' },
  { value: '2014', label: '2014' },
  { value: '2013', label: '2013' },
  { value: '2012', label: '2012' }
];

const raceOptions = [
  { value: 'marathon', label: 'Marathon' },
  { value: 'marathon-steelrim', label: 'Marathon Steel Rim' },
  { value: 'half', label: 'Half-Marathon' },
  { value: '5k', label: '5k' }
];

class TimeToRunResults extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this._isStale = false;
    this.state = {
      year: null,
      race: null,
      rows: [],
      columns: []
    };
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentDidUpdate() {
    this._isStale && this.updateResultState();
  }

  async asyncForEach(array, callback) {
    await callback(array);
    // for (let index = 0; index < array.length; index++) {
    //   await callback(array[index], index, array);
    // }
  }

  async updateResultState() {
    if (this.state.race === null || this.state.year === null) {
      this._isStale = false;
      return;
    }
    let rows = [];
    let columns = [];

    await this.asyncForEach(this.state.year, async (num) => {
      const r = await this.gatherResults(num);
      rows = r.rows;
      columns = r.columns;
    });
    if (this.state.rows.length !== rows.length) {
      this._isStale = false;
      this.setState({
        error: '',
        columns: columns,
        rows: rows
      });
    }
  };

  async gatherResults(year) {
    try {
      if (this._isMounted && this._isStale) {
        const prefix = '../results';
        const csvPath = path.join(prefix, year.value + '-' + this.state.race.value + '-overall.csv');
        console.log("gathering");
        const r = await d3.csv(csvPath);
        return {
          rows: r,
          columns: r.columns
        };
      } else {
        return { rows: [], columns: [] }
      }
    } catch (e) {
      console.error('Error with csv', e);
      this.setState({ error: 'No results found' });
      return { rows: [], columns: [] }
    }
  }

  handleChange = (name, value) => {
    if (this._isMounted === true) {
      this._isStale = true;
      this.setState({ [name]: value });
    }
  };

  render() {
    return (
      <div>
        <label>Select a year</label>
        <Select options={yearOptions} onChange={e => this.handleChange('year', e)}/>
        <label>Select a race</label>
        <Select options={raceOptions} onChange={e => this.handleChange('race', e)}/>
        <p className={'error-text'}>{this.state.error}</p>
        <ResultTable columns={this.state.columns} rows={this.state.rows}/>
      </div>
    );
  }
}

export default TimeToRunResults;

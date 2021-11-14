import React from 'react';
import * as d3 from 'd3-fetch';
import Select from 'react-select';
import ResultTable from './resultTable';
import PropTypes from 'prop-types';

const raceOptions = [
  {
    value: 'marathon',
    label: 'Marathon'
  },
  {
    value: 'marathon-steelrim',
    label: 'Marathon Steel Rim'
  },
  {
    value: 'half',
    label: 'Half-Marathon'
  },
  {
    value: 'half-steelrim',
    label: 'Half Marathon Steel Rim'
  },
  {
    value: '5k',
    label: '5k'
  }
];

class TimeToRunResults extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this._isStale = true;
    this.state = {
      year: props.year,
      race: null,
      rows: [],
      columns: []
    };
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentDidUpdate() {
    if (this.state.year !== this.props.year) {
      this._isStale = true;
    }
    this._isStale && this.updateResultState();
  }

  handleChange = (name, value) => {
    this._isStale = true;
    this.setState({ [name]: value.value });
  };

  async updateResultState() {
    if (this.state.race === null || this.props.year === null) {
      this._isStale = false;
      return;
    }
    let rows = [];
    let columns = [];
    const r = await this.gatherResults();
    rows = r.rows;
    columns = r.columns;
    if (this.state.rows.length !== rows.length) {
      this._isStale = false;
      this.setState({
        error: '',
        columns: columns,
        rows: rows
      });
    }
  };

  async gatherResults() {
    try {
      if (this._isMounted && this._isStale) {
        const csvPath = '../results/' + this.props.year + '-' + this.state.race + '-overall.csv';
        // const csvPath = path.join(prefix, this.props.year + '-' + this.state.race + '-overall.csv');
        const r = await d3.csv(csvPath);
        if (r.columns && r.columns.length > 0) {
          if (r.columns[0].indexOf('DOCTYPE') > 0) {
            console.warn('No results found for race type and year');
            this.setState({ error: 'No results found' });
            return {
              rows: [],
              columns: []
            };
          }
        }
        return {
          rows: r,
          columns: r.columns
        };
      } else {
        return {
          rows: [],
          columns: []
        };
      }
    } catch (e) {
      console.warn('No results found for race type and year');
      this.setState({ error: 'No results found' });
    }
  }

  render() {
    return (
      <div>
        <label>Select a race</label>
        <Select options={raceOptions} onChange={e => this.handleChange('race', e)}/>
        <p className={'error-text'}>{this.state.error}</p>
        <ResultTable columns={this.state.columns} rows={this.state.rows}/>
      </div>
    );
  }
}

TimeToRunResults.propTypes = {
  enJson: PropTypes.object,
  year: PropTypes.string
};

export default TimeToRunResults;

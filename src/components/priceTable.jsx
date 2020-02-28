import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';

class PriceTable extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      rows: []
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.setState({ isLoading: true });
    this._isMounted && fetch(this.props.url)
      .then(r => {
        return r.json();
      })
      .then(data => {
        const rows = [];
        const str = data.acf[this.props.priceKey].replace(/<(?:.|\s)*?>/g, '');
        const strArray = str.split('\r\n');
        strArray.map(itemStr =>
          rows.push(itemStr.split('='))
        );
        this.setState({ rows: rows, isLoading: false });
      });
  }

  render() {
    return (
      <div>
        <h2>Race price</h2>
        {this.state.isLoading && <Spinner animation="grow" variant="primary"/>}
        <table className='price-table'>
          <thead>
          <tr key={'1'}>
            {this.props.columns.map((columnHeading, i) => (
              <th key={i}>{columnHeading}</th>
            ))}
          </tr>
          </thead>
          <tbody>
          {this.state.rows.map(
            (row, i) => {
              return (
                <tr key={i}>
                  {row.map((cell, i) => {
                    return <td key={i}>{cell}</td>;
                  })}
                </tr>
              );
            }
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

PriceTable.propTypes = {
  enJson: PropTypes.object,
  url: PropTypes.string,
  columns: PropTypes.array,
  rows: PropTypes.array,
  priceKey: PropTypes.string
};

export default PriceTable;

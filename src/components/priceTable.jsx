import React from 'react';

class PriceTable extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      rows: []
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && fetch(this.props.url)
      .then(r => {
        return r.json();
      })
      .then(data => {
        let rows = [];
        let str = data.acf[this.props.priceKey].replace(/<(?:.|\s)*?>/g, '');
        let strArray = str.split('\r\n');
        strArray.map(itemStr =>
          rows.push(itemStr.split('='))
        );
        this.setState({ rows: rows });
      })
  }

  render() {
    return (
      <div className='section-wrapper'>
        <h2>Race price</h2>
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
                    return <td key={i}>{cell}</td>
                  })}
                </tr>
              )
            }
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PriceTable;

import React from 'react';

const ResultTable = (props) => {
  const {
    columns,
    rows
  } = props;

  return (
    <table className='results-table'>
      <thead>
      <tr key={'thead'}>
        {columns.map((columnHeading, i) => (
          <th key={i}>{columnHeading}</th>
        ))}
      </tr>
      </thead>
      <tbody>
      {rows.map(
        (row, i) => {
          return (
            <tr key={i}>
              {Object.keys(row).map( (item, i) => {
                return (
                  <td key={i}>{row[item]}</td>
                )
              })}
            </tr>
          )
        }
      )}
      </tbody>
    </table>
  )
};
export default ResultTable;

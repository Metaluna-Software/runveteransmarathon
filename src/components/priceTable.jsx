import React from 'react';
import PropTypes from 'prop-types';
import {
  useTable
} from 'react-table'

const PriceTable = (props) => {
    const {
      title,
        price
    } = props;

  const data = React.useMemo(() => price, []);

  const columns = React.useMemo(
    () => [
      {
        Header: title,
        columns: [
          {
            Header: 'Date',
            accessor: 'date',
          },
          {
            Header: 'Price',
            accessor: 'price',
          },
        ],
      },
    ],
    []
  );

    return (
      <Table columns={columns} data={data} />
    );
};

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()} className='price-table'>
      <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {rows.map(
        (row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )}
      )}
      </tbody>
    </table>
  )
}

PriceTable.propTypes = {
    price: PropTypes.array.isRequired
};

export default PriceTable;

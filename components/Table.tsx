import { FC } from 'react';
import { TableInstance } from 'react-table';

import Pagination from 'components/Pagination';
import { Data } from 'pages';

type Props = {
  tableInstance: TableInstance<Data>;
};

const Table: FC<Props> = ({ tableInstance }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    prepareRow,
    canNextPage,
    canPreviousPage,
    nextPage,
    previousPage,
    gotoPage,
    state: { pageIndex, pageSize },
  } = tableInstance;

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table {...getTableProps()} className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-50">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        className={`px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase ${
                          column.tailwindClass || ''
                        }`}
                      >
                        {column.render('Header')}
                        <span>
                          {/* eslint-disable-next-line no-nested-ternary */}
                          {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                        </span>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row);

                  return (
                    <tr {...row.getRowProps()} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          className={`${cell.column.width || ''} px-2 py-2 text-sm font-xs text-gray-900`}
                        >
                          {cell.render('Cell')}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Pagination
              canNextPage={canNextPage}
              canPreviousPage={canPreviousPage}
              previousPage={previousPage}
              nextPage={nextPage}
              pageIndex={pageIndex}
              pageSize={pageSize}
              length={rows.length}
              gotoPage={gotoPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

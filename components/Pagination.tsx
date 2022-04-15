/* eslint-disable jsx-a11y/anchor-is-valid */
// fixme
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { FC } from 'react';
import usePagination from 'hooks/usePagination';

type Props = {
  previousPage: () => void;
  nextPage: () => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageIndex: number;
  pageSize: number;
  length: number;
  gotoPage: (updater: ((pageIndex: number) => number) | number) => void;
};

const Pagination: FC<Props> = ({
  nextPage,
  previousPage,
  canNextPage,
  canPreviousPage,
  pageIndex,
  pageSize,
  gotoPage,
  length,
}) => {
  const showingFrom = pageIndex * pageSize + 1;
  const showingTo = pageIndex * pageSize + pageSize;

  const paginationArray = usePagination({
    totalCount: length,
    pageSize,
    siblingCount: 1,
    currentPage: pageIndex + 1,
  });

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      {/* <div className="flex-1 flex justify-between sm:hidden"> */}
      {/*  <a */}
      {/*    href="#" */}
      {/*    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" */}
      {/*  > */}
      {/*    Previous */}
      {/*  </a> */}
      {/*  <a */}
      {/*    href="#" */}
      {/*    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" */}
      {/*  > */}
      {/*    Next */}
      {/*  </a> */}
      {/* </div> */}
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{showingFrom}</span> to{' '}
            <span className="font-medium">{showingTo > length ? length : showingTo}</span> of{' '}
            <span className="font-medium">{length}</span> results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button
              type="button"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              onClick={previousPage}
              disabled={!canPreviousPage}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            {paginationArray.map((page) => {
              const className =
                page === pageIndex + 1
                  ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                  : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium';

              return page !== -1 ? (
                <button type="button" onClick={() => gotoPage(page - 1)} aria-current="page" className={className}>
                  {page}
                </button>
              ) : (
                <span className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  ...
                </span>
              );
            })}
            <button
              type="button"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              onClick={nextPage}
              disabled={!canNextPage}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Pagination;

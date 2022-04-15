import React, { FC } from 'react';
import { Icon, Pagination } from 'semantic-ui-react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

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
const PaginationExampleShorthand: FC<Props> = ({
  nextPage,
  previousPage,
  canNextPage,
  canPreviousPage,
  pageIndex,
  pageSize,
  length,
}) => (
  <Pagination
    defaultActivePage={pageIndex}
    ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
    firstItem={null}
    lastItem={null}
    pageItem={{
      content: (
        <button
          type="button"
          aria-current="page"
          className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
        >
          1
        </button>
      ),
    }}
    prevItem={{
      content: (
        <button
          type="button"
          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          onClick={previousPage}
          disabled={!canPreviousPage}
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      ),
      icon: true,
    }}
    nextItem={{
      content: (
        <button
          type="button"
          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          onClick={nextPage}
          disabled={!canNextPage}
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      ),
      icon: true,
    }}
    totalPages={Math.ceil(length / pageSize)}
  />
);

export default PaginationExampleShorthand;

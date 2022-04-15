import { FC } from 'react';
import { TableInstance } from 'react-table';
import { Data } from 'pages';
import Select, { Styles } from 'react-select';

type OptionType = {
  label: string;
  value: string;
};

type Props = {
  tableInstance: TableInstance<Data>;
};

const Filter: FC<Props> = ({ tableInstance }) => {
  const { columns, data } = tableInstance;
  const idColumn = columns.find((i) => i.id === 'id');
  const lastNames = [...new Set(data.map((c: Data) => c.lastName))].map((i: string) => ({ value: i, label: i }));

  const customStyles: Styles<OptionType, true> = {
    input: (base) => ({
      ...base,
      'input:focus': {
        boxShadow: 'none',
      },
    }),
    control: (_, state) => ({
      color: ' rgba(107, 114, 128, var(--tw-text-opacity))',
      '--tw-border-opacity': '1',
      borderStyle: 'solid',
      borderWidth: '1px',
      outlineOffset: state.isFocused ? '2px' : '0px',
      outlineColor: 'rgba(0,0,0,0)',
      outlineStyle: 'solid',
      outlineWidth: '2px',
      borderColor: state.isFocused ? 'rgba(99, 102, 241, 1)' : 'rgba(209, 213, 219, 1)',
      borderRadius: '0.375rem',
      '--tw-shadow': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      boxShadow: state.isFocused
        ? 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)'
        : 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
      width: '100%',
      display: 'flex',
      backgroundColor: 'inherit',
      '--tw-ring-inset': state.isFocused ? 'var(--tw-empty,/*!*/ /*!*/)' : '',
      '--tw-ring-offset-width': state.isFocused ? '0px' : '',
      '--tw-ring-offset-color': state.isFocused ? '#fff' : '',
      '--tw-ring-color': state.isFocused ? 'rgba(99, 102, 241, 1)' : '',
      '--tw-ring-offset-shadow': state.isFocused
        ? 'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)'
        : '',
      '--tw-ring-shadow': state.isFocused
        ? 'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)'
        : '',
    }),
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6 ">
        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-6">
            <label htmlFor="usw_device" className="block text-sm font-bold text-gray-500">
              ID
              <div className="mt-1">
                <input
                  type="text"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  value={(idColumn?.filterValue as string) || ''}
                  onChange={(e) => tableInstance.setFilter('id', e.target.value)}
                />
              </div>
            </label>
          </div>
          <div className="sm:col-span-6">
            <label htmlFor="usw_device" className="block text-sm font-bold text-gray-500">
              First Name
              <div className="mt-1">
                <input
                  type="text"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  value={(columns.find((c) => c.id === 'firstName')?.filterValue as string) || ''}
                  onChange={(e) => tableInstance.setFilter('firstName', e.target.value)}
                />
              </div>
            </label>
          </div>
          <div className="sm:col-span-6">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="last_name" className="block text-sm font-bold text-gray-500">
              Last Name
              <div className="mt-1">
                <Select
                  id="last_name"
                  isMulti
                  styles={customStyles}
                  options={lastNames}
                  onChange={(v) => {
                    const filterValue = v.map((i) => i.value);
                    tableInstance.setFilter('lastName', filterValue.join(' '));
                  }}
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filter;

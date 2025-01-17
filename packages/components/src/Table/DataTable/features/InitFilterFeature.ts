import {
  ColumnFiltersState,
  TableFeature,
  TableOptionsResolved,
  Updater,
  functionalUpdate,
  getFilteredRowModel,
  shouldAutoRemoveFilter,
} from '@tanstack/react-table';

const getFilterOptions = <TData>(options: TableOptionsResolved<TData>) => {
  const {
    meta: { manual },
  } = options;
  if (!manual) {
    return {
      enableFilters: true,
      enableColumnFilter: true,
      manualFiltering: false,
      getFilteredRowModel: getFilteredRowModel(),
      ...options,
    };
  }
  return {
    enableFilters: true,
    enableGlobalFilter: false,
    enableColumnFilter: true,
    manualFiltering: true,
    ...options,
  };
};

export const InitFilterFeature: TableFeature<any> = {
  getDefaultOptionsResolved: (options) => {
    return getFilterOptions(options);
  },
};

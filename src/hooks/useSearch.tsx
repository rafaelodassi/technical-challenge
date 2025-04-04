import { useEffect, useState } from 'react';

import { useApp } from '@/context/AppContext';

interface UseSearch<T> {
  data: T;
  keyToSearch: string;
}

function useSearch<T>({ data, keyToSearch }: UseSearch<T>) {
  const [dataBySearch, setDataBySearch] = useState<T>([] as T);
  const { searchValue, changeCurrentPage } = useApp();

  useEffect(() => {
    setDataBySearch(data);
  }, [data]);

  useEffect(() => {
    let filteredData = data as T[];

    if (searchValue) {
      filteredData = filteredData.filter(
        (dataToFilter) =>
          ((dataToFilter as Record<string, unknown>)[keyToSearch] as string)
            .toLowerCase()
            .search(searchValue.toLowerCase()) !== -1
      );
    }

    changeCurrentPage(0);
    setDataBySearch(filteredData as T);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return {
    dataBySearch,
  };
}

export { useSearch };

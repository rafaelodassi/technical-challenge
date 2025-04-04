import { useEffect, useState } from 'react';

import { api } from '../services/config';

interface UseFetchData {
  url: string;
}

function useFetchData<T>({ url }: UseFetchData) {
  const [data, setData] = useState<T>({} as T);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const token =
    'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIUWN3U1VySHRCZVJKelRnNnM0QmtqaU1naHgxWFROUkNoWGFudTZmN3hJIn0.eyJleHAiOjE3NDM3MjIxMDcsImlhdCI6MTc0MzcyMTgwNywiYXV0aF90aW1lIjoxNzQzNzIwMjcyLCJqdGkiOiIyOTY2MjQ0MC1iNGU4LTRhNWMtOTZlNy1iMDBlYWZjNWFmNzYiLCJpc3MiOiJodHRwczovL3N0YWdpbmcuYm90Y2l0eS5kZXY6ODA1MC9yZWFsbXMvZmUtdGVzdCIsInN1YiI6IjgxOGU3YjNkLTU0NDgtNDZhNy04NmZhLTgyNmFmNzE5NTFjMiIsInR5cCI6IkJlYXJlciIsImF6cCI6InRlc3QiLCJub25jZSI6ImRmODVlNmYwLTkwOTQtNGNhZS1hNzM1LTkwODJjYjMwOTdiYyIsInNlc3Npb25fc3RhdGUiOiJjMzc2YTBiOC1iYWEwLTQxNWItYWVmZS0wM2JlMTBlODY4YzYiLCJhY3IiOiIwIiwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsInNpZCI6ImMzNzZhMGI4LWJhYTAtNDE1Yi1hZWZlLTAzYmUxMGU4NjhjNiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiUmFmYWVsIE9kYXNzaSIsInByZWZlcnJlZF91c2VybmFtZSI6InJhZmFlbG9kYXNzaUBob3RtYWlsLmNvbSIsImdpdmVuX25hbWUiOiJSYWZhZWwiLCJmYW1pbHlfbmFtZSI6Ik9kYXNzaSIsImVtYWlsIjoicmFmYWVsb2Rhc3NpQGhvdG1haWwuY29tIn0.UR1mfRqQPwp15I13rcbkVC94HjT1PIbp7nTp9QEVKIFdA-ueX_BOIsPNGwBnBkdLCvBXXBhan-gwvZKlc6-4VoHlCcDcVgrUdMKL5bm8Ic38ow2MzEDxi46V7lUTdV98CsE8PrtUdj6rhjIqTL1gxRBQXwPMTMPyFgLwgVyM6o362MPd2Lyx_0ooTD4jHzA24omQ5pHSk6GmIBLNkTwtlqxZf9kSKjDCdFrdR9NVULQ1iJoPk7O6zc15ZBEBKDdQc4xBZ89eexST6uxfe7c8gN3H9cKPACamoh-eQCGBbttoQOv-BppZD17si-67NZHqwtj3nZQgS-ZKtSw2lYDrlg';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await api.get<T>(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response);
      } catch (error) {
        setError(!!error);
      }

      setLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    loading,
    error,
  };
}

export { useFetchData };

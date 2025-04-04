'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

import { ResponseProcess, Process } from '@/services/types';
import { AxiosError } from 'axios';
import { useSession, signIn } from 'next-auth/react';

import { api } from '../services/config';

export type ViewMode = 'list' | 'grid';

interface AddProcess {
  process: Process;
}

interface GetProcess {
  page?: number;
  search?: string;
  sort?: string;
}

interface AppContext {
  viewMode: ViewMode;
  setViewMode: (viewMode: ViewMode) => void;
  openNewProcess: boolean;
  setOpenNewProcess: (openNewProcess: boolean) => void;
  getProcess: (params?: GetProcess) => void;
  addProcess: ({ process }: AddProcess) => void;
  process: ResponseProcess;
  loading: boolean;
  error: boolean;
  searchValue: string;
  setSearchValue: (value: string) => void;
}

interface AppProvider {
  children: ReactNode;
}

export const AppContext = createContext<AppContext | undefined>(undefined);

export const AppProvider = ({ children }: AppProvider) => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [openNewProcess, setOpenNewProcess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [process, setProcess] = useState<ResponseProcess>(
    {} as ResponseProcess
  );
  const [searchValue, setSearchValue] = useState('');

  const { data: session } = useSession();

  const getProcess = async (params?: GetProcess) => {
    try {
      const token = session?.account?.access_token ?? '';
      const search = params?.search ?? '';
      const page = params?.page ?? 0;
      const sort = params?.sort ?? 'name';

      const { data: response } = await api<ResponseProcess>({
        url: `process-fe-challenge?name=${search}&page=${page}&size=20&sort=${sort}`,
        method: 'get',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProcess(response);
    } catch (error) {
      const responseError = error as AxiosError;

      if (responseError.status === 401) {
        signIn('keycloak');
      } else {
        setError(!!responseError);
      }
    }

    setLoading(false);
  };

  const addProcess = async ({ process }: AddProcess) => {
    try {
      const token = session?.account?.access_token ?? '';

      await api<ResponseProcess>({
        url: 'process-fe-challenge',
        method: 'post',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: process,
      });

      getProcess();
      setOpenNewProcess(false);
    } catch (error) {
      const responseError = error as AxiosError;

      if (responseError.status === 401) {
        signIn('keycloak');
      } else {
        setError(!!responseError);
      }
    }

    setLoading(false);
  };

  return (
    <AppContext.Provider
      value={{
        viewMode,
        setViewMode,
        openNewProcess,
        setOpenNewProcess,
        getProcess,
        addProcess,
        process,
        loading,
        error,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useApp must be used within a AppProvider');
  }

  return context;
};

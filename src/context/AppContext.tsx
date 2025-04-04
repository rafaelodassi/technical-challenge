'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type ViewMode = 'list' | 'grid';

interface AppContext {
  viewMode: ViewMode;
  setViewMode: (viewMode: ViewMode) => void;
  openNewEntry: boolean;
  setOpenNewEntry: (openNewEntry: boolean) => void;
}

interface AppProvider {
  children: ReactNode;
}

export const AppContext = createContext<AppContext | undefined>(undefined);

export const AppProvider = ({ children }: AppProvider) => {
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [openNewEntry, setOpenNewEntry] = useState(false);

  return (
    <AppContext.Provider
      value={{
        viewMode,
        setViewMode,
        openNewEntry,
        setOpenNewEntry,
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

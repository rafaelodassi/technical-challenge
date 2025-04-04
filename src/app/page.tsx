'use client';

import { useEffect } from 'react';

import { Filters } from '@/components/Filters';
import { Pagination } from '@/components/Pagination';
import { ProcessItem } from '@/components/ProcessItem';
import { ScrollArea } from '@/components/ui/ScrollArea';
import { useApp } from '@/context/AppContext';
import { useFetchData } from '@/hooks/useFetchData';
import { cn } from '@/lib/utils';
import { ResponseProcess } from '@/services/types';
import { useSession, signIn } from 'next-auth/react';

const Home = () => {
  const { data: session, status } = useSession();

  const { data, fetchData, error } = useFetchData<ResponseProcess>({
    url: 'process-fe-challenge',
    method: 'get',
  });

  const { viewMode } = useApp();

  const process = data?.content ?? [];

  useEffect(() => {
    if (status === 'authenticated' && session?.account.access_token) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  if (error) {
    signIn('keycloak');
  }

  return (
    <>
      <main className='grow p-8 pb-4 flex flex-col gap-4'>
        <Filters />
        <ScrollArea className='grow h-[calc(100vh-318px)]' type='always'>
          <div
            className={cn(
              'flex gap-4 flex-wrap content-start',
              viewMode === 'list' && 'flex-col flex-nowrap'
            )}
          >
            {process.map((p) => (
              <ProcessItem process={p} key={p.identifier} />
            ))}
          </div>
        </ScrollArea>
      </main>
      <Pagination />
    </>
  );
};

export default Home;

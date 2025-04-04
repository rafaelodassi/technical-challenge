'use client';

import { useEffect, useMemo } from 'react';

import { Filters } from '@/components/Filters';
import { Pagination } from '@/components/Pagination';
import { ProcessItem } from '@/components/ProcessItem';
import { ScrollArea } from '@/components/ui/ScrollArea';
import { useApp } from '@/context/AppContext';
import { cn } from '@/lib/utils';
import { useSession, signIn } from 'next-auth/react';

const Home = () => {
  const { status } = useSession();
  const { viewMode, getProcess, process } = useApp();
  const data = useMemo(() => process?.content ?? [], [process]);

  useEffect(() => {
    if (status === 'authenticated') {
      getProcess();
    } else if (status === 'unauthenticated') {
      signIn('keycloak');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

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
            {data.map((process) => (
              <ProcessItem process={process} key={process.identifier} />
            ))}
          </div>
        </ScrollArea>
      </main>
      <Pagination />
    </>
  );
};

export default Home;

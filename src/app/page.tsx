'use client';

import { useCallback } from 'react';

import { EntryCard } from '@/components/EntryCard';
import { Filters } from '@/components/Filters';
import { Pagination } from '@/components/Pagination';
import { ScrollArea } from '@/components/ui/ScrollArea';
import { useFetchData } from '@/hooks/useFetchData';
import { useKeycloak } from '@react-keycloak/web';

const dataMock = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
  { id: '7' },
  { id: '8' },
  { id: '9' },
  { id: '10' },
  { id: '11' },
  { id: '12' },
  { id: '13' },
  { id: '14' },
  { id: '15' },
];

const Home = () => {
  const { keycloak } = useKeycloak();
  const { data } = useFetchData({ url: 'process-fe-challenge' });

  const handleLogOut = useCallback(() => {
    keycloak?.login();
  }, [keycloak]);

  console.log(data, keycloak);

  return (
    <>
      <main className='grow p-8 pb-4 flex flex-col gap-4'>
        <button onClick={handleLogOut}>login</button>
        <Filters />
        <ScrollArea className='grow h-[calc(100vh-318px)]' type='always'>
          <div className='flex gap-4 flex-wrap content-start'>
            {dataMock.map((entry) => (
              <EntryCard entry={entry} key={entry.id} />
            ))}
          </div>
        </ScrollArea>
      </main>
      <Pagination />
    </>
  );
};

export default Home;

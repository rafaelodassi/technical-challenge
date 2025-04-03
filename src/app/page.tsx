import { EntryCard } from '@/components/EntryCard';
import { Filters } from '@/components/Filters';
import { Pagination } from '@/components/Pagination';
import { ScrollArea } from '@/components/ui/ScrollArea';

const data = [
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

const Home = () => (
  <>
    <main className='grow p-8 pb-4 flex flex-col gap-4'>
      <Filters />
      <ScrollArea className='grow h-[calc(100vh-318px)]' type='always'>
        <div className='flex gap-4 flex-wrap content-start'>
          {data.map((entry) => (
            <EntryCard entry={entry} key={entry.id} />
          ))}
        </div>
      </ScrollArea>
    </main>
    <Pagination />
  </>
);

export default Home;

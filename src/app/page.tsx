import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { ScrollArea } from '@/components/ui/ScrollArea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import { Menu, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

import Logo from '../../public/imgs/logo.png';

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
  <div className='flex flex-col min-h-screen bg-custom-gray-10'>
    <header className='h-12 shadow-[0px_1px_2px_1px] shadow-custom-gray-40 relative flex items-center px-3.5 gap-7 bg-custom-gray-30'>
      <div className='grow flex items-center gap-7'>
        <Menu />
        <Image
          src={Logo}
          width={0}
          height={0}
          alt='Logo'
          className='w-[80px] shrink-0'
          unoptimized
        />
      </div>
      <div className='flex items-center gap-2'>
        <div className='text-[13px] bg-custom-gray-40 rounded-full w-[30px] h-[30px] flex items-center justify-center'>
          JC
        </div>
        <span className='text-[10px]'>Administrator</span>
      </div>
    </header>
    <section className='h-[94px] bg-white px-8 flex flex-col justify-center'>
      <h5 className='text-base'>Home</h5>
      <div className='flex items-center'>
        <h1 className='text-[32px] grow'>Entry board</h1>
        <Button size='lg' variant='outline'>
          New entry
        </Button>
      </div>
    </section>
    <main className='grow p-8 pb-4 flex flex-col gap-8'>
      <div className='flex items-center gap-4'>
        <Input className='grow' placeholder='Search' />
        <Select>
          <SelectTrigger className='w-[240px]'>
            <SelectValue placeholder='Filter by name' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='light'>Light</SelectItem>
            <SelectItem value='dark'>Dark</SelectItem>
            <SelectItem value='system'>System</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className='w-[240px]'>
            <SelectValue placeholder='Sort by' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='light'>Light</SelectItem>
            <SelectItem value='dark'>Dark</SelectItem>
            <SelectItem value='system'>System</SelectItem>
          </SelectContent>
        </Select>
        <div className='bg-custom-gray-60 flex items-center h-10 p-1 grow whitespace-nowrap'>
          <div className='shrink-0 bg-white px-4 h-full flex items-center font-semibold text-base text-custom-gray-100 hover:cursor-pointer'>
            Grid view
          </div>
          <div className='shrink-0 px-4 h-full flex items-center text-base text-custom-gray-70 hover:text-custom-gray-100 hover:cursor-pointer'>
            List view
          </div>
        </div>
      </div>
      <ScrollArea className='grow h-[calc(100vh-334px)]' type='always'>
        <div className='flex gap-4 flex-wrap content-start'>
          {data.map((d) => (
            <div
              className='bg-white w-[262px] h-[196px] p-4 flex flex-col gap-2'
              key={d.id}
            >
              <div className='flex items-center gap-1'>
                <span className='grow text-sm text-custom-gray-70'>
                  ID 293841094
                </span>
                <div className='shrink-0 w-6 h-6 bg-primary text-white text-base rounded-full text-center'>
                  C
                </div>
              </div>
              <h1 className='text-xl text-custom-gray-100'>
                Payroll Processing
              </h1>
              <div className='flex gap-2 grow items-start'>
                <Badge variant='cyan'>93</Badge>
                <Badge variant='purple'>Assessing</Badge>
              </div>
              <div className='text-sm text-custom-gray-70'>7/26/2024</div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </main>
    <footer className='m-8 mt-0 border-t border-custom-gray-20 h-10 flex items-center justify-end'>
      <span className='px-4 text-base text-custom-gray-100'>Page 1</span>
      <div className='w-10 h-10 flex items-center justify-center border-l border-r border-custom-gray-20 hover:cursor-pointer hover:bg-custom-gray-20 transition-all'>
        <ChevronLeft size={18} />
      </div>
      <div className='w-10 h-10 flex items-center justify-center hover:cursor-pointer hover:bg-custom-gray-20 transition-all'>
        <ChevronRight size={18} />
      </div>
    </footer>
  </div>
);

export default Home;

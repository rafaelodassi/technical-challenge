import { NewEntryDialog } from '@/components/NewEntryDialog';
import { Button } from '@/components/ui/Button';
import { useApp } from '@/context/AppContext';
import { Menu } from 'lucide-react';
import Image from 'next/image';

import Logo from '../../public/imgs/logo.png';

const Header = () => {
  const { setOpenNewEntry } = useApp();

  const handleOpenNewEntryDialog = () => {
    setOpenNewEntry(true);
  };

  return (
    <>
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
          <Button
            size='lg'
            variant='outline'
            onClick={handleOpenNewEntryDialog}
          >
            New entry
          </Button>
        </div>
      </section>
      <NewEntryDialog />
    </>
  );
};

export { Header };

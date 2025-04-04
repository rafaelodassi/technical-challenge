import { Badge } from '@/components/ui/Badge';
import { useApp } from '@/context/AppContext';
import { cn } from '@/lib/utils';
import { Process } from '@/services/types';
import dayjs from 'dayjs';

interface ProcessItemProps {
  process: Process;
}

const ProcessItem = ({ process }: ProcessItemProps) => {
  const { viewMode } = useApp();
  const { identifier, name, priority, dateCreation } = process;

  const renderHeaderProcess = () => (
    <div className='flex items-center gap-1'>
      <span className='grow text-sm text-custom-gray-70'>ID {identifier}</span>
      <div className='shrink-0 w-6 h-6 bg-primary text-white text-base rounded-full text-center'>
        C
      </div>
    </div>
  );

  const renderFooterProcess = () => (
    <>
      <h1 className='text-xl text-custom-gray-100'>{name}</h1>
      <div className='flex gap-2 grow items-start'>
        <Badge variant='cyan'>{priority}</Badge>
        <Badge variant='purple'>Assessing</Badge>
      </div>
      <div className='text-sm text-custom-gray-70'>
        {dayjs(dateCreation).format('M/DD/YYYY')}
      </div>
    </>
  );

  const renderByViewMode = () => {
    if (viewMode === 'grid') {
      return (
        <>
          {renderHeaderProcess()}
          {renderFooterProcess()}
        </>
      );
    }

    return (
      <>
        {renderHeaderProcess()}
        <div className='flex items-center gap-2'>{renderFooterProcess()}</div>
      </>
    );
  };

  return (
    <div
      className={cn(
        'bg-white max-w-[262px] h-[196px] p-4 flex flex-col gap-2 shrink-0 grow',
        viewMode === 'list' && 'max-w-full h-auto'
      )}
    >
      {renderByViewMode()}
    </div>
  );
};

export { ProcessItem };

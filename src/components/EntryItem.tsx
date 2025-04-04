import { Badge } from '@/components/ui/Badge';
import { useApp } from '@/context/AppContext';
import { cn } from '@/lib/utils';

interface EntryItem {
  entry: {
    id: string;
  };
}

const EntryItem = ({ entry }: EntryItem) => {
  const { viewMode } = useApp();
  const { id } = entry;

  const renderHeaderEntry = () => (
    <div className='flex items-center gap-1'>
      <span className='grow text-sm text-custom-gray-70'>ID 293841094</span>
      <div className='shrink-0 w-6 h-6 bg-primary text-white text-base rounded-full text-center'>
        C
      </div>
    </div>
  );

  const renderFooterEntry = () => (
    <>
      <h1 className='text-xl text-custom-gray-100'>Payroll Processing</h1>
      <div className='flex gap-2 grow items-start'>
        <Badge variant='cyan'>93</Badge>
        <Badge variant='purple'>Assessing</Badge>
      </div>
      <div className='text-sm text-custom-gray-70'>7/26/2024</div>
    </>
  );

  const renderByViewMode = () => {
    if (viewMode === 'grid') {
      return (
        <>
          {renderHeaderEntry()}
          {renderFooterEntry()}
        </>
      );
    }

    return (
      <>
        {renderHeaderEntry()}
        <div className='flex items-center gap-2'>{renderFooterEntry()}</div>
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

export { EntryItem };

import { Input } from '@/components/ui/Input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import { useApp, ViewMode } from '@/context/AppContext';
import { cn } from '@/lib/utils';

const Filters = () => {
  const { setViewMode, viewMode } = useApp();

  const handleChangeViewMode = (value: ViewMode) => {
    setViewMode(value);
  };

  return (
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
        <div
          className={cn(
            'shrink-0 px-4 h-full flex items-center text-base text-custom-gray-70 hover:text-custom-gray-100 hover:cursor-pointer transition-all',
            viewMode === 'grid' && 'bg-white font-semibold text-custom-gray-100'
          )}
          onClick={() => handleChangeViewMode('grid')}
        >
          Grid view
        </div>
        <div
          className={cn(
            'shrink-0 px-4 h-full flex items-center text-base text-custom-gray-70 hover:text-custom-gray-100 hover:cursor-pointer transition-all',
            viewMode === 'list' && 'bg-white font-semibold text-custom-gray-100'
          )}
          onClick={() => handleChangeViewMode('list')}
        >
          List view
        </div>
      </div>
    </div>
  );
};

export { Filters };

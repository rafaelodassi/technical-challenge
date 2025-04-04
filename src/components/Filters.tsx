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
  const { setViewMode, viewMode, getProcess } = useApp();

  const handleChangeViewMode = (value: ViewMode) => {
    setViewMode(value);
  };

  const handleSearch = (value: string) => {
    getProcess({ search: value });
  };

  const handleSelect = (value: string) => {
    getProcess({ sort: value });
  };

  return (
    <div className='flex items-center gap-4'>
      <Input
        className='grow'
        placeholder='Search'
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Select disabled>
        <SelectTrigger className='w-[240px]'>
          <SelectValue placeholder='Filter by name' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='name'>Name</SelectItem>
        </SelectContent>
      </Select>
      <Select onValueChange={handleSelect}>
        <SelectTrigger className='w-[240px]'>
          <SelectValue placeholder='Sort by' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='name'>Name</SelectItem>
          <SelectItem value='priority'>priority</SelectItem>
          <SelectItem value='status'>Status</SelectItem>
          <SelectItem value='dateCreation'>Date Creation</SelectItem>
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

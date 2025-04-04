import { useApp } from '@/context/AppContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = () => {
  const { getProcess, process } = useApp();
  const totalPages = process?.totalPages ?? 0;
  const currentPage = process?.number ?? 0;

  const handleClickPrev = () => {
    if (currentPage > 0) {
      getProcess({ page: currentPage - 1 });
    }
  };

  const handleClickNext = () => {
    if (currentPage < totalPages - 1) {
      getProcess({ page: currentPage + 1 });
    }
  };

  return (
    <footer className='m-8 mt-0 border-t border-custom-gray-20 h-10 flex items-center justify-end'>
      <span className='px-4 text-base text-custom-gray-100'>
        Page {currentPage + 1}
      </span>
      <div
        className='w-10 h-10 flex items-center justify-center border-l border-r border-custom-gray-20 hover:cursor-pointer hover:bg-custom-gray-20 transition-all'
        onClick={handleClickPrev}
      >
        <ChevronLeft size={18} />
      </div>
      <div
        className='w-10 h-10 flex items-center justify-center hover:cursor-pointer hover:bg-custom-gray-20 transition-all'
        onClick={handleClickNext}
      >
        <ChevronRight size={18} />
      </div>
    </footer>
  );
};

export { Pagination };

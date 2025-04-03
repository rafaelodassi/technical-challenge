import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = () => (
  <footer className='m-8 mt-0 border-t border-custom-gray-20 h-10 flex items-center justify-end'>
    <span className='px-4 text-base text-custom-gray-100'>Page 1</span>
    <div className='w-10 h-10 flex items-center justify-center border-l border-r border-custom-gray-20 hover:cursor-pointer hover:bg-custom-gray-20 transition-all'>
      <ChevronLeft size={18} />
    </div>
    <div className='w-10 h-10 flex items-center justify-center hover:cursor-pointer hover:bg-custom-gray-20 transition-all'>
      <ChevronRight size={18} />
    </div>
  </footer>
);

export { Pagination };

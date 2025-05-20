'use client';

import { useState } from 'react';
import { IconSearch } from '@tabler/icons-react';

export default function SearchInput({ placeholder, trendingSearches }: { placeholder: string, trendingSearches:string[] }) {
//   const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
    //   router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-md">
        <div
        className="w-full flex px-1 py-1 rounded-full focus:outline-none border-[1px] border-neutral-500 bg-neutral-900 
        hover:border-violet-400 hover:bg-black transition-all duration-200 ease-in-out">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='border-none w-full ml-2 text-sm  font-normal'
      />
      <button className=' rounded-full bg-violet-700 p-2'>
        <IconSearch size={18} />
      </button>
      </div>
      <div className='mt-4'>
        <h2 className='text-center font-light text-sm'>Trending searches</h2>
        <div className='flex gap-2 justify-center mt-2'>
        {trendingSearches && trendingSearches.slice(0, 3).map((item: string, idx: number) => (
        <div className="rounded-full border border-white/20 bg-neutral-900 p-1 text-xs px-3 max-w-50" key={idx}>
          {/* {item.length > 15 ? item.slice(0,14) + ".." : item.slice(0, 15)} */}{item}
        </div>
         ))}
         </div>
      </div>
    </form>
  );
}
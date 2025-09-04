'use client';

import { useState, Fragment } from 'react';
import Image from 'next/image';
import { Combobox, Transition } from '@headlessui/react';
import { manufacturers } from '@/constants';
import { SearchManufacturerProps } from '@/types';

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');

  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((item) =>
          item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className="search-manufacturer w-full relative">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          {/* Input */}
          <Combobox.Input
            className="search-manufacturer__input w-full border rounded px-4 py-2 text-gray-900 outline-none"
            placeholder="Search manufacturer..."
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          {/* Button with logo */}
          <Combobox.Button className="absolute top-2 right-2">
            <Image src="/boss-logo.svg" width={30} height={30} alt="Boss Logo" />
          </Combobox.Button>

          {/* Dropdown options */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded bg-white shadow-lg z-50">
              {filteredManufacturers.length === 0 && query !== '' ? (
                <Combobox.Option value={query} className="p-2 cursor-pointer hover:bg-blue-500 hover:text-white">
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    value={item}
                    className={({ active }) =>
                      `p-2 cursor-pointer ${active ? 'bg-blue-500 text-white' : 'text-gray-900'}`
                    }
                  >
                    {({ selected, active  }) => {
                      <>
                      // 
                      
                      
                      </>


                    }}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;

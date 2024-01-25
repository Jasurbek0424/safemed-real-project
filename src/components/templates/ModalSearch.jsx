// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const ModalSearch = () => {

    const [search, setSearch] = useState('')

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };


    return (
        <>
            <form action='' method='post' className='max-s-[750px p-2 w-full flex flex-col 
            2xl:text-xl xl:text-xl lg:text-lg md:text-md sm:text-md text-sm font-body gap-4'>
                <div className='flex flex-col gap-4 w-full'>
                    <label
                        htmlFor='search'
                    >Поиск
                    </label>
                    <div className='flex justify-center w-ful'>
                        <input
                            type='text'
                            id='search'
                            required
                            value={search}
                            onChange={handleSearchChange}
                            autoComplete='Search'
                            placeholder='Search...'
                            className='border-2 outline-none 2xl:py-2 xl:py-2 lg:py-1 py-1 px-2 rounded-s-sm w-full' />
                        <button type='submit' className='py-1 bg-primary text-white rounded-e-sm px-4'>
                            <FaSearch />
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ModalSearch;
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

import { categories, brands } from '../../data/Json';

const CategoryFilter = () => {

    const [openCategory, setOpenCategory] = useState(null);
    const [selectedButtons, setSelectedButtons] = useState([]);

    const handleButtonClick = (bandId) => {
        const isSelected = selectedButtons.includes(bandId);
        setSelectedButtons((prevSelected) =>
            isSelected
                ? prevSelected.filter((id) => id !== bandId)
                : [...prevSelected, bandId]
        );
    };

    const toggleCategory = (categoryId) => {
        setOpenCategory((prevOpenCategory) =>
            prevOpenCategory === categoryId ? null : categoryId
        );
    };

    return (
        <>
            <div className='w-[250px] border px-2 border-primary text-primary py-2 rounded-md filterContent'>
                <div className='h-full flex flex-col justify-between filterItems'>
                    <div className='min-h-[320px] categories'>
                        <h2 className='text-center 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-lg 
                text-primary font-bold mb-2 uppercase'>
                            Categories
                        </h2>
                        {categories.map((category) => (
                            <div key={category.id} className=" p-2">
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleCategory(category.id)}
                                >
                                    <h3 className="text-lg font-body">{category.title}</h3>
                                    {openCategory === category.id ? (
                                        <MdOutlineKeyboardArrowUp className="w-6 h-6" />
                                    ) : (
                                        <MdOutlineKeyboardArrowDown className="w-6 h-6" />
                                    )}
                                </div>
                                {openCategory === category.id && (
                                    <div className="mt-2 space-y-2">
                                        {category.subcategories.map((subCategory) => (
                                            <div key={subCategory} className="flex items-center justify-between px-1">
                                                <label htmlFor={subCategory} className='cursor-pointer'>{subCategory}</label>
                                                <input
                                                    type="checkbox"
                                                    id={subCategory}
                                                    className="form-checkbox h-4 w-4 text-primary cursor-pointer"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                    </div>
                    <div>
                        <h2 className='text-center 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-lg 
                text-primary font-bold mb-2 uppercase'>
                            BRANDS
                        </h2>
                        <div className='max-w-[200px] w-full flex flex-wrap mx-auto justify-between gap-1'>
                            {brands.map(el => (
                                <button
                                    key={el.id}
                                    onClick={() => handleButtonClick(el.id)}
                                    className={` px-2 ${selectedButtons.includes(el.id) ? 'bg-primary text-white rounded-full' : 'bg-none'
                                        }`}
                                >
                                    {el.title} {el.id}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryFilter;
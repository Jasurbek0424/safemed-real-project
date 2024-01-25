// eslint-disable-next-line no-unused-vars
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import SafetyItem from '../../assets/safety.png';
import MedItem from '../../assets/item1.png';
import { Link } from 'react-router-dom';

const CategoryBlock = () => {
    return (
        <>
            <div>
                <div className='flex font-body category'>
                    <div className='bg-med bg-center bg-no-repeat bg-cover w-full h-[400px] p-10 text-center
                    flex flex-col justify-between'>
                        <h2 className='2xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-xl font-bold text-white uppercase'>
                            Medical Equipment
                        </h2>
                        <div className='flex items-center justify-evenly'>
                            <Link
                                className='2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-xl text-xl
                                flex items-center gap-3 py-1 px-4 rounded-full border max-w-[160px] w-full text-white'
                                to={'/Categories/medical'}>
                                Details
                                <IoIosArrowForward />
                            </Link>
                            <img
                                className='2xl:max-w-[266px] xl:max-w-[266px] lg:max-w-[226px] md:max-w-[196px] sm:max-w-[166px] max-w-[146px]
                            2xl:h-[224px] xl:h-[224px] lg:h-[194px] md:h-[164px] sm:h-[144px] h-[134px]'
                                src={MedItem}
                                alt='' />
                        </div>
                    </div>
                    <div className='bg-measure bg-center bg-no-repeat bg-cover w-full h-[400px] p-10 text-center
                    flex flex-col justify-between'>
                        <h1 className='mb-2
                            2xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-xl font-bold text-white uppercase'>
                            Safety Supplies (PPE)
                        </h1>
                        <div className='flex items-center justify-evenly'>
                            <Link
                                className='2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-xl text-xl
                                flex items-center gap-3 py-1 px-4 rounded-full border max-w-[160px] w-full text-white'
                                to={'/Categories/safety'}>
                                Details
                                <IoIosArrowForward />
                            </Link>
                            <img
                                className='2xl:max-w-[266px] xl:max-w-[266px] lg:max-w-[226px] md:max-w-[196px] sm:max-w-[166px] max-w-[146px]
                                2xl:h-[224px] xl:h-[224px] lg:h-[194px] md:h-[164px] sm:h-[144px] h-[134px]'
                                src={SafetyItem}
                                alt='' />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default CategoryBlock;
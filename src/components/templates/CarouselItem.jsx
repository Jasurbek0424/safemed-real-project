/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';


const CarouselItem = (props) => {
    return (
        <>
            <div className='item border px-4 py-4 flex flex-col items-center justify-around h-[300px]  border-b-4 border-b-primary 
                        hover:border-b-red-700 hover:scale-105 transition-all'>
                <div className="h-[150px]">
                    <img className='w-full h-full' src={props.img} alt='' />
                </div>
                <a
                    className='w-[120px] bg-primary text-white py-1 text-center text-xl'
                    href='#!'
                >Details</a>
            </div>
        </>
    );
};

export default CarouselItem;
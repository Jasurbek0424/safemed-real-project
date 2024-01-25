/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const SimilarProducts = ({ products, type, onClick }) => {
    const similarProducts = products.slice(0, 4)
    const handleButtonClick = () => {

        window.scrollTo({ top: 0 });

        if (onClick) {
            onClick();
        }
    };

    return (
        <>
            <div className='flex flex-wrap justify-center gap-4'>
                {similarProducts.map(el => (
                    <div
                        key={`${type}_${el.id}`}
                        className='max-w-[260px] text-center flex flex-col items-center mb-2 mx-2 font-body gap-2 text-primary item'
                    >
                        <div className='border flex items-center justify-center rounded-[50px] py-6 px-12 border-primary'>
                            <img src={el.image} alt={el.title} className='w-[120px] h-[150px]' />
                        </div>
                        <h2 className='font-bold text-xl'>{el.title}</h2>
                        <p className='overflow-hidden line-clamp-3 text-md'>{el.context}</p>
                        <Link
                            to={`/Categories/${type}/${el.id}`}
                            className='py-1 px-8 text-white font-semibold bg-primary rounded-lg active:bg-blue-700'
                            onClick={handleButtonClick}
                        >
                            More
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SimilarProducts;
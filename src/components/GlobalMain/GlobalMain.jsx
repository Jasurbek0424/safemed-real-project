// eslint-disable-next-line no-unused-vars
import React from 'react';
import CategoryBlock from '../templates/CategoryBlock';

import './GlobalMain.css';
// import ProductsCarousel from '../ProductCarousel/ProductsCarousel';
import About from '../templates/About';

const GlobalMain = () => {
    return (
        <>
            <main>
                <div className='mb-10'>
                    <h2 className='2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-primary mb-10 text-center font-semibold'>
                        Expolre our Product Catalog
                    </h2>
                    <CategoryBlock />
                </div>
                {/* <div className='mb-10'>
                    <ProductsCarousel />
                </div> */}
                <div className='mb-10 px-4'>
                    <About />
                </div>
            </main>
        </>
    );
};

export default GlobalMain;
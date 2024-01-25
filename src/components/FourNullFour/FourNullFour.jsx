// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from './../Footer/Footer';
// import MeasureItem from '../../assets/item2.png';

const FourNullFour = () => {
    return (
        <>
            <div>
                <div>
                    <NavBar />
                </div>
                <div className='h-screen bg-fourToFour bg-center bg-no-repeat bg-cover font-body'>
                    <div className='container flex flex-col justify-center h-full gap-4 px-4 relative'>
                        <h1 className='mb-4
                            2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-bold text-white'>
                            404 Error - Page Not Found
                        </h1>
                        <a href='/'
                            className='2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-lg text-lg font-semibold font-body
                            flex items-center gap-3 py-1 px-4 rounded-full border max-w-[225px] w-full text-white'>
                            Go Home Page
                        </a>
                        {/* <img
                            src={MeasureItem}
                            alt=''
                            className='absolute right-0 2xl:max-w-[266px] xl:max-w-[266px] lg:max-w-[226px] md:max-w-[196px] sm:max-w-[166px] max-w-[146px]
                            2xl:h-[224px] xl:h-[224px] lg:h-[194px] md:h-[164px] sm:h-[144px] h-[134px] -z-0' /> */}
                    </div>
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
};

export default FourNullFour;
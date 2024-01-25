// eslint-disable-next-line no-unused-vars
import React from 'react';
import CategoryBlock from '../templates/CategoryBlock';
import NavBar from './../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Navigation from './../templates/Navigation';

const Category = () => {
    return (
        <>
            <div>
                <div className='mb-5'>
                    <NavBar />
                </div>
                <div className='my-6 container'>
                    <Navigation path={location.pathname} />
                </div>
                <ScrollToTop />
                <CategoryBlock />
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
};

export default Category;
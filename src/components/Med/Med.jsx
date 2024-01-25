/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './../NavBar/NavBar';
import CategoryFilter from '../templates/CategoryFilter';
import ReactPaginate from 'react-paginate';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Footer from '../Footer/Footer';

// import { medEqiupments } from '../../data/Json';
import ScrollToTop from './../ScrollToTop/ScrollToTop';
import Navigation from './../templates/Navigation';



const Med = ({ medEqiupments, type }) => {

    const [currentPage, setCurrentPage] = useState(0);
    const [productsPerPage, setProductsPerPage] = useState(15);


    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };
    useEffect(() => {
        const updateProductsPerPage = () => {
            if (window.innerWidth >= 1536) {
                setProductsPerPage(15); // 2xl
            } else if (window.innerWidth >= 1280) {
                setProductsPerPage(12); // xl
            } else if (window.innerWidth >= 1024) {
                setProductsPerPage(8); // lg
            } else {
                setProductsPerPage(6);
            }
        };

        updateProductsPerPage();

        window.addEventListener('resize', updateProductsPerPage);

        return () => {
            window.removeEventListener('resize', updateProductsPerPage);
        };
    }, []);

    const offset = currentPage * productsPerPage;
    const currentPageProducts = medEqiupments.slice(offset, offset + productsPerPage);

    const handleButtonClick = () => {
        window.scrollTo({ top: 0 });
    };


    return (
        <>
            <div>
                <header>
                    <NavBar />
                </header>
                <ScrollToTop />
                <main className='mt-10'>
                    <div className='container'>
                        <div className='my-6'>
                            <Navigation path={location.pathname} products={medEqiupments} />
                        </div>
                        <div className='w-full flex gap-10 justify-between searchContent'>
                            <div className=''>
                                <CategoryFilter />
                            </div>
                            <div className=''>
                                <div className='flex flex-wrap justify-between gap-4 itemList'>
                                    {currentPageProducts.map((el) => (
                                        <div
                                            key={`${type}_${el.id}`}
                                            className='max-w-[260px] text-center flex flex-col items-center mb-2 mx-2 font-body gap-2 text-primary item'
                                        >
                                            <div className='border flex items-center justify-center rounded-[50px] p-6 border-primary'>
                                                <img src={el.image} alt={el.title} className='w-[200px]' />
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
                                <div className='flex justify-center my-4'>
                                    <ReactPaginate
                                        pageCount={Math.ceil(medEqiupments.length / productsPerPage)}
                                        pageRangeDisplayed={3}
                                        marginPagesDisplayed={1}
                                        onPageChange={handlePageClick}
                                        containerClassName="pagination flex items-center"
                                        pageClassName="mx-1"
                                        pageLinkClassName="p-2 text-primary"
                                        activeClassName="bg-gray-200 text-white rounded-full"
                                        previousLabel={<FaChevronLeft className="w-4 h-4" />}
                                        nextLabel={<FaChevronRight className="w-4 h-4" />}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </main >
                <footer>
                    <Footer />
                </footer>
            </div >

        </>

    );
};

export default Med;

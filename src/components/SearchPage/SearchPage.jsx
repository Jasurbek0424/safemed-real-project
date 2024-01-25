/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './SearchPage.css';
import NavBar from './../NavBar/NavBar';
import CategoryFilter from '../templates/CategoryFilter';
import ReactPaginate from 'react-paginate';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ImSearch } from "react-icons/im";

// import { medEqiupments } from '../../data/Json';
import Footer from './../Footer/Footer';
import { Link } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Navigation from './../templates/Navigation';



const SearchPage = ({ medEqiupments, type }) => {

    const [currentPage, setCurrentPage] = useState(0);
    const [productsPerPage, setProductsPerPage] = useState(15);
    const [value, setValue] = useState('')

    const handleSearchChange = (e) => {
        setValue(e.target.value)
    }

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
                setProductsPerPage(6); // Дополнительные условия для меньших экранов
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

    const topProducts = medEqiupments.slice(0, 3)

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
                <main className='mt-10 mb-10'>
                    <div className='container'>
                        <div className='my-6'>
                            <Navigation path={location.pathname} products={medEqiupments} />
                        </div>
                        <div className='w-full flex gap-10 justify-between searchContent'>
                            <div className=''>
                                <CategoryFilter />
                                <div className='mt-6'>
                                    <h2 className='2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-xl text-primary mb-10 text-center font-bold'>
                                        Top Products
                                    </h2>
                                    <div className='topItemsList'>
                                        {topProducts.map((top) => (
                                            <div
                                                key={top.id}
                                                className='max-w-[240px] text-center flex flex-col items-center mb-4 font-body gap-2 text-primary topItem'
                                            >
                                                <div className='border flex items-center justify-center rounded-[50px] p-6 border-primary'>
                                                    <img src={top.image} alt={top.title} className='w-[150px] mb-4' />
                                                </div>
                                                <h2 className='font-bold text-xl'>{top.title}</h2>
                                                <p className='overflow-hidden line-clamp-3 text-md'>{top.context}</p>
                                                <Link
                                                    to={`/Categories/${type}/${top.id}`}
                                                    className='py-1 px-8 text-white font-semibold bg-primary rounded-lg active:bg-blue-700'
                                                    onClick={handleButtonClick}
                                                >
                                                    More
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <form
                                    className='flex items-center gap-2 max-w-[550px] w-full mb-10'>
                                    <input
                                        type='search'
                                        value={value}
                                        onChange={handleSearchChange}
                                        className='outline-none border-2 border-primary rounded-full py-1 px-4 w-full'
                                        placeholder='Find'
                                        autoComplete='search'
                                    />

                                    <button type='submit' className='text-2xl text-primary'>
                                        <ImSearch />
                                    </button>
                                </form>
                                <div className='flex flex-wrap justify-between gap-4 itemList'>
                                    {currentPageProducts.map((el) => (
                                        <div
                                            key={el.id}
                                            className='max-w-[260px] text-center flex flex-col items-center mb-10 font-body gap-2 text-primary item'
                                        >
                                            <div className='border flex items-center justify-center rounded-[50px] p-6 border-primary'>
                                                <img src={el.image} alt={el.title} className='w-[200px] mb-4' />
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
                                        containerClassName="pagination flex items-center gap-2 text-xl"
                                        pageClassName="mx-1"
                                        pageLinkClassName="p-2 text-primary"
                                        activeClassName="bg-gray-200 text-white rounded-full"
                                        previousLabel={<FaChevronLeft className="w-5 h-5" />}
                                        nextLabel={<FaChevronRight className="w-5 h-5" />}
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

export default SearchPage;

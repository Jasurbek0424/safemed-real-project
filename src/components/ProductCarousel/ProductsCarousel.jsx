// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselItem from '../templates/CarouselItem';
import Img from '../../assets/item1.png'
import Img2 from '../../assets/item2.png'
import './ProductsCArousel.css';

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const ProductsCarousel = () => {
    // Опции для карусели
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 767 },
            items: 3,
        },
        planshet: {
            breakpoint: { max: 767, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const carouselRef = useRef(null);

    const handlePreviousClick = () => {
        if (carouselRef.current) {
            carouselRef.current.previous();
        }
    };

    const handleNextClick = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    return (
        <>
            <div className='container'>
                <div className="relative px-6">
                    <div className="relative mb-10">
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={3000}
                            keyBoardControl={true}
                            customTransition="all .5s"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            itemClass="carousel-item-padding-40-px"
                            ref={carouselRef}
                            arrows={false}
                            className='h-[350px]'
                        >
                            <CarouselItem img={Img} />
                            <CarouselItem img={Img2} />
                            <CarouselItem img={Img} />
                            <CarouselItem img={Img} />
                            <CarouselItem img={Img2} />
                            <CarouselItem img={Img2} />
                            <CarouselItem img={Img} />
                            <CarouselItem img={Img2} />
                        </Carousel>
                        <button
                            className="2xl:text-6xl
                        xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-3xl absolute top-1/2 
                        2xl:-left-16
                        xl:-left-14 lg:-left-7 md:-left-8 sm:-left-7 left-6 transform -translate-y-1/2 text-primary p-2"
                            onClick={handlePreviousClick}
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            className="
                        2xl:text-6xl
                        xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-3xl absolute top-1/2 2xl:-right-16
                        xl:-right-14 lg:-right-7 md:-right-8 sm:-right-7 right-6 transform -translate-y-1/2 text-primary p-2"
                            onClick={handleNextClick}
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                    <div className='flex justify-center'>
                        <a
                            className='py-2 px-6 rounded-full bg-primary text-white 
                        2xl:text-4xl
                        xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-xl'
                            href='#!'
                        >Our Products</a>
                    </div>
                </div>
            </div>
        </>
    );
};



export default ProductsCarousel;
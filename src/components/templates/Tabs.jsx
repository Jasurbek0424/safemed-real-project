/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import SimilarProducts from './SimilarProducts';




const Tabs = ({ products, type }) => {
    const [activeModal, setActiveModal] = useState('modal1');

    const openModal = (modalType) => {
        setActiveModal(modalType);
    };

    return (
        <>
            <div className=''>
                <section className='mt-20 mb-20 font-body justify-between'>
                    <div className='max-w-[900px] w-full flex gap-8 px-8 justify-center items-center flex-wrap 2xl:text-md
                    xl:text-md lg:text-sm md:border-b py-2 mx-auto'>
                        <button
                            onClick={() => openModal('modal1')}
                            className={`border-b-4 ${activeModal === 'modal1' ? 'border-primary' : 'border-transparent'}`}
                            type='submit'>
                            Electronic Production
                        </button>
                        <button
                            onClick={() => openModal('modal2')}
                            className={`border-b-4 ${activeModal === 'modal2' ? 'border-primary' : 'border-transparent'}`}
                            type='submit'>
                            Electronic Production
                        </button>
                        <button
                            onClick={() => openModal('modal3')}
                            className={`border-b-4 ${activeModal === 'modal3' ? 'border-primary' : 'border-transparent'}`}
                            type='submit'>
                            Electronic Production
                        </button>
                    </div>

                    <div className='mt-6 w-full flex-col flex justify-center items-center  px-4'>
                        {activeModal === 'modal1' && (<SimilarProducts products={products} type={type} />)}
                        {activeModal === 'modal2' && (<SimilarProducts products={products} type={type} />)}
                        {activeModal === 'modal3' && (<SimilarProducts products={products} type={type} />)}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Tabs;
/* eslint-disable no-constant-condition */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import MedItem from '../../assets/item1.png';
import MeasurItem from '../../assets/item2.png';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
// import { useParams } from 'react-router-dom';
import './Hero.css';


const Hero = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        const only = e.target.value.replace(/[^a-zA-Z]/g, '');
        setName(only)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const handleFormChange = (e) => {
        e.preventDefault()
    }

    const countryNames = {
        qa: 'Qatar',
        kz: 'Kazakhstan',
        ue: 'UAE',
        sa: 'Saudi Arabia',
        kw: 'Kuwait',
        iq: 'Iraq',
        eg: 'Egypt',
        az: 'Azerbaijan',
        uz: 'Uzbekistan',
        tm: 'Turkmenistan',
        mn: 'Mongolia',
        ru: 'Russia'
    };
    const path = location.pathname.split("/")
    const dynamicText = countryNames[path[1]] || (path[1] === "" ? "UAE" : 'Unknown Country');
    return (
        <>
            <div className='relative'>
                <div className='static z-20 '>
                    <NavBar />
                </div>
                <div className='container mt-10 flex items-center justify-between w-full gap-10 font-body hero mb-12'>
                    <form
                        action=''
                        method=''
                        onChange={handleFormChange}
                        className=' flex flex-col justify-evenly items-center font-body w-[350px] 
                        2xl:h-[450px] xl:h-[450px] lg:h-[400px] md:h-[370px] sm:h-[370px] h-[370px] px-4 py-6 border'>
                        <h2 className='2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-md font-semibold text-gray-700'>
                            Request a Quote
                        </h2>
                        <div className='flex flex-col gap-6 mb-10 w-full'>
                            <input
                                type='text'
                                required
                                autoComplete='name'
                                value={name}
                                onChange={handleNameChange}
                                className='outline-none border-b-2 border-gray-500 py-1'
                                placeholder='Your Name'
                            />
                            <input
                                type='email'
                                required
                                autoComplete='email'
                                value={email}
                                onChange={handleEmailChange}
                                className='outline-none border-b-2 border-gray-500 py-1'
                                placeholder='Email Address'
                            />
                            <textarea
                                required
                                value={message}
                                onChange={handleMessageChange}
                                className='outline-none border-b-2 border-gray-500 py-1'
                                placeholder='Your Massage'>
                            </textarea>
                        </div>
                        <button className='rounded-full bg-primary w-full py-2 max-w-[200px]
                        2xl:text-xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-sm
                        text-white hover:bg-blue-800 transition-all' type='submit'>
                            SEND INQUIRY
                        </button>
                    </form>
                    <div className=' static -z-10 heroRight
                    2xl:h-[500px] xl:h-[500px] lg:h-[450px] md:h-[420px] sm:h-[400px] h-[380px] w-full 
                    bg-hero bg-no-repeat bg-center bg-cover p-10 flex flex-col justify-between'>
                        <div className='mt-6 px-4'>
                            <h1 className=' text-primary font-semibold mb-2 max-w-[550px] uppercase
                            2xl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl text-lg flex flex-col gap-2'>
                                Medical Equipment and Safety Supplies (PPE)
                                <span className='text-primary font-normal
                            2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-md'>
                                    Supplier and Reseller in {dynamicText}
                                </span>
                            </h1>
                        </div>
                        <div className='flex justify-end items-end '>
                            <img className='translate-x-[50px] 
                            2xl:max-w-[266px] xl:max-w-[266px] lg:max-w-[226px] md:max-w-[196px] sm:max-w-[166px] max-w-[146px]
                            2xl:h-[224px] xl:h-[224px] lg:h-[194px] md:h-[164px] sm:h-[144px] h-[134px]
                            static -z-0'
                                src={MedItem} alt='' />
                            <img className='
                            2xl:max-w-[164px] xl:max-w-[164px] lg:max-w-[146px] md:max-w-[126px] sm:max-w-[116px] max-w-[106px] 
                            2xl:h-[263px] xl:h-[263px] lg:h-[243px] md:h-[203px] sm:h-[183px] h-[163px]
                            static -z-10'
                                src={MeasurItem} alt='' />
                        </div>
                    </div>
                </div>
                <ScrollToTop />
            </div>
        </>
    );
};

export default Hero;
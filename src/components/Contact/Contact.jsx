// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import NavBar from './../NavBar/NavBar';
import Navigation from './../templates/Navigation';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { GiEarthAfricaEurope } from "react-icons/gi";
import './Contact.css';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';


const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        const only = e.target.value.replace(/[^a-zA-Z]/g, '');
        setName(only)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleSubjectChange = (e) => {
        setSubject(e.target.value)
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const handleFormChange = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div>
                <nav>
                    <NavBar />
                </nav>
                <ScrollToTop />
                <main className='container mb-10 mt-5'>
                    <div className='my-6 px-4'>
                        <Navigation path={location.pathname} />
                    </div>
                    <div className='px-4'>
                        <h1 className='2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-primary mb-10 font-semibold text-center'>
                            CONTACT US
                        </h1>
                        <div className='flex justify-center shadow-lg max-w-[750px] mx-auto contact__info'>
                            <form
                                action=''
                                method=''
                                onChange={handleFormChange}
                                className=' flex flex-col justify-evenly font-body w-[350px] px-4 py-6'>
                                <h2 className='2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-md text-gray-700 mb-4'>
                                    Get in touch
                                </h2>
                                <div className='flex flex-col gap-6 mb-10 w-full'>
                                    <input
                                        type='text'
                                        id='username'
                                        name='username'
                                        required
                                        autoComplete='name'
                                        value={name}
                                        onChange={handleNameChange}
                                        className='outline-none border border-gray-400 py-1 px-2'
                                        placeholder='Name'
                                    />
                                    <input
                                        type='email'
                                        id='useremail'
                                        name='useremail'
                                        required
                                        autoComplete='email'
                                        value={email}
                                        onChange={handleEmailChange}
                                        className='outline-none border border-gray-400 py-1 px-2'
                                        placeholder='Email'
                                    />
                                    <input
                                        type='text'
                                        id='subject'
                                        name='subject'
                                        required
                                        value={subject}
                                        onChange={handleSubjectChange}
                                        className='outline-none border border-gray-400 py-1 px-2'
                                        placeholder='Subject'
                                    />
                                    <textarea
                                        id='usertextarea'
                                        name='usertextarea'
                                        required
                                        value={message}
                                        onChange={handleMessageChange}
                                        className='outline-none border border-gray-400 py-1 px-2'
                                        placeholder='Your Massage'>
                                    </textarea>
                                </div>
                                <button className='rounded-lg bg-primary w-full py-2 max-w-[150px]
                        2xl:text-lg xl:text-lg lg:text-md md:text-md sm:text-sm text-sm
                        text-white hover:bg-blue-800 transition-all' type='submit'>
                                    Send Message
                                </button>
                            </form>
                            <div className='text-white bg-primary py-6 px-8 contactItem'>
                                <h2 className='2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-lg mb-2'>
                                    Contact us
                                </h2>
                                <div className='flex flex-col gap-5'>
                                    <a href='#!' className='flex items-center gap-2'>
                                        <div className='bg-primaryBlur p-3 text-lg rounded-full'>
                                            <FaLocationDot />
                                        </div>
                                        <span className='font-bold'>Address:</span> P.O. Box 122431, Dubai, U.A.E.
                                    </a>
                                    <a href='tel:+971-58-9285102' className='flex items-center gap-2'>
                                        <div className='bg-primaryBlur p-3 text-lg rounded-full'>
                                            <FaPhoneAlt />
                                        </div>
                                        <span className='font-bold'>Phone:</span> +971-58-9285102
                                    </a>
                                    <a href='#!' className='flex items-center gap-2'>
                                        <div className='bg-primaryBlur p-3 text-lg rounded-full'>
                                            <FaTelegramPlane />
                                        </div>
                                        <span className='font-bold'>Email:</span> inquiry@instrubiz.com
                                    </a>
                                    <a href='#!' className='flex items-center gap-2'>
                                        <div className='bg-primaryBlur p-3 text-lg rounded-full'>
                                            <GiEarthAfricaEurope />
                                        </div>
                                        <span className='font-bold'>Website:</span> instruhub.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
};

export default Contact;
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState } from 'react';

const Form = () => {

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


    return (
        <>
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
                        id='name'
                        name='name'
                        required
                        autoComplete='name'
                        value={name}
                        onChange={handleNameChange}
                        className='outline-none border-b-2 border-gray-500 py-1'
                        placeholder='Your Name'
                    />
                    <input
                        type='email'
                        id='email'
                        name='email'
                        required
                        autoComplete='email'
                        value={email}
                        onChange={handleEmailChange}
                        className='outline-none border-b-2 border-gray-500 py-1'
                        placeholder='Email Address'
                    />
                    <textarea
                        id='textarea'
                        name='textarea'
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
        </>
    );
};

export default Form;
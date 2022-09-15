import React from 'react'

export const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
        <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7'>
        <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'><span className='text-teal-400'>Free</span>until you'r ready to launch</h1>
        <div>
            <input type="text" placeholder='Enter your phone number' className='text-gray-800 sm:w-72 w-full sm:mr-4 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none'
            />
        </div>
        </div>
    </footer>
  )
}

export default Footer
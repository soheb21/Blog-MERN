import React from 'react'
import SideBar from './SideBar'

const Layout = ({ children }) => {
    return (
        <div className='flex min-h-screen w-full bg-primary-bg text-primary-text overflow-hidden  '>
            <div className='w-fit border-r'>
                <SideBar  />
            
            </div>

            <div className='flex-1 px-4 '>
                <div className='flex w-full justify-end items-center  h-[10%] border-b'>
                    {/* make a function that we don't want use search button */}
                    <input className='text-sm md:text-xl outline-none p-2 border-b bg-transparent' type="text" placeholder='Enter Something...' />
                    <button className='bg-primary-btn p-2 md:py-2 md:px-4 w-fit  rounded-r-xl hover:bg-primary-hover-btn text-xl'>Search</button>
                </div>
                <div className='h-[90%] p-2 overflow-auto '>{children}</div>
            </div>
        </div>
    )
}

export default Layout
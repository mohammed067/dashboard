import React from 'react'
import abstract from '../Images/abstract.jpeg'


function TableInfo() {
    return (
        <div className='py-[2rem] '>
            <div className='grid grid-cols-4 bg-white p-[2rem] md:items-center  '>
                <div className='col-span-2 font-bold md:col-span-1 xl:col-span-1 '><p className=''>Powershell</p></div>
                <div className='flex items-center md:col-span-3 bg-gray-100 gap-2  h-[30px] ml-[8rem]   rounded-md p-2'>


                    <svg className='w-[15px] h-[15px] md:w-[20px]  ' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                    </svg>


                    <input className='bg-gray-100 h-[30px] w-[40vw] outline-none  md:w-[230px]' placeholder='Search' type='text' />
                </div>
                <div className='col-start-4 items-end text-end'>
                    <select>
                        <option>Last 30 days</option>
                        <option>Last 60 days</option>
                        <option>Last 90 days</option>


                    </select>
                </div>
            </div>


            <div className='grid grid-cols-4 px-[2rem] bg-white border-b-2 '>
                <div className='md:col-span-2 col-span-3 '>
                    <p>Product Name</p>
                </div>
                <div  className='flex  gap-14'>
                <p>Stock</p>      
                <p>Stock</p>
                <p>Stock</p>
                </div>


            </div>


            <div className='grid grid-cols-4 px-[2rem] bg-white'>
                <div className='flex md:col-span-2 col-span-3 gap-3'>
                    <img className='w-[60px] rounded-md' src={abstract}/>
                    <div className=''>
                        <p className='text-gray-500'>Abstract 3d</p>
                        <p>Lorem ipsum is a placeholder text commonly used to demonstrate</p>
                    </div>
                </div>


                <div className='flex  gap-14'>
                    <p>32 in stock</p>
                    <p>32 in stock</p>
                    <p>32 in stock</p>
                </div>
            </div>


            <div className='grid grid-cols-4 px-[2rem] bg-white'>
                <div className='flex md:col-span-2 col-span-3 gap-3'>
                    <img className='w-[60px] rounded-md' src={abstract}/>
                    <div className=''>
                        <p className='text-gray-500'>Abstract 3d</p>
                        <p>Lorem ipsum is a placeholder text commonly used to demonstrate</p>
                    </div>
                </div>


                <div className='flex  gap-14'>
                    <p>32 in stock</p>
                    <p>32 in stock</p>
                    <p>32 in stock</p>
                </div>
            </div>
        </div>
    )
}


export default TableInfo
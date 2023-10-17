import React from 'react'
import dashboard from '../Images/dashboard.svg'
import arrow from '../Images/arrow.svg'
import order from '../Images/order.png'
import customer from '../Images/customer.png'
import income from '../Images/income.png'
import promotion from '../Images/promotion.png'
import help from '../Images/help.png'
import profile from '../Images/profile.png'
import dashboard1 from '../Images/dashboard1.png'
import downarrow from '../Images/downarrow.png'
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from 'react'

function Sidebar() {
    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);
    return (
        <>
        
        <div className='bg-blue-900 sticky top-0 w-[30vw] min-h-[100vh] lg:w-[20vw]  hidden md:flex'>
            {/* large screens */}
            <div className=' text-gray-400 color px-[1rem] leading-[3rem] justify-between'>

                <div className='flex gap-4 items-center py-[1rem]  ' >
                    <img className="w-[30px] h-[30px]" src={dashboard1} />
                    <h2 className='text-2xl font-bold text-white'>Dashboard</h2>
                </div>

                <div className=' justify-evenly  py-[4rem] '>


                    <div className='flex items-center cursor-pointer gap-4 bg-blue-600 rounded-md px-[]'>
                        <img className='w-[30px]  text-white' src={dashboard} />
                        <h2>Dashboard</h2>

                    </div>

                    <div className='flex items-center gap-4  cursor-pointer rounded-md justify-between'>
                        <div className='flex gap-4 items-center'>


                            <img className='w-[30px] h-[30px] bg-blue-900 text-white' src={order} />
                            <h2>Product</h2>
                        </div>
                        <img className='w-[30px]' src={arrow} />
                    </div>

                    <div className='flex items-center gap-4 justify-between cursor-pointer'>
                        <div className='flex gap-4 items-center'>
                            <img className='w-[30px] h-[30px]' src={customer} />
                            <h2>Customers</h2>
                        </div>

                        <img className='w-[30px]' src={arrow} />
                    </div>

                    <div className='flex items-center gap-4 justify-between cursor-pointer'>
                        <div className='flex gap-4 items-center'>
                            <img className='w-[30px] h-[30px]' src={income} />
                            <h2>Income</h2>
                        </div>

                        <img className='w-[30px] ' src={arrow} />
                    </div>

                    <div className='flex items-center gap-4 justify-between cursor-pointer'>
                        <div className='flex gap-4 items-center'>
                            <img className='w-[30px] h-[30px]' src={promotion} />
                            <h2>Promote</h2>
                        </div>

                        <img className='w-[30px]' src={arrow} />
                    </div>

                    <div className='flex items-center gap-4 justify-between cursor-pointer' >
                        <div className='flex gap-4 items-center'>
                            <img className='w-[30px] h-[30px]' src={help} />
                            <h2>Help</h2>
                        </div>

                        <img className='w-[30px]' src={arrow} />
                    </div>

                </div>



                <div className='flex items-center gap-4 cursor-pointer lg:mt-[80%]   justify-between'>
                 
                 
                    <a>
                    <div className='flex gap-4'>
                    <img className='w-[30px] h-[30px] rounded-full' src={profile} />
                    <div className='flex flex-col leading-5  '>
                        <h2 className='text-white text-[14px]'>Abdul Rahaman</h2>
                        <h2 className='text-[12px]'>frontend developer</h2>
                    </div>
                    </div>
                    </a>
                 
                 
                   


                    <img className='w-[30px]' src={downarrow} />
                </div>



            </div>


        </div>
          <div className='bg-blue-900 w-[100vw]  h-[90px] md:hidden'>

          
          <div className=' flex justify-between items-center py-2'>
            <div className='flex items-center gap-2 ml-2'>
                  <img className="w-[30px] h-[30px]" src={dashboard1} />
                    <h2 className='text-2xl font-bold text-white'>Dashboard</h2>
            </div>
            <div>
            <img className='w-[30px] h-[30px] rounded-full mr-2' src={profile} />
            </div>
          </div>
            

            <div className='flex gap-6 py-2 px-2 justify-between'>
            <img className='w-[30px]  text-white' src={dashboard} />
            <img className='w-[30px] h-[30px] bg-blue-900 text-white' src={order} />
            <img className='w-[30px] h-[30px]' src={customer} />
            <img className='w-[30px] h-[30px]' src={income} />
            <img className='w-[30px] h-[30px]' src={promotion} />
            <img className='w-[30px] h-[30px]' src={help} />
            
            </div>

          </div>
        </>


    )
}

export default Sidebar
import React from 'react'

function RevenInfo({image,info,money,moneyinfo,colorname}) {
  return (

    <div className='bg-white p-[2rem] rounded-md'>
       <div className='flex gap-4'>
          <img  className='w-[100px]' src={image}/>
          <div>
            <p className='text-gray-400'>{info}</p>
            <p className='font-bold text-3xl '>{money}</p>
            
            <p className={colorname}>{moneyinfo} <span className=' text-black'>this month</span></p>
          </div>
        </div> 
    </div>
 
  )}
export default RevenInfo
import React from 'react'

function OverviewInfo({image,info,monthly,classname}) {
  return (
    
   
        <div className=' bg-white p-[2rem]  gap-[2rem]'>
            <div className='flex justify-between'>
                <div>
                    <p className='font-bold'>{info}</p>
                    <p className='text-gray-400 text-[12px]'>{monthly}</p>
                </div>
                <div >
                      <select className={classname}>
                        <option>Quantity</option>
                        <option>Sales</option>
                        <option>Balance</option>
                        
                      </select>

                </div>
            </div>
            <img className='' src={image}/>
        </div>
        

      
   

  )
}

export default OverviewInfo
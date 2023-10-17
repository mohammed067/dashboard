import React from 'react'
import pie3 from "../Images/pie3.png"
import customerGraph from "../Images/customerGraph.png"
import OverviewInfo from './OverviewInfo'


function OverviewSection() {
  return (
    <div className='gap-4 grid md:grid-cols-2 lg:grid-cols-2 mt-4'>
        
        <OverviewInfo
        info="Overview"
        monthly="Monthly Earning"
        image={pie3}
        classname='bg-gray-200 p-1 rounded-md cursor-pointer'
        />
      
       
       
        <OverviewInfo
        info="Overview"
        monthly="Monthly Earning"
        image={customerGraph}
        classname="hidden"
        />
        
       
    </div>
  )
}

export default OverviewSection
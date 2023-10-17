import React from 'react'
import RevenInfo from './RevenInfo'
import dollar from '../Images/dollar.png'
import revenue from '../Images/revenue.png'
import wallet from '../Images/wallet.png'
import package1 from '../Images/package1.png'

function Reven() {
  return (
    <div className=' gap-4 grid md:grid-cols-2 lg:grid-cols-3'>
        <RevenInfo
         image={dollar}
          info="Earning"   
          money="$198K"
          moneyinfo="37.8%"  
        />

<RevenInfo
         image={package1}
          info="Orders"   
          money="$2.4K"
          moneyinfo="37.8%"  
        />

<RevenInfo
        image={wallet}
          info="Balance"   
          money="$2.4K"
          moneyinfo="37.8%"  
        />

<RevenInfo
         image={revenue}
          info="Total Sales"   
          money="$89K"
          moneyinfo="37.8%"  
        />
    </div>
  )
}

export default Reven
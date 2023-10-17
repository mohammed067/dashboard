import React from 'react'
import MainSectionHeader from './MainSectionHeader'
import Reven from './Reven'
import OverviewSection from './OverviewSection'
import TableInfo from './TableInfo'

function MainSection() {
  return (
    <div className=' bg-smokyWhite p-4 lg:w-[80vw]'>
        <MainSectionHeader/>
        <Reven/>
        <OverviewSection/>
        <TableInfo/>
       
    </div>
  )
}

export default MainSection
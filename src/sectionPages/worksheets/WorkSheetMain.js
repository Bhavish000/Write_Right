import React from 'react'
import AboutSection from './AboutSection'
import WorkSheetBanner from '@/component/banner/WorkSheetBanner'
import WorkSheetForm from './WorkSheetForm'
import BrandArea from '@/component/common/BrandArea'

function WorkSheetMain() {
  return (
    <div>
        <WorkSheetBanner/>
      <AboutSection/>
      <WorkSheetForm/>
      <BrandArea/>
    </div>
  )
}

export default WorkSheetMain

import React from 'react'
// import WritingClasses from './WritingClasses'
// import HandwirtingFaq from './HandwirtingFaq'
import BrandArea from '@/component/common/BrandArea'
import CalligraphyBanner from '@/component/banner/CalligraphyBanner'
import AboutSection from './AboutSection'
import CalligraphyFaq from './CalligraphyFaq'
import Classes from './Classes'

function CalligraphyMain() {
  return (
    <div>
      <CalligraphyBanner/>
      <AboutSection/>
      <Classes/>
      {/* <WritingCourse/> */}
      {/* <WritingClasses/> */}
      <CalligraphyFaq/>
      <BrandArea/>
    </div>
  )
}

export default CalligraphyMain

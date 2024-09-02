import React from 'react'
// import AboutSection from './AboutSection'
// import WritingCourse from './WritingCourse'
// import WritingClasses from './WritingClasses'
import BrandArea from '@/component/common/BrandArea'
import SpeedWritingFaq from './SpeedWritingFaq'
import SpeedWritingBanner from '@/component/banner/SpeedWritingBanner'
import AboutSection from './AboutSection'
import WritingClasses from './WritingClasses'

function SpeedWritingMain() {
  return (
    <div>
      <SpeedWritingBanner/>
      <AboutSection/>
      {/* <WritingCourse/> */}
      <WritingClasses/>
      <SpeedWritingFaq/>
      <BrandArea/>
    </div>
  )
}

export default SpeedWritingMain

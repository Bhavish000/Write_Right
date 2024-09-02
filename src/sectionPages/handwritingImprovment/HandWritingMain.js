import React from 'react'
import AboutSection from './AboutSection'
// import WritingCourse from './WritingCourse'
import WritingClasses from './WritingClasses'
import HandwirtingFaq from './HandwirtingFaq'
import BrandArea from '@/component/common/BrandArea'
import HandWritingImprovementBanner from '@/component/banner/HandWritingImrpoveBanner'

function HandWritingMain() {
  return (
    <div>
      <HandWritingImprovementBanner/>
      <AboutSection/>
      {/* <WritingCourse/> */}
      <WritingClasses/>
      <HandwirtingFaq/>
      <BrandArea/>
    </div>
  )
}

export default HandWritingMain

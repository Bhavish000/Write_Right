import React from 'react'
import AboutSection from './AboutSection'
import FranchiseBanner from '@/component/banner/FranchiseBanner'
import FranchiseApart from './FranchiseApart'
import FranchiseFaq from './FranchiseFaq'
import Testimonial from './TestimonialSection'
import BottomPart from './BottomPart'

function FranchiseMain() {
  return (
    <div>
        <FranchiseBanner/>
      <AboutSection/>
      <FranchiseApart/>
      <FranchiseFaq/>
      {/* <Testimonial/> */}
      <BottomPart/>
    </div>
  )
}

export default FranchiseMain

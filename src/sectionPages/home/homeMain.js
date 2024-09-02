import HomeBanner from '@/component/banner/homeBanner'
import React from 'react'
import RredLineSection from './redLineSection'
import About from './aboutSection'
import AboutSection02 from './Aboutsection02'
import ClassNear from './class-near-me'
import Inmportance from './inmportance'
import Course from './Course'
import Testimonial from './TestimonialSection'
import HandwritingSkills from './handwritingSkills'
import Franchise from './Franchise'
import Blog from './BlogSection'
import BrandArea from '../../component/common/BrandArea'
// import Course from 
// import Course from './Course'

function HomeMain() {
  return (
    <div>
      <HomeBanner/>
      <RredLineSection/>
      <About/>
      <Course/>
      <AboutSection02/>
      <ClassNear/>
      <Inmportance/>
      <Testimonial/>
      <HandwritingSkills/>
      <Franchise/>
      <Blog/>
      <BrandArea/>
    </div>
  )
}

export default HomeMain

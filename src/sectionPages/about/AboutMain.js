import React from 'react'
import AboutSection from './AboutSection'
import AboutBanner from '@/component/banner/AboutBanner'
import WhatWeDo from './WhatWeDo'
import Team from './TeamSection'
import Different from './Different'
import HandwritingSkills from '../home/handwritingSkills'
import Blog from '../home/BlogSection'
import BrandArea from '@/component/common/BrandArea'

function AboutMain() {
  return (
    <div>
        <AboutBanner/>
      <AboutSection/>
      <Different/>
      <WhatWeDo/>
      <Team/>
      <HandwritingSkills/>
      <Blog/>
      <BrandArea/>
    </div>
  )
}

export default AboutMain

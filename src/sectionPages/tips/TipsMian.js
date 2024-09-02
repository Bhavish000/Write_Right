import React from 'react'
import HandwritingTips from './HandwritingTips'
import TipsBanner from '@/component/banner/TipsBanner'
import BrandArea from '@/component/common/BrandArea'

function TipsMian() {
  return (
    <div>
      <TipsBanner/>
      <HandwritingTips/>
      <BrandArea/>
    </div>
  )
}

export default TipsMian

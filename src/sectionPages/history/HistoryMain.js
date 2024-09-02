import HistoryBanner from '@/component/banner/HistoryBanner'
import React from 'react'
import WritingHistory from './WritingHistory'
import JourneyHistory from './JourneyHistory'
import Importance from './Importance'
import BrandArea from '../../component/common/BrandArea'

function HistoryMain() {
  return (
    <div>
      <HistoryBanner/>
      <WritingHistory/>
      <JourneyHistory/>
      <Importance/>
      <BrandArea/>
    </div>
  )
}

export default HistoryMain

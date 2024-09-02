import BooksBanner from '@/component/banner/BooksBanner'
import React from 'react'
import About from '../home/aboutSection'
import AboutSection from './AboutSection'
import HandWritingBooks from './HandWritingBooks'
import Concept from './Concept'
import PrePrimary from './PrePrimary'
import PrimarySchool from './PrimarySchool'
import Jump from './Jump'
import BrandArea from '@/component/common/BrandArea'
import MyBooks from './MyBooks'

function BooksMain() {
  return (
    <div>
      <BooksBanner/>
      <AboutSection/>
      <HandWritingBooks/>
      <Concept/>
      <PrePrimary/>
      <PrimarySchool/>
      <Jump/>
      <MyBooks/>
      <BrandArea/>
    </div>
  )
}

export default BooksMain

import FooterStyleTwo from '@/component/layout/footer/FooterStyleTwo'
import Header from '@/component/layout/header/header'
import HandWritingMain from '@/sectionPages/handwritingImprovment/HandWritingMain'
import Head from 'next/head'
import React from 'react'

function HandwritingImprovement() {
  return (
    <div>

      <Head>
        <title>Handwriting Improvement - Course, Classes | Write Right
        </title>
        <meta name='keywords' content='handwriting improvement program, handwriting improvement course, handwriting improvement classes, handwriting improvement' />
        <meta name="description" content="Improve your handwriting within 7 days with 100% results. Write Right provides research-backed scientific training for cursive, print, and Hindi. Inquire now!"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>

      <Header
        parentMenu='home'
        TopBar='enable'
        CanvasClass='right_menu_togle hidden-md'
        headerClass='full-width-header home8-style4'
        TopBarClass='topbar-area dark-parimary-bg'
      // emailAddress='support@website.com'
      // phoneNumber='(+088) 589-8745'
      />


      <HandWritingMain />

      <FooterStyleTwo />
    </div>
  )
}

export default HandwritingImprovement

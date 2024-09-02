import FooterStyleTwo from '@/component/layout/footer/FooterStyleTwo'
import Header from '@/component/layout/header/header'
import AboutMain from '@/sectionPages/about/AboutMain'
import Head from 'next/head'
import React from 'react'

function AboutUs() {
  return (
    <>
      <Head>
      <title>Handwriting - Research & Training, solutions | Write Right</title>
    <meta name="description" content="Write Right, is the World's largest chain of Handwriting Institutes. We offer solution for every problem of legibility & speed in handwriting. Inquire to reach us."/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Header
      parentMenu='home'
      TopBar='enable'
      CanvasClass='right_menu_togle hidden-md'
      headerClass='full-width-header home8-style4'
      TopBarClass='topbar-area dark-parimary-bg'
      />
      <AboutMain/>
      <FooterStyleTwo/>
    </>
  )
}

export default AboutUs

import FooterStyleTwo from '@/component/layout/footer/FooterStyleTwo'
import Header from '@/component/layout/header/header'
import SpeedWritingMain from '@/sectionPages/speedWriting/SpeedWritingMain'
import Head from 'next/head'
import React from 'react'

function SpeedWriting() {
  return (
    <div>

<Head>
<title> Speed Writing Classes and Course | Write Right India </title>
<meta name='keywords' content=' speed writing classes, speed writing course'/>
    <meta name="description" content="Double your writing speed with Write Right's scientifically designed speed writing course. Join our speed writing classes and stay ahead of the competition."/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
	
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

      
      <SpeedWritingMain/>

        <FooterStyleTwo/>
    </div>
  )
}

export default SpeedWriting

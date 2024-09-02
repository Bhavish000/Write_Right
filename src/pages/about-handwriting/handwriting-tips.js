import FooterStyleTwo from '@/component/layout/footer/FooterStyleTwo'
import Header from '@/component/layout/header/header'
import TipsMian from '@/sectionPages/tips/TipsMian'
import Head from 'next/head'
import React from 'react'

function Handwritingtips() {
  return (
    <>
    <Head>
    <title>Good Handwriting Tips | Write Right </title>
    <meta name="description" content="Tips on how to improve Handwriting by experts of Write Right, the world's largest chain of Handwriting institutes. Enquire now for more help."/>
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

<TipsMian/>
       


      <FooterStyleTwo/>

  </>
  )
}

export default Handwritingtips

import FooterStyleTwo from '@/component/layout/footer/FooterStyleTwo'
import Header from '@/component/layout/header/header'
import HistoryMain from '@/sectionPages/history/HistoryMain'
import Head from 'next/head'
import React from 'react'

function History() {
  return (
    <>
      <Head>
        <title>Handwriting Classes & Courses for Print & Cursive Writing </title>
        <meta name="keywords" content="handwriting, handwriting training, handwriting classes, handwriting course, good handwriting skills, cursive writing, handwriting classes near me, print writing,  write right " />
        <meta name="description" content="Top handwriting classes in print, cursive, and speed writing. Improve your handwriting and grades with our scientific programs. Inquire now!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="https://www.writerightindia.com/new_site/assets/img/favicon.ico"/>
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


         <HistoryMain/>



        <FooterStyleTwo/>

    </>
  )
}

export default History

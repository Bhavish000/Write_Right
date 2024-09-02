import FooterStyleTwo from '@/component/layout/footer/FooterStyleTwo'
import Header from '@/component/layout/header/header'
import CalligraphyMain from '@/sectionPages/calligraphy/CalligraphyMain'
import Head from 'next/head'
import React from 'react'

function Calligraphy() {
  return (
    <div>
       <Head>
        <title>Calligraphy: The Art of Creative Lettering | Write Right
        </title>
        <meta name='keywords' content=' calligraphy, calligraphy classes, calligraphy courses, calligraphy basic, calligraphy advance' />
        <meta name="description" content="Learn calligraphy writing at Write Right. Fill out the inquiry form."/>
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


<CalligraphyMain/>

      

      <FooterStyleTwo />
    </div>
  )
}

export default Calligraphy

import FooterStyleTwo from '@/component/layout/footer/FooterStyleTwo'
import Header from '@/component/layout/header/header'
import WorkSheetMain from '@/sectionPages/worksheets/WorkSheetMain'
import Head from 'next/head'
import React from 'react'

function HandwritingWorksheetsGenerator() {
  return (
    <div>
        <Head>
        <title>Cursive writing worksheet pdf, Handwriting Practice</title>
    <meta name="description" content="Create unlimited, customized and free Handwriting practice worksheets for all common writing styles. Click here."/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

      </Head>

      <Header
        parentMenu='home'
        TopBar='enable'
        CanvasClass='right_menu_togle hidden-md'
        headerClass='full-width-header home8-style4'
        TopBarClass='topbar-area dark-parimary-bg'
      />


<WorkSheetMain/>


      <FooterStyleTwo />
    </div>
  )
}

export default HandwritingWorksheetsGenerator

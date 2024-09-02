import FooterStyleTwo from '@/component/layout/footer/FooterStyleTwo'
import Header from '@/component/layout/header/header'
import FranchiseMain from '@/sectionPages/franchise/FranchiseMain'
import Head from 'next/head'
import React from 'react'

function WriterightFranchise() {
  return (
    <div>

    <Head>
    <title>  Start a Handwriting Institute | Write Right Franchise Opportunity
    </title>
    <meta name='keywords' content=' handwriting franchise, write right franchise, franchise business '/>
        <meta name="description" content="Start your handwriting institute with Write Right Franchise. Benefit from our 7 market-tested, result-oriented handwriting improvement programs."/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      
    </Head>
    
          <Header 
          parentMenu='home'
          TopBar='enable'
          CanvasClass='right_menu_togle hidden-md'
          headerClass='full-width-header home8-style4'
          TopBarClass='topbar-area dark-parimary-bg'
          />
    
    <FranchiseMain/>
        
    
            <FooterStyleTwo/>
        </div>
  )
}

export default WriterightFranchise

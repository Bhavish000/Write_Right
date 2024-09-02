import FooterStyleTwo from '@/component/layout/footer/FooterStyleTwo'
import Header from '@/component/layout/header/header'
import BooksMain from '@/sectionPages/books/BooksMain'
import Head from 'next/head'
import React from 'react'

function HandwritingBooks() {
  return (
    <div>
      <Head>
        <title>Cursive Writing Books, Handwriting Books Write Right India 
        </title>
        <meta name='keywords' content='my handwriting books, cursive writing books, handwriting curriculum books, handwriting books, handwriting book price, handwriting book for pre-primary, handwriting book for primary, handwriting book for advance, handwriting improvement book' />
        <meta name="description" content="Scientifically developed Handwriting Curriculum Book for developing good Handwriting skills among the students."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>

      <Header
        parentMenu='home'
        TopBar='enable'
        CanvasClass='right_menu_togle hidden-md'
        headerClass='full-width-header home8-style4'
        TopBarClass='topbar-area dark-parimary-bg'
      />

<BooksMain/>

      <FooterStyleTwo />
    </div>
  )
}

export default HandwritingBooks

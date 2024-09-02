// import SiteBreadcrumb from '@/component/Common/Breadcumb';
import BlogBanner from '@/component/banner/BlogBanner';
// import SiteBreadcrumb from '@/component/common/Breadcumb';
import FooterStyleTwo from '@/component/layout/footer/FooterStyleTwo';
// import FooterStyleTwo from '@/component/layout/Footer/FooterStyleTwo';
import Header from '@/component/layout/header/header';
import BlogMain from '@/sectionPages/blog/BlogMain';
// import BlogMain from '@/sectionPage/blog/BlogMain';
// import bannerbg from '@/styles/img/blog/2.jpg';
import Head from 'next/head';
import { headers } from 'next/headers';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Blog = () => {
    const headersList = headers()
    const referer = headersList.get('referer')
    console.log(referer)
 
    return (
        <React.Fragment>
            <Head>
                {/* <link rel="icon" href={favIcon} /> */}
                <title>Everything About Abacus | Mastermind Blogs</title> 
				<meta name="keywords" content=""/>
		<meta name="description" content="Stay connected!  To Mastermind Abacus Blogs for all the latest facts, learning’s, information about Abacus, Mental Math, child development and much more."/>
		<meta property="og:title" content="Everything About Abacus | Mastermind Blogs"/>
		<meta property="og:site_name" content="Mastermind Abacus"/>
		<meta property="og:url" content="https://www.mastermindabacus.com/blog"/>
		<meta property="og:description" content="Stay connected!  To Mastermind Abacus Blogs for all the latest facts, learning’s, information about Abacus, Mental Math, child development and much more."/>
		<meta property="og:type" content="article"/>
		<meta property="og:image" content="https://www.mastermindabacus.com/assets/new/images/mastermindabacus-logo.png"/>
		<meta name="twitter:card" content="summary_large_image"/>
		<meta name="twitter:site" content="@mastermindabac2"/>
		<meta name="twitter:title" content="Everything About Abacus | Mastermind Blogs"/>
		<meta name="twitter:description" content="Stay connected!  To Mastermind Abacus Blogs for all the latest facts, learning’s, information about Abacus, Mental Math, child development and much more."/>
		<meta name="twitter:image" content="https://www.mastermindabacus.com/assets/new/images/mastermindabacus-logo.png"/>
            </Head>
            {/* <OffWrap /> */}
            <Header
                parentMenu='blog'
                TopBar='enable'
                CanvasClass='right_menu_togle hidden-md'
                headerClass='full-width-header home8-style4'
                TopBarClass='topbar-area dark-parimary-bg'

            />
            <BlogBanner/>
            <BlogMain/>
           <FooterStyleTwo/>

        </React.Fragment>
    );
}


export default Blog;


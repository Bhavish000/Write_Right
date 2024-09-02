import Image from "next/image";
// import { Inter } from "next/font/google";
// import { useEffect, useState } from 'react';
import writeright from '@/styles/img/logo/logo.png'
import Link from "next/link";
import MenuItems from "./menuItems";
import { useEffect, useState } from "react";
import RSMenuItem from "./rsMenuItem";
import TopHeader from "./topHeader";
// import TopHeader from "./topHeader";
// import RSMenuItem from "./rsMenuItem";
// const inter = Inter({ subsets: ["latin"] });
// import dynamic from "next/dynamic";

// const RSMenuItem = dynamic(()=>import('./rsMenuItem'))


export default function Header(props) {

	

    const { headerClass, headerFullWidth, parentMenu, secondParentMenu, activeMenu, headerNormalLogo, headerStickyLogo, mobileNormalLogo, TopBar, TopBarClass, emailAddress, phoneNumber, Location } = props;

    const [menuOpen, setMenuOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false);


    const toggleNavbar = () => {
        setMenuOpen(!menuOpen);
      };
    
    useEffect(() => {
		// Sticky is displayed after scrolling for 100 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);
    
    return (
            <div  className={headerClass ? headerClass : 'full-width-header home8-style4 main-home'}>
                <header id="rs-header" className='rs-header'>
                    {/* {
                        TopBar ? <TopHeader topBarClass={TopBarClass} emailAddress={emailAddress} phoneNumber={phoneNumber} Location={Location} /> : ""
                    } */}
                    <TopHeader topBarClass={TopBarClass} emailAddress={emailAddress} phoneNumber={phoneNumber} Location={Location} />

                    <div className={isVisible ? 'menu-area menu-sticky sticky' : 'menu-area menu-sticky'}>
                        <div className={headerFullWidth ? 'container-fluid' : 'container'} >
                            <div className="row y-middle">
                                <div className="col-lg-2">
                                    <div className="logo-cat-wrap hidden-md">
                                        <div className="logo-part">
                                            <Link href="/">
                                                <Image className="normal-logo" src={headerNormalLogo ? writeright : writeright} alt="write right" />
                                                {/* <Image className="sticky-logo"  src={headerStickyLogo ? writeright : writeright}alt="write right" /> */}
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-10 text-center">
                                    <div className="rs-menu-area">
                                        <div className="main-menu">
                                            <div className="mobile-menu md-display-block">
                                                <Link href="/" className="mobile-normal-logo">
                                                    <Image className="normal-logo" width={110} src={mobileNormalLogo ? writeright : writeright} alt="logo" />
                                                </Link>
                                                <Link href="/" className="mobile-sticky-logo">
                                                    <Image src={mobileNormalLogo ? writeright : writeright} width={110} alt="logo" />
                                                </Link>
                                                <a href="#" className="rs-menu-toggle"onClick={() => {
                                                    setMenuOpen(!menuOpen)
                                                }} aria-label="Toggle Menu">
                                                    <i className="fa fa-bars"></i>
                                                </a>

                                            </div>
                                            <nav className="rs-menu hidden-md">
                                                <ul className="nav-menu mb-0 pl-0">
                                                    <MenuItems
                                                        parentMenu={parentMenu}
                                                        secondParentMenu={secondParentMenu}
                                                        activeMenu={activeMenu}
                                                    />
                                                </ul>
                                            </nav>
                                        </div>

                                    </div>
                                </div>
                                {/* <div className="col-lg-2 d-flex justify-content-end">
            <span className="btn-part rounded" style={{ backgroundColor: "black", paddingBlock: "10px", paddingInline: "20px" }}>
                <Link href="#"  className="apply-btn white-color">Sing in</Link>
            </span>
            </div> */}
                            </div>
                        </div>
                    </div>

                    <RSMenuItem
                        menuOpen={menuOpen}
                        setMenuOpen={setMenuOpen}
                        parentMenu={parentMenu}
                        secondParentMenu={secondParentMenu}
                    />
                    <div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>
                </header>
              
            </div>
    );
}
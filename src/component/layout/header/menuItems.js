import Link from "next/link"
import { useRouter } from "next/router";

function MenuItems(props) {
    const { parentMenu, secondParentMenu } = props;

    const location = useRouter();
    return (
        <>


         <li className={parentMenu === 'home' ? 'rs-mega-menu menu-item-has-children current-menu-item ' : 'rs-mega-menu menu-item-has-children '}>
                <Link href="/">HOME</Link>

            </li>
            <li className={parentMenu === 'resources' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link href="#" as="#">PROGRAMS<i className="fa fa-angle-down" style={{ color: "black" }}></i> </Link>
                <ul className="sub-menu">
                    <li>
                        <Link href="/handwriting-improvement" className={location.pathname === "/course" ? "active-menu" : ""}>HANDWRITING IMPROVEMENT </Link>
                    </li>
                    <li>
                        <Link href="/calligraphy" className={location.pathname === "/course-3" ? "active-menu" : ""}>CALLIGRAPHY</Link>
                    </li>
                    <li>
                        <Link href="/speed-writing" className={location.pathname === "/course-2" ? "active-menu" : ""}>SPEED WRITING</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link href="/handwriting-books">HANDWRITING BOOKS </Link>

            </li>

            <li>
                <Link href="/handwriting-worksheets-generator ">WORKSHEETS </Link>

            </li>

            <li className={parentMenu === 'teacher' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link href="/writeright-franchise">FRANCHISE
                </Link>

            </li>

            <li className={parentMenu === 'blog' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link href="/blog">BLOG</Link>

            </li>

            <li className={parentMenu === 'abacus-class' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link href="#" >ABOUT <i className="fa fa-angle-down" style={{ color: "black" }}></i> </Link>
                <ul className="sub-menu">
                    <li>
                        <Link href="/about-handwriting/history" className={location === "/abacus-online-classes" ? "active-menu" : ""}>HISTORY OF HANDWRITING</Link>
                    </li>
                    <li>
                        <Link href="/about-handwriting/handwriting-tips" className={location.pathname === "/new_react/abacus-classes-near-me" ? "active-menu" : ""}>HANDWRITING TIPS</Link>
                    </li>
                    <li>
                        <Link href="/about-us" className={location.pathname === "/lingo-bingo" ? "active-menu" : ""}>ABOUT US</Link>
                    </li>
                    
                </ul>
            </li>

            <li className={parentMenu === 'about' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link href="/contact">CONTACT</Link>
                {/* <ul className="sub-menu">
                    <li>
                        <Link href="/about-us" className={location.pathname === "/blog" ? "active-menu" : ""}>About Company</Link>
                    </li>
                    <li>
                        <Link href="/gallery" className={location.pathname === "/blog" ? "active-menu" : ""}>Gallery</Link>
                    </li>

                </ul> */}
            </li>
            {/* <li className={parentMenu === 'contact' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link href="/contact">
                    Contact
                </Link>

            </li> */}
            
        </>
    )
}

export default MenuItems
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

function RSMenuItem({ menuOpen, parentMenu, headerFullWidth }) {

	const location = useRouter();

	const [home, setHome] = useState(false)
	const [about, setAbout] = useState(false)
	const [course, setCourse] = useState(false)
	const [pages, setPages] = useState(false)
	const [team, setTeam] = useState(false)
	const [event, setEvent] = useState(false)
	const [gallery, setGallery] = useState(false)
	const [shop, setShop] = useState(false)
	const [otherPages, setOtherPages] = useState(false)
	const [blog, setBlog] = useState(false)
	const [blogSidebar, setBlogSidebar] = useState(false)
	const [blogSingle, setBlogSingle] = useState(false)
	const [contact, setContact] = useState(false)



	const openMobileMenu = menu => {

		if (menu === 'home') {
			setHome(!home)
			setAbout(false)
			setCourse(false)
			setPages(false)
			setTeam(false)
			setEvent(false)
			setGallery(false)
			setShop(false)
			setOtherPages(false)
			setBlog(false)
			setBlogSidebar(false)
			setBlogSingle(false)
			setContact(false)
		}
		else if (menu === 'about') {
			setHome(false)
			setAbout(!about)
			setCourse(false)
			setPages(false)
			setTeam(false)
			setEvent(false)
			setGallery(false)
			setShop(false)
			setOtherPages(false)
			setBlog(false)
			setBlogSidebar(false)
			setBlogSingle(false)
			setContact(false)
		}
		else if (menu === 'course') {
			setHome(false)
			setAbout(false)
			setCourse(!course)
			setPages(false)
			setTeam(false)
			setEvent(false)
			setGallery(false)
			setShop(false)
			setOtherPages(false)
			setBlog(false)
			setBlogSidebar(false)
			setBlogSingle(false)
			setContact(false)
		}
		else if (menu === 'pages') {
			setHome(false)
			setAbout(false)
			setCourse(false)
			setPages(!pages)
			setTeam(false)
			setEvent(false)
			setGallery(false)
			setShop(false)
			setOtherPages(false)
			setBlog(false)
			setBlogSidebar(false)
			setBlogSingle(false)
			setContact(false)
		}
		else if (menu === 'team') {
			setHome(false)
			setAbout(false)
			setCourse(false)
			setPages(true)
			setTeam(!team)
			setEvent(false)
			setGallery(false)
			setShop(false)
			setOtherPages(false)
			setBlog(false)
			setBlogSidebar(false)
			setBlogSingle(false)
			setContact(false)
		}
		else if (menu === 'event') {
			setHome(false)
			setAbout(false)
			setCourse(false)
			setPages(true)
			setTeam(false)
			setEvent(!event)
			setGallery(false)
			setShop(false)
			setOtherPages(false)
			setBlog(false)
			setBlogSidebar(false)
			setBlogSingle(false)
			setContact(false)
		}
		else if (menu === 'gallery') {
			setHome(false)
			setAbout(false)
			setCourse(false)
			setPages(true)
			setTeam(false)
			setEvent(false)
			setGallery(!gallery)
			setShop(false)
			setOtherPages(false)
			setBlog(false)
			setBlogSidebar(false)
			setBlogSingle(false)
			setContact(false)
		}
		else if (menu === 'shop') {
			setHome(false)
			setAbout(false)
			setCourse(false)
			setPages(true)
			setTeam(false)
			setEvent(false)
			setGallery(false)
			setShop(!shop)
			setOtherPages(false)
			setBlog(false)
			setBlogSidebar(false)
			setBlogSingle(false)
			setContact(false)
		}
		else if (menu === 'otherPages') {
			setHome(false)
			setAbout(false)
			setCourse(false)
			setPages(true)
			setTeam(false)
			setEvent(false)
			setGallery(false)
			setShop(false)
			setOtherPages(!otherPages)
			setBlog(false)
			setBlogSidebar(false)
			setBlogSingle(false)
			setContact(false)
		}
		else if (menu === 'blog') {
			setHome(false)
			setAbout(false)
			setCourse(false)
			setPages(false)
			setTeam(false)
			setEvent(false)
			setGallery(false)
			setShop(false)
			setOtherPages(false)
			setBlog(!blog)
			setBlogSidebar(false)
			setBlogSingle(false)
			setContact(false)
		}
		else if (menu === 'blogSidebar') {
			setHome(false)
			setAbout(false)
			setCourse(false)
			setPages(false)
			setTeam(false)
			setEvent(false)
			setGallery(false)
			setShop(false)
			setOtherPages(false)
			setBlog(true)
			setBlogSidebar(!blogSidebar)
			setBlogSingle(false)
			setContact(false)
		}
		else if (menu === 'blogSingle') {
			setHome(false)
			setAbout(false)
			setCourse(false)
			setPages(false)
			setTeam(false)
			setEvent(false)
			setGallery(false)
			setShop(false)
			setOtherPages(false)
			setBlog(true)
			setBlogSidebar(false)
			setBlogSingle(!blogSingle)
			setContact(false)
		}
		else if (menu === 'contact') {
			setHome(false)
			setAbout(false)
			setCourse(false)
			setPages(false)
			setTeam(false)
			setEvent(false)
			setGallery(false)
			setShop(false)
			setOtherPages(false)
			setBlog(false)
			setBlogSidebar(false)
			setBlogSingle(false)
			setContact(!contact)
		}
	};
	return (
		<div className={headerFullWidth ? "container-fluid sticky" : "container sticky"}>
			<div className={menuOpen ? "mobile-menu-part sticky open" : "mobile-menu-part sticky "}>
				<div className="mobile-menu">
					<ul className="nav-menu">
						<li >
							<Link href="/" onClick={() => { openMobileMenu('home'); }} >HOME</Link>

						</li>
						<li className={about ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
							<Link href="#" onClick={() => { openMobileMenu('about'); }} className={parentMenu === 'about' ? 'active-menu' : ''}>PROGRAMS</Link>
							<ul className={about ? "sub-menu current-menu" : "sub-menu"}>
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
						{/* <li className={course ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
							<Link href="#" onClick={() => { openMobileMenu('course'); }} className={parentMenu === 'course' ? 'active-menu' : ''}>RESOURCES </Link>
							<ul className={course ? "sub-menu current-menu" : "sub-menu"}>
								<li>
									<Link href="/about-abacus/what-is-abacus" className={location.pathname === "/course" ? "active-menu" : ""}>What is Abacus </Link>
								</li>
								<li>
									<Link href="/about-abacus/history-of-abacus" className={location.pathname === "/course-2" ? "active-menu" : ""}>History Of Abacus</Link>
								</li>
								<li>
									<Link href="/about-abacus/research-on-abacus" className={location.pathname === "/course-3" ? "active-menu" : ""}>Research On abacus</Link>
								</li>
								<li>
									<Link href="/abacus-math" className={location.pathname === "/course-4" ? "active-menu" : ""}>Abacus Math</Link>
								</li>
								<li>
									<Link href="/abacus-worksheet-generator" className={location.pathname === "/course-5" ? "active-menu" : ""}>Abacus WorkSheet Generator</Link>
								</li>

							</ul>
						</li> */}
						<li >
							 <Link href="/handwriting-books" onClick={() => { openMobileMenu('home'); }} >HANDWRITING BOOKS </Link>
							{/* <Link href="/" onClick={() => { openMobileMenu('home'); }} >RESOURCES</Link> */}
						</li>
						<li>
						<Link href="/handwriting-worksheets-generator ">WORKSHEETS </Link>


						</li>

						<li>
						<Link href="/writeright-franchise">FRANCHISE
						</Link>

						</li>

						<li >
						<Link href="/blog">BLOG</Link>

						</li>

						<li className={pages ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
							<Link href="#" onClick={() => { openMobileMenu('pages'); }} className={parentMenu === '' ? 'active-menu' : ''}>ABOUT </Link>
							<ul className={pages ? "sub-menu current-menu" : "sub-menu"}>
								<li>
									<Link href="/about-handwriting/history" className={location.pathname === "/about" ? "active-menu" : ""}>HISTORY OF HANDWRITING </Link>
								</li>
								<li>
									<Link href="/about-handwriting/handwriting-tips" className={location.pathname === "/about" ? "active-menu" : ""}>HANDWRITING TIPS</Link>
								</li>
								<li>
								<Link href="/about-us" className={location.pathname === "/lingo-bingo" ? "active-menu" : ""}>ABOUT US</Link>
								</li>
							</ul>
						</li>


						<li >
						<Link href="/contact">CONTACT</Link>


						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default RSMenuItem

import React, { useState } from 'react';
// import bannerbg from '@/styles/img/abacus/Contact/contact.png';
// import SiteBreadcrumb from '@/component/Common/Breadcumb';
import Link from 'next/link';
// import { HomeModal } from '@/component/Common/Modal/HomeModal';
import SiteBreadcrumb from '@/component/common/Breadcumb';
import ContactBanner from '@/component/banner/ContactBanner';
import BrandArea from '@/component/common/BrandArea';



const ContactMain = () => {


    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [status, setStatus] = useState('');
    // const [message, setMessage] = useState('');
    // const [id, setId] = useState('');

    // const openModal = (status, mass, id) => {
    //     setStatus(status);
    //     setMessage(mass);
    //     setId(id);
    //     setIsModalOpen(!isModalOpen);
    // };


    return (
        <React.Fragment>

            {/* SiteBreadcrumb */}
            {/* <SiteBreadcrumb
                pageTitle=""
                pageName="Contact"
                breadcrumbsImg=""
            /> */}

              <ContactBanner/>

            {/* SiteBreadcrumb */}

            {/* Contact Section Start */}
            <div className="rs-contact style3 pt-110 md-pt-80 pb-110 md-pb-80" style={{backgroundColor:"#e3e2e2"}}>
                <div className="container">

                    <div className="row gutter-30">

                    <div class="col-xl-5 col-lg-5 col-md-6">
                        <div class="cta-content mb-30">
                            <div class="section-title text-left mb-20 pr-160">
                                <span><i class="fa fa-ellipsis-h"></i> Quick Contact</span>
                                <h2>Get In Touch</h2>
                                {/* <!--<p>Sed ut perspiciati unde omnis iste natus error 
                                    sit voluptatem accusanc doloremque laudantium
                                    totam rem aperiam eaque ipsa quae</p>--> */}
                            </div>
                            <ul class="contact-list mb-40 pl-0">
                                <li>
                                    <div class="cta-box d-flex align-items-center mb-20">
                                        <div class="cta-icon">
                                        <i class="fa fa-map-marker-alt"></i>
                                        </div>
                                        <div class="cta-text">
                                            <h6>Locations</h6>
                                            <span>51, Sampat Hills, Bicholi Mardana Bypass, Indore, M.P. 452016</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="cta-box d-flex align-items-center mb-20">
                                        <div class="cta-icon">
                                            <i class="fa fa-envelope-open"></i>
                                        </div>
                                        <div class="cta-text">
                                            <h6>Email Us</h6>
                                            <span>   <a href="mailto:info@mmtpl.com">info@mmtpl.com</a></span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="cta-box d-flex align-items-center mb-20 pb-20">
                                        <div class="cta-icon">
                                            <i class="fa fa-phone"></i>
                                        </div>
                                        <div class="cta-text">
                                            <h6>Phone Us</h6>
                                            <span>+(91) 9826251893</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="contact-icon">
                                <a href="https://www.facebook.com/pages/Mastermind-Tutorial-Pvt-Ltd/185897178111402"  target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://twitter.com/writerightindia"  target="_blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.youtube.com/mastermindwriteright"  target="_blank">
                                    <i class="fab fa-youtube"></i>
                                </a>
								<a href="https://www.instagram.com/writeright253"  target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-7 col-md-6">
                            <div className="sec-title mb-46 md-mb-10">
                                <h1 className="title family">
                                    FIND US ON MAP
                                </h1>
                                <div className="desc ">
                                    To ease your direction towards the Corporate Office.
                                </div>
                            </div>
                            <div class="map-area contact-map mb-30">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7361.890283802676!2d75.92568500000002!3d22.693086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaffd84d0ffa75223!2sMaster+Mind+Tutorials+Pvt.+Ltd.!5e0!3m2!1sen!2sin!4v1534152611026"
                                width="600" height="450" frameborder="0" 
                                allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                        </div>
                    </div>


                    {/* <div className='rs-contact traning-contact pt-30 pb-30'>
                        <div className="sec-title text-center mb-50 mt-50 section-shadow" >
                            <div className="title2 black-color">We are the best Abacus Training Centre. Contact us.</div>

                            <div className="fee" >
                                <div className=" fee-btn font-bold " onClick={() => openModal('FRANCHISE', "FRANCHISE INQUIRY", '3')} style={{ backgroundColor: " #F04E72" }} >
                                    Franchisee Inquiry
                                </div>

                                <div className=" fee-btn font-bold " style={{ backgroundColor: " #FD6C24" }}>
                                    Student Inquiry
                                </div>
                                <div className=" fee-btn font-bold " style={{ backgroundColor: " #B5D661" }}>
                                    <Link href={'/career-inquiry'}> Career Inquiry</Link>
                                </div>
                                <div className=" fee-btn font-bold "  style={{ backgroundColor: " #74CFD7" }}>
                                    School Inquiry
                                </div>

                            </div>


                        </div>
                    </div> */}

                   
                </div>

                {/* <HomeModal isOpen={isModalOpen} onClose={openModal} status={status} mess={message} id={id} /> */}
            </div>



            <BrandArea/>
            {/* Contact Section End */}
        </React.Fragment>

    );
}


export default ContactMain;
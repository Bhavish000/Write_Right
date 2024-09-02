import React, { useState } from 'react';
// import AboutImage from '../../assets/img/abacus/can_you_solve.webp'
import AboutImage from '@/styles/img/home/470_220.jpg'
import Image from 'next/image';
import ModalVideo from 'react-modal-video';
// import LazyLoad from 'react-lazyload';


function AboutSection02() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);
    return (
        <div id="rs-about" className="rs-about AboutSection02-style4 back-img-style md-pt-40 md-pb-40">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='KMXvsNPmkEg' onClose={() => { openModal(); }} />
            <div className="container">
                <div className="row ">


                    <div className="col-lg-5 md-mt-50 order-last ">
                        <div className="img-part d-flex justify-content-center">
                            {/* <LazyLoad height={200} offset={50} placeholder='blur'> */}
                            <Image className="about-main popup-videos "  src={AboutImage} alt="Mastermind Abacus" onClick={openModal} />
                            {/* </LazyLoad> */}
                            {/* <button 
                                className="popup-videos" 
                                onClick={openModal} 
                                aria-label="videoOpen"
                            /> */}
                        </div>
                    </div>

                    <div className="col-lg-7 md-mb-40 p-2">
                        <div className="about-content">
                            <div className="sec-title ">
                                <h2 className="title family mb-14 sm-mb-6">
                                Our Programs & Concept
                                </h2>
                                <br/>
                                <div className="desc ">
                                Every Handwriting has limited problems. Our concept to improve Handwriting is to identify and scientifically repair the errors. We have developed a range of scientific programs to repair the errors & achieve 100% legibility.
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default AboutSection02;
import React, { useState } from 'react';
import AboutImage from '@/styles/img/home/handwriting_classes.jpg'
import Image from 'next/image';
import ModalVideo from 'react-modal-video';


function About() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);
    return (
        <div id="rs-about" className="rs-about AboutSection01-style4 back-img-style md-pt-40 md-pb-40">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='KMXvsNPmkEg' onClose={() => { openModal(); }} />
            <div className="container">
                <div className="row ">


                    <div className="col-lg-5 md-mt-50 ">
                        <div className="img-part d-flex justify-content-center">
                            <Image className="about-main popup-videos " src={AboutImage} alt="Mastermind Abacus" onClick={() => { openModal(); }} />
                            
                        </div>
                    </div>

                    <div className="col-lg-7 md-mb-40 p-2 md-p-0">
                        <div className="about-content">
                            <div className="sec-title ">
                                <h1 className="title family mb-14 sm-mb-6">
                                    Handwriting Classes, Courses for Print & Cursive Writing
                                </h1>
                                <br/>
                                <div className="desc ">
                                    Write Right the world leaders in Handwriting Training provide Online Handwriting classes, courses for Print & Cursive writing, and speed writing. 
                                </div>
                                <br/>
                                <div className="desc ">
                                    Students with good handwriting skills scores better in academics, but a large chunk of students have problems of illegibility of handwriting. Watch the video to understand how our course improves handwriting.
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default About;
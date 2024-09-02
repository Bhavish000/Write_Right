import React, { useState } from "react";
import mainImage from '@/styles/img/home/handwriting_classes.jpg';
// import ModalVideo from "react-modal-video";
import Image from "next/image";
import SectionTitle from "@/component/common/SectionTitle";
// import SectionTitle from "@/component/Common/SectionTitle";


function AboutSection() {
    // const [isOpen, setIsOpen] = useState(false);
    // const openModal = () => setIsOpen(!isOpen);



    return (
        <section className="rs-about about-about  we-are-area  pt-90 md-pt-40 pb-20" style={{backgroundColor:"#EAF4F7"}}>
            <div className="container">
			
                <div className="row ">
				
				<div className="col-xl-5 col-lg-6 col-md-12">
                        <div className=" pos-rel">
                            <div className="video-thumb popup-video">
                                <Image className="rounded" src={mainImage} alt="write right"/>
                                <a className="popup-video" href="https://www.youtube.com/watch?v=KMXvsNPmkEg"></a>
                            </div>
                            {/* <div className="video-area"> */}
                            {/* </div> */}
                        </div>
                    </div>
                    
					   <div className="col-xl-7 col-lg-6 col-md-12">
                        <div className="skill-wrapper">
                            <div className="section-title text-left mb-35">
                                {/* <!--<span><i className="fal fa-ellipsis-h"></i> Who We Are</span>--> */}
                                <h1 className="title">About Write Right, we provide Handwriting Solution</h1>
                                <p className="text-jutify">We are Write Right, a division of Mastermind Tutorials Pvt. Ltd., a Multinational Education Company based in Indore, India. We have a Global presence, and our training facilities are available online and offline. We are a company driven by the educational needs of the next generation—we have expertise in identifying basic learning problems in kids and accordingly develop programs to ease their learning process. We provide Handwriting solutions for every problem of legibility & speed in handwriting.</p>
								 <p><strong>Our Endeavour Is</strong> - To &apos;Simplify The Learning Methods&apos; So That Every Student Can RISE.</p>
								<p><strong>Our Philosophy Of Spreading Education is RISE</strong> - Research, Innovate, Share & Educate. </p>
								
                            </div>
                        
                        </div>
                    </div>
                  
					
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
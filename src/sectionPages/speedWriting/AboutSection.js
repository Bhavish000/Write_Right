import React from 'react'
import Image from 'next/image'
import image from '@/styles/img/home/470_400.jpg'
function AboutSection() {
    return (
        <div>
            <section class=" rs-about about-about events-details-area pt-70  md-pt-40 md-pb-5  pb-20">
                <div class="container">

                    <div class="row align-items-center md-pb-10 pb-30">

                        <div class="col-xl-5 col-lg-6 col-md-12">
                            <div class=" pos-rel">
                                <div class="video-thumb">
                                    <Image src={image} alt="write right" />
                                </div>
                                <div class="video-area">
                                    <a class="popup-video" href="https://www.youtube.com/watch?v=KMXvsNPmkEg"></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-7 col-lg-6 col-md-12">
                            <div class="skill-wrapper">
                                <div class="section-title text-left mb-35 vertical-center">
                                    {/* <!--<span><i class="fal fa-ellipsis-h"></i> Who We Are</span>--> */}
                                    <h1 className='title'>Master Speed Writing: Write Fast, Write Neat!  
                                    </h1>
                                    <h5 className='sub-title'> Boost Your Writing Skills with Our Speed Writing Classes, Course, and Program</h5>
                                    <p class="text-justify">Parents, teachers, and students all want to improve handwriting speed without sacrificing neatness. Speed writing enhances thinking, language understanding, and vocabulary, and improves verbal communication. Good speed and legibility help students write with correct spelling and high-quality content. <br/>
                                        Write Right offers a unique speed writing program for Cursive, Print, and Hindi writing. This program focuses on writing neatly and quickly, ensuring accuracy and efficiency.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </section>
        </div>
    )
}

export default AboutSection

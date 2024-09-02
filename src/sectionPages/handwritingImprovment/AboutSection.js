import React from 'react'
import Image from 'next/image'
import image from '@/styles/img/home/470_400.jpg'
function AboutSection() {
  return (
    <div>
         <section className=" rs-about about-about events-details-area pt-70 md-pt-40 pb-70 md-pb-40">
            <div className="container">
			
			<div className="row align-items-center  pb-30">
				
				<div className="col-xl-5 col-lg-6 col-md-12">
                        <div className=" pos-rel">
                            <div className="video-thumb">
                                <Image src={image} alt="write right"/>
                            </div>
                            <div className="video-area">
                                <a className="popup-video" href="https://www.youtube.com/watch?v=KMXvsNPmkEg"></a>
                            </div>
                        </div>
                    </div>
                    
					   <div className="col-xl-7 col-lg-6 col-md-12">
                        <div className="skill-wrapper">
                            <div className="section-title text-left mb-35 vertical-center">
                                {/* <!--<span><i className="fal fa-ellipsis-h"></i> Who We Are</span>--> */}
                                <h1 className='title'> Handwriting Improvement Programs with 100% Results </h1>
                                <p className="text-justify">Illegible handwriting is a common problem for 80% of school-going children. Write Right offers a research-backed, scientific handwriting improvement program with guaranteed 100% legibility results. Our experts, with decades of experience, have developed special workbooks for cursive, print, and Hindi handwriting. Using these indigenous training methods, students can significantly improve their handwriting legibility in just 7 days, regardless of age.  </p>
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

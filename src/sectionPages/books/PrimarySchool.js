import React from 'react'
import img1 from '@/styles/img/books/p-1.jpg'
import img2 from '@/styles/img/books/p-2.jpg'
import img3 from '@/styles/img/books/p-3.jpg'
import img4 from '@/styles/img/books/p-4.jpg'
import img5 from '@/styles/img/books/p-5.jpg'
import img6 from '@/styles/img/books/ad-01.jpg'

import Image from 'next/image'
function PrimarySchool() {
  return (
    <div>
      <div className="course-area pt-40 pb-40" style={{backgroundColor:"#e3e2e2"}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 text-center">
                        <div className="section-title section-title-theme text-center mb-75">
                        
                            <h2 className="mb-2 title black-color" style={{fontWeight:"800" , fontSize:"40px"}}>My Handwriting Books for Primary School</h2>
							    <span className='black-color' ><i className="fa fa-ellipsis-h"></i> 1st to 5th Standard & Advanced Standard 6th Onwards <i className="fa fa-ellipsis-h"></i></span>
							<p className='black-color'>These books provide a gradual transition from four lines to a single line to writing on unruled pages. They train students in maintaining correct space between letters and words, joining letters (for cursive), word building, sentence formation, and paragraph writing with proper punctuation. They also introduce standard-specific grammar as recommended by CBSE.</p>
                        </div>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 rounded-2">
                        <div className="course-wrapper white-bg mb-30 rounded-2">
                            <div className="course-inner">
                                <div className="course-img pos-rel mb-25 rounded-2">
                                    <a href="courses-details.html rounded-2"><Image src={img1} alt="write  right" className='rounded-2'/></a>
                                    <div className="course__instructor rounded-2 pos-abl d-flex align-items-center">
                                       <div className="course__instructor--thumb ">
                                           {/* <!-- <img src="<?php  echo BACKEND_THEME_SITE_URL ?>/img/course/instructor1.png" alt="">--> */}
                                            <h5>My Handwriting Book 1</h5>
                                        </div>
                                        
                                    </div>
                                </div>

                            </div>
                            <div className="course-text course-text-02 theme-bg">
                            <div className="course-cat-meta course-cat-meta-02 d-flex align-items-center mb-35">
                                      <span><a href="#">For 1st Standard</a></span>
                                    <div className="review-icon">
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star-half-alt"></i></a>
                                    </div>
                                </div>
                                <h4 className="semi-title mb-30">My Handwriting Book 1</h4>
                             
								<p>Introduction to basic grammar. Teachers checklist for teachers to review student&apos;s development & improvement.</p>
									
								
                                <a className="c-btn mt-50 mb-10" href="#">Inquire Now<i className="fa fa-arrow-right"></i></a>
                                {/* <!--<div className="course-meta">
                                    <span><i className="far fa-users"></i> <a href="#">25</a></span>
                                    <span><i className="far fa-book"></i> <a href="#">36hr</a></span>
                                    <span><i className="far fa-book"></i> <a href="#">2.5k</a></span>
                                </div>--> */}
                            </div>
                        </div>
                    </div>
					
					
					
					<div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="course-wrapper white-bg mb-30">
                            <div className="course-inner">
                                <div className="course-img pos-rel mb-25">
                                <a href="courses-details.html"><Image src={img2} alt="write  right"/></a>
                                    <div className="course__instructor pos-abl d-flex align-items-center">
                                       <div className="course__instructor--thumb">
                                           {/* <!-- <img src="<?php  echo BACKEND_THEME_SITE_URL ?>/img/course/instructor1.png" alt="">--> */}
                                            <h5>My Handwriting Book 2</h5>
                                        </div>
                                        
                                    </div>
                                </div>

                            </div>
                            <div className="course-text course-text-02 theme-bg">
                            <div className="course-cat-meta course-cat-meta-02 d-flex align-items-center mb-35">
                                      <span><a href="#">For 2nd Standard</a></span>
                                    <div className="review-icon">
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star-half-alt"></i></a>
                                    </div>
                                </div>
                                <h4 className="semi-title mb-30">My Handwriting Book 2</h4>
                             
								<p>Addressing letter reversal. Grammar as per class. Teachers&apos; checklist & guidelines for teachers & parents.</p>
									
								
                                <a className="c-btn mt-50 mb-10" href="#">Inquire Now<i className="fa fa-arrow-right"></i></a>
                               
                            </div>
                        </div>
                    </div>
					
					
					
					
					<div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="course-wrapper white-bg mb-30">
                            <div className="course-inner">
                                <div className="course-img pos-rel mb-25">
                                <a href="courses-details.html"><Image src={img3} alt="write  right"/></a>
                                    <div className="course__instructor pos-abl d-flex align-items-center">
                                       <div className="course__instructor--thumb">
                                           {/* <!-- <img src="<?php  echo BACKEND_THEME_SITE_URL ?>/img/course/instructor1.png" alt="">--> */}
                                            <h5>My Handwriting Book 3</h5>
                                        </div>
                                        
                                    </div>
                                </div>

                            </div>
                            <div className="course-text course-text-02 theme-bg">
                            <div className="course-cat-meta course-cat-meta-02 d-flex align-items-center mb-35">
                                      <span><a href="#">For 3rd Standard</a></span>
                                    <div className="review-icon">
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star-half-alt"></i></a>
                                    </div>
                                </div>
                                <h4 className="semi-title mb-30">My Handwriting Book 3</h4>
                             
								<p>Focus on recall rather than filling pages to avoid repetition of errors. Self-check option for students.</p>
									
								
                                <a className="c-btn mt-50 mb-10" href="#">Inquire Now<i className="fa fa-arrow-right"></i></a>
                               
                            </div>
                        </div>
                    </div>
				</div>
				    <div className="row">	
					<div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="course-wrapper white-bg mb-30">
                            <div className="course-inner">
                                <div className="course-img pos-rel mb-25">
                                <a href="courses-details.html"><Image src={img4} alt="write  right"/></a>
                                    <div className="course__instructor pos-abl d-flex align-items-center">
                                       <div className="course__instructor--thumb">
                                           {/* <!-- <img src="<?php  echo BACKEND_THEME_SITE_URL ?>/img/course/instructor1.png" alt="">--> */}
                                            <h5>My Handwriting Book 4</h5>
                                        </div>
                                        
                                    </div>
                                </div>

                            </div>
                            <div className="course-text course-text-02 theme-bg">
                            <div className="course-cat-meta course-cat-meta-02 d-flex align-items-center mb-35">
                                      <span><a href="#">For 4th Standard</a></span>
                                    <div className="review-icon">
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star-half-alt"></i></a>
                                    </div>
                                </div>
                                <h4 className="semi-title mb-30">My Handwriting Book 4</h4>
                             
								<p>A gradual shift from 4-lines to a single line. Correct formation & spacing with a focus on recall. An adequate level of Grammar.</p>
									
								
                                <a className="c-btn mt-50 mb-10" href="#">Inquire Now<i className="fa fa-arrow-right"></i></a>
                                
                            </div>
                        </div>
                    </div>
					
					<div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="course-wrapper white-bg mb-30">
                            <div className="course-inner">
                                <div className="course-img pos-rel mb-25">
                                <a href="courses-details.html"><Image src={img5} alt="write  right"/></a>
                                    <div className="course__instructor pos-abl d-flex align-items-center">
                                       <div className="course__instructor--thumb">
                                           {/* <!-- <img src="<?php  echo BACKEND_THEME_SITE_URL ?>/img/course/instructor1.png" alt="">--> */}
                                            <h5>My Handwriting Book 5</h5>
                                        </div>
                                        
                                    </div>
                                </div>

                            </div>
                            <div className="course-text course-text-02 theme-bg">
                            <div className="course-cat-meta course-cat-meta-02 d-flex align-items-center mb-35">
                                      <span><a href="#">For 5th Standard</a></span>
                                    <div className="review-icon">
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star-half-alt"></i></a>
                                    </div>
                                </div>
                                <h4 className="semi-title mb-30">My Handwriting Book 5</h4>
                             
								<p>Revision of skills learnt at the primary level. Correct spacing, formation, and punctuation. Single-line writing practice.</p>
									
								
                                <a className="c-btn mt-50 mb-10" href="#">Inquire Now<i className="fa fa-arrow-right"></i></a>
                                
                            </div>
                        </div>
                    </div>
					
					<div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="course-wrapper white-bg mb-30">
                            <div className="course-inner">
                                <div className="course-img pos-rel mb-25">
                                <a href="courses-details.html"><Image src={img6} alt="write  right"/></a>
                                    <div className="course__instructor pos-abl d-flex align-items-center">
                                       <div className="course__instructor--thumb">
                                           {/* <!-- <img src="<?php  echo BACKEND_THEME_SITE_URL ?>/img/course/instructor1.png" alt="">--> */}
                                            <h5>My Handwriting Book 6</h5>
                                        </div>
                                        
                                    </div>
                                </div>

                            </div>
                            <div className="course-text course-text-02 theme-bg">
                            <div className="course-cat-meta course-cat-meta-02 d-flex align-items-center mb-35">
                                      <span><a href="#">For 6th Standard</a></span>
                                    <div className="review-icon">
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star"></i></a>
                                        <a href="#"><i className="fas fa-star-half-alt"></i></a>
                                    </div>
                                </div>
                                <h4 className="semi-title mb-30">My Handwriting Book 6</h4>
                             
								<p>Revisiting writing skills with focus on correct formation, spacing, punctuation. Writing on un-ruled pages.</p>
									
								
                                <a className="c-btn mt-50 mb-10" href="#">Inquire Now<i className="fa fa-arrow-right"></i></a>
                                
                            </div>
                        </div>
                    </div>
					
                  
                    
                </div>
               {/* <!-- <div className="row">
                    <div className="col-xl-12">
                        <div className="course-btn text-center mt-35 mb-30">
                            <a className="c-btn" href="courses.html">view all courses <i
                                    className="fal fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>--> */}
            </div>
        </div>
    </div>
  )
}

export default PrimarySchool

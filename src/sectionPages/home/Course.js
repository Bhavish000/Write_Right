import React from 'react'
import image1 from '@/styles/img/course/c-01.jpg'
import image2 from '@/styles/img/course/c-02.jpg'
import image3 from '@/styles/img/course/c-03.jpg'
import logoImg from '@/styles/img/course/instructor1.png'
import Image from 'next/image'
function Course() {
    return (
        <div>
            <div class="course-area pt-80 pb-100 " style={{backgroundColor:"#e3e2e2"}}>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                            <div class="section-title section-title-theme text-center mb-75">
                                <span className='black-color'><i class="fa fa-ellipsis-h"></i> Available Courses <i
                                    class="fa fa-ellipsis-h"></i></span>
                                <h2 className='black-color' style={{fontWeight:"800"}} > Handwriting Courses</h2>
                                <p className='black-color'>At Write Right, age is not a barrier to improving or speeding up your handwriting. Choose the handwriting course that best suits your needs..
                                </p>
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="course-wrapper white-bg mb-30">
                                <div class="course-inner border rounded-2">
                                    <div class="course-img pos-rel mb-25">
                                        <a href="#"><Image src={image1} alt="" /></a>
                                        <div class="course__instructor pos-abl d-flex align-items-center">
                                            <div class="course__instructor--thumb">
                                                <Image src={logoImg} alt="" />
                                                <h5>Write Right</h5>
                                            </div>
                                            {/* <div class="course__instructor--price-tag">
                                                <span>INR 2100</span>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="course-text">
                                        <div class="course-cat-meta d-flex align-items-center mb-15">
                                            <span><a href="#">English</a></span>
                                            <div class="review-icon">
                                                <a href="#"><i class="fas fa-star"></i></a>
                                                <a href="#"><i class="fas fa-star"></i></a>
                                                <a href="#"><i class="fas fa-star"></i></a>
                                                <a href="#"><i class="fas fa-star"></i></a>
                                                <a href="#"><i class="fas fa-star-half-alt"></i></a>
                                            </div>
                                        </div>
                                        <h4 class="semi-title pb-30 mb-20">Handwriting Improvement</h4>
                                        <h6>Improve your Handwriting, improve your grades.</h6>
                                        <div class="course-meta">
                                            <strong> Age:</strong> for 8 yrs & above <div class="text-right" >View More</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="course-text course-text-02 theme-bg">
                                    <div class="course-cat-meta course-cat-meta-02 d-flex align-items-center mb-15">

                                    </div>
                                    <h4 class="semi-title mb-30">Handwriting Improvement</h4>

                                    <p><strong>Course Duration</strong> – 10 days.<br />Age: for 8 yrs & above</p>
                                    <p class="text-justify">Improve your handwriting, improve your grades. Suitable for ages 8 and above. Learn to identify and correct handwriting flaws using scientific methods and unique techniques. Our step-by-step approach ensures you write flawlessly every time.</p>
                                    <p><strong>Mandatory:</strong> You need to get print of the practice worksheets pdf.</p>

                                    {/* <a class="course__instructor--price-tag" ><span>INR 2100</span> </a>-
                                    <a class="c-btn mb-50" href="https://dilip-jangid-s-school.teachable.com/purchase?product_id=4472723" target="_blank">buy now <i class="far fa-arrow-right"></i></a> */}

                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="course-wrapper white-bg mb-30">
                                <div class="course-inner border rounded-2">
                                    <div class="course-img pos-rel mb-25">
                                        <a href="#"><Image src={image2} alt="" /></a>
                                        <div class="course__instructor pos-abl d-flex align-items-center">
                                            <div class="course__instructor--thumb">
                                                <Image src={logoImg} alt="" />
                                                <h5>Write Right</h5>
                                            </div>
                                            {/* <div class="course__instructor--price-tag">
                                                <span>INR 2100</span>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="course-text">
                                        <div class="course-cat-meta d-flex align-items-center mb-15">
                                            <span><a href="#">English</a></span>
                                            <div class="review-icon">
                                                <a href="#"><i class="fas fa-star"></i></a>
                                                <a href="#"><i class="fas fa-star"></i></a>
                                                <a href="#"><i class="fas fa-star"></i></a>
                                                <a href="#"><i class="fas fa-star"></i></a>
                                                <a href="#"><i class="fas fa-star-half-alt"></i></a>
                                            </div>
                                        </div>
                                        <h4 class="semi-title pb-30 mb-20">Speed Writing Program</h4>
                                        <strong>Reduce writing time : </strong>
                                        <span> Double your writing speed in just 15 days</span>
                                        <div class="course-meta">
                                            <strong> Eligibility :</strong> Suitable for ages 12 and above <div class="text-right " >View More</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="course-text course-text-02 theme-bg">
                                    <div class="course-cat-meta course-cat-meta-02 d-flex align-items-center mb-15">

                                    </div>
                                    <h4 class="semi-title mb-30">Speed Writing</h4>

                                    <p><strong>Course Duration</strong> – 15-day course.<br />Eligibility : Suitable for ages 12 and above</p>
                                    <p class="text-justify"><strong>Benefits : </strong>Master the art of writing quickly while maintaining clear, legible handwriting through our specialized step-by-step training and practice sessions.</p>
                                    <p><strong>Materials : </strong> Provided by Write Right.</p>
                                    <p><strong>Enroll Now : </strong> Enhance your writing speed and efficiency.</p>
                                    <p><strong>For more details, </strong>  visit the [Speed Writing Program](https://www.writerightindia.com/new_site/).</p>

                                    {/* <a class="course__instructor--price-tag" ><span>INR 2100</span> </a>-
                                    <a class="c-btn mb-50" href="https://dilip-jangid-s-school.teachable.com/purchase?product_id=4472722" target="_blank">buy now <i class="far fa-arrow-right"></i></a> */}

                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="course-wrapper white-bg mb-30">
                                <div class="course-inner border rounded-2">
                                    <div class="course-img pos-rel mb-25">
                                        <a href="#"><Image src={image3} alt="" /></a>
                                        <div class="course__instructor pos-abl d-flex align-items-center">
                                            <div class="course__instructor--thumb">
                                                <Image src={logoImg} alt="" />
                                                <h5>Write Right</h5>
                                            </div>
                                            {/* <div class="course__instructor--price-tag">
                                                <span>INR 3000</span>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="course-text">
                                        <div class="course-cat-meta d-flex align-items-center mb-15">
                                            <span><a href="#">English</a></span>
                                            <div class="review-icon">
                                                <a href="#"><i class="fas fa-star"></i></a>
                                                <a href="#"><i class="fas fa-star"></i></a>
                                                <a href="#"><i class="fas fa-star"></i></a>
                                                <a href="#"><i class="fas fa-star"></i></a>
                                                <a href="#"><i class="fas fa-star-half-alt"></i></a>
                                            </div>
                                        </div>
                                        <h4 class="semi-title pb-30 mb-20"> Improvement and Speed Writing Program</h4>
                                        <h6> <strong>Become a Proud Writer :</strong> Learn to write fast and legibly every time.</h6>
                                        <div class="course-meta">
                                            <strong> Eligibility :</strong> Suitable for ages 12 and above <div class="text-right " >View More</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="course-text course-text-02 theme-bg">
                                    <div class="course-cat-meta course-cat-meta-02 d-flex align-items-center mb-15">

                                    </div>
                                    <h4 class="semi-title mb-30"> Improvement and Speed Writing Program</h4>


                                    <p><strong>Course Duration</strong> – 25 days.<br />Eligibility :  Suitable for ages 12 and above</p>
                                    <p class="text-justify"><strong>Course Combination : </strong> This program combines improvement and speed writing techniques to help you achieve legible and quick writing.</p>
                                    <p><strong>Enroll Now :</strong> Enhance your writing skills with our comprehensive training.</p>
{/* 
                                    <a class="course__instructor--price-tag" ><span>INR 3000</span> </a>-
                                    <a class="c-btn mb-50" href="https://dilip-jangid-s-school.teachable.com/purchase?product_id=4474259" target="_blank">buy now <i class="far fa-arrow-right"></i></a> */}

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Course

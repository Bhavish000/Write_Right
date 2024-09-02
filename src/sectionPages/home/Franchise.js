import React from 'react'
import image from '@/styles/img/home/image1.png'
import Image from 'next/image'

function Franchise() {
  return (
    <div className="instructor-area grey-bg pt-100 pb-50">
    <div className="container">
        <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 mb-30">
                <div className="instructor-img">
                    <Image className="img-fluid" src={image} alt="Write Right"/>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 mb-30">
                <div className="instructor-wrapper" style={{marginTop : "0px !important"}}>
                    <div className="section-title mb-45">
                        <strong className='title-change'>--- Build A Career</strong>
                        <h2 className="mb-3 title family">Become Our Franchise</h2>
                        <h5 className='sub-title'>With a research backed and market tested program.</h5>
                    
                        <p className="text-justify">With a research-backed and market-tested program, Write Right offers solutions for handwriting improvement, speed writing, calligraphy, and curriculum books. As pioneers in handwriting technology, we address every handwriting-related issue. Take the first step towards an educational business by becoming a Write Right franchise.</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                            <div className="instructor-text">
                                <div className="instructor-icon">
                                    <i className="fa fa-laptop-code"></i>
                                </div>
                                <h4> Teacher’s Training	</h4>
                                <p>Effective, adaptable, and deliverable Training</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                            <div className="instructor-text ins-info">
                                <div className="instructor-icon">
                                    <i className="fa fa-shopping-basket"></i>
                                </div>
                                <h4>Basket of 9 Programs</h4>
                                <p>A range of programs and products for better ROI.</p>
                            </div>
                        </div>
                    </div>
                    <div className="instructor-button mt-15">
                        <a className="c-btn btn-theme readon f-left  mr-15 " style={{marginInline:"10px"}} href="#">Know More&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i  className="fa fa-long-arrow-right"></i></a>
                        <a className="c-btn readon2  btn-white" href="#">Become a Partner</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Franchise

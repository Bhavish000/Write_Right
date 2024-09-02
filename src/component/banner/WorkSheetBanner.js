import React from 'react'
import image from '@/styles/img/history/hand-min.png'
import Image from 'next/image'

function WorkSheetBanner() {
  return (
    <div>
      <div className="hero-area pos-rel">
            <div className="inner-banner-img  hidden-md">
                {/* <Image  src={image} alt="write right" /> */}
            </div>
            <div className="hero-slider">
                <div className="worksheet slider-inner-height d-flex align-items-center" >
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-xl-6 col-lg-6 col-md-9">
                                <div className="hero-content mt-10">
                                         <div className=" text-center">
											<div className="banner-top-heading white-color" >Get Customized
                                            Handwriting Practice Worksheets
 
												</div>
										  <div className="banner-small-heading white-color" > Practice to excel
                                          </div>
			
										</div>

                                </div>
									{/* <a href="https://www.writerightindia.com/new_site/online-handwriting-classes" className="c-btn btn-blue-style mt-3  mb-2 pd-5">Inquire for offline Classes <i className="fa fa-long-arrow-right"></i></a> <br/> */}
                                    {/* <a href="https://www.writerightindia.com/new_site/online-handwriting-classes" className="c-btn btn-blue-style mt-3  mb-2 pd-5">Buy Online Classes <i className="fa fa-long-arrow-right"></i></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkSheetBanner

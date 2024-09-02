// import React from 'react'

// function HandwritingSkills() {
//   return (
//     <div>
//       <div class="instructor-area">
//             <div class="container-fluid pl-0 pr-0">
//                 <div class="row no-gutters">
// 				{/* <!-- <div class="col-xl-6 col-lg-6 col-md-6">
// 				Assured lifetime academic success with an Improved Handwriting
// 					</div>--> */}
//                     <div class="col-xl-6 col-lg-6 col-md-6">
//                         <div class="instructor-wrapper instructor-wrapper-03 iw-03 white-bg pt-50 pb-50" >
//                             <div class="section-title mb-35">
//                                 <span><i class="fal fa-ellipsis-h"></i> Handwriting Skills</span>
//                                 <h2>Online Classes</h2>
//                                 <p>Find solutions for all your Handwriting related problems of legibility or speed in Cursive Writing. Learn from experts with decades of experience and excel in academics.</p>
//                             </div>
//                             <div class="instructor-button mt-15">
//                                 <a class="c-btn btn-blue-style" href="contact.html">Buy Now <i
//                                         class="fal fa-long-arrow-right"></i></a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-xl-6 col-lg-6 col-md-6">
//                         <div class="instructor-wrapper instructor-wrapper-03 iw-04 pt-50 pb-50"  >
//                             <div class="section-title mb-35">
//                                 <span><i class="fal fa-ellipsis-h"></i> Handwriting Skills</span>
//                                 <h2>Offline Classes</h2>
//                                 <p>Get your Handwriting related issues resolved at our Handwriting Classes in your vicinity. Learn from experts with decades of experience and excel in academics.</p>
//                             </div>
//                             <div class="instructor-button mt-15">
//                                 <a class="c-btn btn-blue-style button-round-02" href="contact.html">Inquire Now <i
//                                         class="fal fa-long-arrow-right"></i></a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default HandwritingSkills




import React from 'react'

function HandwritingSkills(props) {

    const { ctaClass } = props;
  return (
    <div className={ctaClass ? ctaClass : 'rs-cta'} >
            <div className="cta-content text-center pt-60">
                <div className="sec-title">
                    <strong className='desc'>--- Handwriting Skills ---</strong>
                    <h2 className="title family fs-2">
                    Handwriting Classes
                    </h2>
                    <div className="desc ">
                    Get your Handwriting related issues resolved at our Handwriting Classes in your vicinity. Learn from experts with decades of experience and excel in academics.
                    </div>

                    <div className="btn-part" >
                    <div className="readon2" >Inquiry Now</div>
                </div>
                </div>
            </div>
        </div>
  )
}

export default HandwritingSkills

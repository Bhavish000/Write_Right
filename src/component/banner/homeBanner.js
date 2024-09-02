// import Image from 'next/image'
// import React, { useState } from 'react'
// import bannerImg from '@/styles/img/home/handwriting_matters.png'
// // import { HomeModal } from '../Common/Modal/HomeModal';
// // import { HomeModal } from '../Common/Modal/HomeModal';

// function HomeBanner() {


//     // const [isModalOpen, setIsModalOpen] = useState(false);

//     // const openModal = () => {
//     //     setIsModalOpen(true);
//     // };

//     // const closeModal = () => {
//     //     setIsModalOpen(false);
//     // };
//   return (
//     <div>
//       <div className="rs-banner style5  md-pr-0"  >

//       <div className="banner-img">
//                                 {/* <LazyLoad height={200} offset={100}> */}
//                                 {/* <Image src={bannerImg} alt="Banner Image" /> */}
//                                 {/* </LazyLoad> */}

//                             </div>
//                 <div className="container ">
//                     <div className="row">
//                         <div className="col-lg-6 col-md-12 md-text-left">
//                             <div className="  order-last">
//                                 {/* <div className="sub-title title-style" >Make Your Child</div> */}
//                                 {/* <div className="banner-title md-text-left" >Handwriting Matters</div>
//                                 <div className="sub-title md-text-left">It was, is and shall be the foundation of Academics</div> */}


//                                 {/* <div className="banner-btn mb-40 mt-40">
//                                     <button className="readon2 banner-style" >Book A Free Demo Class</button>
//                                 </div> */}

//                                           {/* <div class="support d-flex align-items-center mt-40 mb-40">
//                                                 <div class="support-icon">

//                                                     <i class="fa-solid fa-user-plus fs-2" style={{color:"#fd6c24", marginInline:"10px" }}></i>
//                                                 </div>
//                                                 <div class="support-text">
//                                                     <span>Contact</span>
//                                                     <h6>8109085119</h6>
//                                                 </div>
//                                             </div> */}

//                             </div>

//                         </div>


//                     </div>


//                 </div>
//                 {/* <HomeModal isOpen={isModalOpen} onClose={closeModal} /> */}

//             </div>
//     </div>
//   )
// }

// export default HomeBanner











































import Image from 'next/image'
import React from 'react'
import image from '@/styles/img/history/hand-min.png'
function HomeBanner() {
    return (
        <div>
            <div className="hero-area pos-rel">
                <div className="inner-banner-img  hidden-md">
                    {/* <Image  src={image} alt="" /> */}
                </div>
                <div className="hero-slider">
                    <div className="home slider-inner-height d-flex align-items-center" >
                        <div className="container">
                            <div className="row text-center">
                                <div className="col-xl-6 col-lg-6 col-md-9">
                                    <div className="hero-content mt-10">
                                        <div className=" text-left">
                                            <div className="banner-top-heading-home" >Handwriting Matters</div>
                                            <div className="banner-small-heading-home title-change" style={{color:"#fd6c24"}} >It was, is and shall be the foundation of Academics
                                            </div>
                                            <div className="banner-small-heading-home" >Join the finest Handwriting Classes to Improve & speed-up your Handwriting
                                            </div>
                                        </div>
                                        
                                        <div class="support d-flex mt-10 mb-0 text-center">
                                            <div class="support-icon">

                                                <i class="fa-solid fa-user-plus fs-2" style={{ color: "#fd6c24", marginRight: "10px" }}></i>
                                            </div>
                                            <div class="support-text">
                                                <span>Contact</span>
                                                <h6>8109085119</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <a href="https://www.writerightindia.com/new_site/online-handwriting-classes" className="c-btn btn-blue-style mt-3  mb-2 pd-5">Inquire for Nearest Center <i className="fa fa-long-arrow-right"></i></a> <br/> */}
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

export default HomeBanner

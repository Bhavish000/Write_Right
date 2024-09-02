import React from 'react'
import img1 from '@/styles/img/books/icon1.png'
import img2 from '@/styles/img/books/icon2.png'
import img3 from '@/styles/img/books/icon3.png'
import img4 from '@/styles/img/books/icon4.png'
import Image from 'next/image'
function MyBooks() {
  return (
    <div>
      <div className="course-area pt-40 pb-40  " >
            <div className="container">
				<div className="row">
                    <div className="col-xl-12 col-lg-12 text-center">
                        <div className="section-title  text-center mb-15">
                        
                            <h2 className="mb-2" style={{fontWeight:"800", fontSize:"40px"}} >Salient features of ‘My Handwriting Book’</h2>
							   {/* <!-- <span ><i className="fal fa-ellipsis-h"></i> 1st to 5th Standard & Advance Standard 6th Onwards <i className="fal fa-ellipsis-h"></i></span>--> */}
							{/* <p className='text-justify'>Your Institution deserves a well-planned teaching program to instill good Handwriting Skills in children. My Handwriting Books are the best and the most scientifically developed books by experts with experience of over 2 decades. We apply unique tools and systems that promote the development of flawless and legible Handwriting.</p> */}
                        </div>
                    </div>
                </div>
                <div className="row">
					<div className="col-xl-6 col-lg-6 col-md-12 ">
                       <div className="events-wrapper-03 d-lg-flex align-items-center justify-content-between mb-30 white-bg">
                           <div className="events-thumb p-3"><Image src={img1} width={250} height={100} alt="write right" /></div>
                           <div className="my-handwriting-book-text pos-rel p-3" style={{backgroundColor:"#F5F5F5"}}>
                                
                               {/* <h3>Paper Placement, Grip & Posture</h3> */}
                                
                                <p className='text-justify'> <strong style={{color:"#fd6c24"}}>GRIP & POSTURE,</strong> A correct posture ensures that writing does not become a painful experience for the child. A pictorial at beginning of every book guides the child as well the teacher & parents.</p>
                               {/* <!-- <a className="c-btn btn-blue-style mt-15" href="#">inquire now <i className="far fa-long-arrow-alt-right"></i></a>--> */}
                           </div>
                       </div>
                   </div>
				   <div className="col-xl-6 col-lg-6 col-md-12 ">
                       <div className="events-wrapper-03 d-lg-flex align-items-center justify-content-between mb-30 white-bg">
                           <div className="events-thumb p-3"><Image src={img2} width={200} height={100} alt="write right"  /></div>
                           <div className="my-handwriting-book-text pos-rel p-3" style={{backgroundColor:"#F5F5F5"}}>
                                
                               {/* <h3>Language & Grammar</h3> */}
                                
                                <p className='text-justify'> <strong style={{color:"#009846"}}>LETTER REVERSAL,</strong> The workbooks have been designed in a way to minimize mirror image or letter reversal problems, which is so very commonly seen in beginners.</p>
                               {/* <!-- <a className="c-btn btn-blue-style mt-15" href="#">inquire now <i className="far fa-long-arrow-alt-right"></i></a>--> */}
                           </div>
                       </div>
                   </div>
				   <div className="col-xl-6 col-lg-6 col-md-12 ">
                       <div className="events-wrapper-03 d-lg-flex align-items-center justify-content-between mb-30 white-bg">
                       <div className="events-thumb p-3 "><Image src={img3} width={200} height={100} alt="write right"  /></div>
                           <div className="my-handwriting-book-text pos-rel p-3" style={{backgroundColor:"#F5F5F5"}}> 
                                
                               {/* <h3>Stories, Songs & Drawings</h3> */}
                                
                                <p className='text-justify'><strong style={{color:"#00A0E3"}}>LEFT HAND WRITERS,</strong> ‘My Handwriting Book’ are also lefthand writer friendly. Guidelines are given with every books for parents & teachers.</p>
                               {/* <!-- <a className="c-btn btn-blue-style mt-15" href="#">inquire now <i className="far fa-long-arrow-alt-right"></i></a>--> */}
                           </div>
                       </div>
                   </div>
				   <div className="col-xl-6 col-lg-6 col-md-12 ">
                       <div className="events-wrapper-03 d-lg-flex align-items-center justify-content-between mb-30 white-bg">
                           <div className="events-thumb p-3"><Image src={img4} width={200} height={100} alt="write right" /></div>
                           <div className="my-handwriting-book-text pos-rel p-3" style={{backgroundColor:"#F5F5F5"}}>
                                
                               {/* <h3>Font Maker Tools, Uniform Sizing</h3> */}
                                
                                <p className='text-justify'> <strong style={{color:"#E31E24"}}>LANGUAGE/GRAMMAR, </strong>  The contents of &apos;My Handwriting Book&apos; have been selected in a way that they complement the English grammar as per syllabus of CBSE.</p>
                               {/* <!-- <a className="c-btn btn-blue-style mt-15" href="#">inquire now <i className="far fa-long-arrow-alt-right"></i></a>--> */}
                           </div>
                       </div>
                   </div>
				</div>
              </div>
        </div>
    </div>
  )
}

export default MyBooks

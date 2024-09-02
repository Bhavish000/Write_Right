import React from 'react'
import img1 from '@/styles/img/books/w-1.jpg'
import img2 from '@/styles/img/books/w-2.jpg'
import img3 from '@/styles/img/books/w-3.jpg'
import img4 from '@/styles/img/books/w-4.jpg'
import Image from 'next/image'
function HandWritingBooks() {
  return (
    <div>
      <div className="course-area pt-40 md-pt-10 pb-40 " >
            <div className="container">
				<div className="row">
                    <div className="col-xl-12 col-lg-12 text-center">
                        <div className="section-title  text-center mb-15">
                        
                            <h2 className="mb-2" style={{fontWeight:"800", fontSize:"40px"}} >My Handwriting Books</h2>
							   {/* <!-- <span ><i className="fal fa-ellipsis-h"></i> 1st to 5th Standard & Advance Standard 6th Onwards <i className="fal fa-ellipsis-h"></i></span>--> */}
							<p >Your Institution deserves a well-planned teaching program to instill good Handwriting Skills in children. My Handwriting Books are the best and the most scientifically developed books by experts with experience of over 2 decades. We apply unique tools and systems that promote the development of flawless and legible Handwriting.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
					<div className="col-xl-6 col-lg-6 col-md-12 ">
                       <div className="events-wrapper-03 d-lg-flex align-items-center justify-content-between mb-30" style={{backgroundColor:"#F5F5F5"}}>
                           <div className="events-thumb"><Image src={img1} width={500} alt="write right" /></div>
                           <div className="my-handwriting-book-text pos-rel p-3" style={{backgroundColor:"#F5F5F5"}}>
                                
                               <h3>Paper Placement, Grip & Posture</h3>
                                
                                <p>Correct grip, posture, and paper placement are key to smooth & unobstructed writing. We train to adapt the right grip and posture.</p>
                               {/* <!-- <a className="c-btn btn-blue-style mt-15" href="#">inquire now <i className="far fa-long-arrow-alt-right"></i></a>--> */}
                           </div>
                       </div>
                   </div>
				   <div className="col-xl-6 col-lg-6 col-md-12 ">
                       <div className="events-wrapper-03 d-lg-flex align-items-center justify-content-between mb-30 " >
                           <div className="events-thumb pt-60 pb-60"><Image src={img2} width={500}alt="write right"  /></div>
                           <div className="my-handwriting-book-text pos-rel p-3" style={{backgroundColor:"#F5F5F5"}}>
                                
                               <h3>Language & Grammar</h3>
                                
                                <p>Age-specific ‘English Grammar’ is part of the content, making it a Language cum Handwriting Development Book, as complementary to the normal syllabus.</p>
                               {/* <!-- <a className="c-btn btn-blue-style mt-15" href="#">inquire now <i className="far fa-long-arrow-alt-right"></i></a>--> */}
                           </div>
                       </div>
                   </div>
				   <div className="col-xl-6 col-lg-6 col-md-12 ">
                       <div className="events-wrapper-03 d-lg-flex align-items-center justify-content-between mb-30" style={{backgroundColor:"#F5F5F5"}}>
                       <div className="events-thumb "><Image src={img3} width={500}alt="write right"  /></div>
                           <div className="my-handwriting-book-text pos-rel p-3"> 
                                
                               <h3>Stories, Songs & Drawings</h3>
                                
                                <p>Drawing images with letters, telling stories, and singing songs are done to teach letter formations & develop mind-motor coordination.</p>
                               {/* <!-- <a className="c-btn btn-blue-style mt-15" href="#">inquire now <i className="far fa-long-arrow-alt-right"></i></a>--> */}
                           </div>
                       </div>
                   </div>
				   <div className="col-xl-6 col-lg-6 col-md-12 ">
                       <div className="events-wrapper-03 d-lg-flex align-items-center justify-content-between mb-30" style={{backgroundColor:"#F5F5F5"}}>
                           <div className="events-thumb"><Image src={img4} width={500} alt="write right" /></div>
                           <div className="my-handwriting-book-text pos-rel p-3">
                                
                               <h3>Font Maker Tools, Uniform Sizing</h3>
                                
                                <p> Block Games in the pre-primary book to build &apos;Upper Case&apos; letters based on a scientific approach for ensuring uniform sizing of letters.</p>
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

export default HandWritingBooks

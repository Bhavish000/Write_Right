import Image from 'next/image'
import React from 'react'
import img from '@/styles/img/books/p-6.jpg'

function Jump() {
  return (
    <div>
      	 <div class="course-area pt-70 pb-70" >
            <div class="container">
                <div class="row">
			<div class="col-xl-12 col-lg-12 col-md-12 ">
                       <div class="events-wrapper-03 d-lg-flex align-items-center justify-content-between" style={{backgroundColor:"#F5F5F5"}}>
                           <div class="events-thumb"><Image src={img} width={700} alt="write right"/></div>
                           <div class="events-contents  text-center pos-rel mb-10" style={{backgroundColor:"#F5F5F5"}}>
                               
                               <h2 class="mb-20 fs-1" style={{fontWeight:"800"}}>Jump To Cursive</h2>
                              
                                <p>If you have been writing in a print style and want to shift to cursive, &apos;Jump to Cursive&apos; will guide you through a gradual transition. This program helps you smoothly adapt from print to cursive writing, making the shift easier and more effective.</p>
                                <a class="c-btn btn-blue-style mt-15" href="#">inquire now <i class="fa fa-long-arrow-alt-right"></i></a>
                           </div>
                       </div>
                   </div>
				</div>
              </div>
        </div>
    </div>
  )
}

export default Jump

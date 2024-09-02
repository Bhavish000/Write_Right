import React from 'react'
import img1 from '@/styles/img/books/2.jpg'
import img2 from '@/styles/img/books/3.jpg'
import Image from 'next/image'
function PrePrimary() {
  return (
    <div>
       <div className="blog-area pt-50 pb-50 " >
            <div className="container">
			 <div className="events-details-wrapper mb-30">
                            <div className="events-contents-02 mb-35 text-center">
                                <h1>My Handwriting Books for Preprimary</h1>
                             <h5> Nursery to Upper KG</h5>
                                  </div>
							 <p className="text-center">These books guide children from uncontrolled scribbling to controlled writing. They focus on correct grip, proper paper positioning, and the stepwise transition from uppercase to lowercase letters. </p>
                         
                            
                        </div>
                <div className="row">
				
				
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="blog-wrapper mb-30 pos-rel border">
                            <div className="blog-img">
                                <a href="#"><Image src={img1} alt="write right"/></a>
                            </div>
                            <div className="book-text p-4" style={{backgroundColor:"#F5F5F5"}}>
								<div className="inner-blog">
                                   
                                    <div className="blog-content">
                                        <h5 className="mb-2">Pick up Pencil</h5>
                                    </div>
                                </div>

                                <p>Scribbling to  the controlled movement of hands & proper gripping & paper position.</p>
                               
                               
                            </div>
                        </div>
                    </div>
                     <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="blog-wrapper mb-30 pos-rel border">
                            <div className="blog-img">
                                <a href="#"><Image src={img2} alt="write right"/></a>
                            </div>
                            <div className="book-text p-4" style={{backgroundColor:"#F5F5F5"}}>
								<div className="inner-blog">
                                   
                                    <div className="blog-content">
                                        <h5 className="mb-2">My letters My numbers Upper Case</h5>
                                    </div>
                                </div>

                                <p>Introduction to uppercase letters and numbers. Left and Right hand friendly.</p>
                               
                               
                            </div>
                        </div>
                    </div>
                      <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="blog-wrapper mb-30 pos-rel border">
                            <div className="blog-img">
                                <a href="#"><Image src={img1} alt="write right"/></a>
                            </div>
                            <div className="book-text p-4" style={{backgroundColor:"#F5F5F5"}}>
								<div className="inner-blog">
                                   
                                    <div className="blog-content">
                                        <h5 className="mb-2">My letters my numbers Lower Case</h5>
                                    </div>
                                </div>

                                <p>Introduction to lowercase letters, words and numbers. Left & Right hand friendly.</p>
                               
                               
                            </div>
                        </div>
                    </div>
                     <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="blog-wrapper mb-30 pos-rel border">
                            <div className="blog-img">
                            <a href="#"><Image src={img1} alt="write right"/></a>

                            </div>
                            <div className="book-text p-4" style={{backgroundColor:"#F5F5F5"}}>
								<div className="inner-blog">
                                   
                                    <div className="blog-content">
                                        <h5 className="mb-2">My letter my words</h5>
                                    </div>
                                </div>

                                <p>Introduction to small words and sentences. Correct spacing between letters & words.</p>
                               
                               
                            </div>
                        </div>
                    </div>
                   
                   
                   
                  
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default PrePrimary
